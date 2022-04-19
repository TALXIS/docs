---
title: Email Template
author: Adel Šabić
---

# Introduction

![General Tab](/.attachments/developer-guide/utilities/templates/emails/General.png)
![Designer Tab](/.attachments/developer-guide/utilities/templates/emails/Designer.png)

We have created a templating feature where you can compose email templates with our low code control. You are also able to define template language and under which conditions this email will be composed.

## Where to find email templates

The email templates are located in **TALXIS Admin App -> Look & Feel Area -> Templates** 

![Location](/.attachments/developer-guide/utilities/templates/emails/Location.png)

## Template fields

|**Name**|_Type_|Description|
|---|---|---|
|**Name**|_Text_| Name of the template.|
|**Entity Name**|_Text_| Name of the entity where filter will be applied. |
|**Language Code**|_Text_| Language Code in LCID format. |
|**File**|_File_| HTML file produced by email designer. |
|**Query**|_Text_| FetchXML query produced by query designer. |

::: warning Note 
You need to enter entity name before saving the form for filtering to work correctly !
:::
::: warning Note 
For images in template editor use Base64 format of the picture !
:::

## Getting template from flow
Here is one example of how to get and populate email template.

![Flow](/.attachments/developer-guide/utilities/templates/emails/Flow.png)

1. There is child flow called **taxis_getemailtemplate** which gets **recordId**, **entityName** and **languageCode** _(optional)_. Based on these parameters, template will be returned where sent record _(recordID)_ suits query inside of the template.

2. If you get back template, you will get back templateId and file. File is encoded with Base64 so in order to get file content you will need to decode it to get pure HTML.

3. _(Optional)_ If you have liquid tags in email to populate, you will need to use [email custom connector](/en/developer-guide/integration/components/connector/excelconnector.md) action: **Map to liquid** which gets:

   |**Name**|_Type_|Description|
   |---|---|---|
   |**Entity**|_json_| Entity record that provides data for template. |
   |**Map**|_Text_| Template which will be populated with data |

4. Once everything done, you will have email ready for sending


::: warning Note

_Check [Shopify's docs](https://shopify.github.io/liquid/) to see what is possible to do with tags, but be aware that we are using [DotLiquid](https://github.com/dotliquid/dotliquid/wiki) and it doesn't have all Shopify's features implemented. To counter this, we have added [
DotLiquid.Extras](https://github.com/gimmi/DotLiquid.Extras/tree/master/src/DotLiquid.Extras.Tests) filters, which should substitute missing functionalities._ 

:::