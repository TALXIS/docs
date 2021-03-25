---
author: David Wasserbauer
---

# Views
Views are part of presentation layer (There is one exception. See: [Entity](https://docs.talxis.com/en/developer-guide/applications/solution-components/entity/) for more info). 

These components are used for listing records of specific entity with specific filters.

MS Docs: [Create a view](https://docs.microsoft.com/en-us/powerapps/maker/model-driven-apps/create-edit-views-app-designer)
## Conventions

### **Code Placement**
Views are stored in **SavedQueries** folder under their Entity. So for example Account entity view will be stored in this folder: 

…\CDS\Entities\Account\SavedQueries\
 ___
### **View Type**
There are multiple Query Types which define how your view will behave. 

**The most used types in our projects:**

`<querytype>0</querytype>` = Classic view (Used in [AppModule SiteMap](https://docs.talxis.com/en/developer-guide/applications/solution-components/appmodule/#sitemap))


`<querytype>2</querytype>` = Subgrid View (Used in [Forms](https://docs.talxis.com/en/developer-guide/applications/solution-components/form))


`<querytype>64</querytype>` = Lookup View (Used in [Lookups](https://docs.talxis.com/en/developer-guide/applications/solution-components/relationship/#lookup-fields))

Other Types of views: [Customize entity views](https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/customize-entity-views#types-of-views)
___

### **AppModule.xml**
This is same as in [Forms](https://docs.talxis.com/en/developer-guide/applications/solution-components/form) case. You need to reference id of the view in **AppModule_managed.xml** in order to make the view accessible in the App. 

Views type="26"

Please follow conventions in [AppModule](https://docs.talxis.com/en/developer-guide/applications/solution-components/appmodule/ guide (section: *Forms and Views*).


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

**Descending**

Descending defines how records will be sorted accourding to order attribute.

`descending="true"`: Newer to Older, From Z to A, Larger to Smaller

`descending="false"`: Older to Newer, From A to Z, Smaller to Larger
___
