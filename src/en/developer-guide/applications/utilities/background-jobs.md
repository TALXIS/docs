---
author: David Wasserbauer
---

# Background Job
Have you ever wondered how to trigger a workflow repeatedly? If your answer is yes than there is a great tool for you. 

Background jobs are used to execute actions or workflows for records retrieved using a FetchXML query based on configuration record.

## How To Use It
talxis_backgroundjob entity is deployed on every environment since it is part of the Utility Solution. All you need to do is specify a background job record and define which workflow you want to execute, setup a FetchXML query which will filter an entity records and specify a Cron Expression.

Open the Advanced find and find records for "Background Job" entity. There will probably be no records so create a new one.

**Example:**

![Calculation Example Form 1](/.attachments/Background.png)

### Background Job Type
There are 2 options. "Scheduled workflow" and "Retry Async".

Always use Scheduled workflow option since the other one is for retrying failed jobs.
___

### Workflow
In this lookup you need to select workflow or action you want to execute. 
___

### Fetch XML query
You need to add FetchXML query in this field to filter records on which you want to execute your process. 

You can use advanced find to build simple query but in this case you will often need to create more sofisticated one. 
Great tool to build a FetchXML query is [FetchXML Builder](https://fetchxmlbuilder.com/). To use this tool you need to have installed XRMToolBox. Follow instruction described in link to setup this awesome tool. It will help you a lot in your development.
___


### Cron Expression
Cron Expression is a way to define schedule to execute the workflow.
Unfortunatelly there are many Cron Exprresion Builders you can google so there is a link to verified one: [Cron Expression Builder](https://crontab.guru/)
___

 