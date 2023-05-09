---
author: David Wasserbauer
---
# **Structure scaffolding**
Structure scaffolding features contribute to default **Explorer view of VS Code**. 

## **DevKit can scaffold:**
- **[Root](#root)**
- **[Module](#module)**
- **[Package](#package)**
- **[Solution Layers](#solution-layers)**

### **ROOT**
Available in **Command Palette** (Ctrl + Shift + P) as **TALXIS DevKit: Add Root**.
1. **Select folder where the repository will be created.**
2. **Provide necessary parameters:**
	- Project Code: *PCTXXXXX*
	- Module Name: *(Default: Core)*
	- App Name: *(Default: Home)*
	- Features Name: *(Default: Shared)*
	- Prefix: *ntg/talxis*
	- Select publisher: *NETWORG/TALXIS*
	- Customer Shortcut: *(Default: NTG)*
	- Main Color: *Optional*

After that you will be navigated to newly created repository.

### **MODULE**
Right click on **src** folder.
1. **Provide necessary parameters:**
	- Module Name: *(Example: Sales)*
	- App Name: *(Default: Home)*
	- Features Name: *(Default: Shared)*
	- App Solution Present: *true/false*
	- Configuration Solution Present: *true/false*
	- Features Solutions Present: *true/false*
	- Model Solution Present: *true/false*

After entering all **paramaters** the module will be created.


### **PACKAGE**
Right click on **src** folder.
1. **Provide necessary parameters:**
	- Package Name: *(Example: Sales)*

After entering all paramaters the package will be created.


### **SOLUTION LAYERS**
Right click on `Modules.*ModuleName*` folder.

![DevKitSolutions.png](/.attachments/DevKit/DevKitSolutions.png)

1. Provide necessary parameters:
	- **App**
		- App Name: *(Default: Home)*
	- **Configuration**
		- N/A
	- **Features**
		- Features Name: *(Default: Shared)*
	- **Model**
		- N/A

After entering parameters the solution will be created.
> **Note**
> Currently you have to add project reference to *solution*.sln manually.
