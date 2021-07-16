---
author: David Wasserbauer
---

# AppModule & SiteMap

**AppModule** and **AppModule SiteMap** are components where you specify which components will be present in the **presentation layer** and how they will behave.

## Conventions

### **Code placement**

File with **AppModule** definition have to be stored in **AppModules** folder.

File with **AppModule SiteMap** definition have to be stored in **AppModuleSiteMaps** folder.


**Examples:** 

AppModule:

 ...\CDS\AppModules\talxis_TALXISRealEstate\AppModule_managed.xml

AppModule SiteMap:

...\CDS\AppModuleSiteMaps\talxis_TALXISRealEstate\AppModuleSiteMap_managed.xml
___

### **SiteMap** 
SiteMap defines the left navigation pane for your app. There are specified entities and their views which can users interact with on the "main page".

MS Docs: [Create a SiteMap](https://docs.microsoft.com/en-us/powerapps/maker/model-driven-apps/create-site-map-app) 

AppModule SiteMap have to be referenced in Appmodule_managed.xml file. 

AppModule SiteMap Type = "62"

**Example:**
```xml
<AppModuleComponent type="62" schemaName="talxis_TALXISRealEstate" />
```
___

### **Managed suffix**

New **AppModules** and **AppModule SiteMaps** are exported from your DEV environment without this suffix in the **name** of **files** so don´t forget to **add them**.
___

### **Forms and Views**
We try to make the code as clean as possible so we keep adding new forms and views under the entity.

Entity (Type= "1")

Forms (type="60") 

Views (type = "26") 

**Example:**
```xml
<AppModuleComponent type="1" schemaName="talxis_park" /> <!--Park Entity-->
<AppModuleComponent type="60" id="{c176ae1b-a2bf-4af5-b6a0-6a617073bc81}" /> <!--Park Form-->
<AppModuleComponent type="26" id="{a7b7c991-ffc9-4c72-a1b1-87f3cc6a49e6}" /> <!--Park View-->
<AppModuleComponent type="1" schemaName="account" /> <!--Account Entity-->
<AppModuleComponent type="60" id="{f15a31cf-9f60-4959-977b-a7a83c6e2d9d}" /> <!--Account Form-->
<AppModuleComponent type="26" id="{17aec9f1-e5e6-ea11-a817-000d3a666d40}" /> <!--Account View-->
<AppModuleComponent type="26" id="{47b9a221-e6e6-ea11-a817-000d3a666d40}" /> <!--Account View-->
<AppModuleComponent type="26" id="{6ccc4a00-e6e6-ea11-a817-000d3a666d40}" /> <!--Account View-->
```
 ___

### **AppModuleRoleMaps**
This attributes define which [Security Roles](https://docs.talxis.com/en/developer-guide/applications/solution-components/securityrole/) have access to this **App**.
Make sure that there are all and only **Roles** you need.

**Example:**
```xml
<AppModuleRoleMaps>
<Role id="{627090ff-40a3-4053-8790-584edc5be201}" />
<Role id="{119f245c-3cc8-4b62-b31c-d1a046ced15d}" />
</AppModuleRoleMaps>
```
___

### **LocalizedNames**
LocalizedNames defines **App Name**. Make sure that at least the one with languagecode="1033" is present.

The most used language codes in our projects: 
- languagecode="1029" = CZ
- languagecode="1029" = ENG

**Example:**
```xml
<LocalizedNames>
<LocalizedName description="TALXIS Real Estate" languagecode="1029" />
<LocalizedName description="TALXIS Real Estate" languagecode="1033" />
</LocalizedNames>`
```
___

### **Customizations.xml**
You have to have **referenced** these components to wrap them into builded **solution**.
These components have to be mentioned in file **Customizations.xml** which is stored in:

…\CDS\Other\Customizations.xml 

If they are not already mentioned you will reference them by adding these two rows:
```xml
<AppModuleSiteMaps />
<AppModules />
```

Please follow the order in the **example** below. 
There were situations when the solution builder did not wrap them because they were not ordered this way.

**Example:**
```xml
<?xml version="1.0" encoding="utf-8"?>`
<ImportExportXml xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">`
  <Entities />
  <Workflows />
  <Dialogs />
  <Dashboards />
  <WebResources />
  <AppModuleSiteMaps />       
  <AppModules />             
  <Languages>
    <Language>1029</Language>
    <Language>1033</Language>
  </Languages>
</ImportExportXml>
```
___

### **solution.xml**
You need to reference `<UniqueName>` and `<SiteMapUniqueName>` in **solution.xml** to make it part of builded solution.

- AppModules type = "80"
- SiteMaps type = "62"

**Examples:**
```xml
<RootComponent type="80" schemaName="talxis_TALXISRealEstate" behavior="0" /> 
<RootComponent type="62" schemaName="talxis_TALXISRealEstate" behavior="0" /> 
```
___