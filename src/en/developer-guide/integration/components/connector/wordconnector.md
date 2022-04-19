---
title: Word Connector
tagline: Using Word Connector in PowerAutomate
author: Adel Šabić
---

# **Word Connector**

You will find word connector in TALXIS.Connectors.Word.zip solution which you can import to your environment. 
Connector contains two actions:
1. Convert Word To PDF
2. Fill Word Template

## Making connection

There are currently two ways to make connection:
1. You can use an api key. This one is generated for every customer.

2. You use the general document connector. That one is authorized with Azure AD login (your email address)

If for some reason you don't have access to neither of them, please contact NETWORG support.

## Convert Word To PDF

This action is used to convert word documents to PDF documents.

### Input
|**Name**|_Type_|Description|
|---|---|---|
|**Document**|_Text_| Word document which will be converted to PDF. |

### Output
|**Name**|_Type_|Description|
|---|---|---|
|**Body**|_Text_| PDF document. |

## Fill Word Template
This action is used to populate word template with data. For making document template please visit this [Word Template page](/en/developer-guide/applications/utilities/templates/fill-word-template.md)
### Input
|**Name**|_Type_|Description|
|---|---|---|
|**Properties**|_json_| JSON object of data which will populate template. |
|**Document**|_Text_| Document which will be populated with properties |

### Output
|**Name**|_Type_|Description|
|---|---|---|
|**Body**|_Text_| Populated document. |
