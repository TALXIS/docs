---
Author: Jan Losenický
---

# General About Custom Controls

## What is PCF?

PCF - PowerApps Component Framework helps creating customized reusable components that can be used in Power Apps applications.

### Useful Links

[PCF Gallery](https://pcf.gallery/)

[Microsoft Docs](https://docs.microsoft.com/en-us/powerapps/developer/component-framework/overview)

[FIGMA Talxis PCF preview](https://www.figma.com/proto/CIf7LPbQa9gZTMTiH1e07g/NETWORG-Web-UI-Master?page-id=797%3A14942&node-id=1426-7570&viewport=1452%2C1062%2C0.49&t=9jixO6YZBPra2kZn-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1426%3A7570&show-proto-sidebar=1)

## How to get custom control into model-driven application?

First step is to import the solution with your custom control to your environment.

![Import Custom Control Img](/.attachments/applications/Controls/importcustomcontrol.png)

They are usually binded to a field. So open up a form where you want to place the control and then switch to classic.

![Switch To Classic Img](/.attachments/applications/Controls/switchtoclassic.png)

Now sellect field where you want to place the custom control (It has to be a right format), then click on "Change Properties". Now click on 
"add control" and find your custom control.

![Properties Example Img](/.attachments/applications/Controls/propertiesexample.png)

You have to fill in all required properties. Value can be static or binded to a field value.

_**Note:** There is a max lenght 160 characters that can be written in the static value field, that can be a problem for example in case that you need to fill in a fetchxml property.  To solve this problem you can right click on the field then click on Inspect and change the max lenght of this field._

![Change Max Lenght Img](/.attachments/applications/Controls/changemaxlenght.png)

Some custom controls can be binded only on data set (view, subrid).

### Example of custom control on form in code
```
<customControl name="talxis_TALXIS.PCF.AddressControl" formFactor="2">
    <parameters>
        <bindingField>talxis_fulladdress</bindingField>
        <standalone static="true" type="Enum">true</standalone>
        <language static="true" type="Enum">user-default</language>
        <manualInput static="true" type="Enum">true</manualInput>
        <type static="true" type="Enum">fullAddress</type>
        <addressComponentsJSON>talxis_addresscomponentsjson</addressComponentsJSON>
        <fullAddress>talxis_fulladdress</fullAddress>
        <country>talxis_country</country>
        <administrativeArea>talxis_administrativearea</administrativeArea>
        <locality>talxis_city</locality>
        <sublocality>talxis_sublocality</sublocality>
        <street>talxis_streetname</street>
        <streetNumber>talxis_streetnumber</streetNumber>
        <postalCode>talxis_postalcode</postalCode>
        <latitude>talxis_lat</latitude>
        <longitude>talxis_long</longitude>
    </parameters>
</customControl>
```