---
Author: Jan Losenicky
---

# Email Picker

# Visual Example

![Email Picker Displayed On Form](/.attachments/applications/Controls/emailpickercontrol.png)

# Description

This control is used to enter an emails in field. It is checking the format of email and also there is a function to verify the email.

![Email Picker Displayed On Form](/.attachments/applications/Controls/emailpickerverifying.png)

# Binding Field

Control can be binded to any field on form of type SingleLine.Text.

# Inputs

- Min Mail Count - Minimum of emails imputed
- Max Mail Count - Maximum of emails that can be imputed
- Verification Feature
    - Disabled (default)
    - Enabled

Using Verifying
- Entity Name - Entity name of the record the EmailPicker is on. Required if verification feature is enabled.
- Record Id - Primary key of the record the EmailPicker is on. Required if verification feature is enabled.