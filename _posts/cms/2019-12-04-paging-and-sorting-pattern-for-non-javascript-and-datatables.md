---
layout: post
title: Paging and sorting pattern for non-Javascript and Datatables
date: 2017-09-08T13:03:00.000Z
type: post
published: 'true'
status: publish
---
I like <a href="https://datatables.net/">JQuery Datatables</a>. It's a easy to use JQuery plug-in that allows you to enhance an HTML table to support paging/sorting/filtering and all sorts of functionality with little configuration. It supports server side processing (something I've <a href="https://stevenwilliamalexander.wordpress.com/2016/02/12/asp-mvc-datatables-server-side/">blogged on before</a>) to allow serving large datasets.

But it has some issues.

By default it isn't responsive and doesn't play nice with small screens, it's hard to style if you are using custom styling for your website and it will cause some accessibility issues. Also it needs Javascript, so sites that need to support no-js can't rely on it for paging large tables.

Since I like the Datatables command patterns for API calls and don't like duplicating logic, I've created this <a href="https://github.com/stevenalexander/NetCorePartyEfExample">sample project</a>which shows how you can implement your model/view/controller logic and back-end logic to support serving a paged/sorted table both with Datatables and pure HTML GET requests on a page. This cuts down on the amount of logic needed and provides an easy to follow pattern for retrieving and using the paged data.

Even if you do not want to use Datatables it's always good to use an approach which will be familiar to other developers and have a pattern that encourages code reuse and consistency.

Here's the sample Person list using Datatables:

<a href="https://raw.githubusercontent.com/stevenalexander/NetCorePartyEfExample/master/Images/person-datatables-js-enabled.PNG" target="_blank" rel="noopener"><img title="person-list-js" src="https://raw.githubusercontent.com/stevenalexander/NetCorePartyEfExample/master/Images/person-datatables-js-enabled.PNG" alt="person-list-js" /></a>

Here's the same page with Javascript disabled using HTML GET requests for paging/sorting:

<a href="https://raw.githubusercontent.com/stevenalexander/NetCorePartyEfExample/master/Images/person-datatables-js-disabled.PNG" target="_blank" rel="noopener"><img title="person-list" src="https://raw.githubusercontent.com/stevenalexander/NetCorePartyEfExample/master/Images/person-datatables-js-disabled.PNG" alt="person-list" /></a>

Datatables provides the quick AJAX redraw of the table with enhanced paging/sorting functions, while the HTML GET provides the non-Javascript support.

To implement this I used a number of classes with generics/abstract methods to allow re-use for different pages/tables:

<a href="https://github.com/stevenalexander/NetCorePartyEfExample/blob/master/WebApplicationParty/Models/PagedSortedViewModel.cs">PagedSortedViewModel</a> - model that can be used for both JSON serialization in Datatable server-side and rendering HTML table.

```
public class PagedSortedViewModel : IPagedSortedViewModel
   {
       public int Draw { get; set; }
       ...
       public IEnumerable Data { get; set; }
       ...
   }
```

<a href="https://github.com/stevenalexander/NetCorePartyEfExample/blob/master/WebApplicationParty/Controllers/PersonPagedSortedTableController.cs">PersonPagedSortedTableController</a> - controller with routes for both HTML GET and Datatables JSON call

```
public class PersonPagedSortedTableController : Controller
    {
        ...
        [HttpGet]
        public async Task Index(int start = 0, int length = 10, string orderColumn = "Name", bool orderAscending = true)
        {
            var model = await GetPagedSortedResultsAsViewModel(0, start, length, orderColumn, orderAscending);

            return View(model);
        }

        [HttpGet]
        public async Task DatatableJson(int draw = 0, int start = 0, int length = 10)
        {
            var isAscending = Request.Query["order[0][dir]"] == "asc";
            int columnIdentifier = Convert.ToInt32(Request.Query["order[0][column]"]);
            string orderColumnName = GetColumnName(columnIdentifier);

            var model = await GetPagedSortedResultsAsViewModel(draw, start, length, orderColumnName, isAscending);

            return Json(model);
        }

        private async Task<PagedSortedViewModel> GetPagedSortedResultsAsViewModel(int draw, int start, int length, string orderColumn, bool orderAscending)
        {
            var result = await _pagedSortedRepository.GetPagedSortedResults(start, length, orderColumn, orderAscending);

            return new PagedSortedViewModel
            {
                Draw = draw,
                ...
                Data = result.data,
            };
        }

        private string GetColumnName(int columnIdentifier)
        {
            switch (columnIdentifier)
            {
                case 0: return "Name";
                ...
            }

        }
    }
```

