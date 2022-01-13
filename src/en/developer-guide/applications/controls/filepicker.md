---
Author: Jan Losenicky
---

# File Picker

## Visual Example

![File Picker Displayed On Form](/.attachments/Controls/filepickercontrol.png)

## Description

Control is adding a posibility to upload documents to Sharepoint through form, these documents are displayed on form too. Also you can create Word, Excel or PowerPoint documents through button New.

## Binding Field

Can be binded to any field of type Multiple (Multiline Text).

## Inputs
- Type - Select only single one file or multiple
    - Single
    - Multiple
- Mode
    - Path - Will show all the file in the selected SharePoint. You can delete them or upload new files. Files get stored into the binding field.
    - List - Will not show files in the selected SharePoint. You can only see files from the list in the bound field.
- Provider
    - MicrosoftGraph (default)
    - EnvironmentFileSystem
- Enable Graph Group Create - Specifies pcf is able to create group through graph api.
    - True
    - False
- Enable Graph Group Team Create - Specifies pcf is allowed to create team from group through graph api.
    - Always
    - Never
    - UserSelectable
- Entity Name
    - Example: `account`
- Entity Id
    - Example: `accountid`
- Folder Path 
    - Path to folder. The path in the target destination, supports [Liquid](https://liquidjs.com/tutorials/setup.html) markup.
    - Example: `startsWith(displayName, '{{ primarycontactid.talxis_internalid }}')`
- CDS Expand Query 
    - In case of Graph lookup mode specify the expand query to get to the proper field you need in the GraphFilterQuery.
    - Example: `primarycontactid`
- Graph Filter Query
    - OData Filter Query which can be sent to Microsoft Graph to query `/groups` endpoint uses Liquid to map the expanded fields from above
    - Example: `startsWith(displayName, '{{ primarycontactid.talxis_internalid }}')`
- Root Folder Name
    - Root Folder Name override
- Lock On Disable
    - True (default)
    - False
- Event Handlers
- Columns To Shown
    - Input metadata to be shown
- Default Opener
    - Desktop
    - Online

## Outputs
The control produces a JSON output into the binding field, therefor the component field should be set to a minimum of 100,000 characters.
```json
[
    {
        "id": "01PBBIUL4LZ6VC2JIEOVAZW2V4TT4LKW4C", // Unique ID of the file
        "blobProvider": "SharePointOnline", // Name of the drive provider
        "storageAccount": "talxisdev.sharepoint.com,2C712604-1370-44E7-A1F5-426573FDA80A,2D2244C3-251A-49EA-93A8-39E1C3A060FE", //siteId
        "containerId": "19a7b4a0-ec51-4310-b183-9b2c6d3fa70c", //ID of the sharePoint drive
        "filePath": "/Shared%20Documents/SampleFile.docx", //Local path of the File
        "webUrl": "https://talxisdev.sharepoint.com/sites/FilePicker/Shared%20Documents/SampleFile.docx" //Absolute path to the file accessible for users
    }
]
```

## Event Handlers

A new property on the file picker, "eventHandlers", allows the customizer to add custom logic to events of file picker. 

The events are added as a json array of objects in the following format:

``` ts
interface IHandler {
    stage: StageType,
    functionName: string,
    passContext?: boolean,
    priority?: number,
    parameters?: any[]
} 
```
|Property|Description|
|---|---|
|stage|Tells the handler where it should trigger|
|functionName|Full name of the javascript function to be called|
|passContext|Optional; If true, will pass event context as the first parameter|
|priority|Optional; Can be used to set in which sequence handlers for the same event trigger|
|parameters|Optional; An array of parameters that will be passed to the function|

### Stages

You can register the handler for one of these stages:
``` ts
"PreUpload" | "PostUpload" | "PreDelete" | "PostDelete" | "PreDownload" | "PostDownload";
```

### Context

You can pass a special context to your method. The context is defined as: 

``` ts
class EventContext {
    public id : string;
    public providerType : string;
    public stage : string;

    public attributes : Attributes;

    public preventDefault()
```

The context carries basic information, such as the id of the file, type of the provider (```"EnvironmentFileSystem"``` or ```"MicrosoftGraph"```) and the name of the stage. 

You can also use the attributes to store data and use them later in the pipeline. 

Ex.:
```ts
    context.attributes["internalid"] = "S123";
```

These attributes are shared in the pre and post stages of the same event, for example ```"PreDelete"``` and ```"PostDelete"``` of the same delete action. It is not shared across multiple events.

You can also call ```context.preventDefault()``` to stop the normal execution of the event. With this, you can stop the upload of a file in case a condition has not been met. 

### Important points:
- The handlers now work only for the ```"EnvironmentFileSystem"``` and not for ```"MicrosoftGraph"```, but it shouldn't be difficult to implement in the future. 
- If you want to use your js function, it needs to be loaded. 
In power apps, you need to add your JS library to the definition of the form in the ```<formLibraries>``` tag. In portal, you actually need to have a form event handler for the library to load. For example an onload event that calls an empty function. (Subject to change)

### Example
``` json
[
    {
        "stage": "PreDelete",
        "functionName": "TEST.Environment.Bootstrap.Apps.Common.Main.DisableDefault",
        "priority": 2,
        "passContext": true,
        "parameters": [
            "Delete denied"
        ]
    },
    {
        "stage": "PreDelete",
        "functionName": "console.log",
        "priority": 1,
        "parameters": [
            "Deleting"
        ]
    },
    {
        "stage": "PostDelete",
        "functionName": "console.log",
        "parameters": [
            "Will not be reached"
        ]
    },
    {
        "stage": "PostUpload",
        "functionName": "console.log",
        "parameters": [
            "File uploaded"
        ]
    },
    {
        "stage": "PreDownload",
        "functionName": "alert",
        "parameters": [
            "Loading your file"
        ]
    },
    {
        "stage": "PostDownload",
        "functionName": "console.log",
        "parameters": [
            "File downloaded"
        ]
    }
]
```
