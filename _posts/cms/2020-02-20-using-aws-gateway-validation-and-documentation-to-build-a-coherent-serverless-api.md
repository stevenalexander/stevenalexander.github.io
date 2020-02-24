---
layout: post
title: Serverless API with AWS Gateway validation and documentation
date: 2020-02-20T10:09:41.870Z
type: post
published: 'true'
status: publish
---
# Serverless API with AWS Gateway validation and documentation

![api documentation](/assets/cms/api-serverless-documentation.png "api documentation")

It's easy to create a simple proof of concept API using Serverless functions on AWS and Azure, but there is a lot more to a production ready API for internal and external use than just getting a function to accept a request.

An area that I've been very interested in is documenting APIs. For complex APIs clear specification documentation is vital and becomes more important the more parties interact with an API. If you need to version your API then your documentation is the way you advertise changes to your API over time to avoid breaking existing integrations and move people to updated versions.

One of the advantages of the Serverless approach is the ability to break up your API into individual functions that handle each API endpoint, but this makes it harder to maintain a coherent API with clear documentation.

Fortunately there are tools to help create API Documentation, [OpenAPI specification](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md) and [JSON Schema](https://json-schema.org/). The Serverless hosting providers and framework developers are integrating these into their tools to allow developers to quickly create API Documentation and offload related functionality to them.

I've created an example API which uses the [Serverless Framework](https://serverless.com/) and AWS API Gateway to document itself and handle request validation at the API Gateway layer using [JSON Schema](AWS Blog - How to remove boilerplate validation logic in your REST APIs with Amazon API Gateway request validation).
