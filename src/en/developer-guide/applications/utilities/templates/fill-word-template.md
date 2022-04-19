---
title: Fill Excel Repeater in Excel Template
tagline: Using Fill Excel Repeater Template action in PowerAutomate
author: Adel Šabić
---

# **Making Word Template**

## Word Template Preparation

Making Word template is really easy since it is supported by MS Word. These are the steps you need to do in order to populate a word template.

1. Open MS Word 
2. Enable developer tab.
    1. Go to File > Options.
    2. Select Customize Ribbon.
    3. Under Main Tabs, select the Developer checkbox, and then choose OK.

        ![Word Settings](.vuepress/public/.attachments/developer-guide/utilities/templates/word/ControlProperties.png)

3. Open developer tab
4. Under controls section, choose suitable control for data provided later to [Word Connector](en/developer-guide/integration/components/connector/wordconnector.md)
            
    ![Controls](.vuepress/public/.attachments/developer-guide/utilities/templates/word/Controls.png)

5. Once you choose your control (In this example I will choose Plain Text Content Control), select it and click on properties which is located in Controls section of Developer tab.
6. Here you will enter:
    - Title: Title for this control (Will not be shown in final document)
    - Tag: Property name from JSON object that will be delivered in connector

    These two controls are important to us, but you can also do few additional settings in properties. For example, styling can be done here, but also can be style as regular text with controls from Home tab

    ![Controls](.vuepress/public/.attachments/developer-guide/utilities/templates/word/ControlProperties.png)

And that would be it...Save the template, upload it to [TALXIS Configuration - Document Generator](en/developer-guide/applications/utilities/templates/document-template.md) entity, populate it with [TALXIS Word Connector](en/developer-guide/integration/components/connector/wordconnector.md) and you will have final product :D

Enjoy using it !
