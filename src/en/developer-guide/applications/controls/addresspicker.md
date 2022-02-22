---
Author: Jan Losenicky
---

# Address Picker

## Visual Example

![Address Picker Displayed On Form](/.attachments/Controls/addresspickercontrol.png)

## Description

This control is used to pick an address. When address is picked, bounded properities are filled.

## Binding Field

Control can be binded to any filed of type SingleLine.Text.

## Inputs

- Standalone - Is control used standalone?
    - true
    - false
- Language
    - user-default
    - en
- Manual Input - Can person enter value via write-in?
    - true (default)
    - false
- Type - Type of field
    - Street
    - Locality
    - Country
    - Full Address

Bounded Properties
- Address Components JSON - JSON of address components which will be compared with actual field values on form save (SingleLine.Text)
- Full Address - Field where to display full address (SingleLine.Text)
- Country - Field where to display country (SingleLine.Text)
- Administrative Area - Field where to display administrative area (SingleLine.Text)
- Locality - Field where to display locality (SingleLine.Text)
- Sublocality - Field where to display sublocality (SingleLine.Text)
- Street - Field where to display street (SingleLine.Text)
- Street Number - Field where to display street number (SingleLine.Text)
- Street Name - Field where to display street name (SingleLine.Text)
- Postal Code - Field where to display postal code (SingleLine.Text)
- Latitude - Field where to display latitude (Decimal)
- Longitude - Field where to display longtitude (Decimal)

