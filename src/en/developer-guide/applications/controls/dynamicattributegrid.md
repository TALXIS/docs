---
Author: Mirza Kobašević
---

# Dynamic Attribute Gird

## Description

The Dynamic Attribute Grid PCF allows users to view and manage attribute values in an editable grid, where each attribute can represent a flexible, user-defined property. These attributes are stored as records in the `talxis_attributevalue` table and can be edited directly within the grid.

The grid displays records of `talxis_attributevalue` entity. User can edit values in `talxis_serialized_value` column where [Dynamic Attribute PCF](/en/developer-guide/applications/controls/dynamicattribute.md) is binded.

Since different [Attribute Definitions](/en/developer-guide/applications/modules/bootstrap/dynamic-attributes/#attribute-definition-talxis-attributedefinition) can require different data types, the control includes hidden columns for each supported data type. These hidden columns are used to correctly store user's input based on the data type associated with the selected Attribute Definition.

### Features
- Presentation of Dynamic Attribute Values
- Adding new Dynamic Attribute Values (using default or custom form/dialog)
- Deleting Dynamic Attribute Values (single or in bulk)
- Editing Dynamic Attribute Values from Grid
- Data validation

### Limitations
- Editing rows
  - Due to limitation of Grid bindings, you can only edit "Value" (`talxis_serializedvalue`) column. All other columns are disabled for editing. 


## Visual Example

![Dynamic Attribute Grid](/.attachments/applications/Controls/DynamicAttributeGrid/dynamicattributegrid.png)

## Bindings

| Binding                  | Type                              | Usage      | Default | Description                                                                  |
|--------------------------|-----------------------------------|------------|---------|------------------------------------------------------------------------------|
| `bindingField`           | `SingleLine.Text`                 | bound      |         | Binding SinglLine.Text Field                                                 |
| `viewId`                 | `SingleLine.Text`                 | input      |         | Attribute Value View Id for Grid                                             |
| `formId`                 | `SingleLine.Text`                 | input      |         | Id for Attribute Value form that should be opened on creation of new Attribute Value record |
| `dialogName`             | `SingleLine.Text`                 | input      |         | Dialog name that should be opened on creation of new Attribute Value record. |
| `Height`                 | `SingleLine.Text`                 | input      |         | Can be used to force the control to always stay at fixed height              |
| `RowHeight`              | `SingleLine.Text`                 | input      |         | Sets a custom height for rows                                                |
| `EnableEditing`          | Enum ("Yes"/"No")                 | input      | No      | Enable or disable editing functionality in the control                       |
| `EnablePagination`       | Enum ("Yes"/"No")                 | input      | Yes     | Enable or disable pagination in the control                                  |
| `EnableFiltering`        | Enum ("Yes"/"No")                 | input      | Yes     | Enable or disable filtering options in the control                           |
| `EnableSorting`          | Enum ("Yes"/"No")                 | input      | Yes     | Enable or disable sorting options in the control                             |
| `EnableNavigation`       | Enum ("Yes"/"No")                 | input      | Yes     | Enable or disable navigation options in the control                          |
| `EnableOptionSetColors`  | Enum ("Yes"/"No")                 | input      | No      | Enable or disable OptionSet options in the control                           |
| `SelectableRows`         | Enum ("None"/"Single"/"Multiple") | input      | Single  | Defines if and how rows can be selected                                      |
| `EnableQuickFind`        | Enum ("Yes"/"No")                 | input      | No      | Enable or disable the Quick Find feature in the control                      |

## Client Extensibility

You can extend the functionalities of the control by accessing it's API through a client script same as  in [Virtual Dataset](/en/developer-guide/applications/controls/VirtualDataset/ClientExtensibility/general.md).

## View Interceptors

To enable showing attribute values related to certain Account/Contact record, you can extend the view that is sent as a `viewId` parameter with an interceptor. The control will recognize the record id of the form it is on, and filter all results by the field specified in the interceptor.

Example of view with the interceptor

```xml
<fetch>
  <entity name="talxis_attributevalue">
    <attribute name="talxis_attributedefinitionid" />
    <attribute name="talxis_serialized_value" />
    <filter>
      <condition attribute="talxis_interceptor_placeholder" operator="ne" value="$DynamicGridInterceptor${&quot;attribute&quot;:&quot;talxis_regardingobjectid&quot;}" />
    </filter>
  </entity>
</fetch>
```