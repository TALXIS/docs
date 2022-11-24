---
author: David Wasserbauer
---

# TALXIS DevKit
The TALXIS DevKit VS Code extension enhances development of applications in the Power Apps environment.

That is possible by combining [`PAC CLI`](https://learn.microsoft.com/en-us/power-platform/developer/cli/introduction) with custom templates of [`.NET CLI`](https://learn.microsoft.com/en-us/dotnet/core/tools/).

**The tool is capable of:**
- Creating **.csproj projects** with usage of custom [`dotnet new`](https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-new) scaffolders
- **Pushing** single component definition from source code to **selected environment**
- **Pulling** single component definition from **selected environment** to specified location in the source code
- Opening **forms, views, flows, appmodules, sitemaps** in their **editors**
- Opening **selected solution**
- Opening **make.powerapps.com**
- Creating **new solution** in selected environment
- **Downloading and unpacking** selected solution from environment.

Video guide: TBD

## Features:

### **Structure scaffolding**
Structure scaffolding features contributes to default Explorer view of VS Code. 

**The tool can scaffold:**
- **Module** (right click on `src` folder)
- **Package** (right click on `src` folder)
![DevKitModulePackage.png](/.attachments/DevKit/DevKitModulePackage.png)
- **Solution Layers** (App, Configuration, Features, Model) (right click on `Modules.*ModuleName*` folder)
![DevKitSolutions.png](/.attachments/DevKit/DevKitSolutions.png)
- **Entity** (App or Model layer) (right click on `Entities` folder)
![DevKitAddEntity.png](/.attachments/DevKit/DevKitAddEntity.png)
- **Localization** (right click on `solution folder`. Example *Apps.Home* )
- **Script** (right click on `solution folder`. Example *Apps.Home* )
![DevKitWebResources.png](/.attachments/DevKit/DevKitWebResources.png)

### **TALXIS DEVKIT view**
This part of the extension is handling communication with Power Platform environments.
Click on 3 dots in Explorer view and then click on TALXIS DEVKIT to enable it. 

![EnableDevkitTreeView.png](/.attachments/DevKit/EnableDevkitTreeView.png)

Then you need to authorize with Add new Auth button. 

![DevKitTreeViewAuth.png](/.attachments/DevKit/DevKitTreeViewAuth.png)

After that the list of DevBoxes you have right to operate with becomes available. 

Under each DevBox the is list of all unmanaged solutions. If there are none then nothing appears there.

![DevKitTreeView.png](/.attachments/DevKit/DevKitTreeView.png)

**Operations:**
- **TALXIS DEVKIT**
	- **Refresh** (Refresh icon) - Refresh the view
	- **Clear Profiles** (List + X icon) - Delete all Auth profiles from your local storage
- **Environments list**
	- **Create New Solution** (Plus icon) - Promts for WorkItem and then creates solution in the environment
	- **Open Environment** (Globe icon) - Opens environment URL
	- **Open make.powerapps.com** (Phone + Tablet icon) - Opens solutions view of that environment in make.powerapps.com
	- **Select Environment** (Star icon) - Selects environment (Needed for other operations below)
- **Solution list** (child of environment)
	- **Export & Unpack Solution** (Cloud icon) - Downloads the solution and unpacks it in _export folder
	- **Open Solution** (Phone + Tablet icon) - Open solution in make.powerapps.com
	- **Select Solution** (Star icon) - Selects solution (Needed for other operations below)



### **Solution component push/pull**

You have to have selected dataverse solution in **TALXIS DEVKIT view**.
Then by right clicking on solution ccomponent and selecting **Pull from ENV / Push from ENV** in **TALXIS DevKit submenu** the operation is executed.

![DevKitPullPush.png](/.attachments/DevKit/DevKitPullPush.png)

**Supported components:**
- App Module
- Site Map
- Form
- View
- Flow
- Web Resource (except for JS libraries, will be added in next release)


### **Open in PowerApps**

You have to have selected dataverse solution in **TALXIS DEVKIT view**.
Then by right clicking on component and selecting **Open in PowerApps** in **TALXIS DevKit submenu** the component is opened in his editor.

**Supported components:**
- App Module
- Site Map
- Form
- View
- Flow



### **Solution operations**
By right clicking on **.csproj** file and selecting in **TALXIS DevKit submenu** you can perform one of these operations:
- Build Solution
- Import Solution to an environment (Target ENV has to be selected in TALXIS DEVKIT view)

![SolutionBuildImport.png](/.attachments/DevKit/SolutionBuildImport.png)



## Requirements
- **powershell.exe**
- **node.js**
- Opened **workspace** contains **one .sln file**
- Workspace contains **Publisher.xml** file
- **Repo structure:**
	- **src**
		- **Modules**.*ModuleName*
			- **Solutionlayer(s)** (possible layers: Apps.*AppName*, Configuration, Features.*FeatureName*.(Composition|Logic|Presentation), Model)
				- **Declarations**
					- **Other** (required)
						- Customizations.xml
						- Solution.xml
					- Entities/Workflows,.... (Optional)
				- **.csproj** file
		- **Packages**.*PackageName*
			- Content does not matter right now
	- *SolutionName*.sln
	- Publisher.xml

![DevKitTreeView.png](/.attachments/DevKit/DevKitTreeView.png)

- Existing Power Platform Environment with rights to import/export solutions.

### Current status

This is the first version so edge cases and most of exceptions are not properly handled.

I will be glad for each reported bug so I can make the extension better and better.

In case something is not working correctly for you, please open TALXIS DevKit Logs in OUTPUT and send those logs for me (WAS) so I can troubleshoot what happend.

![DevKitLogs.png](/.attachments/DevKit/DevKitLogs.png)