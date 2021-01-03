---
author: Tomas Prokop
---

# Introduction
This developer documentation will help you with creating applications for Microsoft Power Platform using TALXIS managed components.
First of all let us introduce ourselves and explain what TALXIS is.

**TL;DR**
> We build apps and make tools supporting scalable declarative development using Microsoft Power Platform

## What is TALXIS

### Applications & Processes
We build sales, service and marketing applications with extensive options of customizations and offer it in SaaS model. This is made possible because they are built using a low-code platform [Microsoft Power Platform](https://powerplatform.microsoft.com/). To make building these apps even faster we maintain many utilities which extend what is offered out-of-box.

### Web Client and UI Controls
In addition to [Power Apps](https://powerapps.microsoft.com/) we present the same applications to users using a [React](https://reactjs.org/)-based portal. It can render [Model-driven applications](https://docs.microsoft.com/en-us/powerapps/maker/model-driven-apps/model-driven-app-components) using UI metadata from [Dataverse solutions](https://docs.microsoft.com/en-us/powerapps/maker/data-platform/solutions-overview) including [shared PCF UI Components](https://docs.microsoft.com/en-us/powerapps/developer/component-framework/overview). It uses [Azure AD B2C](https://docs.microsoft.com/en-us/azure/active-directory-b2c/overview) and TALXIS backend service mentioned below.

In order to provide the best user experience across [Model-driven](https://docs.microsoft.com/en-us/powerapps/maker/model-driven-apps/model-driven-app-components), [Canvas](https://docs.microsoft.com/en-us/powerapps/maker/canvas-apps/getting-started) and [Portal](https://docs.microsoft.com/en-us/powerapps/maker/portals/overview) apps we create many specialized UI components using [Power Apps Component Framework](https://docs.microsoft.com/en-us/powerapps/developer/component-framework/overview).

### Integration Middleware Tools
To support our applications and offer quick means of integrating them to other data sources we run a set of managed integration tools. We expose every data source as a connector definition backed by an HTTP REST API reverse proxy with an [Open API specification document](https://www.openapis.org/). This not just allows users to consume it in Power Apps, Power Automate and [Logic Apps](https://docs.microsoft.com/en-us/azure/logic-apps/logic-apps-overview) but developers can also reference it directly from code.
[Liquid templates](https://shopify.github.io/liquid/basics/introduction/) in combination with [Logic Apps](https://docs.microsoft.com/en-us/azure/logic-apps/logic-apps-overview) make connecting two systems with mapping and transformation quick and configurable even by consultants.

### Platform - Service Cluster, Application Backend & Mission Control
Some of scenarios require usage of external services for complex tasks. We manage a cluster with shared services like media conversion and geospatial functions which can be consumed by our applications.

Organizational data can be exposed using a secured OData V4 endpoint of our backend service. This makes it easy to consume for developers. It can connect to combination of a managed database, Dataverse and any Power Platform connectors as virtual data sources. [OIDC compliant](https://openid.net/connect/) identity providers like [Azure AD B2C](https://docs.microsoft.com/en-us/azure/active-directory-b2c/overview) can be used.

A mission control system helps us internally to provision new customers (including self-service), bill our software or services, distribute updates and manage incidents.

### Standard Data Model
A shared public data schema compliant with [Common Data Model](https://docs.microsoft.com/en-us/common-data-model/). It is a specification and multiple physical implementations of data schema organized into subject areas.

We implement a wide range of business applications and it is important to standardize data for different domains of expertise for our ability to support these apps in the long term.
It makes design, implementation and especially data analysis faster.


### Community & Open Source
We have built our existence around community and user groups. It has been a source of many good ideas for us and we are committed to continue contributing.
NETWORG plans to open source well documented parts you can use in your projects except a few of them which are key to our business.
If you want to learn or contribute in the meantime let's get in touch using hello@networg.com and ask for publishing components you are interested in.

## Our motivation
NETWORG started as a small team of .NET developers implementing customized CRM solutions based on Dynamics CRM. We were able to spin up a new instance, implement various modifications and go live in a matter of days. For us this was simply amazing because in our past experience ASP.NET apps always took weeks of creating boilerplate code to be even able to start working on business scenarios.

We quickly hit a wall by failing to keep up with high demand. The biggest issue we felt was our ability to hire and onboard skilled devs fast enough. Very few consultants knew Dynamics 365 well enough and it was hard to convince pro developers to use this approach.

In 2018 we started hearing about an emerging trend in enterprise software development called low-code application platform (also known as no-code/LCAP/LCDP/RAD/hpaPaaS). It opens app development to non-devs, offers considerably shorter time from idea to production, and thus provides an interesting opportunity not just for business users but for pro-devs as well.

XRM framework behind Dynamics 365 Customer Engagement we worked with later became known as Common Data Service after Microsoft decoupled Dynamics apps from the platform. They renamed it again in 2020 as Microsoft Dataverse and it was considered a leading low-code platform.

### Why low-code 
The difference of approach when compared to imperative programming is a level of abstraction developers work with. We try to do everything in order to focus on WHAT instead of HOW when building new solutions for our customers.

Low code tools come with a platform which takes care of components like security, integration, infrastructure. It often reduces many implementation tasks to drag-and-drop actions in interactive visual designers for user interface and business processes instead of code editors.

Declarative app development is nothing new. The difference now are buzzwords and the hype around it. It has got a large amount of attention especially from corporate IT which caused a big progress in the recent years when it comes to platforms supporting it.

The idea we could deliver the same value for our customers with less effort and lower costs without having to spend hundreds of hours with things like security and app infrastructure sounded very interesting. This came extra handy in times when dev people were short in supply for us.

### Journey
We did a pretty common thing for software developers. We tried to reduce the necessity of solving the same problems multiple times by creating tools, shared components and frameworks. :) This helped us among other important aspects make it a bit more usable and interesting for pro-devs.

With our developer mindsets after some time we turned it upside down. With no official guidance we started applying common development patterns like separation of concerns to plugins and XML declarations generated by UI designers. We put the generated code to a source control with CI/CD pipelines and started shipping updates of the "product" to all of our customers continuously.

In parallel one of our team focused on building a toolset and finding ways for making integrations declarative because we considered it an important but tedious part of all projects.

### Why Microsoft
We explored Salesforce, Mendix and OutSystems too but given our past and experience it was our first candidate.
It has won our hearts because we believe Microsoft, unlike competitors, is the only one with a complete story for both citizen and professional developers. It provides the best out-of-box integration with their own cloud platform, dev tools, productivity suite, business intelligence, process automation and artificial intelligence.

