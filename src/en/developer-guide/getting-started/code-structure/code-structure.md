---
author: Adel Šabić
---

# Code Structure

Hi person :D

Since you are reading this we assume that you are interested in how our solution is layed out. So sit tight, bring a snack and let us try explain it to you.

First thing you should read is our introduction so you know what is our vision. Our main tool for app development is PowerApps which is build on top of the C# and .NET Framework. When we build applications we do it in PowerApps and when we finish we export it and upload it to Visual Studio where we can change some things in code and thru which we upload the code to Git. 

When building the app we build it in three layers (solutions):
	• Model - this is where data model does its thing. Entites, their attributes and relationships are here well hidden from end user
	• Logic (ex Features) - In here you can find some bussiness rules, bussiness processes, flows and things that do things. So this is the John Wick part of the App, it does all the action
	• App - Everything that user sees and how he sees it is  defined here. Views, Forms, WebResources (Custom Code) etc. are build in this layer of the app

When we finish building everything, then we can export our solution so we can upload it to git where application is located. If we extract exported solution we can see that it has a certain files and folders order and it looks like this:

>Legend:
>	• Folders
>	• SubFolders
>	• .xml files
>	• Comments
>
>	• AppModules
>		○ *ApplicationName*
>			§ AppModule.xml - Everything that is contained inside application can be seen here ( read this link)
>	• AppModuleSiteMaps
>		○ *ApplicationName*
>			§ AppModuleSiteMap.xml - Everything that is contained in site map (Areas, Groups, SubAreas)
>	• Entites
>		○ *EntityName*
>			§ FormXml - Forms
>				□ *guid*.xml
>			§ SavedQueries - Views
>				□ *guid*.xml
>			§ Entity.xml - containes all informations about attributes and entity metadata
>			§ RibbonDiff.xml - describes buttons
>	• OptionSets - Choices
>		○ *optionsetName*.xml
>	• Other 
>		○ Relationships
>			§ *entityName*.xml - containes data about every relationship refered to that entity
>		○ Customatizations.xml - 
>		○ EntityMaps.xml - If some data mapping is done it is contained here
>		○ Relationships.xml - Every relationship used in solution
>		○ Solution.xml - Everything that is contained inside solution (if you are interested in types read this
>	• WebResources - Custom Code
>		○ *customCodeName*
>		○ *WebResourceName*.xml - containes WebSource metadata
