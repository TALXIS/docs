---
Author: Jan Losenicky
---

# Quick Lookup Edit

## Visual Example

![Quick Lookup Edit Displayed On Form](/.attachments/applications/Controls/quicklookupeditcontrol.png)
![Quick Lookup Edit Displayed On Form](/.attachments/applications/Controls/quicklookupeditcontrol2.png)

## Description

This control adding posibility to quickly edit lookup filed.

## Binding field

Control can be binded to any filed of type SingleLine.Text

## Inputs
- Entity Name - Name of entity where the control is placed.
- Entity Id - Id of the record where the control is placed.
- Lookup Entity - The name of the target entity of lookup field
- Lookup Field - Lookup field from which the value will be displayed (usually like _fieldname_value)
- Lookup Navigation Entity - The navigation entity for relationship store which is used when creating a new linked entity
- Custom Button Icon - Icon of custom button
- Custom Button Label - Label of custom button
- Custom Button Url - Url of custom button - Can be set to google maps for example
- Custom Button Expand Query - Expand Query to pass to WebAPI to obtain data which are passed to CustomButtonUrl LiquidMapper
- Fomr Id - ID of the form