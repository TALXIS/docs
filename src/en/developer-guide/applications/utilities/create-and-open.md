---
author: Lukáš Gallovič
---

# Create And Open - Entity Generator

### This is a tutorial on how to use custom TS code to generate an entity record from an entity form through ribbon button.
You have to add `JS function` to RibbonDiff.xml, so it looks something like this.
You must use `createAndOpen` function and `talxis_entitygenerator.js` library.
Here is the whole RibbonDiff.xml, but be careful you still have to play with the sequence and TemplateAlias to get it exactly where you want it.
```
<?xml version="1.0" encoding="utf-8"?>
<RibbonDiffXml xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <CustomActions>
    <CustomAction Id="ntg.lead.createAndOpen.CustomAction" Location="Mscrm.Form.lead.MainTab.Save.Controls._children" Sequence="49">
      <CommandUIDefinition>
        <Button Command="ntg.lead.createAndOpen.Command" Id="ntg.lead.createAndOpen.CommandDefinition" LabelText="$LocLabels:ntg.lead.createAndOpen.LabelText" Sequence="49" TemplateAlias="o1"  ModernImage="$webresource:ntg_createadnopenicon.svg" />
      </CommandUIDefinition>
    </CustomAction>
  </CustomActions>
  <Templates>
    <RibbonTemplates Id="Mscrm.Templates" />
  </Templates>
  <CommandDefinitions>
    <CommandDefinition Id="ntg.lead.createAndOpen.Command">
      <EnableRules />
      <DisplayRules />
      <Actions>
       <JavaScriptFunction FunctionName="createAndOpen" Library="$webresource:talxis_entitygenerator.js">
        <CrmParameter Value="PrimaryControl" />
        <StringParameter Value="ait_GenerateCase" /> (name of my action
       </JavaScriptFunction>
      </Actions>
    </CommandDefinition>
  </CommandDefinitions>
  <RuleDefinitions>
    <TabDisplayRules />
    <DisplayRules />
    <EnableRules />
  </RuleDefinitions>
  <LocLabels>
    <LocLabel Id="ntg.lead.createAndOpen.LabelText">
      <Titles>
        <Title description="Generate new record" languagecode="1033" />
      </Titles>
    </LocLabel>
  </LocLabels>
</RibbonDiffXml>
```
You must use `2 parameters` the first one is always PrimaryControl and the second one is the name of your workflow action.

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
