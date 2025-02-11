---
title: Tags
tagline: The tagging feature allows users to categorize and search records efficiently using tags.
author: Ondřej Juda
---

## Introduction

The tagging feature allows users to categorize and search records efficiently using tags. A tag consists of a name, color, and scope, while tag instances link tags to target records. User can manage tags through TagPicker PCF.

[Take me to setup guide.](/en/developer-guide/applications/modules/bootstrap/tags/#usage-implementation)

## Entities & Relationships

### Tag (talxis_tag)

Defines a tag with the following attributes:

| Display Name | Logical Name      | Description                                 |
|--------------|-------------------|---------------------------------------------|
| Name         | talxis_name       | Display name of the tag.                    |
| Color        | talxis_color      | Color used in Tag Picker as tag background. |
| Entity Name  | talxis_entityname | Defines the applicable entity.              |
| Record Id    | talxis_recordid   | Defines the applicable record id.           |

### Tag Instance (talxis_taginstance)

Establishes a link between a tag and a target record:

| Display Name | Logical Name      | Description                                  |
|--------------|-------------------|----------------------------------------------|
| Tag          | talxis_tagid      | Lookup to talxis_tag.                        |
| Target       | talxis_targetid   | Polymorphic lookup to the associated entity. |

### Key relationship constraints

- A tag cannot be deleted if tag instances exist.
- Each target entity has to have separate relationship with tag instance. Guide at the end.
- A dedicated asynchronous cloud flow removes tag instances when their target reference is cleared. It mitigates a situation when developer forgets to setup new relationship to cascade deletion.

## Using tags to search target records

To provide users with friendly search option, synchronous plugins maintain a text field `talxis_tagsearch` in each target entity.

The field contains tag names separated by semicolons.

When a tag instance is added or removed, the `talxis_tagsearch` field updates accordingly.

A tag renaming event triggers a plugin that updates all related target records with the new tag name.

## PCF Tag Picker

[The PCF Tag Picker component enables users to assign tags to target records.](/en/developer-guide/applications/controls/tagpicker)

## Usage & Implementation

1. Create relationship between talxis_taginstance and target entity. Don't forget to check if it already exists!

> If the new relationship is not importing, check that Entity.xml of target entity is included in the Model solution with the relationship. You can check Task in Bootstrap Model for inspiration.

```xml
<EntityRelationship Name="talxis_{ target entity name }_talxis_taginstance_targetid">
  <EntityRelationshipType>OneToMany</EntityRelationshipType>
  <IsCustomizable>1</IsCustomizable>
  <IntroducedVersion>1.0.0.0</IntroducedVersion>
  <IsHierarchical>0</IsHierarchical>
  <ReferencingEntityName>talxis_taginstance</ReferencingEntityName>
  <ReferencedEntityName>{ target entity name }</ReferencedEntityName>
  <CascadeAssign>NoCascade</CascadeAssign>
  <CascadeDelete>RemoveLink</CascadeDelete>
  <CascadeArchive>RemoveLink</CascadeArchive>
  <CascadeReparent>NoCascade</CascadeReparent>
  <CascadeShare>NoCascade</CascadeShare>
  <CascadeUnshare>NoCascade</CascadeUnshare>
  <CascadeRollupView>NoCascade</CascadeRollupView>
  <IsValidForAdvancedFind>1</IsValidForAdvancedFind>
  <ReferencingAttributeName>talxis_targetid</ReferencingAttributeName>
  <RelationshipDescription />
  <EntityRelationshipRoles>
    <EntityRelationshipRole>
      <NavPaneDisplayOption>UseCollectionName</NavPaneDisplayOption>
      <NavPaneArea>Details</NavPaneArea>
      <NavPaneOrder>10000</NavPaneOrder>
      <NavigationPropertyName>talxis_targetid_{ target entity name }</NavigationPropertyName>
      <RelationshipRoleType>1</RelationshipRoleType>
    </EntityRelationshipRole>
    <EntityRelationshipRole>
      <NavigationPropertyName>talxis_{ target entity name }_talxis_taginstance_targetid</NavigationPropertyName>
      <RelationshipRoleType>0</RelationshipRoleType>
    </EntityRelationshipRole>
  </EntityRelationshipRoles>
</EntityRelationship>
```

2. Add talxis_tagsearch field in target entity.
3. Add talxis_tagsearch field to quick find views to enable search.
4. Add PCF Tag Picker to relevant forms.
