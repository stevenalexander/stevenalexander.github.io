---
layout: post
title: Session data is the manageable devil you know
date: 2017-04-27 12:00:00.000000000 +00:00
type: post
published: true
status: publish
categories: []
tags: []
---
<p align="center">
  <img src="{{ site.baseurl }}/assets/devil-29973_640.png" alt="devil" title="devil"/>
</p>

Last year I wrote a bit of a rant post ["Session data is evil"](http://stevenalexander.github.io/.net/dev/2016/05/16/session-data-is-evil.html) coming out of some projects which suffered from session related problems. Time and some experience trying to avoid sessions have softened my opinion, so I thought I would write a counter-point to that post.

## Extremely hard to avoid state in user friendly applications

People think in states. They naturally work incremently, adding a little here, editing/removing a little there, not in large atomic chunks. The means they don't like large complex forms that require everything being entered/edited at once. They also expect little things that require state, remembering preferences and where they were in an application process. While it is possible to break down your application while avoiding state, it means increasing the complexity of your persistence and routing, adding complexity.

Session data is the most straight forward way to deal with these hidden requirements.

## Dealing with sessions is a known problem

Sessions may be tricky, but there's decades of experience dealing with them. Most web servers and frameworks have explicit tools and best practises for using them, supporting sticky sessions and external session state for multiple web servers.

Using sensible approaches it is entirely possible to scale and handle sessions correct.

## Over engineering causes worse problems

If in an effort to remove sessions you add tons of persistence and routing complexity, you are just adding more code and places for things to go wrong. A simple session based approach is easier to maintain and understand than a over-complicated stateless one that is making explicit calls every request. It will work fine so long as you use session sensibly, encapsilate it, understand the limitations and how it will work in production conditions.

Large scale and PaaS applications may have to be much more careful, but there are still ways to work with sessions for them.

## Conclusion

Don't abandon session out of fear or fashion, it's a simple and extremely common approach for managing state in a world that demands it.