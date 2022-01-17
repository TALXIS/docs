---
Author: Jan Losenický
---

# Dataset Geolocation Viewer

## Visual Example



## Description

Control shows a map with points loaded from fetch xml.

## Binding

This control can be binded to data set (view).

## Inputs

- Data Set - Binding dataset
- Language - It is used in google api
- Api Key - Parameter is here because of Portal. Authorization will not work there so the api key is taken from this parameter if filled
- Fetch Xml - Single line of fetch xml that is used to retrieve records. You can also link entities to get related data
- Latitude Atribute - Name of attribute where the latitude will be stored. Use dot notation for linked entities: talxis_address.talxis_lat
- Longtitude Atribute - Name of attribute where the longitude will be stored. Use dot notation for linked entities: talxis_address.talxis_long
- Address Attribute - Name of attribute where the address will be stored. Use dot notation for linked entities: talxis_address.talxis_fulladdress
- Card Payload - JSON definition of an [adaptive card](https://adaptivecards.io/designer/) template.
- Pin Icons 
    - JArray of pin icon definition. If you want to use just one custom icon, create a JArray with one object where you will specify the url. You can also specify a field name and a value so there would be different icons on one map. Look below on the examples.


### Examples of Pin Icons

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

### Adaptive Card Localization

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