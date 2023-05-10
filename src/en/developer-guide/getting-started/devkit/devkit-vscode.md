---
author: David Wasserbauer
---

# TALXIS DevKit
The TALXIS DevKit VS Code extension enhances development of applications in the Power Apps environment.

That is possible by combining [`PAC CLI`](https://learn.microsoft.com/en-us/power-platform/developer/cli/introduction) with custom templates of [`.NET CLI`](https://learn.microsoft.com/en-us/dotnet/core/tools/).

## **List of commands/tools:**
- **SCAFFOLDERS**
	- [TALXIS DevKit: Add Root](/en/developer-guide/getting-started/devkit/devkit-scaffolders/#root)
	- [Add Module](/en/developer-guide/getting-started/devkit/devkit-scaffolders/#module)
	- [Add App Solution](/en/developer-guide/getting-started/devkit/devkit-scaffolders/#solution-layers)
	- [Add Configuration Solution](/en/developer-guide/getting-started/devkit/devkit-scaffolders/#solution-layers)
	- [Add Feature (Presentation/Composition/Logic) Solution](/en/developer-guide/getting-started/devkit/devkit-scaffolders/#solution-layers)
	- [Add Model Solution](/en/developer-guide/getting-started/devkit/devkit-scaffolders/#solution-layers)
	- [Add Package](/en/developer-guide/getting-started/devkit/devkit-scaffolders//#package)
- **SOLUTION COMPONENT GENERATORS**
	- [Add Entity](/en/developer-guide/getting-started/devkit/devkit-solution-component-generators/#entity)
	- [Create New Form](/en/developer-guide/getting-started/devkit/devkit-solution-component-generators/#form)
	- [Create New View](/en/developer-guide/getting-started/devkit/devkit-solution-component-generators/#view)
	- [Add Script](/en/developer-guide/getting-started/devkit/devkit-solution-component-generators/#script)
	- [Add Localization](/en/developer-guide/getting-started/devkit/devkit-solution-component-generators/#localization)
	- [Create Fluent UI Icon](/en/developer-guide/getting-started/devkit/devkit-solution-component-generators/#fluent-ui-icon)
	- [Create WebResource from file](/en/developer-guide/getting-started/devkit/devkit-solution-component-generators/#webresource-from-file)
- **SOLUTION COMPONENT TOOLS**
	- [Push to Environment](/en/developer-guide/getting-started/devkit/devkit-solution-component-tools/#push-to-environment)
	- [Pull from Environment](/en/developer-guide/getting-started/devkit/devkit-solution-component-tools/#pull-from-environment)
	- [Add Nonversioned from ENV](/en/developer-guide/getting-started/devkit/devkit-solution-component-tools/#add-nonversioned-from-env)
	- [Open in Power Apps](/en/developer-guide/getting-started/devkit/devkit-solution-component-tools/#open-in-power-apps)
	- [Add Created Components to AppModule (PREVIEW)](/en/developer-guide/getting-started/devkit/devkit-solution-component-tools/#add-created-components-to-appmodule-preview)
	- [Add Attribute](/en/developer-guide/getting-started/devkit/devkit-solution-component-tools/#add-attribute)
	- [Remove Flow Metadata](/en/developer-guide/getting-started/devkit/devkit-solution-component-tools/#remove-flow-metadata)
	- [Add Columns](/en/developer-guide/getting-started/devkit/devkit-solution-component-tools/#add-columns)
	- [Open View in Environment](/en/developer-guide/getting-started/devkit/devkit-solution-component-tools/#open-view-in-environment)
	- [Swap GUIDs](/en/developer-guide/getting-started/devkit/devkit-solution-component-tools/#swap-guids)
	- [Execute FetchXml](/en/developer-guide/getting-started/devkit/devkit-solution-component-tools/#execute-fetchxml)
- **SOLUTION & PACKAGE TOOLS**
	- [Build Solution](/en/developer-guide/getting-started/devkit/devkit-solution-package-tools/#build-solution)
	- [Import Solution](/en/developer-guide/getting-started/devkit/devkit-solution-package-tools/#import-solution)
	- [Import & Publish Solution](/en/developer-guide/getting-started/devkit/devkit-solution-package-tools/#import-publish-solution)
	- [Import Data Package](/en/developer-guide/getting-started/devkit/devkit-solution-package-tools/#import-data-package)
	- [Export Data Package](/en/developer-guide/getting-started/devkit/devkit-solution-package-tools/#export-data-package)
- **ENVIRONMENT TOOLS**
	- [Refresh](/en/developer-guide/getting-started/devkit/devkit-environment-tools/#refresh)
	- [Add New Auth Profile](/en/developer-guide/getting-started/devkit/devkit-environment-tools/#add-new-auth-profile)
	- [Clear Profiles](/en/developer-guide/getting-started/devkit/devkit-environment-tools/#clear-profiles)
	- [Open Environment](/en/developer-guide/getting-started/devkit/devkit-environment-tools/#open-environment)
	- [Create New Solution](/en/developer-guide/getting-started/devkit/devkit-environment-tools/#create-new-solution)
	- [Open Maker](/en/developer-guide/getting-started/devkit/devkit-environment-tools/#open-maker)
	- [Select Environment](/en/developer-guide/getting-started/devkit/devkit-environment-tools/#select-environment)
	- [Select Solution](/en/developer-guide/getting-started/devkit/devkit-environment-tools/#select-solution)
	- [Export & Unpack Solution](/en/developer-guide/getting-started/devkit/devkit-environment-tools/#export--unpack-solution)
	- [Open dataverse solution](/en/developer-guide/getting-started/devkit/devkit-environment-tools/#open-dataverse-solution)
	- [Claim DevBox](/en/developer-guide/getting-started/devkit/devkit-environment-tools/#claim-devbox)
	- [Extend DevBox](/en/developer-guide/getting-started/devkit/devkit-environment-tools/#extend-devbox)
	- [Delete DevBox](/en/developer-guide/getting-started/devkit/devkit-environment-tools/#delete-devbox)
	- [Add User](/en/developer-guide/getting-started/devkit/devkit-environment-tools/#add-user)
- **OTHER TOOLS**
	- [TALXIS DevKit: Add Environment by ID](/en/developer-guide/getting-started/devkit/devkit-other-tools/#talxis-devkit-add-environment-by-id)
	- [Start Time Tracking](/en/developer-guide/getting-started/devkit/devkit-other-tools/#start-time-tracking)
	- [End Time Tracking](/en/developer-guide/getting-started/devkit/devkit-other-tools/#end-time-tracking)
	- [Generate Entities from Excel](/en/developer-guide/getting-started/devkit/devkit-other-tools/#generate-entities-from-excel)

## **TALXIS DEVKIT view**
This part of the extension is handling communication with Power Platform environments.
Click on 3 dots in Explorer view and then click on TALXIS DEVKIT to enable it. 

![EnableDevkitTreeView.png](/.attachments/DevKit/EnableDevkitTreeView.png)

Then you need to authorize with Add new Auth button. 

![DevKitTreeViewAuth.png](/.attachments/DevKit/DevKitTreeViewAuth.png)

After that the list of DevBoxes you have right to operate with becomes available. 

Under each DevBox the is list of all unmanaged solutions. If there are none then nothing appears there.

![DevKitTreeView.png](/.attachments/DevKit/DevKitTreeView.png)



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

- Existing Power Platform Environment with System Admin role.

## Logs
In case something is not working correctly for you, please open TALXIS DevKit Logs in OUTPUT and send those logs for me (WAS) so I can troubleshoot what happend.

![DevKitLogs.png](/.attachments/DevKit/DevKitLogs.png)