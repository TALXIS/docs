---
Author: Dominik Brych
---
# Gallery Grid

Gallery Grid is a dataset PCF that can be directly bound to Subgrid and Homepage grid. It is necessary to follow the correct configuration for the control to work properly.

:::danger IMPORTANT
Control is not compatible with TALXIS Portal solutions as of now!
:::

The control displays records from the grid as cards, showing a preview image, title, subtitle, and description in the header, and columns in the footer. All of these are configurable through control parameters.

![gallery-grid](/.attachments/applications/Controls/GalleryGrid/gallery-grid.png)

## Features

All basic grid features should still work, such as ribbon buttons, search, and Edit Filters.

*Note: Edit Columns cannot be hidden. Users can change these columns, but it will have no effect. You can navigate to the main form by double-clicking a card.*

## Binding Parameters
<span style="color: #e6b800; font-weight: bold;">Note: The columns parameter definition must always include an image attribute!</span>

| Display Name        | Name            | Required | Type            | Description                                                                                                 |
|---------------------|-----------------|----------|-----------------|-------------------------------------------------------------------------------------------------------------|
| Sample Data Set     | sampleDataSet   | Yes      | dataset         | Dataset binding                                                                                             |
| Columns             | columns         | Yes      | Multiple        | JSON array containing the column definitions. **Must include image column!** These columns will be merged with the existing grid columns to ensure they're always present. |
| Title Attribute     | title           | Yes      | Singleline.Text | Logical name of the attribute used for the title.                                                           |
| Subtitle Attribute  | subtitle        | No       | Singleline.Text | Logical name of the attribute used for the subtitle. No subtitle will be shown if left empty.               |
| Description Attribute | description   | No       | Singleline.Text | Logical name of the attribute used for the description. No description will be shown if left empty.         |
| Footer Attributes   | footerAttributes| No       | Singleline.Text | Comma-separated logical names of attributes to be displayed in the footer. No footer will be shown if empty.|

Example of columns definition:
```json
[{ "name": "ntg_photo", "dataType": "Image" },{ "name": "ntg_name", "dataType": "SingleLine.Text" },{ "name": "ntg_categoryid", "dataType": "OptionSet" },{ "name": "ntg_description", "dataType": "Multiple" },{ "name": "ntg_projectid", "dataType": "Lookup.Simple" },{ "name": "ntg_quantityremaining", "dataType": "Decimal" }]
```

Example of binding on an entity:
```xml
  <CustomControlDefaultConfigs>
    <CustomControlDefaultConfig>
      <ControlDescriptionXML>
        <controlDescriptions>
          <controlDescription>
            <customControl id="{E7A81278-8635-4d9e-8D4D-59480B391C5B}">
              <parameters />
            </customControl>
            <customControl name="talxis_TALXIS.GalleryGrid" formFactor="0">
              <parameters>
                <data-set name="sampleDataSet">
                </data-set>
                <columns type="Multiple" static="true">[{ "name": "ntg_photo", "dataType": "Image" },{ "name": "ntg_name", "dataType": "SingleLine.Text" },{ "name": "ntg_categoryid", "dataType": "OptionSet" },{ "name": "ntg_description", "dataType": "Multiple" },{ "name": "ntg_projectid", "dataType": "Lookup.Simple" },{ "name": "ntg_quantityremaining", "dataType": "Decimal" }]</columns>
                <title type="SingleLine.Text" static="true">ntg_name</title>
                <subtitle type="SingleLine.Text" static="true">ntg_categoryid</subtitle>
                <description type="SingleLine.Text" static="true">ntg_description</description>
                <footerAttributes type="SingleLine.Text" static="true">ntg_projectid,ntg_quantityremaining</footerAttributes>
              </parameters>
            </customControl>
            <customControl name="talxis_TALXIS.GalleryGrid" formFactor="1">
              <parameters>
                <data-set name="sampleDataSet">
                </data-set>
                <columns type="Multiple" static="true">[{ "name": "ntg_photo", "dataType": "Image" },{ "name": "ntg_name", "dataType": "SingleLine.Text" },{ "name": "ntg_categoryid", "dataType": "OptionSet" },{ "name": "ntg_description", "dataType": "Multiple" },{ "name": "ntg_projectid", "dataType": "Lookup.Simple" },{ "name": "ntg_quantityremaining", "dataType": "Decimal" }]</columns>
                <title type="SingleLine.Text" static="true">ntg_name</title>
                <subtitle type="SingleLine.Text" static="true">ntg_categoryid</subtitle>
                <description type="SingleLine.Text" static="true">ntg_description</description>
                <footerAttributes type="SingleLine.Text" static="true">ntg_projectid,ntg_quantityremaining</footerAttributes>
              </parameters>
            </customControl>
            <customControl name="talxis_TALXIS.GalleryGrid" formFactor="2">
              <parameters>
                <data-set name="sampleDataSet">
                </data-set>
                <columns type="Multiple" static="true">[{ "name": "ntg_photo", "dataType": "Image" },{ "name": "ntg_name", "dataType": "SingleLine.Text" },{ "name": "ntg_categoryid", "dataType": "OptionSet" },{ "name": "ntg_description", "dataType": "Multiple" },{ "name": "ntg_projectid", "dataType": "Lookup.Simple" },{ "name": "ntg_quantityremaining", "dataType": "Decimal" }]</columns>
                <title type="SingleLine.Text" static="true">ntg_name</title>
                <subtitle type="SingleLine.Text" static="true">ntg_categoryid</subtitle>
                <description type="SingleLine.Text" static="true">ntg_description</description>
                <footerAttributes type="SingleLine.Text" static="true">ntg_projectid,ntg_quantityremaining</footerAttributes>
              </parameters>
            </customControl>
          </controlDescription>
        </controlDescriptions>
      </ControlDescriptionXML>
      <IntroducedVersion>1.0</IntroducedVersion>
    </CustomControlDefaultConfig>
  </CustomControlDefaultConfigs>
```

