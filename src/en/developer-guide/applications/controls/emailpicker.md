---
Author: Jan Losenicky
---

# Email Picker

## Visual Example

<iframe style="border: 0px solid rgba(0, 0, 0, 1);   border-radius: 10px;" width="730" height="600" src="https://embed.figma.com/proto/CIf7LPbQa9gZTMTiH1e07g/NETWORG-Web-UI-Master?page-id=1787%3A6793&node-id=1787-6794&viewport=660%2C951%2C0.73&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1787%3A6794&embed-host=share" allowfullscreen></iframe>

## Description

This control is used to enter an emails in field. It is checking the format of email and also there is a function to verify the email.

![Email Picker Displayed On Form](/.attachments/applications/Controls/emailpickerverifying.png)

## Binding Field

Control can be binded to any field on form of type SingleLine.Text.

## Inputs

- Min Mail Count - Minimum of emails imputed
- Max Mail Count - Maximum of emails that can be imputed
- Verification Feature
    - Disabled (default)
    - Enabled

Using Verifying
- Entity Name - Entity name of the record the EmailPicker is on. Required if verification feature is enabled.
- Record Id - Primary key of the record the EmailPicker is on. Required if verification feature is enabled.