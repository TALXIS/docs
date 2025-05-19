---
title: Dynamic Attributes
tagline: The Dynamic Attribute feature allows users to define and manage custom attributes.
author: Mirza Kobašević
---

## Introduction

The Dynamic Attribute feature enables a flexible way to define and manage custom attributes across any entity in the system (e.g., contact, account, talxis_product...). Instead of modifying existing entity schemas, dynamic attributes are defined and stored separately, allowing extensibility without schema changes.

[Take me to setup guide.](/en/developer-guide/applications/modules/bootstrap/dynamic-attributes/#usage-implementation)

## Entities

### Attribute Definition (talxis_attributedefinition)

Represents the metadata for a dynamic attribute. Each Attribute Definition defines how the corresponding attribute should behave (data type, metadata, default value):

| Display Name                | Logical Name                        | Description                                                        |
|-----------------------------|-------------------------------------|--------------------------------------------------------------------|
| Name                        | talxis_name                         | Display name of the attribute definition.                          |
| Data Type                   | talxis_datatypetypecode             | Color used in Tag Picker as tag background.                        |
| Entity Name                 | talxis_entityname                   | Defines the entity that attribute describes.                       |
| Min Value                   | talxis_int_min                      | Optional metadata for int (min value).                             |
| Max Value                   | talxis_int_max                      | Optional metadata for int (max value).                             |
| Min Value                   | talxis_decimal_min                  | Optional metadata for decimal (min value).                         |
| Max Value                   | talxis_decimal_max                  | Optional metadata for decimal (max value).                         |
| Precision                   | talxis_decimal_precision            | Optional metadata for decimal (precision).                         |
| Maximum character count     | talxis_text_maxcharcount            | Optional metadata for text (max length).                           |
| Description                 | talxis_description                  | Attribute description.                                             |
| Default Value               | talxis_text_default                 | Default value for Text type.                                       |
| Default Value               | talxis_int_default                  | Default value for Integer type.                                    |
| Default Value               | talxis_decimal_default              | Default value for Decimal type.                                    |
| Default Value               | talxis_choice_default               | Default value for Choice type (Lookup on Attribute Option).        |
| Default Value               | talxis_bit_default                  | Default value for Boolean type.                                    |
| Default Value               | talxis_date_default                 | Default value for Date type.                                       |
| Default Value               | talxis_datetime_userlocal_default   | Default value for DateTime User Local type.                        |
| Default Value               | talxis_datetime_tzi_default         | Default value for DateTime Time Zone independent type.             |
| Default Value               | talxis_defaultvalue_serialized      | Serialized (JSON) Default value (Dynamic Attribute PCF binding).   |
| Attribute Definition Lookup | talxis_attributedefinitionlookupid  | Self referencing lookup for Dynamic Attribute PCF input binding.   |

#### Attribute Definition Lookup

Self referencing lookup that is automatically populated by `talxis_populateattributedefinitionlookup` Workflow on `talxis_attributedefintion` record creation.

### Data Type optionset (talxis_datatypetypecode)

Defines Attribute type. Supported types:

| Label                             | Value             |
|-----------------------------------|-------------------|
| Text                              | 742070000         |
| Number (whole)                    | 742070001         |
| Number (decimal)                  | 742070002         |
| Choice                            | 742070003         |
| Boolean                           | 742070004         |
| Date                              | 742070005         |
| Date Time (User Local)            | 742070006         |
| Date Time (Time zone independent) | 742070007         |

#### Decimal type Attribute Defintion

![Decimal type Attribute Defintion on Form](/.attachments/applications/modules/bootstrap/dynamic-attributes/decimal-attribute-form.png)

### Attribute Option (talxis_attributeoption)

Options related for one attribute definition record of type Choice:

| Display Name            | Logical Name                        | Description                                            |
|-------------------------|-------------------------------------|--------------------------------------------------------|
| Name                    | talxis_name                         | Display name of the attribute option.                  |
| Attribute Definition    | talxis_attributedefinitionid        | Attribute definition lookup.                           |
| Value                   | talxis_value                        | Integer value for option in the optionset.             |
| Description             | talxis_description                  | Attribute option description.                          |


#### Choice type Attribute Defintion

![Choice type Attribute Defintion on Form](/.attachments/applications/modules/bootstrap/dynamic-attributes/choice-attribute-definition-form.png)

### Attribute Option Label (talxis_attributeoptionlabel)

Every attribute option can have multiple labels depending on app languages:

| Display Name            | Logical Name                        | Description                                            |
|-------------------------|-------------------------------------|--------------------------------------------------------|
| Name                    | talxis_name                         | Display name of the Label.                             |
| Attribute Option        | talxis_attributeoptionid            | Attribute option lookup.                               |
| Language                | talxis_language                     | Integer value for language code.                       |

#### Attribute Option Labels

![Attribute option labels on Form](/.attachments/applications/modules/bootstrap/dynamic-attributes/option-labels.png)

### Attribute Value (talxis_attributevalue)

Stores the actual value input by the user for a specific attribute and specific record:

| Display Name            | Logical Name                        | Description                                                                  |
|-------------------------|-------------------------------------|------------------------------------------------------------------------------|
| Name                    | talxis_name                         | Display name of the attribute value.                                         |
| Attribute Definition    | talxis_attributedefinitionid        | Lookup to attribute definition.                                              |
| Regarding               | talxis_regardingobjectid            | Reference to the target entity (polymorphic lookup: Contact, Account, etc.). |
| Value                   | talxis_text_value                   | Corresponding value field for Text type.                                     |
| Value                   | talxis_int_value                    | Corresponding value field for Integer type.                                  |
| Value                   | talxis_decimal_value                | Corresponding value field for Decimal type.                                  |
| Value                   | talxis_choice_value                 | Corresponding value field for Choice type (Lookup on Attribute Option).      |
| Value                   | talxis_bit_value                    | Corresponding value field for Boolean type.                                  |
| Value                   | talxis_date_value                   | Corresponding value field for Date type.                                     |
| Value                   | talxis_datetime_userlocal_value     | Corresponding value field for DateTime User Local type.                      |
| Value                   | talxis_datetime_tzi_value           | Corresponding value field for DateTime Time Zone independent type.           |
| Value                   | talxis_serialized_value             | Serialized (JSON) value (DynamicAttribute PCF bindingField).                 |

#### Serialized value

Serialized value fields are text fields that are used to bind Dynamic Attribute PCF so user can easily edit specific attribute value by using propper Base Control based on the selected [Data Type](/en/developer-guide/applications/modules/bootstrap/dynamic-attributes/#data-type-optionset-talxis-datatypetypecode).

Serialized value format:

```json
{
  "raw": 150,
  "error": true,
  "errorMessage": "Number must be less than 100",
}
```

## Usage & Implementation

To enable this feature in your app for specific Entity you have to:

1. Create relationship between `talxis_attributedefinition` and entity you want to enable this feature for. That relationship should be added to `talxis_regardingobjectid` pollymorphic lookup in `talxis_attributedefinition` entity. Don't forget to check if it already exists!

> Example of existing contact -> talxis_attributedefinition relationship.

```xml
<EntityRelationship Name="talxis_contact_talxis_attributevalue_regardingobjectid">
    <EntityRelationshipType>OneToMany</EntityRelationshipType>
    <IsCustomizable>1</IsCustomizable>
    <IntroducedVersion>1.0</IntroducedVersion>
    <IsHierarchical>0</IsHierarchical>
    <ReferencingEntityName>talxis_attributevalue</ReferencingEntityName>
    <ReferencedEntityName>contact</ReferencedEntityName>
    <CascadeAssign>NoCascade</CascadeAssign>
    <CascadeDelete>RemoveLink</CascadeDelete>
    <CascadeArchive>RemoveLink</CascadeArchive>
    <CascadeReparent>NoCascade</CascadeReparent>
    <CascadeShare>NoCascade</CascadeShare>
    <CascadeUnshare>NoCascade</CascadeUnshare>
    <CascadeRollupView>NoCascade</CascadeRollupView>
    <IsValidForAdvancedFind>1</IsValidForAdvancedFind>
    <ReferencingAttributeName>talxis_regardingobjectid</ReferencingAttributeName>
    <RelationshipDescription>
      <Descriptions>
        <Description description="Regarding" languagecode="1033" />
        <Description description="Regarding" languagecode="1029" />
      </Descriptions>
    </RelationshipDescription>
    <EntityRelationshipRoles>
      <EntityRelationshipRole>
        <NavPaneDisplayOption>UseCollectionName</NavPaneDisplayOption>
        <NavPaneArea>Details</NavPaneArea>
        <NavPaneOrder>10000</NavPaneOrder>
        <NavigationPropertyName>talxis_regardingobjectid_contact</NavigationPropertyName>
        <RelationshipRoleType>1</RelationshipRoleType>
      </EntityRelationshipRole>
      <EntityRelationshipRole>
        <NavigationPropertyName>talxis_contact_talxis_attributevalue_regardingobjectid</NavigationPropertyName>
        <RelationshipRoleType>0</RelationshipRoleType>
      </EntityRelationshipRole>
    </EntityRelationshipRoles>
  </EntityRelationship>
```

2. Make sure [PCFs](/en/developer-guide/applications/modules/bootstrap/dynamic-attributes/#PCFs) for this feature are imported.
3. Add `talxis_attributedefinition`,`talxis_attributeoption` and `talxis_attributeoptionlabel` views and forms from [Environment\Bootstrap\Apps.Default](https://dev.azure.com/thenetworg/INT0006/_git/TALXIS?path=/src/Areas/Environment/Bootstrap/Apps.Default/Declarations/Entities) in your App in desired SiteMap Areas.
4. Create `Dynamic Attribute Grid PCF` Text Attribute in desired Entity and bind Dynamic Attribute Grid PCF to it.

## PCFs
- [Dynamic Attribute](/en/developer-guide/applications/controls/dynamicattribute.md)
- [Dynamic Attribute Grid](/en/developer-guide/applications/controls/dynamicattributegrid.md)