---
title: TALXIS Custom Assignment Cascade
tagline: Enables advanced assignment cascade configurations
author: František Čapek
---

# **Assignment Cascade Configuration**

This extension enables custom settings for one-to-many relationship assignment cascade. Use this when you need to make advanced filtering or if you want to use different attribute other than the default _ownerid_. TALXIS Custom Assignment Cascade is part of the Ownership feature.

## Important!
**You cannot create a configuration for a relationship that has enabled the default assignment cascade in the metadata, change the Assign Cascade to Cascade-None first if you want to use it.**<br><br>
![InvalidCascade](/.attachments/AssignmentCascade/AssignmentCascadeInvalidCascade.png)

# Entity

## **TALXIS Configuration - Assignment Cascade**
| Attribute name 	| Description 	| Type | Requirement
|-	|-	|- |-
| talxis_configuration_assignmentcascadeid 	| Unique id.	| Guid | System
| talxis_filteringattributesavedstate 	| State of filtering attribute - pre-save or post-save.	| Two options | Optional
| talxis_filterownershipattributename 	| Filtering attribute of type systemuser/team. 	| String | Optional
| talxis_name 	| Name of the configuration. | String | Required
| talxis_pluginstepid 	| Id of the associated sdk message processing step. | String (Guid) | Read-only
| talxis_recordset 	| Fetch xml filter query. The logic will apply only to these records. You can specify the query only after the record is saved.| String | Optional
| talxis_relationshipname 	| Logical name of entity relationship. This one-to-many relationship must exist between the source and the target entity. 	| String | Required
| talxis_sourceentityname 	| Logical name of the source (triggering) entity. This is populated by the plugin.| String | Read-only
| talxis_sourceownershipattributename 	| Logical name of the source (triggering) attribute of type systemuser/team. Leave empty to use default value = 'ownerid'.	| String | Required
| talxis_targetentityname 	| Logical name of the target entity. This is populated by the plugin.| String | Read-only
| talxis_targetownershipattributename 	| Logical name of the target attribute of type systemuser/team. Leave empty to use default value = 'ownerid'. 	| String | Required
| StateCode 	| Entity state. Values are Active/Inactive. Inactive records are not being retrieved. | State | System
| StatusCode 	| Status of the entity state. Values are Active/Inactive.	| Status | System

![ConfigurationMainForm](/.attachments/AssignmentCascade/AssignmentCascadeConfigurationMainForm.png)
<br><br>
---

# Code - Configuration

Following components work with the configuration records.

## [PluginDeleter.cs]()

This code-activity is triggered by the _talxis_deleterecordassignmentprocessingstep_ workflow. When you delete the configuration record, it checks for other active configurations for this specific **source attribute**. If there are any other existing configurations, the attribute is removed from the _filteringattributes_ array on the Sdk Message Processing Step entity record. If there is no other configuration, the processing step record gets deleted from the environment with all its associated Entity Images.

## [PluginRegistrator.cs]()

The **source entity** and **target entity** are automatically filled using the one-to-many relationship metadata from the configuration. When you create the configuration record, it checks for other existing configurations for this specific **source attribute** (and for this relationship). If there are any other existing configurations, the attribute is added to the _filteringattributes_ array on the Sdk Message Processing Step entity record. If there is no other configuration, the processing step record gets created and is associated with this configuration. Optionally, if you specify ***filter attribute*** and ***filtering attribute saved state***, Entity Image is created for this attribute and is associated with the processing step. The Entity Image type is Both. [More info on Entity Images in MS Docs](https://docs.microsoft.com/en-us/dynamics365/customer-engagement/web-api/sdkmessageprocessingstepimage?view=dynamics-ce-odata-9).<br>**This plugin is executed on post-operation stage in the event execution pipeline.**<br><br>
![SavedConfiguration](/.attachments/AssignmentCascade/AssignmentCascadeSavedConfiguration.png)

## [PluginRegistatorValidaton.cs]()

When you try to create the configuration record, this plugin validates the input parameters and throws exception if any of the given attributes is duplicate or invalid. This should ensure that the user can't create duplicate or invalid configuration.<br>**This plugin is executed on pre-validation stage in the event execution pipeline.**<br><br>
![RelationshipNotFound](./attachments/AssignmentCascade/AssignmentCascadeRelationshipNotFound.png)

# Code - Execution

## [ReassignChildRecords.cs]() (**Main**)

This is the main execution plugin. It is triggered by the ***update Sdk Message Processing Step*** on the **source attribute** on **source entity**. It gets the existing configuration for given attribute and entity, applies the custom filtering and updates **target attribute** on all child records using the fetch xml filter query.<br>

# Workflows

## talxis_assingmentconfigqueryprefill

- Generates default fetch xml query using the target entity logical name after the configuration record is saved.  

## talxis_deleterecordassignmentprocessingstep

- Checks if the associated processing step needs to be deleted or updated, then proceeds with the operation.

