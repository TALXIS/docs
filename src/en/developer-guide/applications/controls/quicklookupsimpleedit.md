---
Author: Petr Choteborsky
---

# Quick Lookup Simple Edit

## Visual Example

![Quick Lookup Edit Displayed On Form](/.attachments/applications/Controls/quicklookupsimpleeditcontrol1.png)
![Quick Lookup Edit Displayed On Form](/.attachments/applications/Controls/quicklookupsimpleeditcontrol2.png)

## Description

This control adds the posibility to quickly edit a lookup filed.

## Binding field

Control can be binded to any field of type Lookup.Simple

## Inputs
- Custom Button Icon - Icon of custom button
- Custom Button Label - Label of custom button
- Custom Button Url - Url of custom button - Can be set to google maps for example
- Custom Button Expand Query - Expand Query to pass to WebAPI to obtain data which are passed to CustomButtonUrl LiquidMapper
- Enable Copy Button - Enables the copy button
- Form Id - ID of the form
- Open From Width - Width of the form opened from the side in represented as a percentage of the screen width

## Side Effects

Using the data attribute of pageInput in Xrm.Navigation.navigateTo() this control sends through information about the parent form it has been opened from. This data can be accessed through formContext.getAttribute(). The form must be prepared to accept this data using:

    <formparameters>
        <querystringparameter name="data_parentlogicalname" type="SafeString" />
        <querystringparameter name="data_parentrecordid" type="SafeString" />
    </formparameters>