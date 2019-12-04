---
layout: post
title: AWS Cognito authentication example
date: 2018-12-02T12:33:00.000Z
type: post
published: 'true'
status: publish
---
![animated cognito auth](/assets/cms/aws-cognito-animated.gif "Animated cognito auth")

Writing this after investigating [AWS Cognito](https://aws.amazon.com/cognito/) as a possible managed authentication and authorisation service to avoid needing to implement our own. Hopefully it should help people attempting to understand Cognito and how it could be integrated into their application.



Cognito documentation generally focuses on the client side authentication functionality, useful in mobile application, but it has a lot of potential



My example NodeJS application is [here](https://github.com/stevenalexander/node-aws-cognito-oauth2-example), with details on how to configure Cognito for OAuth 2.0 flow.



Advantages for using Cognito:

* Managed service, less components to implement/monitor/scale
* Easily configurable via portal, CLI and templates
* Supports multiple flows for authentication (client side, server side, OAuth2, custom)
* Supports Lambda triggered functions on authentication/registration events
* Uses [JWT signed tokens](https://jwt.io/) which can be passed directly to clients in session cookies and used to verify requests and passed in related API calls so a single authentication/authorisation method can be used through your stack statelessly
* Group membership, supplied in access token can be used for authorisation (e.g. users in group "Admin" can perform admin functions)
* Handles:
  * User group membership and attribute storage
  * Email/Phone verification
  * User invitation
  * Login/Signup UI forms (customisable)
  * Password reset



Disadvantages:

* Less control over authentication/authorisation (limits to UI/flow customisation)
* Potential for lock-in (cannot export users with passwords for migration)



Below are some simplified diagrams showing how the integration can work.

**Web integration with Cognito using OAuth 2.0 Grant Authorise flow**

![Grant authorise flow](/assets/cms/aws-cognito-oauth2.png "Grant authorise flow")

**API integration with Cognito using ADMIN_NO_SRP_AUTH flow**

![ADMIN_NO_SRP_AUTH flow](/assets/cms/aws-cognito-oauth2-1.png "ADMIN_NO_SRP_AUTH flow")

Note that you can use the same Cognito User pool for both flows, so you call your API from your Web application passing the users JWT access token and use the same authentication/authorisation approach.



Useful links:

* https://aws.amazon.com/cognito/
* https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-authentication-flow.html
* https://ponyfoo.com/articles/json-web-tokens-vs-session-cookies
* https://jwt.io/ - includes online JWT decoder to view token data
* https://alexbilbie.com/guide-to-oauth-2-grants/ - oauth2 grant authorise code
