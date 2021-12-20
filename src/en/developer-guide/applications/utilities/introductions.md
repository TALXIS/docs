---
title: TALXIS Introductions
tagline: Guided help for that visit site for the first time
author: Adel Šabić
---
# **Introductions**

With TALXIS Introductions you can introduce user to parts of the PowerApps model-driven app. There are two main components: Introduction Scenario and Introduction Steps

## **Introduction Scenario**
| Field name | Description |
|- |- |
| talxis_appuniquename | Unique Name of the model-driven application |
| talxis_configuration_introductionscenarioid | ID of the scenario |
| talxis_donebuttonlabel | Label string of the "Done" button |
| talxis_entityname | Name of the target entity | 
| talxis_formid	| Form ID where introduction scenarion will be triggered |
| talxis_name | Name of the instance (Action sets this to be the same as the processing step) |
| talxis_nextbuttonlabel|Label string of the "Next" button	|
| talxis_previousbuttonlabel|Label string of the "Previous" button	|
| talxis_introductionscenariotypecode	| Define where introduction scenario will be triggered from	|

**Sample record**:

![TALXIS Configuration - Introduction Scenario](/.attachments/applications/utilities/Introductions/IntroductionScenarionRecord1.png)
![TALXIS Configuration - Introduction Scenario](/.attachments/applications/utilities/Introductions/IntroductionScenarionRecord2.png)

## **Introduction Step**
| Field name | Description |
|- |- |
| talxis_configuration_introductionstepid | Record ID |
| talxis_configuration_introductionscenarioid | This attribute represents relation between introduction step and introduction scenario. One step can have only one related scenario - one scenarion can have mutiple steps |
| talxis_elementselector | Define HTML element which will be highlited (If left empty step will be positioned on center of the page) |
| talxis_introductioncontent | Content of the introduction step card |
| talxis_order | Order number of the introduction step (Steps are ordered by this number) |
| talxis_positiontypecode | Determain where step will be positioned relative to selected HTML element from talxis_elementselector (Top, Bottom, Left, Right) |
| talxis_title | Title of the introduction step card |

**Sample record**:

![TALXIS Configuration - Introduction Step](/.attachments/applications/utilities/Introductions/IntroductionStepRecord.png)


## *More info*

To setup introductions feature you will first need to define introduction scenario. <br />

Introduction scenario currently can be triggered on load of the Application, Dialog or Form. In case you are triggering scenario from Application or Dialog you should leave talxis_formid(Form) attribute empty. When done with scenario setup, you should start adding steps for described scenario. <br />

Adding steps is pretty self explanitory you should just keep in mind talxis_order(Order) attribute so you order steps right. Regarding talxis_elementselector(Element Selector) if left empty, step will be shown on page center, and if defined it will highlight targeted HTML element.<br />

For both scenarios and steps we are using resource files so we can cover mutiple languages. But if you are not fimiliar with that you can type in what ever you want :)

### *Triggering*

To trigger introduction scenarion you will need to include custom script in onLoad event of the Form, Application or Dialog.
<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;○ Event type: On Load<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;○ Library: talxis_bootstrapfirstrunexperience.js<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;○  Function:TALXIS.Bootstrap.Features.FirstRunExperience.Introduction.LoadIntroduction<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;○ Enabled: true<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;○ Pass execution context: true

![Triggering](/.attachments/applications/utilities/Introductions/IntroductionStepRecord.png)
