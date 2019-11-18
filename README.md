# [stevenalexander.github.io](http://stevenalexander.github.io/)

Github pages blog using [Jekyll](https://jekyllrb.com/).

Uses [netlifycms](https://www.netlifycms.org/) to act as a lightweight CMS with `/admin` allowing editing/adding new content via editors directly into GitHub.

## Run locally:

Requires:
- [Ruby](https://www.ruby-lang.org/en/)

```
bundle
bundle exec jekyll serve
# browse to http://localhost:4000
```

## Run in devcontainer

Requires:
- [Docker](https://www.docker.com/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Visual Studio Code Remote - Containers extension](https://code.visualstudio.com/docs/remote/containers)

1. Open folder
2. Click bottom left corner and select "Remote-Containers: Open Folder in Container" (requires extension)
3. Wait for container to be built
4. Run task to launch Jekyll via `Terminal -> Run Task -> Jeykll`
5. Browse to http://localhost:4000

## Adding Netlify CMS

Steps:
1. Add [Netlify-CMS](https://www.netlifycms.org/docs/add-to-your-site/) to github pages repo
2. Create your `/admin/config.yml` for your site and using GitHub for authentication/authorisation
3. Setup [Netlify account](https://www.netlify.com/blog/2015/10/28/a-step-by-step-guide-jekyll-3.0-on-netlify/) and site