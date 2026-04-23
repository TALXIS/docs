---
Author: Jan Losenicky
---

# Phone Picker

## Visual Example

<iframe style="border: 0px solid rgba(0, 0, 0, 1);   border-radius: 10px;" width="730" height="600" src="https://embed.figma.com/proto/CIf7LPbQa9gZTMTiH1e07g/NETWORG-Web-UI-Master?page-id=1791%3A46036&node-id=2710-7449&viewport=582%2C682%2C0.29&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2710%3A7449&embed-host=share" allowfullscreen></iframe>

## Description

This control is used to enter a phone number in field. It is checking the format of phone and also there is a function to verify the phone.

## Binding Field

Control can be binded to field of type SingleLine.Phone, SingleLine.Text and SingleLine.

## Inputs

- Default Country Code - Set to "CZ" by default.
- Place Holder Message - Default vaule is "---"
- Call Feature
    - Disabled
    - Enabled (default)
- Enforce Mobile - Enforce mobile phone or allow landline
    - Disabled
    - Enabled (default)
- Verification Feature
    - Disabled (default)
    - Enabled

Using Verication Feature
- Entity Name (required)
- Record Id (required)