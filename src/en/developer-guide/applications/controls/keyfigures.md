---
Auhtor: Jan Losenický
---

# Key Figures

## Visual Example

![Key Figures Visual Example](/.attachments/applications/Controls/keyfigurescontrol.png)

## Description

This control can do sum of fields got from fetchXml, there can be also a button with some action.

## Binding Field

Can be binded to any field of type SingleLine.Txt.

## Inputs
- Data - JSON

# Example input

```json
{ 
  "title":  "Upomínky",
  "queries": [
    {
      "label": "Po splatnosti",
      "fetchXml": "<fetch top=\"50\" ><entity name=\"account\" > <attribute name=\"name\" /> <attribute name=\"accountratingcode\" /> <filter> <condition attribute=\"name\" operator=\"ne\" value=\"test\" /> </filter> </entity></fetch>",
      "sumAttribute": "accountratingcode",
      "critical": true
    },
    {
      "label": "Nevyúčtované",
      "fetchXml": "<fetch top=\"50\" ><entity name=\"account\" > <attribute name=\"name\" /> <attribute name=\"accountratingcode\" /> <filter> <condition attribute=\"name\" operator=\"ne\" value=\"test\" /> </filter> </entity></fetch>",
      "sumAttribute": "accountratingcode"
    }
  ],
  "actionlink": "main.aspx?etn=talxis_salesinvoiceheader&pagetype=entityrecord&id=442a52f5-ae88-eb11-a812-000d3a2c8e49",
  "actionlinkLabel": "Zobrazit všechny faktury"
}
```