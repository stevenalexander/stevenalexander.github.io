---
layout: post
title: Data Natives Berlin day 2
date: 2019-11-26T15:29:29.371Z
type: post
published: 'true'
status: publish
---
![ethics of AI panel](/assets/cms/ethics-of-ai-panel.jpeg "ethics of AI panel")

Second day of the conference finished it off with some good talks around AI ethics, machine learning and new technologies.

[Kubeflow](https://www.kubeflow.org/) and [Kubeflow Pipelines ](https://www.kubeflow.org/docs/pipelines/overview/pipelines-overview/) got a few talks, it seems like an interesting way to develop and productionise a machine learning solution. Features like [Nuclio](https://www.kubeflow.org/docs/components/misc/nuclio/) functions, lambda functions for data processing actions in Kubernetes, seem very interesting. Overall it seems like an interesting way to standardise creating ML pipelines given the spread of Kubernetes use and multiple cloud platform support. The Google talk, "Large Scale Machine Learning in Production" by Dr. Sören S.Petersen,  also introduced [AI Hub](https://cloud.google.com/ai-hub/), GCPs ML as a service offering using Kubeflow with additional cluster management and templates.

Ethics was a big topic, with many talks focusing on how organisations should manage personal data and use ML responsibly. "AI and Ethics: Why all the fuss?" from Toby Walsh, covered how challenging it can be and posited that solutions should follow the golden rule of "No robot or no artificial intelligence system should ever take away someone's right, privilege or entitlement in a way that can't ultimately be linked back to an accountable human decision-maker" (quote from Michael Pezzullo at Australia's Home Affairs Department). "Establishing Data Fiduciary Principles", by Jay Krall, or as he put it "How not to be creepy", suggested respecting users wishes, avoiding individual-level data stitching (topical with the [PDL data enrichment leak](https://www.dataviper.io/blog/2019/pdl-data-exposure-billion-people/)) and analysing users as anonymous cohorts. Given all the bad news recently on data leaks and abuses I like the idea there is a path for ethical data analysis.

"Autoproduction of soccer games using streaming processing and machine learning" by [Frederic Stallaert from ML6](https://twitter.com/ml6team/status/1199366622303137792), gave an interesting talk on using ML to automatically enrich German minor league soccer games for streaming. Apparently these games are very popular in Germany and many sports fields have panoramic cameras that film the entire field but, as the speaker put it, if you watch a game for more than 15 minutes from this fixed fish eye view you want to kill yourself. So they used ML and computer vision to identify the ball/players/ref to create a zoomed in action view that follows the ball and a 2D view of the action. Very cool that it's possible to process video this way and productionise it for 100s of games played over a weekend.

"The Next Level of Virtual Assistants" by Matthias Biniok from IBM, talked about how AI assistants are evolving. This is a topic that interested me since the promise of services driven by natural language with text/voice demonstrated at [Google IO](https://www.youtube.com/watch?v=GoXp1leA5Qc). The future is apparently things like bot training being done by domain experts, identifying intent, deep integration with business processes, handling disambiguation and digressions ("I need to book an appointment." - intent, "What are your opening hours?" - digression). This could be an entirely new way of people interacting with services, as if you can make it feel like a natural interaction you can automate a lot of typical call centre operations and make a lot of services more accessible to users who are intimidated by web applications.

Overall I enjoyed the conference. I did find the panels a little chaotic and hard to follow, but there were a large number of good talks and it was great to see views from smaller companies and other european countries.
