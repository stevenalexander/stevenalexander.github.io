---
layout: post
title: GitHub pages CMS with Netlify-CMS
date: 2019-11-19T12:58:16.111Z
type: post
published: 'true'
status: publish
---
![blog-ception](/assets/cms/screenshot-2019-11-19-at-13.34.34.png "blog-ception")

I'm writing this blog using CMS about how I setup my Blog with CMS....

As the URL for this site gives away, this blog is hosted on [GitHub pages](https://github.com/stevenalexander/stevenalexander.github.io) as a static HTML site generated using [Jekyll](https://jekyllrb.com/). 

This is a very simple and popular way of publishing open source documentation for repos, as you can put your documentation inside a Git repo and GitHub will generate/host a static site for it. This is great for individual developers, but not so much for people who aren't comfortable with Git or Markdown. 

Recently I've been trying to use GitHub pages for documentation on a larger project, but getting non-developers to update documentation has caused a large number of problems. To solve this people have suggested using a CMS system instead, but for cost/implementation/maintenance reasons I'd prefer not to. This lead me to investigate what CMS functions could you support purely with a static generated site. This lead me to [Netlify-CMS](https://www.netlifycms.org/).

## What does this give you?

* User friendly content management controls available directly on your GitHub pages site via an _/admin_ url
* Authentication via GitHub, editing controlled via GitHub permissions (non-GitHub user authentication also possible)
* Rich text editing controls for users not familiar with markdown
* Uploading image files via UI
* An editorial process that allows multiple users to draft/review/publish content, making a review process possible
* Full generated preview site for changes before publishing
* Everything is still based on Git/GitHub, changes are just commits and PRs, so you can still edit/update your site via Git

## What's the downsides?

* You have to grant Netlify access to your repo
* CMS authored content needs to use specific format/folders, so may not be compatible with existing structure or content in your site
* Rich text editing and media upload is limited, so you may still need to do additional changes outside editor to match custom styles/formats in your site

## Steps for adding Netlify CMS

This was actually quite simple, it's added using a single page application put on a HTML page that uses JavaScript to call GitHub API, so you just need to add HTML/JS/Config to your static site and configure Netlify/GitHub authentication.

1. Add [Netlify-CMS](https://www.netlifycms.org/docs/add-to-your-site/) to github pages repo
2. Create your `/admin/config.yml` for your site and using GitHub for authentication/authorisation and your 
3. Create a GitHub OAuth app used by your CMS 
4. Setup [Netlify account](https://www.netlify.com/blog/2015/10/28/a-step-by-step-guide-jekyll-3.0-on-netlify/) and site settings
5. Edit/Publish content via the new Netlify hosted URL which will push to the Git repo and cause your main GitHub pages URL to be updated

I'm still playing with the features and hoping to customise the styles of the produced content so that non-developers can still add/edit content and still keeping custom styles or formats, but I'm very impressed with the functions you get out of the box and how easy it was to setup.
