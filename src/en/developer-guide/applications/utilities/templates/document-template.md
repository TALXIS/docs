---
author: Adel Šabić
---

## Introduction

![General Tab](/.attachments/developer-guide/utilities/templates/documents/General.png)

We have created a templating feature where you can save document templates _(docx, xlsx, pptx)_. You are also able to define template language and conditions under which this document will be fetched.

## Where to find email templates

The document templates are located in **TALXIS Admin App -> Look & Feel Area -> Templates** 

![Location](/.attachments/developer-guide/utilities/templates/documents/Location.png)

## Template fields

|**Name**|_Type_|Description|
|---|---|---|
|**Name**|_Text_| Name of the template.|
|**Entity Name**|_Text_| Name of the entity where filter will be applied. |
|**Language Code**|_Text_| Language Code in LCID format. |
|**File**|_File_| HTML file produced by email designer. |
|**Query**|_Text_| FetchXML query produced by query designer. |
|**Template ID (Deprecated)**|_Text_| FetchXML query produced by query designer. |

::: warning Note 
You need to enter entity name before saving the form for filtering to work correctly !
:::

## Making templates
Before using templates you would first need to make them. We prepared documentation on that topic so please visit this pages: 

- For excel templates visit [Fill Excel Reapter Template](./fill-excel-reapter-template.md) and [Fill Excel Template](./fill-excel-template.md)
- For word templates visit [Fill Word Template](./fill-word-template.md)

## Getting template from flow

1. There is child flow named **talxis_getdocumentfigurationidandtemplates** which gets **recordId**, **entityName**. Based on these parameters, template, where sent record _(recordID you sent)_ suits query inside of it, will be returned.

2. If you get back template, you will get templateConfigurationId, fileFromTemplateIdField and fileFromDocumentFileField. fileFromDocumentFileField is encoded with Base64 so in order to get file content you will need to decode it to get pure HTML.

3. _(Optional)_ If you have liquid tags in document to populate, you will need to use custom connector action. Depending on document type, approaches differentiate. 


4. Once everything is done, you will have document ready


::: warning Note

_If you are using liquid tags, check [Shopify's docs](https://shopify.github.io/liquid/) to see what is possible to do with tags, but be aware that we are using [DotLiquid](https://github.com/dotliquid/dotliquid/wiki) and it doesn't have all Shopify's features implemented. To counter this, we have added [
DotLiquid.Extras](https://github.com/gimmi/DotLiquid.Extras/tree/master/src/DotLiquid.Extras.Tests) filters, which should substitute missing functionalities._ 

:::