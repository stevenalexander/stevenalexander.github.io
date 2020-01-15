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

The advantage of this approach is that it is very quick and easy to setup, API Gateway manages authenticating requests and Cognito manages the users. You get the full set of Cognito functions for managing your users and only pay the cost for authentication calls and storage. The disadvantage is the authorization applies the whole API gateway and does not allow for role based access without customisation inside your Lambda code. You are also locked into Cognito, as it will be difficult to export user data and introduce a new authentication system.

The main supported alternative is using a Lambda as a custom authorizer, but this has other disadvantages, such as increased execution costs and performance.
