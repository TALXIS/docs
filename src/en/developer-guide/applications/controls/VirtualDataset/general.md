---
Author: Dominik Brych
---
# Virtual Dataset

## Visual Example

<iframe style="border: 0px solid rgba(0, 0, 0, 1);   border-radius: 10px;" width="730" height="600" src="https://embed.figma.com/proto/CIf7LPbQa9gZTMTiH1e07g/NETWORG-Web-UI-Master?page-id=3654%3A12560&node-id=3654-16688&viewport=136%2C185%2C0.19&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3654%3A16688&embed-host=share" allowfullscreen></iframe>

## Description

Virtual Dataset enables binding of a Grid control to a field using custom data sources. The control supports two data providers: Memory and FetchXml. The Memory Provider handles in-memory data collections, while the FetchXml Provider processes data retrieved through FetchXml queries. Both providers support the following dataset features:

- **Sorting**
- **Filtering**
- **Aggregations**
- **Grouping**
- **Paging**
- **Validation**
- **Editing (including linked entities)**
- **Row Selection**
- **Quick Find**

![Attachments Grid Displayed On Form](/.attachments/applications/Controls/VirtualDataset/virtualdataset.png)

## Data Providers

The control supports two data providers: **FetchXml** and **Memory**.

### FetchXml Data Provider

Requires a valid FetchXml string as the data source.

### Memory Data Provider

Requires a stringified JSON array containing key-value pairs where keys represent column names and values represent column data. The data structure follows the OData response format:
- OptionSets use numeric values
- Lookups use GUIDs
- Other data types follow standard OData conventions

To determine the correct value format for a specific data type, reference the structure returned by OData queries for entities containing that data type.

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

#### Lookup Column

Lookup columns in Memory Provider require three properties in the data source:

* **_{lookupColumnName}_value**: GUID identifying the lookup record. This serves as the unique identifier within the dataset and integrates with the Dataset Client API. When users interact with lookup records (e.g., `onDatasetItemOpened` event), this GUID appears in the `entityReference`.

* **_{lookupColumnName}_@Microsoft.Dynamics.CRM.lookuplogicalname**: Logical name corresponding to the record table in Dataverse. This can reference an existing Dataverse table (entity bound) or use an arbitrary string (virtual). Entity-bound lookups enable record searching and value editing. Add the logical name to the `Targets` metadata property for full entity binding. Virtual lookups disable editing functionality.

* **_{lookupColumnName}_value@OData.Community.Display.V1.FormattedValue**: Formatted value displayed to users.

**Example of entity bound Lookup field:**

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

**Example of virtual Lookup field:**
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

File and Image columns in Memory Provider require the following properties in the data source:

| Property                        | Description                                                                 |
|---------------------------------|-----------------------------------------------------------------------------|
| `{fileColumnName}`                | Unique file identifier, can be any GUID.                                    |
| `{fileColumnName.fileName}`       | Name of the file.                                                           |
| `{fileColumnName.filesizeinbytes}`| Size of the file in bytes.                                                  |
| `{fileColumnName.mimetype}`       | Mimetype (opens new window) of the file.                                    |
| `{fileColumnName.fileurl}`       | URL where the file can be downloaded from.                                  |
| `{fileColumnName.thumbnailurl}`   | URL for a thumbnail preview of the image (required for image columns only). |

**Example of a memory provider file and image fields:**

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


## Columns

