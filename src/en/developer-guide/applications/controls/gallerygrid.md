---
Author: Dominik Brych
---
# Gallery Grid

Gallery grid is a dataset PCF which can be directly bound to Subgrid and Homepage grid. There is need follow the right configuration so the control works correctly.

Control <span style="color: red; font-weight: bold;">is not compatible with TALXIS Portal solutions</span> as of now!

Control is displaying the records from grid as a cards with preview of the image, title, subtitle and description in header and columns in footer. All of these are configurable through control parameters.

![gallery-grid](/.attachments/applications/Controls/GalleryGrid/gallery-grid.png)

## Features

All features of basic grid should be still working, such as ribbon buttons, search and Edit Filters. 

*Note: Edit Columns cannot be hidden, user can change these columns but without any effect. You can navigate to main form by double-clicking the card.*

## Binding Parameters
<span style="color: #e6b800; font-weight: bold;">Note: Columns parameter with definitions always need to contain image attribute!</span>

| Display Name | Name | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Sample Data Set | sampleDataSet | Yes | dataset | Dataset binding |
| Columns | columns | Yes | Multiple | JSON array containing the column definitions, **must include image column!** These columns will be merged to existing in grid to be ensured they're always there. |
| Title Attribute | title | Yes | Singleline.Text | Logical name of attribute used for title. |
| Subtitle Attribute | subtitle | No | Singleline.Text | Logical name of attribute used for subtitle. No subtitle in card if empty. |
| Description Attribute | description | No | Singleline.Text | Logical name of attribute used for description. No descrition in card if empty. | 
| Footer Attributes | footerAttributes | No | Singleline.Text | Comma separated attributes logical names to be displayed in footer. No footer if empty. | 

Example of columns definition:
```json
[{ "name": "ntg_photo", "dataType": "Image" },{ "name": "ntg_name", "dataType": "SingleLine.Text" },{ "name": "ntg_categoryid", "dataType": "OptionSet" },{ "name": "ntg_description", "dataType": "Multiple" },{ "name": "ntg_projectid", "dataType": "Lookup.Simple" },{ "name": "ntg_quantityremaining", "dataType": "Decimal" }]
```

Example of binding on entity:
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

