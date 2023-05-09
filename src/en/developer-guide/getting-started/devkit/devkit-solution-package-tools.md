---
author: David Wasserbauer
---

# Solution & Package Tools
The TALXIS DevKit VS Code extension also adds set of commands to work with solution and packages.

## **List of commands:**
- **SOLUTION**
	- **[Build Solution](#build-solution)**
	- **[Import Solution](#import-solution)**
	- **[Import & Publish Solution](#import-publish-solution)**
	
- **DATA PACKAGE**
	- **[Import Data Package](#import-data-package)**
	- **[Export Data Package](#export-data-package)**

### **Build Solution**
:warning: Requires selected **environment** in **TALXIS DevKit TreeView**.

Accessible on right click on ***solutionName*.csproj** file.

Builds solution.

### **Import Solution**
:warning: Requires selected **environment** in **TALXIS DevKit TreeView**.

Accessible on right click on ***solutionName*.csproj** file.

Builds solution and imports it to selected environment as update. (version is not bumped)

### **Import & Publish Solution**
:warning: Requires selected **environment** in **TALXIS DevKit TreeView**.

Accessible on right click on ***solutionName*.csproj** file.

Builds solution, imports it to selected environment as update and publishes changes. (version is not bumped)

### **Import Data Package**
:warning: Requires selected **environment** in **TALXIS DevKit TreeView**.

Accessible on right click on **Default** folder.

Creates ZIP from **data.xml and data_schema.xml** and imports it to the selected environment.

### **Export Data Package**
:warning: Requires selected **environment** in **TALXIS DevKit TreeView**.

Accessible on right click on **Default** folder.

Exports records from selected environment based on **data_schema.xml**.

Data Package is unpacked in **_export/_dataExport** folder.
