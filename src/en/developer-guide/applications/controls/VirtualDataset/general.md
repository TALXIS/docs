---
Author: Dominik Brych
---
# Virtual Dataset

Virtual Dataset allows you to bind a Dataset Base Control to a field while providing your own custom Data Source. We currently have two Data Providers - Memory and FetchXml. Memory Provider allows you to work with a collection of data that you have stored in memory and FetchXml Provider allows you to do the same thing with data retrieved through FetchXml. Both of these providers support basic Dataset features, which include:

- **Sorting**
- **Filtering**
- **Paging**
- **Editing**
- **Quick Find**

![Attachments Grid Displayed On Form](/.attachments/applications/Controls/virtualdataset.png)

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

<br />

> **_NOTE:_**  You always need to include the @OData and @Microsoft fields for lookups. You should not do that for any other Data Types (dates, optionsets etc.), we calculate these values on client automatically

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

- FetchXml Provider: `name` and `isHidden`
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
      <td>Entity Metadata</td>
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
  
  </tbody>
</table>

> **_NOTE:_**  You can quickly demo the control locally through [PCF local harness](https://learn.microsoft.com/en-us/power-apps/developer/component-framework/debugging-custom-controls). Just make sure you switch the `_mock` variable `true`.








