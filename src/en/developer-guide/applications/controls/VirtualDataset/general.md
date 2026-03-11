---
Author: Dominik Brych
---
# Virtual Dataset

## Overview

Virtual Dataset binds Grid controls to custom data sources through two data providers: **Memory** and **FetchXml**. The Memory Provider uses in-memory data collections, while the FetchXml Provider retrieves data through FetchXml queries.

![Attachments Grid Displayed On Form](/.attachments/applications/Controls/VirtualDataset/virtualdataset.png)

### Supported Features

Both providers support:
- Sorting
- Filtering 
- Aggregations
- Grouping
- Paging
- Validation
- Editing (including linked entities)
- Row Selection
- Quick Find

## Visual Example

<iframe style="border: 0px solid rgba(0, 0, 0, 1);   border-radius: 10px;" width="730" height="600" src="https://embed.figma.com/proto/CIf7LPbQa9gZTMTiH1e07g/NETWORG-Web-UI-Master?page-id=3654%3A12560&node-id=3654-16688&viewport=136%2C185%2C0.19&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3654%3A16688&embed-host=share" allowfullscreen></iframe>

## Data Providers

### FetchXml Provider

Uses FetchXml strings as the data source for retrieving data from Dataverse.

### Memory Provider

Uses stringified JSON arrays containing key-value pairs where keys represent column names and values represent column data. The data structure follows the OData response format:
- OptionSets use numeric values
- Lookups use GUIDs
- Other data types follow standard OData conventions

For correct value formatting, reference OData query responses for entities containing the required data types.

```json
{
   "@odata.context":"https://devbox-1959.crm4.dynamics.com/api/data/v9.1/$metadata#talxis_fields",
   "value":[
      {
         "@odata.etag":"W/\"4363703\"",
         "talxis_file_name":null,
         "_owninguser_value":"e86450b3-5882-ef11-ac20-000d3abee5ab",
         "talxis_clientextensibilitydatasource":null,
         "talxis_singlelinetext":"Text",
         "talxis_clientextensibilitybindingfield":null,
         "talxis_name":"Batch 1",
         "talxis_dateandtime":"1972-01-15T00:00:00Z",
         "_transactioncurrencyid_value":"13292e9f-7881-ef11-ac21-000d3a2b5e17",
         "talxis_clientextensibilitymetadata":null,
         "exchangerate":1,
         "talxis_currency_base":998472,
         "talxis_singlelineemail":"test@test.cz",
         "versionnumber":4363703,
         "talxis_file":null,
         "talxis_singlelineurl":"https://www.seznam.cz",
         "talxis_image":null,
         "talxis_multiple":"Multiple Text",
         "statecode":0,
         "talxis_image_timestamp":null,
         "talxis_wholeduration":710135,
         "talxis_twooptions":true,
         "_createdonbehalfby_value":null,
         "utcconversiontimezonecode":null,
         "statuscode":1,
         "talxis_multiselectoptionsetcolorful":"742070000,742070001",
         "talxis_fetchxmlbindingfield":null,
         "talxis_memorybindingfield":null,
         "talxis_clientextensibilitycolumns":null,
         "talxis_optionsetcolorful":742070000,
         "modifiedon":"2024-10-12T10:34:53Z",
         "talxis_wholenone":991020,
         "talxis_image_url":null,
         "talxis_fetchxmldata":null,
         "_ownerid_value":"e86450b3-5882-ef11-ac20-000d3abee5ab",
         "talxis_fieldid":"6c9e8489-1086-ef11-ac21-6045bd91c897",
         "_owningteam_value":null,
         "_modifiedonbehalfby_value":null,
         "createdon":"2024-10-09T07:31:46Z",
         "talxis_twooptionscolorful":false,
         "talxis_imageid":null,
         "_owningbusinessunit_value":"551c1778-4881-ef11-ac21-000d3a2b5e17",
         "timezoneruleversionnumber":0,
         "talxis_dateandtimetzi":null,
         "talxis_multiselectoptionset":"742070000,742070001",
         "talxis_fetchxmlcolumns":null,
         "_createdby_value":"e86450b3-5882-ef11-ac20-000d3abee5ab",
         "talxis_fetchxmlentitymetadata":null,
         "talxis_singlelinephone":"123456789",
         "talxis_dateonly":"1968-09-02T00:00:00Z",
         "_talxis_parentfield_value":"ac6aa5c8-4086-ef11-ac21-000d3abee5ab",
         "_modifiedby_value":"e86450b3-5882-ef11-ac20-000d3abee5ab",
         "overriddencreatedon":null,
         "importsequencenumber":null,
         "talxis_decimal":2000000,
         "talxis_currency":998472,
         "talxis_memorydata":null,
         "talxis_optionset":742070000,
         "talxis_memorycolumns":null,
         "talxis_memoryentitymetadata":null
      }
   ]
}
```

