---
Author: David Wasserbauer
---

# Capabilities - WIP

In File Explorer, you can do many actions which are available in Sharepoint and even some more. Here is the list.

## Actions

Please keep in mind that by the time this documentation is written only Sharepoint as provider and Path Mode is supported. 
If no one extended this documentation, then these action are describing behavior with this setup.

### New

![New](/.attachments/applications/Controls/FileExplorer/fileexplorer_actions_new.png)

This button is located in **Header Command Bar**. More than one action is located under that:

#### Folder

Creates new folder. New folder dialog appears for user to enter folder name. After confirmation the folder is created and list of items is refreshed.

#### New document

Creates new document. You can create new Word, Excel or PowerPoint document. After selecting desired document type the dialog to enter document name appears. After entering the name and confirmation the document is created and it opens in new tab.

#### From template

![New template](/.attachments/applications/Controls/FileExplorer/fileexplorer_actions_template.png)

Two options are hidden under this button: 
- Create new template
  - Opens Document Template form. User can create one and publish it to be able to use it in File Explorer.
- Generate document from template
  - Based on environment setup users can select published matching template and generate a document. More info [here](./documenttemplating.md).

### Upload

Available in Header Command Bar. After triggering the action file selection pops up and you can upload a document from your device. After file selection user is prompted to classify uploaded document but it can be skipped.

![Upload](/.attachments/applications/Controls/FileExplorer/fileexplorer_actions_upload.png)

### Sync to device

Starts synchronizing current folder to local machine via OneDrive.


## REST WILL BE ADDED