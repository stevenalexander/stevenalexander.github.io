---
layout: post
title: Your web site is bad and you should feel bad
date: 2017-01-26 16:37:18.000000000 +00:00
type: post
published: true
status: publish
categories: []
tags: []
---
#### Or "Trying to maintain good consistent user experience and standards in web projects".

As a software developer I'm familiar with shame for my works. Not because we have high standards in software development (overall they can be quite low), but because failure to meet standards or quality is so obvious due to strict technical definitions and high visibility of quality examples.

Frontend web development is one of the worst areas for this, as there are lots of things that can go wrong while it looks fine in your (the developers) browser and in source.

A lot of quality issues aren't obvious to developers who work on individual pages as part of isolated features and changes. It's easy to lose sight of the big picture, making changes that worsen user experience or add accessibility or compatibility issues. Feature accretion can change a nice clean page into a monster over time, and shortcuts to meet deadlines can fill your views with hidden tech debt.

Because of this when working in a project you cannot solely rely on developers to maintain the standards of your web site without process and checks. Even if you start well, with solid examples and standards, over time issues will creep in unless you are actively looking for them.

**Here are some ways to mitigate against this problems:**

1. On-going user research

    This goes first, as only your users can tell you if your web site actually works for real users. "On-going" because you cannot treat this as gated/one-off events. The earlier you do it the easier it is to change and find bad assumptions and unless you keep doing it you won't know if your corrections work and you haven't added new issues.

2. Create a style guide with example implementations

    Having a proper HTML style guide with examples (form elements, validation, layout etc.) that developers can use for new features and pages is a excellent aid for productivity and consistency. This should be in addition to any HTML UX prototype, so developers can share examples of simple or complex elements in isolation and establish the standard implementation. An example of a style guide is the [co-op design patterns](https://coop-design-manual.herokuapp.com/patterns/index.html).

3. Automated testing

    As part of your CI pipeline you can use automated testing to cover:
      - accessibility standards
      - security
      - performance
      - browser compatibility

    Automating these checks rather than relying on individuals to do them is a lot more reliable and gives you standard reports and metrics to judge what needs to change and understand what caused issues.

4. Periodic manual audits

    Automated testing won't catch everything. Test coverage is unlikely to be 100% and some issues cannot be found or recognised by automated tools. Getting a designer to look at the site and compare it to the UX design, a developer to check for inconsistencies in the HTML or just a random person with fresh eyes can highlight issues which those too close to the work can't recognise. Recognising them early makes it easier to change and save future effort.

5. Allocating time to make changes

    All of the above won't achieve anything unless you team has time to respond to their findings. Unless you plan ahead for the inevitable changes you will have to negotiate against including new features and other commitments. Like tech debt, unless you recognise it as a priority, it won't be done.

#### If all that sounds complicated .... it is.

There's no getting round it. Quality is a holistic concept, it can be reduced by small issues or destroyed by casual oversights. If you want to produce a good user experience in your web site you need the entire team working together, developers, designers, user researchers and analysts. All checking assumptions and looking for issues before they become too big to handle.