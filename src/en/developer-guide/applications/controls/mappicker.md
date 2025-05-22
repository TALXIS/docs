---
author: Jan Losenicky
---

# Map Picker

## Visual Example

![Displayed Map Picker On Form](/.attachments/applications/Controls/mappickercontrol.png)

## Description

Map Picker is a Power Apps component.

It can function in two modes - **default** or **show records from fetch xml**.

### Known issues
- Populating Adaptive card with related record information
  - [Work-around](#populating-adaptive-card-with-related-record-information)

## Default Mode

It is used to show one marker on map. You can bind the control to various fields representing address parts. Changing the marker or clicking on map will result into outputting address into the fields. It also works the other way where changing latitute or longitude field will update the marker position.

## Show records from fetch xml

This mode is just for showing markers. You will not be able to output address to any of those fields. The pcf retrieves records using fetch xml and entity name and it renders them on the map. You can add custom pin icons and open pin details by clicking on the markers. Pin detail is represented by an adaptive card.

The pcf first tries to show marker location using latitude and longitude attributes. When it is null, it will look on address attribute value and tries to retrieve results from map api. If there is any, it will show the first one.

## Binding Field

Control can be binded to any field of type SingleLine.Text.

## Inputs
General
- Contry Code
    - Contry code ISO 31
- Language
- Is Set Mark By Click Disabled
    - True
    - False
- Api Key - Parameter is here because of Portal. Authorization will not work there so the api key is taken from this parameter if filled.

Default Map Picker
- Address Components JSON - hold all the address components in one JSON.
- Full Address
- Country
- Administrative Area
- Locality
- Sublocality
- Street
- Street Name
- Street Number
- Postal Code
- Latitude
- Longitude

Retrieve markers from fetch xml
- Fetch XML - Singe line of fetch xml that is used to retrieve records. You can also link entities to get related data.
- Entity Name - Name of entity to be retrieved.
- Latitude Attribute - Name of attribute where the latitude will be stored. Use dot notation for linked entities: **talxis_address.talxis_lat**.
- Longitude Attribute - Name of attribute where the longitude will be stored. Use dot notation for linked entities: **talxis_address.talxis_long**.
- Address Attribute - Name of attribute where the address will be stored. Use dot notation for linked entities: **talxis_address.talxis_fulladdress**.
- Card Payload - JSON definition of an [adaptive card](https://adaptivecards.io/designer/) template.

   > **_NOTE:_** There is a limitation in showing numbers in TextBlock components by the time of writing this. Example: You want to populate the template with data - "text": "{number}", number value is of type number. It will not be shown in the TextBox. You can get around this limitation by passing a space into the string - "text": "{number} ". [Stackoverflow: Display number in adaptive card](https://stackoverflow.com/questions/59662677/display-number-in-adaptive-card)

- Pin Icons - JArray of pin icon definition. If you want to use just one custom icon, create a JArray with one object where you will specify the url. You can also specify a field name and a value so there would be different icons on one map. Look below on the examples.

   > **One custom icon**
   >
   > ```json
   > [
   >   {
   >     "url": "https://somewebsite.com/record"
   >   }
   > ]
   > ```
   >
   > **Different custom icons**
   >
   > ```json
   > [
   >   {
   >     "url": "https://somewebsite.com/activerecord",
   >     "attributeName": "statecode",
   >     "value": 0
   >   },
   >   {
   >     "url": "https://somewebsite.com/inactiverecord",
   >     "attributeName": "statecode",
   >     "value": 1
   >   }
   > ]
   > ```

## Adaptive Card Localization

You can localize the adaptive card using .resx files. Thanks to them you can fully localize the text that is not comming from record attributes. Those .resx files needs to be loaded by using dependencies on the form where you will have this pcf.
Example: I have an account form in TALXIS Sales, so I crete those .resx files as webresources in TALXIS Sales App solution. I need to make sure to add a script on load of the form and it has to have dependencies on those .resx files to load them.
Placeholder for a localized string looks like this: **{ $Resources(<webresources_logicalname>):<key> }**. You can read more about it here: [GetLocalizedString](https://docs.talxis.com/en/developer-guide/applications/utilities/uci-extensions/#getlocalizedstring).
A text block in a template to display name of account will look like this:

```json
{
  "type": "TextBlock",
  "wrap": true,
  "text": "{$Resources(localization/talxis_salesappsdefault):pinDetail.name }: ${$root.name}"
}
```

## Populating Adaptive card with related record information
If you find your self in situation that you want to populate adaptive card with information from related table, you will need to give unique aliases to the related table attributes like for example:

```xml
<fetch>
  <entity name="talxis_opportunityheader">
    <attribute name="talxis_opportunityheaderid" />
    <attribute name="talxis_name" />
    <link-entity name="talxis_address" from="talxis_addressid" to="ntg_addressid" alias="ntg_addressid">
      <attribute name="talxis_lat" />
      <attribute name="talxis_long" />
      <attribute name="talxis_name" alias="ntg_address_name" />
    </link-entity>
    <link-entity name="contact" from="contactid" to="talxis_primarycontactid" link-type="outer" alias="contact">
      <attribute name="fullname" alias="ntg_contact_fullname" />
      <attribute name="emailaddress1" alias="ntg_contact_email" />
      <attribute name="mobilephone" alias="ntg_contact_mobilephone" />
      <attribute name="company" alias="ntg_contact_companyphone" />
    </link-entity>
  </entity>
</fetch>
```

You should reference these aliases in your adaptive card payload like for example:
```json
{
  "type": "TextBlock",
  "text": "${ntg_address_name}",
  "wrap": true
}
```
### Reasoning

If you do not assign alises to related table attributes, API response will look something like this: 

```json
{
    "@odata.etag": "W/\"5199239\"",
    "talxis_opportunityheaderid": "00000000-0000-0000-0000-000000000000",
    "talxis_name": "Dummy Opportunity",
    "ntg_addressid.talxis_lat@OData.Community.Display.V1.AttributeName": "talxis_lat",
    "ntg_addressid.talxis_lat": 0.00000000,
    "ntg_addressid.talxis_long@OData.Community.Display.V1.AttributeName": "talxis_long",
    "ntg_addressid.talxis_long": 0.0000000,
    "ntg_addressid.talxis_name@OData.Community.Display.V1.AttributeName": "talxis_name",
    "ntg_addressid.talxis_name": "Sokolovska 352/215",
    "ntg_addressid.talxis_lat_label": "0.00000000",
    "ntg_addressid.talxis_long_label": "0.00000000"
}
```

If adaptive card payload is expecting `ntg_addressid.talxis_name`, control would not assign `ntg_addressid.talxis_name` from API response. Populating adaptive card is done by [third-party solution](https://www.npmjs.com/package/adaptivecards-templating), therefore it requires dedicated research to find exact reason why is this issue happening.