#### Lookup Columns

Lookup columns in Memory Provider require three properties:

* **_{lookupColumnName}_value**: GUID identifying the lookup record. Used as the unique identifier within the dataset and integrates with the Dataset Client API. For user interactions with lookup records (e.g., `onDatasetItemOpened` event), this GUID appears in the `entityReference`.

* **_{lookupColumnName}_@Microsoft.Dynamics.CRM.lookuplogicalname**: Logical name corresponding to the record table in Dataverse. Can reference an existing Dataverse table (entity bound) or use an arbitrary string (virtual). Entity-bound lookups enable record searching and value editing. Add the logical name to the `Targets` metadata property for full entity binding. Virtual lookups disable editing functionality.

* **_{lookupColumnName}_value@OData.Community.Display.V1.FormattedValue**: Formatted value displayed to users.

**Entity Bound Lookup Example:**

```json
{
   "name":"entityBoundLookup",
   "alias":"entityBoundLookup",
   "dataType":"Lookup.Simple",
   "displayName":"Entity Bound Lookup",
   "order": 0,
   "visualSizeFactor":150,
   "metadata":{
      "IsValidForUpdate": false,
      "Targets":[
         "account"
      ]
   }
}
```
*Column Definition*

```json

[
   {
      "_entityBoundLookup_value":"ca07e627-5e00-4c4d-a7cf-8dcf0dd39437",
      "_entityBoundLookup_@Microsoft.Dynamics.CRM.lookuplogicalname":"account",
      "_entityBoundLookup_value@OData.Community.Display.V1.FormattedValue":"Account 1"
   }
]

```
*Data Source*

**Virtual Lookup Example:**
```json
{
   "name":"virtualLookup",
   "alias":"virtualLookup",
   "dataType":"Lookup.Simple",
   "displayName":"Virtual Lookup",
   "order": 0,
   "visualSizeFactor":150,
   "metadata":{
      "IsValidForUpdate":true,
      "Targets":[
         "virtualEntity"
      ]
   }
}
```
*Column Definition*

```json

[
   {
      "_virtualLookup_value":"f1c75b22-4c25-4019-91e0-2d55df6fed22",
      "_virtualLookup_@Microsoft.Dynamics.CRM.lookuplogicalname":"virtualEntity",
      "_virtualLookup_value@OData.Community.Display.V1.FormattedValue":"Virtual Entity 1"
   }
]

```
*Data Source*

#### File and Image Columns

File and Image columns in Memory Provider require the following properties:

| Property                        | Description                                                                 |
|---------------------------------|-----------------------------------------------------------------------------|
| `{fileColumnName}`                | Unique file identifier, can be any GUID.                                    |
| `{fileColumnName.fileName}`       | Name of the file.                                                           |
| `{fileColumnName.filesizeinbytes}`| Size of the file in bytes.                                                  |
| `{fileColumnName.mimetype}`       | Mimetype (opens new window) of the file.                                    |
| `{fileColumnName.fileurl}`       | URL where the file can be downloaded from.                                  |
| `{fileColumnName.thumbnailurl}`   | URL for a thumbnail preview of the image (required for image columns only). |

**Memory Provider File and Image Example:**

