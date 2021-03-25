---
author: David Wasserbauer
---

# Relationship

If data of one entity relates to data in another entity.... that is a **relationship**.

Since Microsoft has really descriptive documentation about relationships in docs you will find mostly tips and conventions that we have on this page. 

MS Docs: [Relationship Documentation](https://docs.microsoft.com/en-us/powerapps/maker/data-platform/data-platform-entity-lookup) 

___
## Lookup Fields

Lookup fields are the reason why relationships are generated in the first place. 

### **Lookup conventions**
Lookup fields are as the others one of attributes in the entity definition they belong to. 

**Pattern for lookup field names**: {publisher prefix}_{referenced entity}**id**

**Example:** 

talxis_measurementunitid
___

## Conventions
Relationships are one of the components you will customize everytime you will contribute in TALXIS repo.

### **Code placement**
Version control of relationships can be tricky. Please be cautious when contributing.

Relationship definition is stored in file under the "Relationships" folder:
>CDS\Other\Relationships\

![Relationships Screenshot](/.attachments/RelationshipsScreenshot.png)

File name is same as `<ReferencedEntityName>` (More info below).

This is where the tricky part comes: If you have more than one relationship to an entity in one solution you have to put those definitions in same file.

**Example:**

You need to put a OneToMany relationship from entity "talxis_opportunitydetail" to entity talxis_measurementunit. 

But there already is one relationship in file talxis_measurementunit.xml

![Measurement Relationship Original Screenshot](/.attachments/MeasurementRelationshipsOriginalScreenshot.png)

You will simply solve this situation by adding another `<EntityRelationship>` under the current relationship. 

![Relationship sample](/.attachments/RelationshipSample.png)

___

### **EntityRelationship Name**
This parameter is on the first row of the relationship definition. 

There are few conventions that we follow when adding new relationship. When you export relationships from DEV environment there will be most likely the EntityRelationship Name that do not follow our conventions. 

You have to replaced it by one with this pattern: (in Lower Case)
>*{publisher prefix}_{referenced entity}_{referencing entity}_{Lookup field name without prefix}*

**Example:**
``` xml
<EntityRelationship Name="talxis_talxis_measurementunit_talxis_contractdetail_measurementunitid">
```
___

### **NavigationPropertyName**
This parameter in a relationship definition has to match with `EntityRelationship Name` mentioned above (See screenshots above). There is one exception where this parameter is missing (mentioned below "Managed/unmanaged"). 


___


### **ReferencingAttributeName & NavigationPropertyName**
These parameter are referencing the lookup field. Make sure that correct logical name is present there.

**Example:** (or Screenshot above)
``` xml
<ReferencingAttributeName>talxis_measurementunitid</ReferencingAttributeName>
<NavigationPropertyName>talxis_measurementunitid</NavigationPropertyName>
```

___

 
### **Relationship reference**
You have to reference your relationship in order to make it part of the builder solution.

To do so you have to add a row with reference in Relationships.xml file: 
>CDS\Other\Relationships.xml

**Example:** 
```xml
<!-- talxis_measurementunit-->
<EntityRelationship Name="talxis_talxis_measurementunit_talxis_contractdetail_measurementunitid" />
```
Note: *It is good practise to put comments (green row in example above) above groups of same entity relationship references to make the code more readable. Relationship names are ofter too long and this really helps.*


___

### **Managed/unmanaged**
One of the points of putting code in the repository is to avoid unmanaged components in client instances. Hovewer with relationships comes with one exception and that is that some relationships are unmanaged and you cannot do anything about it.

When you create an entity there will be generated some relationships. 

**Example:** 

I made an entity Test and the environment has generated this relationships: 

![Unmanaged Relationships](/.attachments/UnmanagedRelationships.png)

I will not put any of these in source code because even if I do they will be generated again after deploy on any instance. Because of that there is no point of doing that since the only thing I would achieve is getting some useless code in the repository.

It can be kinda tricky to recognize which one is valid and which one is not. 

**There are tips to recognize them more easily:**
- Relationships to entities: systemuser, Business Unit, Owner, Team; are the ones of unmanaged relationships. You do not need to worry about them.
- Relationships with talxis_ or other prefix (same as publisher prefix) are usually the ones you have to put in the code.
- When creating an Activity Entity, do not put there any of them. Leave it blank. 
- When creating a new business process flow, put every generated relationship in code.
___

Working with relationships is sometimes a challenging stuff to do. Contact the seniors if you are stucked. They will be happy to help.
