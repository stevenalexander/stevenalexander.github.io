---
layout: post
title: Getting word count from template files
date: 2017-05-04T13:27:00.000Z
type: post
published: 'true'
status: publish
---
Recently I had to get an approximate word count of an entire site for estimating translation time. To do this I processed the template files to get all the non-html tag/logic content using <em><strong>find</strong></em> and <em><strong>sed</strong></em>, then counted the words using <em><strong>wc</strong></em>.
```
# from views directory

# create .out files with HTML tags stripped
find . -name '*.html' -exec sh -c 'sed -e "s/<[^>]*>//g" $1 > $1.out' -- {} \;

# create .out.bout files with nunjucks/jinja2 tags stripped
find . -name '*.html.out' -exec sh -c 'sed -e "s/{[^}]*}//g" $1 > $1.bout' -- {} \;

# word count
find . -name '*.html.out.bout' | xargs wc -w
```

Links:
<ul>
	<li><a href="https://gist.github.com/stevenalexander/7a122fdf6a6c324f6ceb345cda450c70">GIST</a></li>
	<li><a href="http://stackoverflow.com/questions/19878056/sed-remove-tags-from-html-file">Using find/xargs</a></li>
</ul>
 