<a href="https://github.com/stevenalexander/NetCorePartyEfExample/blob/master/PartyData/Repositories/AbstractPagedSortedRepository.cs">AbstractPagedSortedRepository</a> - abstract repository class that has a number of virtual and abstract methods, wiring together the queries needed to return the paged/sorted result set so that minimal custom logic is needed for each different table.
```
public abstract class AbstractPagedSortedRepository : IPagedSortedRepository
    {
        public async Task<PagedSortedResult> GetPagedSortedResults(int start, int length, string orderColumn, bool orderAscending)
        {
            var innerJoinQuery = GetQuery();

            var recordsTotal = await GetRecordsTotalQuery(innerJoinQuery).CountAsync();

            var whereQuery = GetWhereQuery(innerJoinQuery);

            var recordsFiltered = await GetRecordsFilteredQuery(whereQuery).CountAsync();

            var sortedWhereQuery = GetSortedWhereQuery(whereQuery, orderColumn, orderAscending);

            var pagedSortedWhereQuery = sortedWhereQuery.Skip(start).Take(length);

            var data = await pagedSortedWhereQuery.ToListAsync();

            return new PagedSortedResult
            {
                recordsTotal = recordsTotal,
                recordsFiltered = recordsFiltered,
                data = data,
            };
        }
        ...
    }
```

<a href="https://github.com/stevenalexander/NetCorePartyEfExample/blob/master/PartyData/Repositories/PersonPagedSortedRepository.cs">PersonPagedSortedRepository</a> - Implementation of the abstract repository for a table showing joined results of the Person/Party entities.

```
public class PersonPagedSortedRepository : AbstractPagedSortedRepository
    {
        ...
        protected override IQueryable GetQuery()
        {
            return from p in _partyDbContext.Parties
                   join o in _partyDbContext.Persons on p.PartyId equals o.PartyId
                   select new PersonResultItem { PartyId = p.PartyId, Name = p.Name, EmailAddress = o.EmailAddress, DateOfBirth = o.DateOfBirth, DateCreated = p.DateCreated };
        }

        protected override IQueryable GetSortedWhereQuery(IQueryable whereQuery, string orderColumn, bool orderAscending)
        {
            switch (orderColumn)
            {
                case "Name": return orderAscending ? whereQuery.OrderBy(x => x.Name) : whereQuery.OrderByDescending(x => x.Name);
                ...
                default: return whereQuery;
            }
        }
    }
```

The <a href="https://github.com/stevenalexander/NetCorePartyEfExample/blob/master/WebApplicationParty/Views/PersonPagedSortedTable/Index.cshtml">view</a> renders the table, and has Javascript to use Datatables if Javascript is enabled (hiding HTML paging/sorting controls).

Links:
<ul>
	<li>Sample project: https://github.com/stevenalexander/NetCorePartyEfExample</li>
	<li>http://www.c-sharpcorner.com/article/crud-operations-in-asp-net-core-using-entity-framework-core-code-first/</li>
	<li>https://www.benday.com/2017/02/17/ef-core-migrations-without-hard-coding-a-connection-string-using-idbcontextfactory/</li>
	<li>https://docs.microsoft.com/en-us/ef/core/modeling/relationships</li>
	<li>https://docs.microsoft.com/en-us/dotnet/csharp/linq/perform-grouped-joins</li>
</ul>
 
