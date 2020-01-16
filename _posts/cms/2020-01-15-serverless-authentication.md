---
layout: post
title: Serverless Authentication
date: 2020-01-15T14:10:15.456Z
type: post
published: 'true'
status: publish
---
I've created a simple PoC to test out Serverless Authentication for Lambdas using API Gateway Cognito Authorizer. It uses the [Serverless Framework](https://serverless.com/) to configure/deploy, NodeJS for the Lambda.

The source and instructions are [here](https://raw.githubusercontent.com/stevenalexander/serverless-authentication).

![Simple API example](/assets/cms/serverless-authentication-api-example.png "Simple API example")

The advantage of this approach is that it is very quick and easy to setup, API Gateway manages authenticating requests and Cognito manages the users. You get the full set of Cognito functions for managing your users and only pay the cost for authentication calls and storage. The disadvantage is the authorization applies the whole API gateway and does not allow for role based access without customisation inside your Lambda code. You are also locked into Cognito, as it will be difficult to export user data and introduce a new authentication system.

This is a very nice way to quickly develop and expose API functions for external users, as you get a lot of scaling/security out of the box straight away without much work and custom code. If you look at the [serverless.yml](https://github.com/stevenalexander/serverless-authentication/blob/master/lambda/serverless.yml) file the configuration is very simple.

![single page app example](/assets/cms/serverless-authentication-single-page-app.png "single page app example")

You can expand on this approach to create a web application, using a Single Page Application which prompts user to authenticate via Cognito and calls the API using the Authorization token for page actions to create a complex web application with authentication/persistence.

The main supported alternative for lambda authorization is using a Lambda as a custom authorizer, but this has other disadvantages, such as increased execution costs and performance, see [here](https://www.alexdebrie.com/posts/lambda-custom-authorizers/) for details.
