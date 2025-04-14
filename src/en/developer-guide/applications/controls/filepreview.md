---
Author: Jan Losenicky
---

# File Preview

## Visual Example

![File Preview](/.attachments/applications/Controls/filepreview.png)

## Description

Control gives ability to preview files with following extensions: PDF, EML, PNG, JPG, JPEG, GIF and IMG.

## Binding Field

Can be binded to any field of type Multiple (Multiline Text).

## Inputs
- bindingField
    - Accepts array of objects
    - If Mode = List than you can specify array of files which should be shown in control
    - Example: `[{"id": "00000000-0000-0000-0000-000000000000"}]`
- Provider
    - MicrosoftGraph (default)
    - EnvironmentFileSystem
- Entity Name
    - This property specifies entity name from which data will be fetched for purpose of folder path composition.
    - Example: `account`
- Entity Id
     - This property specifies record id from which data will be fetched for purpose of folder path composition.
    - Example: `00000000-0000-0000-0000-000000000001`
- Folder Path 
    - Path to folder. The path in the target destination, supports [Liquid](https://liquidjs.com/tutorials/setup.html) markup.
- CDS Expand Query 
    - Contains expand query which will provide more data for folder path composition.
    - Example: `primarycontactid`