```json
[
   {
      "name":"file",
      "alias":"file",
      "dataType":"File",
      "displayName":"File",
      "order":0,
      "visualSizeFactor":150,
      "metadata":{
         "IsValidForUpdate":true
      }
   },
   {
      "name":"image",
      "alias":"image",
      "dataType":"Image",
      "displayName":"Image",
      "order":0,
      "visualSizeFactor":150,
      "metadata":{
         "IsValidForUpdate":true
      }
   }
]
```
*Column Definitions*

```json

{
   "file":"c3c9ffca-52e1-4c5b-a2ee-8520bec82544",
   "file.filename":"document_report_2025.pdf",
   "file.filesizeinbytes":902119,
   "file.mimetype":"application/pdf",
   "file.fileurl":"https://storage.example.com/files/docs/document_report_2025.pdf",
   "image":"439150e1-1ede-41e0-93bb-4da0b1e5254b",
   "image.filename":"sunset_landscape.jpg",
   "image.filesizeinbytes":902119,
   "image.mimetype":"image/jpeg",
   "image.fileurl":"https://storage.example.com/images/sunset_landscape.jpg",
   "image.thumbnailurl":"https://storage.example.com/images/thumbs/sunset_landscape_thumb.jpg"
}
```

*Data Source*


## Column Configuration

