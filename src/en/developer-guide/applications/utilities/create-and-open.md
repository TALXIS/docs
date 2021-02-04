---
author: Lukáš Gallovič
---

# Create And Open - Entity Generator

### This is a tutorial on how to use custom TS code to generate an entity from a different entity.
You have to add `JS function` to RibbonDiff.xml, so it looks something like this.
You must use `createAndOpen` function and `talxis_entitygenerator.js` library.
```
<JavaScriptFunction FunctionName="createAndOpen" Library="$webresource:talxis_entitygenerator.js">
<CrmParameter Value="PrimaryControl" />
<StringParameter Value="ait_GenerateCase" /> (name of my action)
</JavaScriptFunction>
```
U must use `2 parameters` the first one is always PrimaryControl and the second one is the name of your workflow action.

Then you have to create an action with the given name. And add 2 Process Arguments just like in the picture
![RecordUrl Designer](/.attachments/CreateAndOpen.png)
The names `must` be the same as on the picture.

Then you have to add at least `3 steps` to your Action
![RecordUrl Designer](/.attachments/CreateAndOpen2.png)
`Create Entity` where you can add some data to your freshly created entity and create the entity itself.
`ReturnRecordUrl` where you set Value to Record URL Create the entity(you want).
`CreateEntityName` holds the name of the entity you are creating. For example talxis_document.
And now you are good to go.
You can add more steps to your action to fill empty fields that need to be filled.
