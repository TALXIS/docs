---
author: David Wasserbauer
---

# Views
Views are part of presentation layer (There is one exception. See: **Entity** for more info). 

These components are used for listing records of specific entity with specific filters.


## CONVENTIONS:

### **Code placement**
Views are stored in **SavedQueries** folder under their Entity. So for example Account entity View will be stored in this path: 

…\CDS\Entities\Account\SavedQueries\
 ___
### **View Type**
There are multiple Query Types which define how your view will behave. 

**Most used types:**

`<querytype>0</querytype>` = Classic view

`<querytype>1</querytype>` = Advanced Find View

`<querytype>2</querytype>` = Subgrid View

`<querytype>4</querytype>` = Quick Find View

`<querytype>64</querytype>` = Lookup View
___

### **AppModule.xml**
This is same as in Forms case. You need to reference id of the view in **AppModule_managed.xml** in order to make the view accessible in the App. 

Views type="26"

Please follow conventions in AppModule guide (section: *Forms and Views are referenced under the entity they belong to.*).


**Example:**
```xml
<AppModuleComponent type="1" schemaName="task" />
<AppModuleComponent type="26" id="{16957922-09e4-450b-9d26-9a301117c678}" />
```
___
### **Order Attribute**
This is not required but highly recommended. It is always better to have records organized somehow. In cases of entities that contains field **talxis_internalid** we often use this field as order attribute.

**Example:**
```xml 
<order attribute="talxis_internalid" descending="true" />
```
___
