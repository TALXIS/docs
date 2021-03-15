---
author: David Wasserbauer
---

# General 
You can find there some basic conventions which affect multiple components.

## References Overview
Some components have to be referenced. This table will help you with that:



|Component	|Type	|solution.xml	|AppModule_managed.xml	|
|-	|-	|-	|-	|
|Entity	|1	|schemaName	|schemaName	|
|Option Set	|9	|schemaName	|N/A	|
|Security Role	|20	|GUID	|GUID (AppModuleRoleMaps)	|
|View	|26	|N/A	|schemaName	|
|Business Rule	|29	|GUID	|GUID	|
|Cloud Flow	|29	|GUID	|N/A	|
|Workflow	|29	|GUID	|N/A	|
|Ribbon Diff	|55	|N/A	|N/A	|
|Dashboard	|60	|GUID	|GUID	|
|Form	|60	|GUID	|GUID	|
|WebResource	|61	|schemaName	|N/A	|
|SiteMap	|62	|schemaName	|schemaName	|
|Connection Role	|63	|N/A	|N/A	|
|AppModule	|80	|GUID	|N/A	|
|Plugin Assemblies	|91	|GUID	|N/A	|
|SDK Message Processing Step	|92	|GUID	|N/A	|
|Canvas App	|300	|schemaName	|schemaName	|


**Examples:** 

A form referenced in AppModule_managed.xml(GUID):

`<AppModuleComponent type="60" id="{33333374-0107-446f-bf15-d1ab0ed88dcf}" />`

An entity referenced in solution.xml(schemaName):

`<RootComponent type="1" schemaName="talxis_building" behavior="0" />`

*Look at other projects if you struggle or ask seniors.*
___

### **Behavior**
Behavior defines how the component will behave while being imported. 

`behavior="0"` - Takes whole definition of a component in solution and overrides other definitions of this component.

`behavior="1"` - Takes whole definition of a component in solution and merges this definition with other definitions of the same component.

`behavior="2"` - Takes only metadata of the component and merges them with other definitions of the same component.

More info bellow in **Conventions** section.
___
### **Solution action**
If you are making extensions of existing components in other solutions you will have to use `solutionaction` sometimes. 

`solutionaction="Added"` - The whole component or part of it (used in FormXml defintiion) was added.

`solutionaction="Modified"` - The whole component or part of it (used in FormXml defintiion) was modified.

`solutionaction="Removed"` - The whole component or part of it (used in FormXml defintiion) was removed.

*Look at other projects if you struggle or ask seniors.*
___


## Conventions

### **Version**
Every component with .xml file suffix contains paramater `<IntroducedVersion>`.
Please try to check this attribute and replace this attribute with 1.0.0.0 version while contributing.

**Example:**
```xml
<IntroducedVersion>1.0.0.0</IntroducedVersion>
```
___


### **GUID**
**GUIDs** are used for **IDs** of components. You have to be super cautious about this because **duplicated GUIDs** can use **serious damage** for the system.

Example of GUID generator which you can use: [GUID GENERATOR](https://guidgenerator.com/online-guid-generator.aspx) 
 ___

 
### **Behavior**
Let´s make it simple. (This do not applies on field definitions! Just references in **AppModule_managed.xml** or **solution.xml**)

**Entity:** 
- Use `behavior="1"` while contributing in Talxis or adding brand new custom entity in PCT solution. 
- Use `behavior="2"` while extending an existing solution from Talxis in PCT. 

**Everything else:** 
- Use `behavior="0"` if needed.
___

*More content is being prepared.*