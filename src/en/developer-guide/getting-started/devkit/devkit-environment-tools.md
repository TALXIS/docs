---
author: David Wasserbauer
---

# Environment Tools
The TALXIS DevKit VS Code extension contributes with new element to default Explorer tab.
This allows users to interact with environments from our mission-control using PAC CLI.

## **List of commands:**
- **PAC CLI**
	- **TOP LEVEL**
		- **[Refresh](#refresh)**
		- **[Add New Auth Profile](#add-new-auth-profile)**
		- **[Clear Profiles](#clear-profiles)**
	- **ENVIRONMENT LEVEL**
		- **[Open Environment](#open-environment)**
		- **[Create New Solution](#create-new-solution)**
		- **[Open Maker](#open-maker)**
		- **[Select Environment](#select-environment)**
	- **SOLUTION LEVEL**
		- **[Select Solution](#select-solution)**
		- **[Export & Unpack Solution](#export--unpack-solution)**
		- **[Open dataverse solution](#open-dataverse-solution)**
- **Mission Control**
	- **TOP LEVEL**
		- **[Claim DevBox](#claim-devbox)**
	- **ENVIRONMENT LEVEL**
		- **[Extend DevBox](#extend-devbox)**
		- **[Delete DevBox](#delete-devbox)**
		- **[Add User](#add-user)**

![DevKitTreeViewSections.png](/.attachments/DevKit/DevKitTreeViewSections.png)

### **Refresh**
Accessible on **TOP LEVEL**.
Refreshes list of environments.

### **Add New Auth Profile**
Accessible on **TOP LEVEL**.

Removes all saved **Auth Profiles** and creates a **new** one.

### **Clear Profiles**
Accessible on **TOP LEVEL**.

Removes all saved Auth Profiles.

### **Open Environment**
Accessible on **ENVIRONMENT LEVEL** after right click on target environment. 

Opens environment.

### **Create New Solution**
Accessible on **ENVIRONMENT LEVEL** next to environment name after hover.

New unmanaged solution is created on target environment after entering **WorkItem** code.

### **Open Maker**
Accessible on **ENVIRONMENT LEVEL** next to environment name after hover.

Opens **make.powerapps.com** with focus on solutions.

### **Select Environment**
:warning: Prerequisity for some environment related commands.

Accessible on **ENVIRONMENT LEVEL** next to environment name after hover.

Represented by **empty STAR Icon**.

> **Note**
> You will be prompted to authenticate if it is the first interaction with that environment.

### **Select Solution**
:warning: Prerequisity for some environment related commands.

Accessible on **SOLUTION LEVEL** next to solution name after hover.

Represented by **empty STAR Icon**.

> **Note**
> You will be prompted to authenticate if it is the first interaction with that environment.


### **Export & Unpack Solution**
Accessible on **SOLUTION LEVEL** next to solution name after hover.

Exports and unpacks solution in **_export** folder in your local project repository.


### **Open dataverse solution**
Accessible on **SOLUTION LEVEL** next to solution name after hover.

Opens the unmanaged solution in **make.powerapps.com**.

### **Claim DevBox**
Represented by **+** Icon in the **TOP LEVEL** section.

User is prompted to provide 3 parameters after executing command:
1. **Project Code**
	Select one from list of projects.
2. **Lifespan**
	Enter lifespan: 1 day/ 1 week / 2 weeks / 1 month
3. **Description**
	Optional, just hit enter if you do not need it.

This action will take approximately 2 minutes. You can work with vscode and DevKit in a meantime. For example building solutions or creating entities. Basically every other command.
After acquiring a DevBox you will get notification in **VSCODE**, in **Teams** and also your DevKit TreeView will be automatically refreshed.

> **Note**
> PAC Auth Profile needs to be present to claim a DevBox. If there is something not working with it try ```pac auth create``` in terminal of current VSCODE session.

### **Extend DevBox**
Accessible on **ENVIRONMENT LEVEL** after right click on target environment. 

You can **extend** your DevBox **twice** with **max 10 days** per extension.

After executing you will be prompted with dialog to enter number of days and after entering value you will get a notification about result.

### **Delete DevBox**
Accessible on **ENVIRONMENT LEVEL** after right click on desired environment. 

:warning: **This is the only way to delete a DevBox before expiration**. Please use this feature.

Since this is not something you need to wait for there is no loading or processing notification box.
You will get notification once the DevBox will be deleted.

This action is currently irreversible. The environment can be recovered but you will not be able to use it in DevKit.

### **Add User**
Accessible on **ENVIRONMENT LEVEL** after right click on desired environment. 

:warning: **This is the only way to correctly share your DevBox with other users**. Please use this feature.

You will be prompted to add **UPN** (email address) of user. After that the process will begin and you will be notified in the end. 
Other user will be able to access the DevBox once they will refresh their DevKit using Refresh Button.