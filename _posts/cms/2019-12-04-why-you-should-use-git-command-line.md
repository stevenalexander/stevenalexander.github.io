---
layout: post
title: Why you should use Git command line
date: 2017-07-26T13:23:00.000Z
type: post
published: 'true'
status: publish
---
![git cli](/assets/cms/git-cli.png "git cli")

Writing this for developers, testers, UX designers or anyone who might interact with source code stored in Git but as yet hasn't used Git command line, instead uses a GUI or integration (Tortoise, Source Tree, Intellij/VS integration etc.).

Git command line is the low level program that interacts with git repos in a terminal or powershell window. I know that using the terminal and typing commands is a big step for most inexperienced users, but please stick with me and hopefully I'll convince you.

<h2>Why you should use Git command line</h2>
<h3>You will know and understand what you are doing</h3>
Most people I've known starting with Git first start with a GUI tool. Something to handle Git for them. While understandable, this is a mistake as you do not know what the tool is doing or learn how Git works.

GUI tools will be using the same Git commands under the hood, they will just hide them from you. Whether you are learning source control from scratch or just new to Git it will help you in the long run to understand what the basic commands are and what they do.

<h3>You will know exactly what you are changing</h3>
Source control GUI tools hide some of the complexity of using git, but in doing so hide what they are actually doing. This can be as simple as pre-selecting the list of modified files for a commit, or as complex as handling a merge for you. Either way, you no longer know exactly what the tool is doing and changing.

With Git command line you are forced to declare exactly what files in source you are changing and can see exactly how they have changed.

<em>git status</em> and <em>git diff</em>, how I love you.

<h3>It's not that complicated</h3>
My normal day to day use of git only uses 7 commands; <em>pull, checkout, status, diff, add, commit and</em> <em>push</em>.

Truthfully, for anything more complicated I just search for it. I haven't memorised much else and you shouldn't have to either.

<h3>Command line is universal</h3>
Git command line is the same on every machine, every environment. Learn it once and you won't have to learn it again. Not if you switch editor, language or go from Windows to Mac. The commands won't change.

Different GUI tools use different UI, different names for the actions and even apply different low level operations for actions, e.g. may automatically pull before a push or rebase.

Even authentication is standardised, as you can setup your ssh key so you don't need to keep entering username/password for operations.

<h2>How to learn Git command line</h2>
It's easier than ever to pick up and learn git, here's a few resources to help you start:
<ul>
	<li>https://try.github.io - simple online tutorial that teaches you the basics of git cli in 15 mins with a simulated terminal</li>
	<li>https://git-for-windows.github.io/ - git bash cli for windows! Excellent tool to use git in windows in the same way you would on a mac or linux environment</li>
	<li>https://help.github.com/articles/set-up-git/ - Github is an online host for git repos, their documentation is excellent and you can quickly setup a remote git repo for testing for free</li>
	<li>https://git-scm.com/book/en/v2/Getting-Started-The-Command-Line - Git documentation</li>
	<li>https://github.com/robbyrussell/oh-my-zsh - For mac and linux users (Windows git bash has this by default), collection of terminal scripts and plugins that helps with Git integration, telling you what branch you're in and adds colour to git command lines with context</li>
	<li>https://www.git-game.com/ - choose your own adventure game that teaches you git commands using git commands</li>
</ul>
<h2>Conclusion</h2>
I hope this has convinced you to give Git command line a try. If not at least you will understand why I sigh when I see you trying to fix a git issue with your mouse.