Column binding defines properties for each column using a stringified JSON array. Each object in the array follows the [PCF Dataset Column interface](https://learn.microsoft.com/en-us/power-apps/developer/component-framework/reference/column) specification.

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

> **_NOTE:_** Columns defined using `setColumns` in the Client API override configurations set in the Columns binding and provider defaults.

### Extensions

The native column interface has been extended with additional properties to provide enhanced functionality.

| Prop Name       | Description                                                                                                                                                                                                                   |
|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `type`        | A column can serve multiple purposes: it may contain data or fulfill other roles, such as displaying a ribbon or notifications. This property specifies whether the control treats the column as a data or action column, adapting its behavior accordingly (e.g., excluding data-specific features like non-editable icons in headers). |
| `alignment`   | Defines the alignment of the column. If not specified, numbers default to right-aligned, while other types default to left-aligned. |
| `isDraggable` | Determines if the user can customize the column's position. |
| `oneClickEdit`| Removes the need to double-click a cell to edit its value. Note: Enabling this on too many columns may reduce performance; use only when the performance decrease is acceptable for your use case. |
| `controls`    | Used to set up [cell customizers](./CellCustomizers/general.md). |
| `autoHeight`  | If specified, the control will try to fit the row height to cell's content. User will also be able to adjust the row height manually. This setting defaults to `true` for columns with multiline datatype. |
| `grouping`    | Tells the provider that it should [group data](#grouping-and-aggregations) by this column. |
| `aggregation` | Tells the provider that it should [aggregate values](#additional-customization) from this column. |
| `metadata`    | Allows you to define or override [Xrm Attribute Metadata](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/reference/attributemetadata?view=dataverse-latest) for a column. |                          |                                                                               |

### Provider-Specific Features

Each provider requires different minimum properties for column display:

- **FetchXml Provider**: `name` (if no `savedqueryid` is present in FetchXml)
- **Memory Provider**: `name`, `displayName`, and [`dataType`](https://learn.microsoft.com/en-us/power-apps/developer/component-framework/manifest-schema-reference/type)

#### Memory Provider

All columns must be explicitly defined in the Column binding. Undefined columns will not appear in the control.

#### FetchXml Provider

FetchXml Provider handles column binding in a slightly different way compared to other providers. When your FetchXml query does not include a `savedqueryid`, it behaves the same as MemoryProvider: any columns not explicitly specified in the Columns binding will be ignored. However, if the FetchXml includes a `savedqueryid`, the control retrieves the associated layoutxml to define the columns automatically.

When you define columns in the Columns binding **and** the FetchXml contains a `savedqueryid`, the details provided in the Columns binding take precedence, **overriding** the corresponding information in the `layoutxml`. Additionally, if you specify a column in the Columns binding that isn’t present in the `layoutxml`, it will be added to the control alongside the columns defined by the layout.



##### Virtual Columns
FetchXml Provider offers support for virtual columns, which are columns that do not exist in Dataverse. Instead, it’s up to the developer to define their behavior and functionality. To designate a column as virtual, set the `isVirtual` prop on it's definition to `true`. This signals the provider that it should skip fetching metadata for that column from Dataverse. Once defined, virtual columns can be manipulated just like regular columns—allowing you to use actions such as `setValue` and `getValue`, apply expressions, and perform other operations as needed.


## Entity Metadata

Entity Metadata binding enables definition or override of [Xrm Entity Metadata](https://learn.microsoft.com/en-us/dotnet/api/microsoft.xrm.sdk.metadata.entitymetadata?view=dataverse-sdk-latest) properties. Common use cases include customizing `DisplayCollectionName` for improved dataset description. The Memory Provider requires the `PrimaryIdAttribute` property. The binding accepts a stringified JSON object following the [Xrm Entity Metadata](https://learn.microsoft.com/en-us/dotnet/api/microsoft.xrm.sdk.metadata.entitymetadata?view=dataverse-sdk-latest) interface.

## Height Configuration

The control height can be configured using multiple approaches. By default, the control displays up to 15 rows with automatic scrollbar activation beyond this limit. This constraint ensures optimal performance as row virtualization requires fixed container heights.

**Page Size Limitation**: Reduces records per page, automatically adjusting control height to fit the specified number of rows (maximum 15). Configure through FetchXml queries or Client API. This is the recommended approach for height management.

**Fixed Height Property**: Sets a specific pixel value for scenarios requiring many visible rows without pagination. Use fixed pixel values (e.g., `500px`). Performance may degrade with excessively large containers.

**Full Tab Expansion**: Utilizes the native "Expand to full tab" feature, stretching the control across the entire tab. Recommended for displaying large datasets. Requires setting the `Height` property to `100%`.

![Control at Full Height](/.attachments/applications/Controls/VirtualDataset/full_height.png)
*Control with Expand to full tab feature on.*

## Saving
The control supports both manual and automatic saving of changes made to editable fields. Manual saving is facilitated through ribbon buttons, while automatic saving can be enabled via the `EnableAutoSave` binding. When auto-save is activated, any modifications to editable fields are saved immediately without user intervention. You can use the `onBeforeRecordSaved` and `onAfterRecordSaved` events in the Client API to implement custom logic before and after the save operation. You can also change saving behavior by using the [`onRecordSave` interceptor](./ClientExtensibility/general.md/#onrecordsave).

In case of **FetchXml Provider**, the control saves changes directly to the Dataverse. For **Memory Provider**, changes are propagated to the data source directly. This means that calling `dataset.getDataSource()` after editing will return the updated data.
## Grouping and Aggregations

Data can be grouped by specific columns with value aggregation for each group using the `grouping` and `aggregation` properties in column definitions.

The `grouping` property requires the `isGrouped` boolean to enable column-based data grouping.

The `aggregation` property requires the `aggregationFunction` parameter. Available functions depend on column type and provider:

`countcolumn`, `count`, `min`, `max`, `sum`, `avg`

> **_NOTE:_** Specifying only `aggregation` without grouping creates a "Total row" at the control bottom with aggregated values for all rows.

Pre-configured grouping and aggregations load automatically. Users can modify these settings through the control interface when enabled via `EnableAggregation` and `EnableGrouping` bindings.

![Grid grouped by two columns](/.attachments/applications/Controls/VirtualDataset/grouping_aggregations.png)
*Grid grouped by two columns with aggregations applied.*


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
*Example of Grouping and Aggregation definitions*

Restrict user customization of column groupings and aggregations using the `SupportedAggregations` and `CanBeGrouped` metadata properties.

> **_NOTE:_** These settings only restrict UI customization. Grouping or aggregation defined in column definitions applies regardless of these restrictions.

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
*Restricting aggregations and groupings for `Amount` column.*

### Limitations

* Date columns support grouping by specific date values only. Grouping by time periods (month, year, etc.) is not currently supported.
* Nested grouping restricts selection to groups that do not contain other grouped records for performance reasons.

## Ribbon

Virtual Dataset includes a built-in ribbon for various actions including grid refresh and change management (save/dismiss). Ribbon buttons support customization through Client API.

![Ribbon](/.attachments/applications/Controls/VirtualDataset/ribbon.png)
*Grid ribbon*

### Inline Ribbon

Display record-contextual buttons within each row by defining a special column named `_talxis_gridRibbonButtons`. You can set any additional properties on this column as you would on a standard one. 

If you are adding your own custom buttons, make sure you include their id in the `InlineRibbonButtonIds` binding. The ids's format should be comma-separated string, eg. `"button1Id,button2Id,button3Id"`.

When properly configured, the control renders ribbon buttons for each row.

```json
{
  "name": "_talxis_gridRibbonButtons",
  "dataType": "SingleLine.Text",
  "visualSizeFactor": 300
}
```
*Inline Ribbon Column Definition*


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
      <td><code>Enum ("Yes" | "No")</code></td>
      <td><code>"Yes"</code></td>
      <td><code>N/A</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>EnablePagination</td>
      <td>Enable or disable pagination in the control.</td>
      <td><code>Enum ("Yes" | "No")</code></td>
      <td><code>"Yes"</code></td>
      <td><code>N/A</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>EnableFiltering</td>
      <td>Enable or disable filtering options in the control.</td>
      <td><code>Enum ("Yes" | "No")</code></td>
      <td><code>"Yes"</code></td>
      <td><code>N/A</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>EnableSorting</td>
      <td>Enable or disable sorting options in the control.</td>
      <td><code>Enum ("Yes" | "No")</code></td>
      <td><code>"Yes"</code></td>
      <td><code>N/A</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>EnableNavigation</td>
      <td>Enable or disable navigation options in the control.</td>
      <td><code>Enum ("Yes" | "No")</code></td>
      <td><code>"Yes"</code></td>
      <td><code>N/A</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>EnableOptionSetColors</td>
      <td>Enable or disable OptionSet colors in the control.</td>
      <td><code>Enum ("Yes" | "No")</code></td>
      <td><code>"No"</code></td>
      <td><code>N/A</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>SelectableRows</td>
      <td>Defines if and how rows can be selected.</td>
      <td><code>Enum ("None" | "Single" | "Multiple")</code></td>
      <td><code>"Single"</code></td>
      <td><code>N/A</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>EnableQuickFind</td>
      <td>Enable or disable the Quick Find feature in the control.</td>
      <td><code>Enum ("Yes" | "No")</code></td>
      <td><code>"No"</code></td>
      <td><code>N/A</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>EnablePageSizeSwitcher</td>
      <td>Whether the user should be allowed to change number of rows per page.</td>
      <td><code>Enum ("Yes" | "No")</code></td>
      <td><code>"Yes"</code></td>
      <td><code>N/A</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>EnableAggregation</td>
      <td>Whether the user should be allowed to set aggregations on columns</td>
      <td><code>Enum ("Yes" | "No")</code></td>
      <td><code>"Yes"</code></td>
      <td><code>N/A</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>EnableGrouping</td>
      <td>Enable or disable grouping functionality in the control.</td>
      <td><code>Enum ("Yes" | "No")</code></td>
      <td><code>"No"</code></td>
      <td><code>N/A</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>EnableGroupedColumnsPinning</td>
      <td>Enable or disable pinning of grouped columns in the control.</td>
      <td><code>Enum ("Yes" | "No")</code></td>
      <td><code>"Yes"</code></td>
      <td><code>N/A</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>EnableCommandBar</td>
      <td>Enable or disable the command bar in the control.</td>
      <td><code>Enum ("Yes" | "No")</code></td>
      <td><code>"Yes"</code></td>
      <td><code>N/A</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>EnableAutoSave</td>
      <td>Enable or disable automatic saving of changes in the control.</td>
      <td><code>Enum ("Yes" | "No")</code></td>
      <td><code>"No"</code></td>
      <td><code>N/A</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>EnableRecordCount</td>
      <td>Enable or disable display of record count in the control.</td>
      <td><code>Enum ("Yes" | "No")</code></td>
      <td><code>"Yes"</code></td>
      <td><code>N/A</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>EnableZebra</td>
      <td>Enable or disable zebra striping (alternating row colors) in the control.</td>
      <td><code>Enum ("Yes" | "No")</code></td>
      <td><code>"Yes"</code></td>
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
      <td><code>Enum ("Nested" | "Flat")</code></td>
      <td><code>"Nested"</code></td>
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


## Additional Customization

The control supports extended customization through **Client API** and **Cell Customizers**:
- [Client API](./ClientExtensibility/general.md)
- [Cell Customizers](./CellCustomizers/general.md)

 > **_NOTE:_** For local development and testing, use [PCF local harness](https://learn.microsoft.com/en-us/power-apps/developer/component-framework/debugging-custom-controls) with the `_mock` variable set to `true`.




