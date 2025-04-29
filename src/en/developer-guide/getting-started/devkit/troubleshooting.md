---
author: David Wasserbauer
---

# TALXIS DevKit Troubleshooting
Since DevKit is still in early stage of development there are lots of places that needs to be finished.
This brings some occasional bugs. 
If something is not working properly, please make sure that:

1. Opened workspace is root 
2. Workspace contains Publisher.xml file
3. Installed [dotnet 9.X](https://dotnet.microsoft.com/en-us/download/dotnet/9.0)
   - Dotnet 8.X is compatible
4. Installed [Power Platform CLI](https://learn.microsoft.com/en-us/power-platform/developer/cli/introduction?tabs=windows#install-microsoft-power-platform-cli)
5. Installed [Node.js and npm](https://nodejs.org/en/download)
6. After typing ```dotnet new --list``` to terminal or CMD there are some templates from **[TALXIS.SDK.CodeTemplates](/en/developer-guide/applications/repo-templates/talxis-templates/)**

Make sure to restart your PC if you just installed any of above required toolings. If all above is working and correct then try these steps one by one. From step two, do step one at the end to refresh VSCODE.

1. **Command Palette a Developer: Reload Window**
	- Open Command Palette (Ctrl + Shift + P) 
	- Search for Developer: Reload Window and select it
2. **Delete TALXIS.SDK.CodeTemplates**
	- Type in terminal ```dotnet new --uninstall TALXIS.SDK.CodeTemplates```
3. **Delete CodeTemplates NuGet package**
	- Navigate to C:\Users\USERNAME\ .templateengine\packages\
	- Delete TALXIS.SDK.CodeTemplates.(version).nupkg
4. **Delete Auth Profiles**
	- Select [Clear Profiles](/en/developer-guide/getting-started/devkit/devkit-environment-tools/#clear-profiles) icon.
	- Alternatively use the command directly in terminal ```pac auth clear```
5. **Add Auth Profile manually**
	- Open terminal in current vscode session
	- Paste this to terminal ```pac auth create```
6. **Delete whole DevKit PAC installation from your machine**
	- Go to Roaming (Windows + R and open %appdata%)
	- Navigate to C:\Users\USERNAME\AppData\Roaming\Code\User\globalStorage
	- Delete networg.talxis-sdk-devkit-vscode folder.
7. **Reinstall DevKit**
	- Uninstall Devkit 
	- Delete all DevKit folders in C:\Users\USERNAME\ .vscode\extensions\networg.talxis-sdk-devkit-vscode-(version)
	- Do all from above
	- Install DevKit
8. **Lemme know (WAS)**
	- If nothing helps please let me know.
