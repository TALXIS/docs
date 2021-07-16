---
author: David Wasserbauer
---

# Entity
Entity is basically a table with columns and rows.
Rows represents records and columns are their attributes.

MS Docs: [Create a custom table](https://docs.microsoft.com/en-us/powerapps/maker/data-platform/data-platform-create-entity)

## General
The entity definition have to placed in model layer. 
The definition is stored in:
>.../Module/{Model Solution}/CDS/Entities/{Folder named by entity}

**Example:**

The definition of the entity **talxis_park** is stored in: 
>...\RealEstate\Shared.Model.Solution.DataLayer\CDS\Entities\talxis_park\
___

### Entity.xml
Entity.xml is a place where the definition of entity itself is stored.
You can divide it in 3 parts.

1. Description
   -  In description you define entity Name, Localized Names and other general info about the entity.
    ```xml
    <Name LocalizedName="Park" OriginalName="Park">talxis_park</Name>
      <EntityInfo>
        <entity Name="talxis_park">
          <LocalizedNames>
            <LocalizedName description="Park" languagecode="1033" />
          </LocalizedNames>
          <LocalizedCollectionNames>
            <LocalizedCollectionName description="Parks" languagecode="1033" />
          </LocalizedCollectionNames>
          <Descriptions>
            <Description description="" languagecode="1033" />
          </Descriptions>
    ```

1. Attributes
    - Attributes represent fields (columns) of the entity and their definition. (Example contains only one field, normally there are bunch of them.)
        ```xml
        <attributes>
            <attribute PhysicalName="talxis_parkid">
               <Type>primarykey</Type>
               <Name>talxis_parkid</Name>
               <LogicalName>talxis_parkid</LogicalName>
               <RequiredLevel>systemrequired</RequiredLevel>
               <DisplayMask>ValidForAdvancedFind|RequiredForGrid</DisplayMask>
               <ImeMode>auto</ImeMode>
               <ValidForReadApi>1</ValidForReadApi>
               <ValidForCreateApi>1</ValidForCreateApi>
               <IsCustomField>0</IsCustomField>
               <IsAuditEnabled>0</IsAuditEnabled>
               <IsSecured>0</IsSecured>
               <IntroducedVersion>1.0.0.0</IntroducedVersion>
               <IsCustomizable>1</IsCustomizable>
               <IsRenameable>1</IsRenameable>
               <CanModifySearchSettings>1</CanModifySearchSettings>
               <CanModifyRequirementLevelSettings>0</CanModifyRequirementLevelSettings>
               <CanModifyAdditionalSettings>1</CanModifyAdditionalSettings>
               <SourceType>0</SourceType>
               <IsGlobalFilterEnabled>0</IsGlobalFilterEnabled>
               <IsSortableEnabled>0</IsSortableEnabled>
               <CanModifyGlobalFilterSettings>1</CanModifyGlobalFilterSettings>
               <CanModifyIsSortableSettings>1</CanModifyIsSortableSettings>
               <IsDataSourceSecret>0</IsDataSourceSecret>
               <AutoNumberFormat></AutoNumberFormat>
               <IsSearchable>0</IsSearchable>
               <IsFilterable>1</IsFilterable>
               <IsRetrievable>1</IsRetrievable>
               <IsLocalizable>0</IsLocalizable>
               <displaynames>
                   <displayname description="Park" languagecode="1033" />
               </displaynames>
               <Descriptions>
                   <Description description="Unique identifier for entity instances"  languagecode="1033" />
                   <Description description="Jedinečný identifikátor instancí entity" languagecode="1029" />
               </Descriptions>
            </attribute>
        </attributes>
         ```

1. Parameters
   -  Parameters of entity are listed under attributes and they define the entity behavior. (Example is shortened)
        ```xml
      <EntitySetName>talxis_parks</EntitySetName>
      <IsDuplicateCheckSupported>0</IsDuplicateCheckSupported>
      <IsBusinessProcessEnabled>0</IsBusinessProcessEnabled>
      <IsRequiredOffline>0</IsRequiredOffline>
      <IsInteractionCentricEnabled>0</IsInteractionCentricEnabled>
      <IsCollaboration>0</IsCollaboration>
      <AutoRouteToOwnerQueue>0</AutoRouteToOwnerQueue>
      <IsConnectionsEnabled>0</IsConnectionsEnabled>
      <EntityColor></EntityColor>
      <IsDocumentManagementEnabled>0</IsDocumentManagementEnabled>
      <IsOneNoteIntegrationEnabled>0</IsOneNoteIntegrationEnabled>
      <IsKnowledgeManagementEnabled>0</IsKnowledgeManagementEnabled>
      <IsSLAEnabled>0</IsSLAEnabled>
      <IsDocumentRecommendationsEnabled>0</IsDocumentRecommendationsEnabled>
      <IsBPFEntity>0</IsBPFEntity>
      <OwnershipTypeMask>UserOwned</OwnershipTypeMask>
      <IsAuditEnabled>1</IsAuditEnabled>
      <IsRetrieveAuditEnabled>0</IsRetrieveAuditEnabled>
      <IsRetrieveMultipleAuditEnabled>0</IsRetrieveMultipleAuditEnabled>
      <IsActivity>0</IsActivity>
         ```
___




### **FormXml**
Forms are part of presentation layer but there is one exception. You cannot import entity without forms (and views). 

When you are creating new custom entity you will get these forms while exporting unmanaged solution from you DEV environment.

There are always 3 of them. 
- Main form (EntityName\FormXml\main\ )
- Quick View form (EntityName\FormXml\quick\ )
- Card form (EntityName\FormXml\card\ )

Make sure that you have them added in the entity folder. 

![MODEL Forms](/.attachments/MODEL_Forms.png)

See **Conventions** below to find out how to add them properly.
___
### **SavedQueries**
As was mentioned above Views are necessary too while importing solution. 

When you are creating new custom entity you will get these views too.

Make sure that you have them added in the Entity folder. 

See **Conventions** below to find out how to add them properly.
___
### **Formulas**
Formulas folder contains .xaml definition of calculated or rollup fields. If you make one of these the definition will be exported with field. 

See **Conventions** below to find out how to add them properly.
___
## Conventions

### **Forms** 
Please follow conventions in: [Forms](https://docs.talxis.com/en/developer-guide/applications/solution-components/form/)

Besides that there are few more conventions for model forms. These forms should never be used in presentation layer. These forms are just placeholders for solution import so you need to do some customizations to mark them for other developers.

They cannot be customized afterwards, cannot be deleted and others have to be sure on the first sight that they cannot use them. 

Simply make sure that the last few rows of model definition look like this: 
```xml
    <IsCustomizable>0</IsCustomizable>
    <CanBeDeleted>0</CanBeDeleted>
    <LocalizedNames>
      <LocalizedName description="MODEL_Information" languagecode="1033" />
    </LocalizedNames>
    <Descriptions>
      <Description description="A form for this entity." languagecode="1033" />
    </Descriptions>
  </systemform>
</forms>
```

*Do not forget to have managed suffix in file name!*
___
### **Views**
You can use exported views that was generated with new entity but there is one view generated with attribute `<isdefault>0</isdefault>`. 

Simply delete this one and everything should be fine.

These views are again placeholders. Never customize them (Adding colums, custom filters, ordering,...). 
You have to create new ones and put hem in presentation layer. Do not forget to change `<savedqueryid>` to avoid duplicated guids when you are creating new views in code. Exported views from DEV environment are generated with new GUIDS.
___
### **Formulas**
As was described above Formulas are definition of calculated or rollup fields. You should not edit the definition inside the .xaml file if you are not completely sure about your actions. It is always better to change the definition in PowerApps editor. 

There is one thing you should be aware of: Make sure that the file name is referenced in Fields parameter `<FormulaDefinitionFileName>`.

**Example:**

The field **talxis_gla** of entity **talxis_opportunityheader** is a calculated field.

**talxis_opportunitydetail-talxis_gla.xaml** is the file with definition of the calculation stored in Formulas folder. 

In entity.xml under the attributes is the definition of this field is the `<FormulaDefinitionFileName>` parameter: 
```xml
<attribute PhysicalName="talxis_gla">
	<Type>decimal</Type>
	<Name>talxis_gla</Name>
	<LogicalName>talxis_gla</LogicalName>
	<RequiredLevel>none</RequiredLevel>
	<DisplayMask>ValidForAdvancedFind|ValidForForm|ValidForGrid</DisplayMask>
	<ImeMode>auto</ImeMode>
	<ValidForReadApi>1</ValidForReadApi>
	<IsCustomField>1</IsCustomField>
	<IsAuditEnabled>0</IsAuditEnabled>
	<IsSecured>0</IsSecured>
	<IntroducedVersion>1.0.0.0</IntroducedVersion>
	<IsCustomizable>1</IsCustomizable>
	<IsRenameable>1</IsRenameable>
	<CanModifySearchSettings>1</CanModifySearchSettings>
	<CanModifyRequirementLevelSettings>1</CanModifyRequirementLevelSettings>
	<CanModifyAdditionalSettings>1</CanModifyAdditionalSettings>
	<SourceType>1</SourceType>
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
	<MinValue>-100000000000</MinValue>
	<MaxValue>100000000000</MaxValue>
	<Accuracy>2</Accuracy>
	<displaynames>
		<displayname description="GLA" languagecode="1033" />
	</displaynames>
	<Descriptions>
		<Description description="" languagecode="1033" />
	</Descriptions>
	<FormulaDefinitionFileName>/Formulas/talxis_opportunitydetail-talxis_gla.xaml</FormulaDefinitionFileName>
</attribute>
```
___