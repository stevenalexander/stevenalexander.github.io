---
layout: post
title: Why serverless stalled? - My additions
date: 2020-10-19T09:09:07.389Z
type: post
published: 'true'
status: publish
---
There's an excellent article in [InfoQ "Why the Serverless Revolution Has Stalled"](https://www.infoq.com/articles/serverless-stalled/), which covers why serverless hasn't taken off as much as expected. I'd recommend anyone interested in serverless to read. I'm writing this to give my own experience of problems using serverless, particularly in an existing project, to give more context for issues you will run into when trying to use serverless.

**New and different tooling for devs**

![tools meme](/assets/cms/253385c02ebe551edd700471973dce73.jpg)

Serverless requires a lot of tooling to develop and test. This is often host specific too, as in development you will need to see low level detail of logs/tracing to verify things are correct, so even if you are using something like Serverless Framework your team will still need to look and understand the host tooling. On an existing project with it's own development tools and processes needing your team to understand another set of tools that works for your serverless components doubles the amount developers need to know to work on the project, even if the serverless parts are small. This leads to siloing knowledge in the team, with only the developers who worked on the serverless components really understanding how to debug them.

**Hard to fit in existing CI/CD pipeline for releases**

Ease of deployment is often put forward as a strength of serverless and while this is technically correct the reality when working with an existing projects pipelines makes this more complex.

![technically correct meme](/assets/cms/meme-technically-correct.jpeg "technically correct meme")

Like my first point, the deployment tooling is different for serverless and has host specific details. This increases the complexity of your deployments if you have existing non-serverless components. Added to that you need to figure out how to fit these new serverless components into your existing release pipeline. Releasing a one off lambda is easy, releasing a series of versioned lambdas into dev->test->demo->preprod->prod is hard. The upfront cost of figuring this out is a hard sell for a project when you could figure out how to do what serverless does in your existing approach.

**Thoughts**

I don't think any of the problems above or in the InfoQ article are deal breakers for serverless, but you should consider how you handle them if you are thinking of including serverless components in your solution.
