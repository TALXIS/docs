---
author: David Wasserbauer
---

# Solution Component Generators
Solution component generators contribute to default Explorer view of VS Code.

**DevKit can scaffold:**
- **[Entity](#entity)**
- **[Form](#form)**
- **[View](#view)**
- **[Script](#script)**
- **[Localization](#localization)**
- **[Fluent UI Icon](#fluent-ui-icon)**
- **[WebResource from File ](#webresource-from-file)**


### **Entity**
Right click on **entities** folder. Available in **App** and **Model** solutions.
1. Provide necessary parameters:
	- **APP SOLUTION:**
		- Entity Display Name
		- Prefix (automatically prefilled with current workspace prefix)
		- Add Main Form?: true/false
		- Add QuickCreate Form?: true/false
		- Add View?: true/false
		- Suggested Logical Name (pregerated from inputs, adjust accordingly) 
	- **MODEL SOLUTION:**
		- Entity Name EN
		- Prefix (automatically prefilled with current workspace prefix)
		- Entity Plural Name EN
		- Entity Name CZ
		- Entity Plural Name CZ
		- Is Organisation Type Entity?: true/false
		- Suggested Logical Name (pregenerated from inputs, adjust accordingly) 

After that the entity will be created respecting input params.

Entity and forms are added to **Solution.xml**.

### **Form**
Right click on **FormXml** folder. Also available on **main/quickCreate** folders.

If used on **FormXml** folder then you need to specify if you want to generate **Main** or **Quick Create** form.

No other parameters needed. Everything is taken from context.

After clicking on this "button" a form is created and added to **Solution.xml**.

### **View**
Right click on **SavedQueries** folder. 

No parameters needed. Everything is taken from context.

After clicking on this "button" a view is created.

### **Script**
Right click on `Apps.*ModuleName*` folder.

No input parameters needed. Everything is taken from context.

Scaffolds **TS folder structure** and creates **Library WebResource** which is added to **Solution.xml**.

### **Localization**
Right click on `Apps.*ModuleName*` folder.

No input parameters needed. Everything is taken from context.

**Localization** folder is scaffolded and **Localization WebResources** for 1029 and 1033 are created.

### **Fluent UI ICon**
Right click on **WebResources** folder.
1. **Provide necessary parameters:**
	- Icon (Selection from list)
	- WebResource Name ("icon" is added to the end of the name so do not write it there.)

Creates WebResource from **FLUENT UI Icon** and adds reference to **Solution.xml**.

### **WebResource from File**
Right click on **WebResources** folder.

Accepts: 
- png
- jpg
- svg
- htm
- html

1. **Provide necessary parameters:**
	- WebResource Name ("icon" is **NOT** added to the end.)
2. **Select file**

Creates WebResource from selected file and adds reference to **Solution.xml**.
