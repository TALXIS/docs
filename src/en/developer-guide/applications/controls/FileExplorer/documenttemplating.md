---
Author: David Wasserbauer
---

# Templates & Classification

In File Explorer, you can leverage our [Document Templates](./../../utilities/templates/document-template.md) and on top of that you can categorize them using **Document Type** entity.
The result looks for example like this:

![File Explorer Template Selection](/.attachments/applications/Controls/FileExplorer/fileexplorer_templateselection.png)

## Document Type

Document Type settings are once again located in the TALXIS Admin App. They operate hierarchically based on the **Parent** attribute. You can create nested categories with up to 3 levels. 

Records of this entity can also be used for the classification of uploaded and existing documents.

This is what root document type looks like:

![Document Type Form Root](/.attachments/applications/Controls/FileExplorer/documenttype_rootform.png)

To use a Document Type record for document classification, you need to have the tag enabled for file classification set to true. It is recommended to set this at the bottom level, but it can be configured at any level.

This is what a child Document Type meant for file classification looks like:

![Document Type Child Root](/.attachments/applications/Controls/FileExplorer/documenttype_childform.png)

You can see that when 'Enabled for File Classification' is set to true, some additional properties are provided for you to set up. Both 'Allowed Paths' and 'Form ID' are optional.

### Allowed Paths

This parameter specifies in which folder(s) this classification is enabled. If it is not specified then it is not filtered out. 

Split folder names by ';' in case you need to add multiple ones.

For example in screenshot above the value "EXTERNAL;INTERNAL;PARTNER" means that you can use any **Document Template** which has this **Document Type** selected only in folders which names equal to "EXTERNAL", "INTERNAL" or "PARTNER".

This serves one purpose, which is to assist users in creating documents in the correct paths.

### Form ID

This parameter can be used to override the default talxis_file form used for opening file details. Enter the form ID, and it will be rendered when opening the details pane. This can be useful when dealing with a specific type of file that has custom attributes.


## Document Template

Nothing much differs from standard Document Template behavior, but you get some more options to specify here. If you do not have the Document Type attribute on the Document Template record specified, then it is shown directly in the 'From Template' section of File Explorer. If you have it specified, then it gets further filtered and structured, as shown in the example above.

### Record fetching

Document Template records are once again matched using the Entity Name and Query attributes on the record. The record also needs to be published to be displayed. On top of that, you can create a new one directly from File Explorer using the 'New Template' option in the 'From Template' section.


## Summary

- Document Templates needs to be properly setuped and published in order to be used in File Explorer.
- Use Document Type records to further diversify and specify possibilities for users.
- Try to enable File Classification for bottom levels of Document Types.
- If you need help, ask WAS.