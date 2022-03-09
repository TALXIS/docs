---
Author: Jan Losenický
---

# Tree View

## Visual Example

![Tree View Displayed On Form](/.attachments/applications/Controls/treeviewcontrol.png)

## Description

This control is displaying the tree view where we can say by checking and unchecking properties what can be used on source record.

## Inputs
- Source Entity Name - Logical name of entity where the control is binded
    - Example: `account`
- Source Record Id - Record id where the control is binded
    - Example: `accountid`
- Strict Check
    - Defines how to check of uncheck properties
    - 1 - Check/Uncheck only one - dont check/uncheck childs with parent
    - 0 - Check/uncheck childs with the parent
- Entity Name - Entity where to take data from
    - Example: `talxis_product`
- Entity Display Field name - What field to display from the entity
    - Example: `talxis_name`
- Association Entity Name
    - Logical Name of entity created by cds from N:N relationship
- Use Custom Intersecting Entity
    - No - Use Association Entity
    - Yes - Use custom Intersecting Entity
- Intersecting Entity Source Lookup
    - Example: `talxis_accountid` 
- Intersecting Entity Target Lookup
    - Example: `talxis_productid`
- Prompt Datafield Name
    - Field filling when checking property, can be used as expiration date
- Is Default Field
    - Field on entity where is stored information if the field is default or not (boolean)
- Is Disabled Field
    - Field on entity where is stored information if the field is disabled or not (boolean)
- Hierarchy Parent Field Name
    - Example: `talxis_parentproductid`
- Connection Type - Field saying connection type 
- Enabled Levels