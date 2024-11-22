---
author: Jan Losenicky
---

# Invoice Miner and SharePoint configuration

There are multiple environment variables which needs to be filled in for the Invoice Miner to work correctly. Some of these variables are visible and can be updated inside application others needs be filled in directly to variables in Make PowerApps.

## Configuration inside Procurement app
**Sharepoint**
| Name | Description | Example |
| --- | --- | --- |
| Default SharePoint URL | Url of the SharePoint site | https://thenetworg.sharepoint.com/teams/TALXISDocuments |
| GUID Default Document Library | GUID of the document library in target Sharepoint Site. This guid can be found in url after opening advanced library settings in SharePoint | 01c2aa4e-cba4-4f0e-b285-a97f0c46a0e6 |
| Name of Default Document Library | Name of the document library. This can be found in url, usually this is Shared Documents but it can change based on site default language | Shared Documents |
**Invoice AI**
| Name | Description | Example |
| --- | --- | --- |
| Enabled on this Environment | Enables or Disables Invoice Miner on environment | True |
| SharePoint Path to Invoices | Path where the invoices for processing and processed will be taken from and saved. This root folder needs to contains folders Pending, Failed and Processed | /General/Invoice Recognition Test |
| URL of Invoice AI Environment | Target Invoice Miner url | ai4e-prod-hokusai.northeurope.cloudapp.azure.com |
| Invoice Receiving Email | Email which will be used in case invoice submiting from email is implemented | TALXISDocuments@groups.thenetw.org |

![Procurement configuration](/.attachments/Procurement/invoice-miner-in-app-configuration.png)

## Environment Variables on Background

| Name | Description | Example |
| --- | --- | --- |
| talxis_apps_procurement_invoiceai_clientid | Client ID for acessing and running Invoice Miner | ... |
| talxis_apps_procurement_invoiceai_clientsecret | Client Secret for acessing and running Invoice Miner | ... |
| talxis_apps_procurement_invoiceai_numberofextractedpages_default | Number of pages that should be extracted from invoices | 4 (default) |
| talxis_apps_procurement_invoiceai_version | Version of Invoice Miner | v2.2 |