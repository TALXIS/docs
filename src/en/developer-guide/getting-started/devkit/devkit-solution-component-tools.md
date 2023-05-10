---
author: David Wasserbauer
---

# Solution Component Tools

**List of tools:**
- **[Push to Environment](#push-to-environment)**
- **[Pull from Environment](#pull-from-environment)**
- **[Add Nonversioned from ENV](#add-nonversioned-from-env)**
- **[Open in Power Apps](#open-in-power-apps)**
- **[Add Created Components to AppModule (PREVIEW)](#add-created-components-to-appmodule-preview)**
- **[Add Attribute](#add-attribute)**
- **[Remove Flow Metadata](#remove-flow-metadata)**
- **[Add Columns](#add-columns)**
- **[Open View in Environment](#open-view-in-environment)**
- **[Swap GUIDs](#swap-guids)**
- **[Execute FetchXml](#execute-fetchxml)**


### **Push to Environment**
:warning: Requires selected **solution** in **TALXIS DevKit TreeView**

Right click on one of supported components file.

**Supported Components:**
- Entity
- Form
- Dialog
- View
- WebResource
- AppModule
- SiteMap
- Workflow

The solution component's unmanaged definition is pushed to selected solution on selected environment.
:warning: Since the component is pushed through a solution it takes some time.

### **Pull from Environment**
:warning: Requires selected **solution** in **TALXIS DevKit TreeView**

Right click on one of supported components file.

**Supported Components:**
- Form
- Dialog
- View
- WebResource
- AppModule
- SiteMap
- Workflow

The solution component's unmanaged definition is pulled from selected solution and local definition is overriden.

### **Add Nonversioned from ENV**
:warning: Requires selected **solution** in **TALXIS DevKit TreeView**

Right click on one of supported folders.

**Supported Folders:**
- Declarations (Selection from all supported components basically)
- main
- quick
- quickCreate
- card
- SavedQueries
- Workflows
- WebResources
- Dialogs
- localization
- Folder which is in AppModules folder
- Folder which is in AppModuleSiteMaps folder

You will be provided with filtered list of components from selected solution. You can choose which you want to add to local code base. 
All selected components are then added and references in Solution.xml are also updated with newly created components.

After selection of components you are also able to add valid ones to AppModule RootComponents of your choice (if there are more of them).

:warning: Always try to **build** the solution and/or **import** it to an environment. The feature is quite extensive and edge cases may occur.

### **Open in Maker**
:warning: Requires selected **solution** in **TALXIS DevKit TreeView**

Right click on one of supported components file.

**Supported Components:**
- Form
- View
- AppModule
- Workflow

Opens the component in Power Apps maker.

### **Add Components to AppModule (preview)**
:warning: Preview so bugs can occur.

Right click on **AppModule** file.

Adds all newly created solution components which are valid for **RootComponents** element in selected **AppModule**.

:warning: Newly created = component added in current vscode session.


### **Add Attribute**
Right click on **Entity.xml** file.

Creates attribute from provided params.

**Supported types:**
- Text
- Whole Number
- Decimal
- DateTime
- Lookup
- Choice
- Boolean

### **Remove Flow Metadata**
Right click on **Flow**.json file.

Removes all metadata object from flow definition.

### **Add Columns**
:warning: Requires selected **environment** in **TALXIS DevKit TreeView**

Right click on **View** file.

Retrieves all attributes **ValidForGrid** for view's entity from selected environment.
Selected attributes are added to view definition with default **width of 100**.


### **Open View in Environment**
:warning: Requires selected **environment** in **TALXIS DevKit TreeView**

Right click on **View** file.

Open plain view without Model-Driven App context in selected environment.

### **Swap GUIDs**
Right click on **Form** file.

After execution you will be prompted for selecting all **areas** to switch **GUIDs**. 
Selected areas get **GUIDs** replaced and form definition is updated.

### **Execute FetchXml**
:warning: Requires selected **environment** in **TALXIS DevKit TreeView**

Right click on **View** file.

Sends **Fetch request** to selected environment and **renders response** in new tab.