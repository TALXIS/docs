---
title: Excel Connector
tagline: Using Excel Connector in PowerAutomate
author: Adel Šabić
---

# **Excel Connector**

You will find Excel connector in TALXIS.Connectors.Excel.zip solution which you can import to your environment. 
Connector contains two actions:
1. Create Excel From Array
2. Fill Excel Repeater Template
3. Fill Excel Template

## Making connection

There are currently two ways to make connection:
1. You can use an api key. This one is generated for every customer.

2. You use the general document connector. That one is authorized with Azure AD login (your email address)

If for some reason you don't have access to neither of them, please contact NETWORG support.

## Create Excel From Array

### Input
|**Name**|_Type_|Description|
|---|---|---|
|**Property item**|_json_| |

### Output
|**Name**|_Type_|Description|
|---|---|---|
|**Body**|_Text_| Excel document. |

## Fill Excel Repeater Template

This action is used to populate word template with data. For making document template please visit this [Excel Repeater Template page](en\developer-guide\applications\utilities\templates\fill-excel-repeater-template.md)
### Input
|**Name**|_Type_|Description|
|---|---|---|
|**Properties**|_json_| JSON object of data which will populate template. |
|**Document**|_Text_| Excel file in binary format which will be populated with properties |

### Output
|**Name**|_Type_|Description|
|---|---|---|
|**Body**|_Text_| Populated excel document. |

## Fill Excel Template
 
This action is more advance version of previous one. You can read more in [Excel Template page](en\developer-guide\applications\utilities\templates\fill-excel-template.md)
### Input
|**Name**|_Type_|Description|
|---|---|---|
|**Properties**|_json_| JSON object of data which will populate template. |
|**Document**|_Text_| Excel file in binary format which will be populated with properties |

### Output
|**Name**|_Type_|Description|
|---|---|---|
|**Body**|_Text_| Populated excel document. |