Columns are defined using a stringified JSON array in the Columns binding. Each object follows the [PCF Dataset Column interface](https://learn.microsoft.com/en-us/power-apps/developer/component-framework/reference/column) specification.

```json
[
  {
    "name": "datetime",
    "alias": "datetime",
    "dataType": "DateAndTime.DateAndTime",
    "displayName": "Date Time",
    "order": 0,
    "visualSizeFactor": 300
  },
  {
    "name": "mail",
    "alias": "mail",
    "dataType": "SingleLine.Email",
    "displayName": "Mail",
    "order": 1,
    "visualSizeFactor": 300,
    "metadata": {
      "IsValidForUpdate": true
    }
  },
  {
    "name": "lookup",
    "alias": "lookup",
    "dataType": "Lookup.Simple",
    "displayName": "Lookup",
    "order": 2,
    "visualSizeFactor": 300,
    "metadata": {
      "Targets": ["customLookup"]
    }
  },
  {
    "name": "optionset",
    "alias": "optionset",
    "dataType": "OptionSet",
    "displayName": "OptionSet",
    "order": 3,
    "visualSizeFactor": 300,
    "metadata": {
      "OptionSet": [
        {
          "Color": "red",
          "Label": "Option 1",
          "Value": 1
        },
        {
          "Color": "blue",
          "Label": "Option 2",
          "Value": 2
        }
      ]
    }
  }
]
```

> **Note:** Columns defined using `setColumns` in the Client API override configurations set in the Columns binding and provider defaults.

### Extended Properties

The native column interface includes additional properties:

| Property      | Description                                                                                                                                                                                                                   |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `type`        | Specifies whether the column contains data or serves other purposes (e.g., ribbon or notifications). The control adapts its behavior accordingly (e.g., excluding data-specific features like non-editable icons in headers). |
| `alignment`   | Column alignment. Numbers default to right-aligned, other types default to left-aligned if not specified. |
| `isDraggable` | Allows users to customize the column position. |
| `oneClickEdit`| Enables editing without double-clicking. Note: Enabling on many columns may reduce performance. |
| `controls`    | Used to set up [cell customizers](./CellCustomizers/general.md). |
| `autoHeight`  | Fits row height to cell content and allows manual adjustment. Defaults to `true` for multiline datatype columns. |
| `grouping`    | Configures the provider to [group data](#grouping-and-aggregations) by this column. |
| `aggregation` | Configures the provider to [aggregate values](#grouping-and-aggregations) from this column. |
| `metadata`    | Defines or overrides [Xrm Attribute Metadata](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/reference/attributemetadata?view=dataverse-latest) for a column. |

### Provider-Specific Requirements

#### Memory Provider

All columns must be explicitly defined in the Columns binding. Undefined columns will not appear in the grid. Each column requires at least the `name` and `dataType` properties.

Quick Find columns can be specified via [Entity Metadata](#entity-metadata) binding using the `QuickFindColumns` property. This contains a string array of column names for full text search. Without this property, search operates on the primary column. If no primary column exists, full text search is disabled.

```json
{ "PrimaryIdAttribute": "id", "QuickFindColumns": ["email", "text"] }
```
*Setting quick find on `email` and `text` columns.*

If you wish to use Edit Columns feature with Memory Provider, you must specify all columns that can be added via Edit Columns through the `SavedQueries` prop in  [Entity Metadata](#entity-metadata) binding.

```json
{ "PrimaryIdAttribute": "id", "SavedQueries": [{
  "columns": [{
        "name": "text",
        "alias": "text",
        "dataType": "SingleLine.Text",
        "displayName": "Text",
        "order": 0,
        "visualSizeFactor": 150,
        "isPrimary": true,
        "metadata": {
            "IsValidForUpdate": true
        }
    },
    {
        "name": "multilinetext",
        "alias": "multilinetext",
        "dataType": "Multiple",
        "displayName": "Multiline Text",
        "order": 0,
        "visualSizeFactor": 150,
        "metadata": {
            "IsValidForUpdate": true
        }
    }]
}] }
```
*Setting up Edit Columns with `text` and `multilinetext` columns.*

#### FetchXml Provider

FetchXml Provider handles columns differently than Memory Provider:

- **Without `savedqueryid`**: Behaves like Memory Provider - only explicitly specified columns in Columns binding are displayed (only `name` property is mandatory)
- **With `savedqueryid`**: Automatically retrieves associated layoutxml to define columns

When both Columns binding and `savedqueryid` are present:
- Columns binding details override corresponding layoutxml information
- Additional columns in Columns binding are added alongside layoutxml columns

##### Related (Linked Entity) Columns

When a Dataverse view includes columns from related entities (via `link-entity` in FetchXml), these columns use a **dotted notation** format in the `name` and `alias` properties:

```
{link-entity-alias}.{attribute-name}
```

The `link-entity-alias` corresponds to the `alias` attribute on the `<link-entity>` element in the view's FetchXml. This alias is auto-generated by Dataverse when columns from related entities are added to a view.

For example, given a FetchXml view that links to a related entity:

```xml
<fetch>
  <entity name="pba_mainentity">
    <attribute name="pba_name" />
    <attribute name="pba_projekt" />
    <link-entity name="pba_relatedentity" from="pba_relatedentityid" to="pba_relatedentityid" link-type="outer" alias="a_e1371f3c98fd4fa094ca25fbf67eacb0">
      <attribute name="pba_code" />
    </link-entity>
  </entity>
</fetch>
```

The corresponding Columns binding would reference the related column using the link-entity alias and dotted notation:

```json
[
  {
    "name": "pba_name",
    "alias": "pba_name",
    "dataType": "SingleLine.Text",
    "displayName": "Name",
    "order": 0,
    "visualSizeFactor": 100
  },
  {
    "name": "pba_projekt",
    "alias": "pba_projekt",
    "dataType": "Lookup.Simple",
    "displayName": "Project",
    "order": 1,
    "visualSizeFactor": 100
  },
  {
    "name": "a_e1371f3c98fd4fa094ca25fbf67eacb0.pba_code",
    "alias": "a_e1371f3c98fd4fa094ca25fbf67eacb0.pba_code",
    "dataType": "SingleLine.Text",
    "displayName": "Related Code",
    "order": 2,
    "visualSizeFactor": 100
  }
]
```

> **Tip:** To find the correct alias for a related column, open the view definition (savedquery) in Dataverse and inspect the `<link-entity>` alias in the FetchXml, or check the view's `layoutxml` for the column names — related columns will already use the dotted notation there.

##### Virtual Columns

FetchXml Provider supports virtual columns that do not exist in Dataverse. Set the `isVirtual` property to `true` in the column definition to indicate this to the provider.


## Entity Metadata

Entity Metadata binding defines or overrides [Xrm Entity Metadata](https://learn.microsoft.com/en-us/dotnet/api/microsoft.xrm.sdk.metadata.entitymetadata?view=dataverse-sdk-latest) properties. Memory Provider **requires** the `PrimaryIdAttribute` property. The binding accepts a stringified JSON object following the [Xrm Entity Metadata](https://learn.microsoft.com/en-us/dotnet/api/microsoft.xrm.sdk.metadata.entitymetadata?view=dataverse-sdk-latest) interface.

## Height Configuration

Control height configuration options:

**Default**: Displays up to 15 rows with automatic scrollbar. Row virtualization requires fixed container heights for optimal performance.

**Page Size Limitation**: Reduces records per page and adjusts control height to fit specified rows (maximum 15). Configure through FetchXml queries or Client API. This is the recommended approach.

**Fixed Height Property**: Sets specific pixel values (e.g., `500px`) for scenarios requiring many visible rows without pagination. Performance may degrade with excessively large containers.

**Full Tab Expansion**: Uses the native "Expand to full tab" feature to stretch the control across the entire tab. Set the `Height` property to `100%` for large datasets.

![Control at Full Height](/.attachments/applications/Controls/VirtualDataset/full_height.png)
*Control with "Expand to full tab" feature enabled*

## Saving

The control supports manual and automatic saving. Manual saving uses ribbon buttons, while automatic saving can be enabled via the `EnableAutoSave` binding. With auto-save enabled, editable field modifications save immediately.

Use `onBeforeRecordSaved` and `onAfterRecordSaved` events in the Client API for custom logic. Modify saving behavior with the [`onRecordSave` interceptor](./ClientExtensibility/general.md/#onrecordsave).

**Provider behavior:**
- **FetchXml Provider**: Saves changes directly to Dataverse
- **Memory Provider**: Updates the data source directly (retrievable via `dataset.getDataSource()` after saving)
## Grouping and Aggregations

Group data by specific columns with value aggregation for each group using the `grouping` and `aggregation` properties in column definitions.

The `grouping` property requires the `isGrouped` boolean to enable column-based data grouping.

The `aggregation` property requires the `aggregationFunction` parameter. Available functions depend on column type and provider: `countcolumn`, `count`, `min`, `max`, `sum`, `avg`

> **Note:** Using `aggregation` without grouping creates a "Total row" at the bottom with aggregated values for all rows.

Pre-configured grouping and aggregations load automatically. Users can modify these through the control interface when enabled via `EnableAggregation` and `EnableGrouping` bindings.

![Grid grouped by two columns](/.attachments/applications/Controls/VirtualDataset/grouping_aggregations.png)
*Grid grouped by two columns with aggregations*


```json
{
  "name": "category",
  "alias": "category",
  "dataType": "SingleLine.Text",
  "displayName": "Category",
  "order": 0,
  "visualSizeFactor": 150,
  "grouping": {
    "isGrouped": true
  }
},
{
  "name": "amount",
  "alias": "amount",
  "dataType": "Whole.None",
  "displayName": "Amount",
  "order": 1,
  "visualSizeFactor": 150,
  "aggregation": {
    "aggregationFunction": "sum"
  }
}
```
*Grouping and Aggregation definitions example*

Restrict user customization of column groupings and aggregations using the `SupportedAggregations` and `CanBeGrouped` metadata properties.

> **Note:** These settings only restrict UI customization. Grouping or aggregation defined in column definitions applies regardless of these restrictions.

```json
{
  "name": "amount",
  "alias": "amount",
  "dataType": "Whole.None",
  "displayName": "Amount",
  "order": 0,
  "visualSizeFactor": 150,
  "metadata": {
    "CanBeGrouped": false,
    "SupportedAggregations": ["sum", "avg"]
  }
}
```
*Restricting aggregations and groupings for Amount column*

### Limitations

* Date columns support grouping by specific date values only. Time period grouping (month, year, etc.) is not supported.
* Nested grouping restricts selection to groups without other grouped records for performance reasons.

## Ribbon

The control includes a built-in ribbon for grid refresh and change management (save/dismiss). Customize the ribbon through Client API.

![Ribbon](/.attachments/applications/Controls/VirtualDataset/ribbon.png)
*Grid ribbon*

### Inline Ribbon

Display record-contextual buttons within each row by defining a special column named `_talxis_gridRibbonButtons`.

For custom buttons, include their IDs in the `InlineRibbonButtonIds` binding using comma-separated format: `"button1Id,button2Id,button3Id"`.

When properly configured, the control renders ribbon buttons for each row.

```json
{
  "name": "_talxis_gridRibbonButtons",
  "dataType": "SingleLine.Text",
  "visualSizeFactor": 300
}
```
*Inline Ribbon Column Definition*

The control renders ribbon buttons for each row when properly configured.

![Inline Ribbon](/.attachments/applications/Controls/VirtualDataset/inline_ribbon.png)
*Inline Ribbon*

Inline ribbon buttons affect individual rows, while main ribbon buttons affect the entire dataset.

## Bindings Summary

<table>
  <thead>
    <tr>
      <th>Property Name</th>
      <th>Description</th>
      <th>Of Type</th>
      <th>Input</th>
      <th>Output</th>
      <th>Usage</th>
      <th>Required</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>bindingField</td>
      <td><span style="width: 300px; display: block">Binding Field</span></td>
      <td><code>SingleLine.Text</code></td>
      <td><code>N/A</code></td>
      <td><code>N/A</code></td>
      <td><code>bound</code></td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td>DataProvider</td>
      <td>Data Provider that the control will use to fetch data.</td>
      <td><code>Enum ("Memory" | "FetchXml")</code></td>
      <td><code>"FetchXml"</code></td>
      <td><code>N/A</code></td>
      <td><code>input</code></td>
      <td><code>true</code></td>
    </tr>
     <tr>
      <td>Data</td>
      <td>Data Source depending on the provider (FetchXml for FetchXml Provider, JSON array for Memory Provider).</td>
      <td><code>Multiple</code></td>
      <td><code>"&lt;fetch&gt;&lt;entity name=&quot;account&quot;&gt;&lt;attribute name=&quot;name&quot;/&gt;&lt;/entity&gt;&lt;/fetch&gt;"</code></td>
      <td><code>N/A</code></td>
      <td><code>input</code></td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td>Columns</td>
      <td>JSON array containing the column definitions.</td>
      <td><code>Multiple</code></td>
      <td><code>[{"name": "name", "isHidden": false}]</code></td>
      <td><code>N/A</code></td>
      <td><code>input</code></td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td>EntityMetadata</td>
      <td>Optional property allowing you to override/define Entity Metadata</td>
      <td><code>Multiple</code></td>
      <td><code>{"DisplayCollectionName": "Custom Collection Name"}</code></td>
      <td><code>N/A</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>Height</td>
      <td>Can be used to force the control to always stay at fixed height.</td>
      <td><code>SingleLine.Text</code></td>
      <td><code>500px</code></td>
      <td><code>N/A</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>RowHeight</td>
      <td>Sets a custom height for rows.</td>
      <td><code>Whole.None</code></td>
      <td><code>42</code></td>
      <td><code>N/A</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>EnableEditing</td>
      <td>Enable or disable editing functionality in the control.</td>
      <td><code>Enum ("yes" | "no")</code></td>
      <td><code>"yes"</code></td>
      <td><code>N/A</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>EnableEditColumns</td>
      <td>Enable or disable edit columns functionality in the control.</td>
      <td><code>Enum ("yes" | "no")</code></td>
      <td><code>"yes"</code></td>
      <td><code>N/A</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>EnablePagination</td>
      <td>Enable or disable pagination in the control.</td>
      <td><code>Enum ("yes" | "no")</code></td>
      <td><code>"yes"</code></td>
      <td><code>N/A</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>EnableFiltering</td>
      <td>Enable or disable filtering options in the control.</td>
      <td><code>Enum ("yes" | "no")</code></td>
      <td><code>"yes"</code></td>
      <td><code>N/A</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>EnableSorting</td>
      <td>Enable or disable sorting options in the control.</td>
      <td><code>Enum ("yes" | "no")</code></td>
      <td><code>"yes"</code></td>
      <td><code>N/A</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>EnableNavigation</td>
      <td>Enable or disable navigation options in the control.</td>
      <td><code>Enum ("yes" | "no")</code></td>
      <td><code>"yes"</code></td>
      <td><code>N/A</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>EnableOptionSetColors</td>
      <td>Enable or disable OptionSet colors in the control.</td>
      <td><code>Enum ("yes" | "no")</code></td>
      <td><code>"no"</code></td>
      <td><code>N/A</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>SelectableRows</td>
      <td>Defines if and how rows can be selected.</td>
      <td><code>Enum ("none" | "single" | "multiple")</code></td>
      <td><code>"single"</code></td>
      <td><code>N/A</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>EnableQuickFind</td>
      <td>Enable or disable the Quick Find feature in the control.</td>
      <td><code>Enum ("yes" | "no")</code></td>
      <td><code>"no"</code></td>
      <td><code>N/A</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>EnablePageSizeSwitcher</td>
      <td>Whether the user should be allowed to change number of rows per page.</td>
      <td><code>Enum ("yes" | "no")</code></td>
      <td><code>"yes"</code></td>
      <td><code>N/A</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>EnableAggregation</td>
      <td>Whether the user should be allowed to set aggregations on columns</td>
      <td><code>Enum ("yes" | "no")</code></td>
      <td><code>"yes"</code></td>
      <td><code>N/A</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>EnableGrouping</td>
      <td>Enable or disable grouping functionality in the control.</td>
      <td><code>Enum ("yes" | "no")</code></td>
      <td><code>"no"</code></td>
      <td><code>N/A</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>EnableGroupedColumnsPinning</td>
      <td>Enable or disable pinning of grouped columns in the control.</td>
      <td><code>Enum ("yes" | "no")</code></td>
      <td><code>"yes"</code></td>
      <td><code>N/A</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>EnableCommandBar</td>
      <td>Enable or disable the command bar in the control.</td>
      <td><code>Enum ("yes" | "no")</code></td>
      <td><code>"yes"</code></td>
      <td><code>N/A</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>EnableAutoSave</td>
      <td>Enable or disable automatic saving of changes in the control.</td>
      <td><code>Enum ("yes" | "no")</code></td>
      <td><code>"no"</code></td>
      <td><code>N/A</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>EnableRecordCount</td>
      <td>Enable or disable display of record count in the control.</td>
      <td><code>Enum ("yes" | "no")</code></td>
      <td><code>"yes"</code></td>
      <td><code>N/A</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>EnableZebra</td>
      <td>Enable or disable zebra striping (alternating row colors) in the control.</td>
      <td><code>Enum ("yes" | "no")</code></td>
      <td><code>"yes"</code></td>
      <td><code>N/A</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>InlineRibbonButtonIds</td>
      <td>Comma-separated list of inline ribbon button IDs to display in the control.</td>
      <td><code>SingleLine.Text</code></td>
      <td><code>N/A</code></td>
      <td><code>N/A</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>DefaultExpandedGroupLevel</td>
      <td>Default level of group expansion when grouping is enabled.</td>
      <td><code>Whole.None</code></td>
      <td><code>-1</code></td>
      <td><code>N/A</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>GroupingType</td>
      <td>Defines the type of grouping to use when grouping is enabled.</td>
      <td><code>Enum ("nested" | "flat")</code></td>
      <td><code>"nested"</code></td>
      <td><code>N/A</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>ClientApiWebresourceName</td>
      <td>Name of the webresource containing client API functions for extended functionality.</td>
      <td><code>SingleLine.Text</code></td>
      <td><code>N/A</code></td>
      <td><code>N/A</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>ClientApiFunctionName</td>
      <td>Name of the client API function to call for extended functionality.</td>
      <td><code>SingleLine.Text</code></td>
      <td><code>N/A</code></td>
      <td><code>N/A</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
  
  </tbody>
</table>


## Customization Options

Extended customization is available through:
- [Client API](./ClientExtensibility/general.md)
- [Cell Customizers](./CellCustomizers/general.md)

> **Note:** For local development and testing, use [PCF local harness](https://learn.microsoft.com/en-us/power-apps/developer/component-framework/debugging-custom-controls) with the `_mock` variable set to `true`.




