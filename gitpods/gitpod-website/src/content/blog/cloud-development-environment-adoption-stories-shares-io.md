---
author: taliamoyal
date: Friday, 28 July 2023 14:00:00 UTC
excerpt: No two cloud development environment (CDE) stories are the same.
tags: ['Developer experience']
image: teaser.webp
teaserImage: teaser.webp
title: 'Cloud development environment adoption stories: Shares.io'
---

In this interview, CTO and co-founder of Shares.io, François Ruty, sits down with our Head of Community, Pauline Narvas, to talk about how Shares made the transition to Cloud Development Environments (CDEs) to prioritize developer experience and their vision of effective software development.

This interview is from [this webinar](https://www.youtube.com/watch?v=-n3_O82R51U) and has been edited for print.

`youtube: -n3_O82R51U`

<br/>
<br/>

**Pauline**: Thank you everyone for joining us today to kick off our new webinar series on adoption stories for Cloud Development Environments, or CDEs for short. In this series, we will be sitting down with some of our customers to talk about how they brought CDEs into their organizations.
Today we are with François Ruty from Shares. Thanks for joining us. To get us started, could you tell us a bit about yourself? And about Shares?
<br/>

**François**: Sure. I'm the CTO and the co-founder of Shares. We are a trading app based in Europe. We operate right now in three to four countries, soon to be the whole of the European Union. The goal of the trading app is to let everyone in Europe grow their wealth easily and have access to many assets to invest. Right now we are approximately 150 persons in the company, and in the engineering team north of 60 people.
<br/>

**Pauline**: Can you tell us what led you to evaluate Cloud Development Environments?
<br/>

**François**: So as I guess many of you here know already, one of the key points when you want to set up an engineering team is how to deal with the dev environment. How can you make sure that everybody is able to onboard to your stack and get to work very fast? Like any other tech company, we shared that problem when we kickstarted the engineering team. The actual trigger for us to start to evaluate CDEs was inconsistencies of behavior we noticed with Docker. So initially, what we had for our dev environments were Docker containers configured with Docker Compose.

And basically everybody on the engineering team would have Docker Compose and Docker containers preconfigured locally on their laptops through a configuration version in Git. So the setup was quite practical already at the time. But it turned out, once we were growing to more than five or six persons, it did not scale well.
Because we noticed that Docker is not fully standardized across platforms, so we had the difference of behavior on Windows, on OS 10, on Linux. And that was an issue because we had sometimes some bugs happening on the dev environment on one platform and not being reproducible on another platform. That's obviously a huge issue when you're working as a team to debug issues.

Another problem we noticed with Docker is the inconsistency of performance. We are a Typescript company. All our stack is Javascript and Typescript and when we develop in Typescript, we use what is called hot reloading. Hot reloading means that when you change your source code the changes are live immediately.
So you have a very quick feedback loop to notice the result of your work. And we noticed that some people on our team had a delay of more than one minute on hot reloading. Now for people who are familiar with this kind of workflow, one minute is very high. Like when you change your source code, you want to see the effect immediately, after 10 seconds maximum. If it gets bigger than that, then productivity collapses and it's really bad for the team.

We noticed that due to Docker file system implementation issues on macOS 10, we had performance issues on hot reloading and it was damaging our productivity. So as a result, we started to evaluate CDEs.
<br/>

**Pauline**: How did you choose Gitpod among the other Cloud Development Environment options?
<br/>

**François**: Well, there are not that many to choose from, and Gitpod was the most advanced one by far. I quickly made my due diligence and evaluated a few platforms. There was GitHub Codespaces, but it was still in beta at the time.

So we decided to give Gitpod a try as well, and what is great is that it was very quick to set up. We are very busy. We want to get things done quickly. I think we were up and running with Gitpod in 30 minutes, maybe 45 minutes tops. After a few days of usage, it turned out that this could scale.
<br/>

**Pauline**: And how much of your team is now using Gitpod and has transitioned to CDEs?
<br/>

**François**: Everybody. It's forbidden not to use Gitpod in our company right now. Yeah, it makes things simpler, you know. Just make a rule and enforce it. But I'm only half joking there.

The reason why we really strongly recommend people to use Gitpod is that you can still develop on your laptop if you want, but if you do, we will be able to help if there is an issue on your Cloud Dev Environment. One of the big advantages of using a CDE such as Gitpod is that you can share the URL with your teammates. So, if someone is having an issue on their dev environment, a bug on a PR or whatever, they can just share the URL and teammates can dive into the same environment and debug together. It’s such a huge game changer. Everybody quickly saw the value in that, to be honest.
<br/>

**Pauline**: I'd love to hear, as good context for people listening in today, what was your onboarding process like before? And what does it look like now with Gitpod?
<br/>

**François**: It's funny you asked this because Gitpod allowed us to keep our onboarding very quick and dirty, which is the way we like it. We went through an expanding phase last year. The last year and a half we went from five people in the engineering team to 65. Sometimes we would have a new team pop up like every week during a whole month, so there was no time to babysit the onboardings. Uh,

So basically what we did is that whenever someone joined the company on a Monday, we would open the GitHub access, send a Gitpod link to enroll, and then, in the afternoon, there was the first ticket to tackle and the first PR to open before the end of the first day.

So let’s do an analogy with swimming. You want to learn how to swim, we push you in the swimming pool and we hope that you swim. And what is great is that you cannot do this without a Gitpod. When you have a local dev environment you have to find an old documentation regarding how to install your system on your laptop. You have to talk to someone who has the knowledge.

So it's like doing archeology. You know, when someone joins the company, they end up doing archeology to know, “How can I get up and running?”. With Gitpod, you click a button. The system is started. The environment is all set for you. So game on. It's up to you to code and start implementing stuff.
<br/>

**Pauline**: Amazing. Yeah, that sounds like pretty much the experience a lot of our customers have been saying. I also really like your analogies. That's fantastic.

So when you were selecting a Cloud Development Environment, what was your success criteria? Because you did say you were looking at other options. What made you choose Gitpod?
<br/>

**François**: To be honest, to find something that works? Nowadays, you don't have that many systems that work. You have GitHub, yes, but to be honest, the reliability of GitHub in the past two years is more than spotty.
So, I would never consider using the Cloud Dev Environment service from GitHub because GitHub is down like once every two weeks. It's not possible.

So right now, if you consider all the Cloud Dev Environments, something that works,is reliable and is open source. So if you have an issue, you can always, you know, dive into the code base if you don't want to wait for the support to fix the issues. I think Gitpod is probably the only one that makes sense if you want to keep some control. And I have something in the cloud which is reliable. So right now when we start our Gitpod environment, I think we have six or seven terminals open and all the services run in the background and it works quite well.
<br/>

**Pauline**: Thanks for that answer, Fruty. I had a follow up question. We hosted our very first in person conference in San Francisco a month ago. We brought together people in the Cloud Development Environment space and people generally who are really interested in the future of software development.

Obviously CDEs were at the center of that for us. We had people from Uber, Shopify, and Slack who actually built their own in-house CDEs, which prompts my question: Did you ever explore building your own CDE internally? If so, why didn't you go down that path?
<br/>

**François**: Yes, that's a good question. I think it doesn't make any sense to build this internally. What we considered doing, however, is to have one dedicated server per software engineer in a remote data center. That was plan B. So we would have automation systems configuring and resetting those dedicated servers in this data center and basically every engineer in the morning will SSH into that server to have a standard dev environment.
Now, the reason why this was a plan B? First, we do not want to just administer this. We have better things to do. One very interesting thing I noticed in the Gitpod material is the the concept of ephemeral dev environments. And that's key. Having a CDE is not only about having quick onboarding, ease of configuration, and shareability of environments. It's a whole new development workflow. So for instance, on our side, we have installed the Gitpod extension in GitHub. When someone wants to work on a branch or on a PR, they click on the Gitpod button in GitHub and we open a dev environment for that PR.

So any given engineer on our side will start maybe five to 10 Gitpod environments from scratch every day because they are disposable. We do not keep Gitpod environments more than for a few hours. And what is great about this is that we have no configuration drift.

If you keep the same dev environment in the cloud or not in the cloud, this problem is relevant in both cases. If you keep the same dev environment for multiple days or multiple weeks, you will have configuration drift. Whether you want it or not, the configuration starts to become custom for you as you make some modifications, some changes, you forget to version everything you do. So having this ephemeral development environment concept is key. It's a whole new way to develop, and it's a huge productivity booster and reliability booster.
<br/>

**Pauline**: That makes sense. And I just wanted to say what you described about our dev environments being ephemeral, that is spot on. Um, it's actually one of the reasons I love, um, Gitpod. And when I was joining and I was using it in my own workflow for the first time, I realized that I could literally just do all of my work in one workspace in that dev environment. And once I was done, I could just throw it away and I never have to think about it. And I used in the DevOps and platform teams, and I used to have a lot of issues assigned to me where there was that configuration drift for our own infrastructure.

And it was such a headache. And so when I got into Gitpod and started implementing that workflow, it saved me so much time.
<br/>

**François**: You told me you were at some point on an SRE team, correct?
<br/>

**Pauline**: I was, yes.
<br/>

**François**: So, we do not have SRE teams in Shares and that's in part thanks to Gitpod. What we do when we have issues in production is that we dispatch the issues to the persons who wrote the code. So we don't have people who are expert in solving bugs. Like everybody participates with production issues, and we do this thanks to Gitpod.

If there is any issue on production, we can just open a Gitpod environment from the release branch, which is on production right now. And we send the link to the person who wrote that part of the code. It's your code. Can you please fix it? Without a system of dynamic spinning of environments on the given branch, you cannot do this.

So it was also a game changer for production monitoring. We can easily spin up a dev environment which reflects production very closely and then we just ask the people involved in the code, can you investigate and fix the issue?
<br/>

**Pauline**: That's really insightful. I'm sure people who are listening in who have similar setup can really relate to that. When you introduce a new tool to your company, and this goes for any company, you will come across skeptics, and I'm sure you had some friction in terms of introducing Gitpod at the start. I'm sure not everyone was like a hundred percent sold on the idea. I would love to hear about how did that transition go?  
François: I think Gitpod is like any solution, so you can have a favorable context, and you can have a context which is not favorable. It depends on the company.

On our side, I think there are two reasons why we didn't have any problem convincing people to use Gitpod. First, everything we do internally when we work on the tooling is for the sake of the developer experience. And the reason why we do this is because everybody in our organization codes. Whether you are head of engineering or team leader or whatever, you are supposed to write code. All the people who make the decision are impacted by the decisions. We don't have, you know, software architects or anything like this. We only have people who code on the field, whatever the rank, whatever the title, everybody codes.
So, usually, the level of trust when we work on the tooling is very high internally, because we know that if someone pushes something like Gitpod that that person is going to use it every day. That's the first reason why we had no problem introducing this new tooling. It's a very collaborative process and again, everybody codes and that makes a real difference because everybody is in the same boat.

The second reason why I think the way we work internally is very compatible with Gitpod is that we do not use an architecture based on microservices. We use macro services. So basically, we operate something hybrid between microservices in monolith, and that means that in Gitpod environments you have an exact replica of production. Like we have a few differences, obviously, but they are very few and far between. So if your code runs in a Gitpod environment, you have like 99% confidence that it's going to work the same in production. And this is a no-brainer for everybody internally, because if you say, I want to keep developing locally on my laptop, that's my thing. Fine. But you're going to have issues when you notice that your job is just harder, basically. So I guess in companies where the architecture is very complex, you know, a lot of micro services, multiple databases and stuff like this, probably using Gitpod the right way is harder. So I would say it also depends a bit on your architecture.
<br/>

**Pauline**: That's true. Now to address the question from Ben in the chat. Was there anything you didn’t or don’t like with Gitpod?
<br/>

**François**: Is there anything I didn't like? I guess I could mention two things, , and I'm not trying to serve you some BS, trying to frame everything positively.

Sometimes over the past six months, we have had a few down times on Gitpod. The reason why we stay is because Gitpod has the least of them. It's as simple as that. Like, when you look at all the solutions on the market, Gitpod has less downtime than the others. But when they do happen, we don't like it.
So I guess that's one of the elements that we are constantly in touch with the engineering team at Gitpod about is how to improve reliability, but the current level is already very good compared to the competition.

Something else that sometimes we didn't like so much is the size of the hardware, but that's on us. We changed our codebase, , and it was more resource hungry. So we ask the Gitpod team to increase the size of our hardware. And, to be fair to the Gitpod team, sometimes you change something in your system and it changes the performance behavior and you tend to blame the dev environment.
So it's not something I dislike, but maybe something which would be great is to be able to choose your own hardware size in the Gitpod dashboard without having to talk to people individually so that you can react faster.
I think it all comes down to, you know, tiny improvements. Overall, our experience has been very, very positive.
<br/>

**Pauline**: Thank you for sharing that, Fruty. Obviously, everything you said will be shared internally, and I'm sure we'll get some more thumbs up on that in terms of prioritization.

So my next question for you is, what would you love the Gitpod team to build and prioritize on our roadmap? If there was like a wish list of things you would like us to look at?
<br/>

**François**: That's a good question. To be honest, I think, I can't think of anything serious. Something I have noticed with a lot of software development tools is that very often the level of abstraction is too high.
What we like about Gitpod is that it's very focused. If we need to do something exotic, we can do it ourselves, but using bricks that are very reliable. So we are very keen on selecting software from providers who know how to stay focused on the feature surface.
Sometimes we wait one minute, one minute and a half to start a dev environment. Shortening that up would be a huge game changer, even better. So I think I would keep this one.
<br/>

**Pauline**: My final question because we are running out of time a little bit here is what are you most excited about in the CDE space? I'm sure you've been seeing it kind of grow over time.
<br/>

**François**: I think the development of the ephemeral dev environment philosophy is very important to us. I can very quickly explain why.

So on our side, we have a hiring process with live coding sessions. Over the past two years, we have carried out north of 800 live coding sessions to recruit 60 persons. We have approximately, I think, 5% or something like this acceptance rate in the Shares team. And the reason why it's very hard for us to find like minded people is because a lot of people, you know, everybody wants to move fast, but not everybody is prepared to do what it takes to move fast, to change the way we work, to change the philosophy of what you do every day.
And that's why also I never hesitate to contribute to such webinars because we want those kind of philosophies to spread further, to increase our hiring pool. Basically it all comes down to this.
<br/>

**Pauline**: I really like that. Because I think there was a tweet or something a couple of months ago where someone was like, it would be really cool to see Gitpod one day being part of the whole hiring process, because it does make everything a lot easier and you can get set up just a lot faster.
So it's nice to know. Yeah, it's nice to know that it's happening.
<br/>

**François**: Yeah, that's what we do internally. We do live coding sessions and we just send a gitpod link to the candidates and we own like no setup time and it's obviously also great for our brand because we don't require people to to do a lot of homework. We require none.
We ask people to show up for 30 minutes on the live coding session, and that's it. We don't ask people to do three hour exercises at home or anything like this. So they see our hiring process is quick. They see it's smooth. There is no setup time. They are onboarded almost immediately during the live coding session.When we lag the person, there is a greater chance that the person lags us back too.

And I feel like that whole setup is just a lot better to understand how they could potentially integrate in your team because you're not giving them homework, you're actually coding with them and collaborating with them, as you would if you hired them.
The message we want to convey during your hiring process is that we will not tell you what to do. We will code side-by-side with you. That's how we work. We do not have someone above you telling you what to do. You have somebody beside you doing stuff with you. That makes the whole difference.
And you cannot do that without a Cloud Dev Environment. So it's not only about, you know, productivity features. It's also about the philosophy of how you work. And that's exactly what Gitpod is all about.
<br/>

**Pauline**: Thank you so much for sharing. We're actually nearing the end of the session now, so I think we will wrap up.
<br/>

**François**: Thank you. Thanks everyone. Speak soon.
<br/>

**Pauline**: Awesome. Well, thank you so much for joining us today. It was an absolute pleasure. I hope that everyone who's tuning in was inspired to give Gitpod and CDEs a go.
<br/>
<br/>

If you want to continue the conversation on Cloud Development Environment adoption, or if you have any questions about using Gitpod, feel free to come join our Gitpod community over at [www.gitpod.io/chat](https://www.gitpod.io/chat) or [try Gitpod for free](https://gitpod.io/login).
