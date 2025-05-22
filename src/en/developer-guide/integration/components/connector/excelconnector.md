---
title: Excel Connector
tagline: Using Excel Connector in PowerAutomate
author: Adel Šabić
---

# **Excel Connector**

You will find Excel connector in TALXIS.Connectors.Excel.zip solution which you can import to your environment. 
Connector contains four actions:
1. Create Excel From Array
2. Fill Excel Repeater Template
3. Fill Excel Template
4. Read Excel Document

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

This action is used to populate word template with data. For making document template please visit this [Excel Repeater Template page](/en/developer-guide/applications/utilities/templates/fill-excel-reapter-template.md)
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
 
This action is more advance version of previous one. You can read more in [Excel Template page](/en/developer-guide/applications/utilities/templates/fill-excel-template.md)
### Input
|**Name**|_Type_|Description|
|---|---|---|
|**Properties**|_json_| JSON object of data which will populate template. |
|**Document**|_Text_| Excel file in binary format which will be populated with properties |

### Output
|**Name**|_Type_|Description|
|---|---|---|
|**Body**|_Text_| Populated excel document. |

## Read Excel Document

This excel is able to read information from the specific cells based on the json input map.

### Input
|**Name**|_Type_|Description|
|---|---|---|
|**Document**|_Text_| Excel file in Base64. |
|**OutputMap**|_Text_| JString with the map of cells that should be read from file |
|**DateTimeBehavior**|_Number_| Same as in powerapps. 1 - UserLocal, 2 - DateOnly, 3 - Time-Zone-Independent (By default Time Zone Independent) |
|**TimeZoneId**|_Text_| For UserLocal behavior it is possible to specify also TimeZoneId which should be used. (e.g. `Europe/Prague`) |

#### OutputMap

Output map is need to be escaped JString object. We are using a liquid tag to get the cell number and cell type.

<details>
<summary>Liquid Tag example</summary>

```
{% excel_lookupvalue sheet:0 cell:D21 type:System.String %}
```

</details>

<details>
<summary>Example of Escaped JString</summary>

```
{  \"talxis_fromdate\": \"{% excel_lookupvalue sheet:0 cell:A2 type:System.DateTime %}\",  \"talxis_name\": \"{% excel_lookupvalue sheet:0 cell:A1 type:System.String %}\",  \"talxis_year\": {% excel_lookupvalue sheet:0 cell:A3 type:System.Double %} }
```

> **_NOTE_**: If you put the unescaped JString in `Compose` action in cloud flow it will automaticly escape it.

> **_NOTE_**: See that the System.Double value is without `""` so its formated as a number in outputs.

</details>


### Output
|**Name**|_Type_|Description|
|---|---|---|
|**Body**|_json_| Json object with read cells. |

<details>
<summary>Example</summary>

```
{
  "talxis_fromdate": "2023-04-14T10:03:12Z",
  "talxis_name": "Hello World",
  "talxis_year": 2023
}
```

</details>

