---
author: David Wasserbauer
---

# Form
Forms are part of presentation layer (There is one exception. See: **Entity** for more info). 

These components define how a single record will be displayed and which parameters will be shown.


## CONVENTIONS:

### **Code placement**
Forms are stored in FormXml folder under their Entity. So for example path of Account entity form will be stored in this path: 

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

### **Managed suffix**
Exported forms from DEV environment do not have this suffix: _managed 
Make sure you add it in file name because otherwise it can cause a lot of troubles with solution upgrades. (And that is the last thing you want to happen.) 

**Example:**

✓ `{02c6a6ce-fc68-ea11-a811-000d3a23c639}_managed.xml`

✗ `{02c6a6ce-fc68-ea11-a811-000d3a23c639}.xml`
___

### **Duplicated GUIDS** 
When you are creating forms with UI editor there are nearly always duplicated GUIDs. The editor is using existing form and because of that GUIDs remains same for unmodified parts of form. (Again...this could cause an armageddon. Be responsible and change all GUIDS.)

**TIP:**
Use GUID swap script to get rid of them: [GUIDSwapIdCellsOnManagedForms](https://dev.azure.com/thenetworg/INT0006/_git/TALXIS?path=%2Fsrc%2FScripts%2FGuidSwapIdCellsOnManagedForms.ps1) 

*WARNING: This script is not fully capable on solving all issues. There are also labelid GUIDs that you need to change too. Contact KOS or WAS for help.*
___


### **solution.xml**
You need to reference `<formid>` in **solution.xml** to make it part of the builded solution.

Please follow conventions in **AppModule documentation** (section: *Forms and Views are referenced under the entity they belong to.*).


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
You need to reference `<formid>` in **AppModule_managed.xml** to make it part of the **App** where you want the form to be displayed.

Please follow conventions in AppModule guide (section: *Forms and Views are referenced under the entity they belong to.*).
___