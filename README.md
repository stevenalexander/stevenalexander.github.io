# [stevenalexander.github.io](http://stevenalexander.github.io/)

Github pages blog using [Jekyll](https://jekyllrb.com/).

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