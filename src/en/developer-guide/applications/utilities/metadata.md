---
title: TALXIS Workflow - Get App Module Details
tagline: Workflow for retriving app module details
author: Adel Šabić
---

# **Get App Module Details**

Hello reader, on this page you will find out how you can retrieve some of app module info. 

In solution of TALXIS.Apps.Environment.Utility.Features.Metadata.Composition you will find "Get App Module Details" flow. I will describe it's usage from mine example. I was supposed to send URL to user via email so he could access particular record (ex: https://environmentUniqueName.crm.dynamics.com/main.aspx?appid=00000000-0000-0000-0000-000000000000&pagetype=entityrecord&etn=task&id=00000000-0000-0000-0000-000000000000). In order to compose that URL I needed environmentUniqueName since the flow I made could be in different environments and I don't want to set it up manually. 

So in next chapter you will see what you need to send and what you will recieve from that child flow :)

## **Parameters to send**
| Parameter name 	| Description 	|
|-	|-	|
| AppModuleUniqueName 	| UniqueName of the app you want to recieve info from ex: talxis_salesdefault 	|



## **Return Values**

| Name 	| Description 	| Example value |
|-	|-	|- |
| appmoduleid 	| ID of App Module 	| 00000000-0000-0000-0000-000000000000|
| appmoduleurl | URL of App Module | environmentUniqueName.crm4.dynamics.com/main.aspx?appid=00000000-0000-0000-0000-000000000000 |
| appmoduleuniquenameurl | Unique name of app module | environmentUniqueName.crm4.dynamics.com/apps/uniquename/talxis_salesdefault |

![GetAppModuleWorkflow](/.attachments/applications\utilities\metadata\GetAppModuleDetails.png)
