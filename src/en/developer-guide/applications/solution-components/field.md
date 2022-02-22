---
author: David Wasserbauer
---

# Attributes
Attributes (Fields, Columns) define the individual data items that can be used to store information in an entity. 

This page contains mostly our conventions and tips. 

Please go through MS docs to learn more about attributes: 


[Create&Edit Fields](https://docs.microsoft.com/en-us/powerapps/maker/data-platform/create-edit-field-portal) 

[Types of Fields](https://docs.microsoft.com/en-us/powerapps/maker/data-platform/types-of-fields) 
___

## General Conventions

### **Code Placement**
A definition of an attribute is stored in an entity definition in Entity.xml file. Attributes definitions have to be in a **MODEL** solution. [Entity.xml](https://docs.talxis.com/en/developer-guide/applications/solution-components/entity/#entity-xml) 

New attributes come to our repositeries mostly while implementing new features for a client. When you are implementing such a feature please give it a minute to thought about it and if the feature can potencially improve TALXIS for others please consider contributing in TALXIS repo instead of a client custom solutions.
___

### **Prefixes**
There is a set of attributes that are generated everytime while creating a new entity (table). These attributes do not have a prefix (2 expections explained below). They are indispensable so do not forget to put these definitions in the repository too. 

![General Fields](/.attachments/GeneralEntityFields.png)

**Unique Identifier & Primary Name Column prefix**: 

These attributes are generated with the prefix of the publisher. The entity "Food" in the screenshot above was generated with publisher prefix docs_ so this attribute has the same prefix. 

Make sure that attributes with prefix have the same prefix as the solution they are defined in. It means that attributes in Talxis repo have to have **talxis_** prefix and attributes in extensive custom solutions has to have same prefix as **the publisher of the solution** has.

**Examples:**

Attribute in TALXIS: 
>talxis_startdate

Attribute in custom solution (Publisher prefix = plc): 
>plc_startdate
___

### **Attribute Customizations**
Every attribute has parameters that define the attribute. You can edit these parameters by hand but it is strongly recommended to edit attributes in PowerApps editor and then copy paste the exported attribute definition in the code. Otherwise you can cause some unexpected behavior or even disable a solution upgrade so please edit attributes in code only when you are 100% sure about your actions.


**Example:**
```xml
<attribute PhysicalName="talxis_buildingaddonoffice">
  <Type>decimal</Type>
  <Name>talxis_buildingaddonoffice</Name>
  <LogicalName>talxis_buildingaddonoffice</LogicalName>
  <RequiredLevel>none</RequiredLevel>
  <DisplayMask>ValidForAdvancedFind|ValidForForm|ValidForGrid</DisplayMask>
  <ImeMode>auto</ImeMode>
  <ValidForUpdateApi>1</ValidForUpdateApi>
  <ValidForReadApi>1</ValidForReadApi>
  <ValidForCreateApi>1</ValidForCreateApi>
  <IsCustomField>1</IsCustomField>
  <IsAuditEnabled>1</IsAuditEnabled>
  <IsSecured>0</IsSecured>
  <IntroducedVersion>1.0.0.0</IntroducedVersion>
  <IsCustomizable>1</IsCustomizable>
  <IsRenameable>1</IsRenameable>
  <CanModifySearchSettings>1</CanModifySearchSettings>
  <CanModifyRequirementLevelSettings>1</CanModifyRequirementLevelSettings>
  <CanModifyAdditionalSettings>1</CanModifyAdditionalSettings>
  <SourceType>0</SourceType>
  <IsGlobalFilterEnabled>0</IsGlobalFilterEnabled>
  <IsSortableEnabled>0</IsSortableEnabled>
  <CanModifyGlobalFilterSettings>1</CanModifyGlobalFilterSettings>
  <CanModifyIsSortableSettings>1</CanModifyIsSortableSettings>
  <IsDataSourceSecret>0</IsDataSourceSecret>
  <AutoNumberFormat></AutoNumberFormat>
  <IsSearchable>0</IsSearchable>
  <IsFilterable>0</IsFilterable>
  <IsRetrievable>0</IsRetrievable>
  <IsLocalizable>0</IsLocalizable>
  <MinValue>0</MinValue>
  <MaxValue>100</MaxValue>
  <Accuracy>2</Accuracy>
  <AccuracySource>2</AccuracySource>
  <displaynames>
    <displayname description="Building Add-On Office (%)" languagecode="1033" />
  </displaynames>
  <Descriptions>
    <Description description="" languagecode="1033" />
  </Descriptions>
</attribute>
```

___

## Conventions for Specific Attributes
To learn more about types visit MS docs mentioned above (*Create&Edit Fields*). 
Here are conventions connected with specific types of attributes that we follow: 
___


### **Calculated Attributes & Rollups**
Calculated Attributes and Rollups are not specific types of attributes but it means that attribute has a calculation formula. The value of these attributes cannot be replaced with custom value, they are always calculated from other attributes. You can define calculation for these types of attributes: 

>Currency, Date and Time, Date Only, Decimal Number, Duration, Email, Language, Multi Select Option Set, Choice, Text, Text Area, Ticker Symbol, Timezone, Two Options, URL, and Whole Number.

See [Calculated Fields Documentation](https://docs.microsoft.com/en-us/powerapps/maker/data-platform/define-calculated-fields) to learn more about calculations.

#### Convention
Since we had a lot of troubles with using same attributes for different purposes we set this convention: 

When you are creating new calculated attribute you have to create 3 attributes. One with _calculated suffix, second with _overridden suffix and third Boolean (Yes/No) with _boolean suffix. 
After that you have to define the calculation for the attribute with _calculated suffix according to this schema: 

IF *YourAttribute*_overridden contains data then *YourAttribute*_calculated value equals *YourAttribute*_overridden value ELSE *YourAttribute*_calculated equals *YourCalculation*. 

#### Example
You may ask why we want to do it like this. It will be more clear in this example: 

**Task**: Create a calculated attribute **Total Price** for the entity **Food** that will have this calculation formula: 

>**Total Price = Number of Items * Price per Item**

Everything will be fine until a new client would want to insert custom value in the attribute **Total Price**. Since calculated attributes cannot be overriden you have no option to do that. To keep reusability of an existing solution you have no other option than specifing the calculation like this:

![Calculation Example](/.attachments/CalculationExample.png)

#### What about Boolean? 

Boolean attribute there has a specific purpose. 
You can create a [Business Rule](https://docs.talxis.com/en/developer-guide/applications/solution-components/businessrule/) that avoid having both attributes on a form. 
To do so simply create a Business Rule which will look like this: 
```
IF
Total Price Boolean equals "Yes"
THEN
Show field Total Price (Overriden)
Hide field Total Price
ELSE
Hide field Total Price (Overriden)
Show field Total Price
```

This will create an option to override the value:

Default option: 

![Calculation Example Form 1](/.attachments/CalculatedExampleForm1.png)

Override value: 

![Calculation Example Form 2](/.attachments/CalculationExampleForm2.png)

You will make everyone happy by doing this since it will prevent lots of issues in the future.
___
### Currency
*Preparing content* 
___
### Date Time
*Preparing content* 
___
### Option Set
*Preparing content* 
___
### Lookup
*Preparing content* 
___

 