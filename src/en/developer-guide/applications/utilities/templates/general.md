---
author: Adel Šabić
---
# Templates
## Introduction

We have created a templating feature where you can compose different kinds of templates and populate them with data from CDS. There are currently 3 types of templates: **Word _(docx)_, Excel _(xlsx)_ and Email**. Getting into details of every template type, making and getting of them is different. Therefore we've made detailed instructions for each type. 

## General idea

Regardless of differences in each template type, general logic is same. For now we'll take email templates for example. Let's say we need to send batch of emails to certain group of contacts

1. You will make an email template by making new record where you will design actual email in out designer, declare its filters and language. In designer you can use liquid tags to allow template to recieve custom data.

::: warning Note

_Check [Shopify's docs](https://shopify.github.io/liquid/) to see what is possible to do with tags, but be aware that we are using [DotLiquid](https://github.com/dotliquid/dotliquid/wiki) and it doesn't have all Shopify's features implemented. To counter this, we have added [
DotLiquid.Extras](https://github.com/gimmi/DotLiquid.Extras/tree/master/src/DotLiquid.Extras.Tests) filters, which should substitute missing functionalities._ 

:::

2. In your custom flow for sending emails, you will get template by calling child flow _(in our case talxis_getemailtemplate)_  which retrieves template based on sent entity and record ID. If sent record satisfies criteria for one of the templates, that template will be returned.

3. If you need to populate data inside of the template, you will do it by using custom connector actions _(again in our case "Map To Liquid")_ which will populate tempate with data from CDS.

4. After that you will have email ready for sending :D

::: warning Note 

Please check detailed descriptions for more info.
- [Email Templates](./email-template.md)
- [Document Templates](./document-template.md) (Word, Excel)

:::
