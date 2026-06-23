---
Author: David Wasserbauer
---

# File Explorer

## Visual example

<iframe style="border: 0px solid rgba(0, 0, 0, 1);   border-radius: 10px;" width="730" height="600" src="https://embed.figma.com/proto/CIf7LPbQa9gZTMTiH1e07g/NETWORG-Web-UI-Master?page-id=1848%3A5268&node-id=1849-9248&viewport=-499%2C519%2C0.33&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1849%3A9248&embed-host=share" allowfullscreen></iframe>

## Description

Welcome to the documentation for our cutting-edge File Explorer control! 

The File Explorer control is built on the foundations of the File Picker control. This means that you can find similar functionality, but it is essentially a much more powerful version of the File Picker.

## How to setup

### Binding Field
Control can be binded to any field of type Multiple (Multiline Text).

Example:

```xml
<controlDescription forControl="{af3dd624-3a7a-4a4a-bde6-68348df49a86}">
  <customControl id="{E0DECE4B-6FC8-4A8F-A065-082708572369}">
    <parameters>
      <datafieldname>talxis_filecontrol</datafieldname>
    </parameters>
  </customControl>
  <customControl formFactor="0" name="talxis_TALXIS.PCF.FileExplorer">
    <parameters>
      <bindingField type="Multiple">talxis_filecontrol</bindingField>
    </parameters>
  </customControl>
  <customControl formFactor="1" name="talxis_TALXIS.PCF.FileExplorer">
    <parameters>
      <bindingField type="Multiple">talxis_filecontrol</bindingField>
    </parameters>
  </customControl>
  <customControl formFactor="2" name="talxis_TALXIS.PCF.FileExplorer">
    <parameters>
      <bindingField type="Multiple">talxis_filecontrol</bindingField>
    </parameters>
  </customControl>
</controlDescription>
```

If you are accustomed to the File Picker setup, you might be surprised by the absence of certain parameters. They are not missing; rather, they have been relocated to the configuration record.

An existing Collaboration Workspace Template record is necessary for File Explorer to function correctly.

Check [Collaboration Workspaces](./collaborationworkspaces.md) for more info.

### Authentication
If you are planning to use Microsoft Graph as a file source, you will need to provide consent for a few application registrations in order for this control to work. The whole authentication process is described [here](/en/developer-guide/applications/controls/GeneralInformation/authentication/);

## General Overview

![File Explorer Structure](/.attachments/applications/Controls/FileExplorer/fileexplorer_overview.png)

If we simplify the control then we have these general parts:
- Header Command Bar
- Breadcrumb
- File Area
- Item Command Bar (part of File Area)
- Details Panel

### Header Command Bar

This is a place for buttons which execute some actions.
Those actions are done on **selected items**.

By default when nothing is selected or you have only one item selected it looks like this:

![Default Header Command Bar](/.attachments/applications/Controls/FileExplorer/fileexplorer_headercommandbar_default.png)

You can use these actions:
- New
- Upload
- Sync to device

If you have more than one item selected, the Item Command Bar next to the item name disappears, and buttons for supported actions appear in the Header Command Bar.
It looks like this:

![Multiple Selection Header Command Bar](/.attachments/applications/Controls/FileExplorer/fileexplorer_headercommandbar_multiple.png)

You can use these actions:
- New
- Upload
- Download
- Delete
- Move To
- Copy To
- ZIP Archive
- Sync to device

### Breadcrumb

This component is essentially a navigation property. By default, only the root folder's name is displayed (or the overridden name if applicable). If you navigate to a specific folder, you can return to the previous level by clicking on the corresponding folder in the breadcrumb path.

![Breadcrumb](/.attachments/applications/Controls/FileExplorer/fileexplorer_breadcrumb.png)

So for example in the screenshot above by clicking on "Contracts" you will go back to Contracts folder.

### File Area

The general appearance is similar to the File Picker control. You can select items, and by using Drag & Drop, you can upload new files. In addition to the existing features in the File Picker control, a new column is available to display the **Version**.

File names are **clickable** — a single click on a file name opens the file using the configured _Default Opener_. This is equivalent to using the _Open_ action from the Item Command Bar.

#### Version

The value is retrieved from SharePoint. Each time it is updated, the change is propagated to the connected talxis_file record where metadata is stored.

### Item Command Bar

Most of the command-related actions are executed through buttons. These buttons are filtered based on compatibility with the type of item. For example, folders have fewer options, such as Downloading as PDF, Printing, and Versioning.

![Item Command Bar](/.attachments/applications/Controls/FileExplorer/fileexplorer_itemheaderbar.png)

This is the full list on actions available there:
- Open
  - Document Preview
  - Desktop application
  - Web Editor
  - Sharepoint Folder
- Sharing
  - Copy link
  - Add people and send
- Delete
- Rename
- Move To
- Copy To
- Download
  - File as is
  - PDF
- Convert
  - PDF
  - ZIP archive
- Print
- Versioning
  - Check Out/In
  - Show history


### Details Panel

This is the area where you can view file metadata. By clicking on the "Info" icon in the upper right corner with the item selected, a panel will appear.

![Details Panel](/.attachments/applications/Controls/FileExplorer/fileexplorer_detailspanel.png)

In this example the default talxis_file form is used. You can change this default form in [Collaboration Workspace Template](./collaborationworkspaces.md).

### What now?

Learn how to properly setup File Explorer via [Collaboration Workspace Template](./collaborationworkspaces.md).

Browse through [capabilities](./actions.md) of this control **(WIP)**.

Check [Document Templating](./documenttemplating.md) to learn how to generate files from the File Explorer.

## Standalone Page

File Explorer can be used as a full-page standalone control (not embedded on a record form) by navigating to a page with `pagetype=control`. This is useful for deep-linking directly into a specific folder context from another part of the application.

The control parameters are passed as a **JSON-encoded `data` query parameter**:

| Parameter                  | Description                                                                                                                                                  |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `recordId`                 | GUID of the record to use as the source context (equivalent to the form's record ID). Required.                                                              |
| `entityLogicalName`        | Logical name of the entity the record belongs to (e.g. `account`). Required.                                                                                |
| `collaborationWorkspaceId` | GUID of the _Collaboration Workspace Template_ record to use. If omitted, the control resolves a matching template automatically (same logic as on a form). |
| `formId`                   | Optional. When provided, enables a **Download Reference Document** button in the template creation dialog. The value is a `systemform` record ID passed to the document generation service to produce a Word tag-reference document for template authors. Only needed when setting up document templates for this entity. |

Additionally, `cmdbar=true&navbar=on` must be set. The authentication broker JavaScript is loaded via the ribbon, so disabling the command bar will break authentication.

Example URL:
```
https://<org>.crm4.dynamics.com/main.aspx?pagetype=control&controlName=talxis_TALXIS.PCF.FileExplorer&cmdbar=true&navbar=on&forceUCI=1&data={"collaborationWorkspaceId":"<guid>","entityLogicalName":"account","recordId":"<guid>"}
```

::: tip
When constructing this URL programmatically (e.g. in a sitemap or JavaScript), URL-encode the `data` value. Browsers encode it automatically when the URL is pasted into the address bar.
:::

