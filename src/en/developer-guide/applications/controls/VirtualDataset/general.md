---
Author: Dominik Brych
---
# Virtual Dataset

Virtual Dataset allows you to bind a Dataset Base Control to a field while providing your own custom Data Source. We currently have two Data Providers - Memory and FetchXml. Memory Provider allows you to work with a collection of data that you have stored in memory and FetchXml Provider allows you to do the same thing with data retrieved through FetchXml. Both of these providers support basic Dataset features, which include:

- **Sorting**
- **Filtering**
- **Paging**
- **Validation**
- **Editing (including linked entities)**
- **Quick Find**
- **Cell Customizers**

![Attachments Grid Displayed On Form](/.attachments/applications/Controls/VirtualDataset/virtualdataset.png)

<span style="color: red"><i><b>NOTE: </b></i>Due to a bug in Power Apps maker, this PCF can only be bind manually through Form Xml!</span>

## Data Providers

Static binding allows you to choose between two providers - **FetchXml** and **Memory**. After you select a provider, you need to specify it's Data Source through additional static binding.

### FetchXml Data Provider

FetchXml provider expects a valid FetchXml string as Data Source.

### Memory Data Provider

Memory Data Provider expects a stringified JSON array as input. The array should contain key-value pairs consisting of column name and it's value. This is the exact same structure you would see in a raw OData response. This means OptionSets are represented by a number, lookups have GUIDs and etc. This applies to each data type. If you are not sure what value should be used for a specific Data Type, run an OData query against some entity containing fields of this data type and see what you get back.

<details>
<summary>OData response Example</summary>
<br />

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
</details>

#### Lookup Columns

In order to use Lookups in Memory Provider, your Data Source needs to include these three properties:

* **_{lookupColumnName}_value**:  GUID assigned to the lookup record. It serves as a unique identifier within the Dataset, allowing it to distinguish a specific lookup record. When utilizing the [Dataset Client API](), this GUID integrates into scenarios where a typical Lookup GUID would appear. For instance, when subscribing to the `onDatasetItemOpened` event, if a user clicks on this lookup, the `entityReference` will include this GUID value.

* **\_{lookupColumnName}_@Microsoft.Dynamics.CRM.lookuplogicalname**: Logical name that corresponds to the record table in Dataverse. Within Memory Provider, the logical name can either align with an existing table in Dataverse (entity bound) or be an arbitrary string (virtual). When the Lookup field is entity boud, it gains the ability to search through records, enabling users to edit the Lookup value (assign it a different GUID). You should also add the logical name to the `Targets` metadata prop in the column definition in order for the Lookup to be fully entity bound.  If a random string is used, the editing functionality for the Lookup will be disabled.

* **_{lookupColumnName}_value@OData.Community.Display.V1.FormattedValue**: Refers to the formatted value displayed to the user, representing the result of the Lookup.

<details>
<summary>Example of entity bound Lookup</summary>

```json
{
   "name":"entityBoundLookup",
   "alias":"entityBoundLookup",
   "dataType":"DataTypes.LookupSimple",
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

</details>

<details>
<summary>Example of virtual Lookup</summary>

```json
{
   "name":"virtualLookup",
   "alias":"virtualLookup",
   "dataType":"DataTypes.LookupSimple",
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

</details>



## Columns

Columns binding can be used to specify metadata for each column. It expects a stringified JSON array containing objects of column metadata. This object is based on the [PCF Dataset Column interface](https://learn.microsoft.com/en-us/power-apps/developer/component-framework/reference/column). If you do not specify metadata for a column, it will not be visible in the UI.


<details>
<summary>Example Columns Definition</summary>

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
</details>
<br />

The [PCF Dataset Column interface](https://learn.microsoft.com/en-us/power-apps/developer/component-framework/reference/column) has also been extended with a `metadata` prop. This allows you to define/override [Xrm Attribute Metadata](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/reference/attributemetadata?view=dataverse-latest) for each column. For example, you can see that we are setting Options for OptionSets in our example through `metadata` prop. That way, the provider will know what Label to use if we would request formatted value for that column.

Depending on which provider you choose, a different minimal amount of props is required for the column to show in the UI:

- FetchXml Provider: `name`
- Memory Provider: `name`, `displayName` and [`dataType`](https://learn.microsoft.com/en-us/power-apps/developer/component-framework/manifest-schema-reference/type)

You can also specify virtual columns by ending the column name with `__virtual` suffix. This will let the provider know that it should not try to fetch any metadata for the column and it is up to you to specify them. You can then perform actions (`setValue`, `getValue`) on this column, just like on the classic one.

## Entity Metadata

Entity Metadata binding allows you to define/override any [Xrm Entity Metadata](https://learn.microsoft.com/en-us/dotnet/api/microsoft.xrm.sdk.metadata.entitymetadata?view=dataverse-sdk-latest). For example, you can change the `DisplayCollectionName`, so the UI can better describe your dataset. For Memory Provider, it is **required** to specify the `PrimaryIdAttribute` prop. The binding accepts a stringified JSON object that corresponts to the [Xrm Entity Metadata](https://learn.microsoft.com/en-us/dotnet/api/microsoft.xrm.sdk.metadata.entitymetadata?view=dataverse-sdk-latest) interface.

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
      <td>EnableChangeEditor</td>
      <td>Whether the user can display a list of all their changes.</td>
      <td><code>Enum ("Yes" | "No")</code></td>
      <td><code>"Yes"</code></td>
      <td><code>N/A</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
  
  </tbody>
</table>

> **_NOTE:_**  You can quickly demo the control locally through [PCF local harness](https://learn.microsoft.com/en-us/power-apps/developer/component-framework/debugging-custom-controls). Just make sure you switch the `_mock` variable `true`.








