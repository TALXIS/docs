---
Author: Mirza Kobašević
---

# Dynamic Attribute

## Description

Allows user to input dynamic values based on a selected [Attribute Definition](/en/developer-guide/applications/modules/bootstrap/dynamic-attributes/#attribute-definition-talxis-attributedefinition). The control interprets metadata from bounded Attribute Definition record, renders the appropriate input control (e.g., text field, date picker, optionset) by leveraging NestedControlRenderer, and stores the user input in a serialized JSON format. User input is also stored in one of the corresponding bindings for that type.

### Features

- Dynamically renders Base control based on bound Attribute Definition record [supported data types](/en/developer-guide/applications/modules/bootstrap/dynamic-attributes/#data-type-optionset-talxis-datatypetypecode)
- Input validation is handled by Attribute Definition record metadata
- Stores the user input in both bindingField and corresponding binding for datatype.

## Visual Example

As Dynamic Attribute PCF is using NestedControlRenderer for fetching appropriate Base Control, this control will look the same as the corresponding base control.

### Example of valid control input

![Valid input in Dynamic Attribute](/.attachments/applications/Controls/DynamicAttribute/valid.png)

### Example of invalid control input

![Invalid input in Dynamic Attribute](/.attachments/applications/Controls/DynamicAttribute/invalid.png)

## Bindings

| Binding                  | Type                         | Usage      | Description                                                             |
|--------------------------|------------------------------|------------|-------------------------------------------------------------------------|
| `bindingField`           | `SingleLine.Text`, `SingleLine.TextArea`, `Multiple`      | **bound** (required)  | [Serialized value](/en/developer-guide/applications/modules/bootstrap/dynamic-attributes/#serialized-value) |
| `attributeDefinition`    | `Lookup.Simple`              | bound      | Attribute Definition lookup                                             |
| `Data`                   | `Multiple`                   | bound      | Static data with prefetched attribute definition object for PCF in Grid |
| `textField`              | `SingleLine.Text`            | bound      | Text Field Output                                                       |
| `integerField`           | `Whole.None`                 | bound      | Integer Field Output                                                    |
| `decimalField`           | `Decimal`                    | bound      | Decimal Field Output                                                    |
| `optionsetField`         | `Lookup.Simple`              | bound      | Optionset Lookup Field Output                                           |
| `booleanField`           | `TwoOptions`                 | bound      | Boolean Field Output                                                    |
| `datetimeUserLocalField` | `DateAndTime.DateAndTime`    | bound      | DateTime User Local Field Output                                        |
| `datetimeTZIField`       | `DateAndTime.DateAndTime`    | bound      | DateTime Time Zone independent Field Output                             |
| `dateField`              | `DateAndTime.DateOnly`       | bound      | Date Field Output                                                       |

### Data binding

By providing Data binding, Dynamic Attribute PCF will work with provided Attribute Definition through static Data binding. This method makes it easier to use this PCF within an editable grid by avoiding numerous API calls to retrieve information about each individual Attribute Definition record.

#### Example of Data binding

```json
{
  "talxis_text_maxcharcount": null,
  "talxis_text_default": null,
  "talxis_decimal_min": null,
  "talxis_name": "Eye Color",
  "talxis_int_min": null,
  "talxis_datetime_userlocal_default": null,
  "talxis_int_max": null,
  "talxis_date_default": null,
  "talxis_decimal_default": null,
  "talxis_int_default": null,
  "talxis_decimal_precision": null,
  "talxis_decimal_max": null,
  "talxis_datatypetypecode": 742070003,
  "talxis_bit_default": null,
  "_talxis_choice_default_value": null,
  "talxis_datetime_tzi_default": null,
  "talxis_attributedefinitionid": "76c21797-9c30-f011-8c4d-000d3a26a0db",
  "talxis_choice_default": null,
  "talxis_talxis_attributedefinition_talxis_attributeoption_attributedefinitionid": [
    {
      "talxis_attributeoptionid": "bc5b6352-2fdb-4688-acba-c648027f5601",
      "talxis_value": 1,
      "talxis_name": "Brown",
      "talxis_talxis_attributeoption_talxis_attributeoptionlabel_attributeoptionid": [
        {
          "_talxis_attributeoptionid_value": "bc5b6352-2fdb-4688-acba-c648027f5601",
          "talxis_name":"Brown",
          "talxis_language": "1033"
        },
        {
          "_talxis_attributeoptionid_value": "bc5b6352-2fdb-4688-acba-c648027f5601",
          "talxis_name":"Hnědá",
          "talxis_language": "1029"
        }
      ]
    },
    {
      "talxis_attributeoptionid": "f711658f-b92f-4140-895e-835f626f8ff8",
      "talxis_value": 2,
      "talxis_name": "Blue",
      "talxis_talxis_attributeoption_talxis_attributeoptionlabel_attributeoptionid": [
        {
          "_talxis_attributeoptionid_value": "f711658f-b92f-4140-895e-835f626f8ff8",
          "talxis_name":"Blue",
          "talxis_language": "1033"
        },
        {
          "_talxis_attributeoptionid_value": "f711658f-b92f-4140-895e-835f626f8ff8",
          "talxis_name":"Modrá",
          "talxis_language": "1029"
        }
      ]
    }
  ]
}
```