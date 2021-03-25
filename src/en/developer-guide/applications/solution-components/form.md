---
author: David Wasserbauer
---

# Form
Forms are part of presentation layer (There is one exception. See: [Entity](https://docs.talxis.com/en/developer-guide/applications/solution-components/entity/) for more info). 

These components define how a record will be displayed and which parameters will be shown.


## Conventions

### **Code Placement**
Forms are stored in FormXml folder under their entity. So for example Account main form will be stored in this folder: 

…\CDS\Entities\Account\FormXml\main\

Different types of forms are stored in different subfolders: 

Main form: 
>EntityName\FormXml\main\ 

Quick View form: 
>EntityName\FormXml\quick\ 

Quick Create form: 
>EntityName\FormXml\quickCreate\ 

Card form: 
>EntityName\FormXml\card\
___

### **Managed Suffix**
Exported forms from DEV environment do not have _managed suffix.

Make sure you add this suffix in file name because otherwise it can cause a lot of troubles with solution upgrades.

**Example:**

✓ `{02c6a6ce-fc68-ea11-a811-000d3a23c639}_managed.xml`

✗ `{02c6a6ce-fc68-ea11-a811-000d3a23c639}.xml`
___

### **Duplicated GUIDS** 
When you are creating forms with PowerApps editor there are nearly always duplicated GUIDs everywhere. The editor is using existing form and because of that GUIDs remains same for some parts of the form. (Please change all GUIDS.)

**TIP:**
Use GUID swap script to get rid of them: [GUIDSwapIdCellsOnManagedForms](https://dev.azure.com/thenetworg/INT0006/_git/TALXIS?path=%2Fsrc%2FScripts%2FGuidSwapIdCellsOnManagedForms.ps1) 

*WARNING: This script is not fully capable on solving all issues. There are also labelid GUIDs that you need to change too. Contact KOS or WAS for help.*
___


### **solution.xml**
You need to reference `<formid>` in **solution.xml** to make it part of the builded solution.

Please follow conventions in [AppModule](https://docs.talxis.com/en/developer-guide/applications/solution-components/appmodule/) guide (section: *Forms and Views*).

We try to make the code as clean as possible so we keep adding new forms under the entity.

Entity (Type= "1")

Forms (type="60") 


**Example:** (Two forms of Account entity added)
```xml
<RootComponent type="1" schemaName="account" behavior="1" />
<RootComponent type="60" id="{f15a31cf-9f60-4959-977b-a7a83c6e2d9d}" behavior="0" />
<RootComponent type="60" id="{c624c14f-24a3-4a40-a832-f2f208a94526}" behavior="0" />
```
 ___

 
### **AppModule_managed.xml**
You need to reference `<formid>` in **AppModule_managed.xml** to make it part of the **App**.

Please follow conventions in [AppModule](https://docs.talxis.com/en/developer-guide/applications/solution-components/appmodule/) guide (section: *Forms and Views*).
___