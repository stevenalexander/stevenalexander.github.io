---
layout: post
title: Service healthcheck pattern
date: 2017-09-19T13:03:00.000Z
type: post
published: 'true'
status: publish
---
This is a simple pattern I've used on a number of projects to implement healthchecks as part of service monitoring. Whether you are making a scaled complex microservice solution or a simple web to API to database solution, having a set of consistent healthcheck URLs for all your components is extremely useful.

It requires two URLs on each web component in your architecture:

* Healthcheck (e.g. /healthcheck) - returns 200 if the component thinks it is working correctly and can use it's dependencies. This means checking it can hit any datastore required, reach any APIs it uses.
* Status (e.g. /status) - returns 200 with no side effects

If either endpoint returns something other than 200 you know something is wrong, the healthcheck URL may respond with details on what's failed but the status URL simply responds if the service is reachable and alive.

Most documentation on healthchecks only concern themselves with a healthcheck URL, which is fine when you are dealing with an individual component, but when you have a number of interconnected components which may also be interrogated by other applications (service discovery, load balancer etc.) having a status endpoint which does not trigger side effects is important.

Healthchecks can be expensive, making IO/network calls which place load on not just the component but other resources and services. A common issue is healthchecks causing cascades of requests to dependencies and other healthchecks after a release, which may cause false positives for failure when services take longer than usual to respond. Having the status URL means you can reduce the number of calls to the expensive healthcheck, offloading calls that only need to know if the component is alive.
