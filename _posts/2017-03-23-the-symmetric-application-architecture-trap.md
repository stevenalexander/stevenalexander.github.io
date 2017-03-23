---
layout: post
title: The symmetrical architecture trap
date: 2017-03-23 16:37:18.000000000 +00:00
type: post
published: true
status: publish
categories: []
tags: []
---
Often when thinking about topics to write about I hesitate, as in retrospect what I'm saying seems obvious. But it's very common to fall into simple patterns when you are in the thick of a project, doing something which the flaws only become apparent later when early chaos is over and you can think clearly.

One of these traps is symmetrical application architecture, making two similar components in your solution use the same architecture, even when they have different requirements.

A common example of this is when a web application will have a public facing external site and a more secure internal site for administration. On the surface these two components have similarities, they both serve HTML and need to access/persist data, so you may initially use the same architecture for them.

![Symmetric architecture diagram](/assets/symmetrical-architecture.png "Symmetric architecture diagram")

However, you soon realise the external site needs to handle much more traffic than the internal, and it's data requirements are different (higher read or write, only needing access to specific data). You can resolve this by scaling the architecture, but it's clunky.

![Symmetric architecture with external load diagram](/assets/symmetrical-architecture-external-load.png "Symmetric architecture with external load diagram")

Then you realise the internal site has more security and auditing requirements. You can resolve with implementation changes but it would be neater to include additional layers or services.

![Symmetric architecture with internal audit security diagram](/assets/symmetrical-architecture-external-load-internal-audit.png "Symmetric architecture with internal audit security diagram")

The symmetry of the architecture becomes a conceptual barrier to change, changing either one appears to be introducing more complexity but in reality the implementations are diverging anyway due to their different circumstances. Looking at them individually and at how they will be hosted on less abstract infrastructure diagrams can help. Could be your external and internal sites don't need the same data store or layers, and changing them could save resources and simplify implementation.

![Asymmetric architecture diagram](/assets/symmetrical-architecture-asymmetric.png "Asymmetric architecture diagram")

Embracing asymmetry in your architecture early can help you break out of this mindset and prevent you hitting problems later when your implementation work arounds start to creak.