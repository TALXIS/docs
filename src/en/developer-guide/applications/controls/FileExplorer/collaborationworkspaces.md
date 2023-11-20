---
Author: David Wasserbauer
---

# Collaboration Workspaces

The Collaboration Workspace Entities play a crucial role in configuring and fine-tuning the settings of the File Explorer control. File Explorer will not function without them. The entire File Explorer setup is located in the TALXIS Admin App, under the Documents section.

![File Explorer Admin App](/.attachments/applications/Controls/FileExplorer/collabworkspace_talxisadminapp.png)

Let's delve into the key components of these entities.

## Collaboration Workspace Template

![Collaboration Workspace Template Form](/.attachments/applications/Controls/FileExplorer/collabworspace_templateform.png)

This is the place where you set up File Explorer settings. Collaboration Workspace Template records are retrieved from the environment by entity and, if specified, by query as well. The second option is to have a record specified in the control binding. 
The user is prompted to create a new record if no matching record exists.

![No Collaboration Workspace found](/.attachments/applications/Controls/FileExplorer/collabworkspace_notfound.png)

### Record fetching

Collaboration Template records are matched first by entities and, if present, then by queries.

For example, when creating a setup for File Explorer bound to a form of the Account entity, the Entity Name is specified as 'account'. Additionally, because the Internal ID attribute is used in the Liquid path, a simple query is included to ensure that path creation is triggered only when all values in the path are present. This practice is strongly recommended.

![Record Fetching](/.attachments/applications/Controls/FileExplorer/collabworkspace_recordfetching.png)

By using matching records, we can have multiple settings for one bound File Explorer. For example, you can have one SharePoint site for accounts of type 'Internal' and another for the rest. It can also point to the same site but a different location. You can possibly take it to the extreme and have a specific configuration for each address. Your options are limitless in this case! 🤯


### File Explorer Settings

This is where you configure the File Explorer behavior. It's essentially the same configuration as in the File Picker binding. In this case, it has been moved here to allow changes in the target environment. 

Each configuration has an explanation written below it.

![File Explorer Settings](/.attachments/applications/Controls/FileExplorer/collabworkspace_settings.png)

- **Default Opener:** Set the primary way to open documents such as Word, Excel, PowerPoint.
- **File Explorer Mode:** Path/List. Only Path is currently supported.
- **File Explorer Provider:** Sharepoint/Environment File System. Only Sharepoint is currently supported.
- **Root Folder Name:** Use this field if you do not want to display the name of the last folder in the path.
- **Lock on Disable:** If you wish to disable some functionality, such as recording or deleting, on inactive records, select Yes here.
- **Columns to be Shown:** Enter the columns you wish to display here. Separate the individual columns with a comma. Currently available column names: author, datemodified, filesize, version.
- **Event Handlers:** Support for this functionality will be added in future releases.
- **Expand Query:** The query to get data from associated entities. Contact your administrator for setup help.
- **Folder Path:** The path to the destination folder in Sharepoint Online. Separate folders with '/'. Path supports the LIQUID markup language. Contact your administrator for setup help.
- **Graph Filter Query:** A filter used by the File Explorer to correctly find the target site in Sharepoint Online. Contact your administrator for setup help.
- **Form ID:** Enter the main form ID for the file metadata here. Default value is 357117a8-ac48-ee11-be6d-000d3adc1f33.

Ask WAS for help if needed.



## Collaboration Workspace Item

You can locate them in the sitemap, but the optimal approach is to navigate directly from the Collaboration Workspace Template form. In the context of File Explorer, these records serve as templates for scaffolding folder structures. If any records are present when File Explorer is initially initialized with a specific record, they are created as folders.


![Collab Workspace Items Subgrid](/.attachments/applications/Controls/FileExplorer/collabworkspace_itemssubgrid.png)


### Folder Structure Generation

Each record of this entity represents one created folder. 

![Collab Workspace Items Form](/.attachments/applications/Controls/FileExplorer/collabworkspace_itemform.png)

#### Structure

The structure itself is created using the 'Parent Folder' and 'Child Items' attributes. You begin by creating top-level folders, and then you can add the desired number of nested folders.

#### Conditional Creation

You can further adjust the folder structure by using 'Entity Name' and 'Query.' If these are not specified or do not match the current record, the folder does not get created.

#### Folder Name

The folder name is taken from the record name, or you can use the Item Name Template and write Liquid in there. The name is resolved from the data on your record.



## Collaboration Workspace Instance

Records of this entity are created each time someone loads File Explorer on an entity form, and if no matching Collaboration Workspace Instance exists. This approach makes sense for several reasons:
- You can have a static path to a SharePoint Site that remains the same even if someone changes settings in the related Collaboration Workspace Template record.
- Information about finished scaffolding is saved here.

You can view them all in the TALXIS Admin App, and, of course, you can access them from the Collaboration Workspace Template form.


![Collab Workspace Items Form](/.attachments/applications/Controls/FileExplorer/collabworkspace_itemform.png)

There is simple form present in TALXIS Admin app where you can see state of instance:

![Collab Workspace Items Form](/.attachments/applications/Controls/FileExplorer/collabworkspace_instanceform.png)

If something went wrong, you can always delete a record here and force File Explorer to initialize a new one. This is particularly handy for correcting issues with the Collaboration Workspace Template record setup.


## Summary

- You have to have a Collaboration Workspace Template record created and correctly set up for File Explorer to work.
- If you wish to generate a folder structure, you need to create Collaboration Workspace Item records.
- Collaboration Workspace Instance records represent the created folder path for a specific record, and they are generated automatically.
