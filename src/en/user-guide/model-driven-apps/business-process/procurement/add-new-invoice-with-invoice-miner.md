---
author: Jan Losenicky
---

# Create new purchase invoice with Invoice Miner
TALXIS Procurement uses Invoice Miner, a cloud-based service developed by Konica Minolta, to extract data from purchase invoices submitted for processing in pdf format. To ensure accuracy, extracted data are reviewed and updated manually using Correction UI. This interface allows users to verify, modify and accept the data before the new purchase invoice record is created.

## Submit new document for processing
In standard solution the document is submitted for processing by uploading the document to specific folder in SharePoint. This can be automated by collecting the invoices from email for example. Only pdf format is supported.

## Verify, modify and accept extracted data in Correction UI
As soon as the processing extraction of data is completed, user can see a new document in section Needs Attention. This document can be opened by double clicking on row or clicking on the name of the document.

After opening the document in status of Needs Attention, the Correction UI is displayed in dialog. There the user can see all the extracted data, verify them and modify if needed.

![Correction UI](/.attachments/applications/Controls/InvoiceRecognition/invoicerecognition-preview.png)

Supplier and customer are validated against the database. Organization is matched by tax ID. If the organization does not exists in database, user will see a "x" symbol and after hitting the search button the quick create form for creating a new organization is shown and prefilled with extracted data. After saving the form, invoice is automatically paired to this organization.

![Quick Create New Organization](/.attachments/Procurement/invoice-miner-quick-create-new-account.png)
![Not matched supplier](/.attachments/Procurement/invoice-miner-not-matched-supplier.png)
![Matched customer](/.attachments/Procurement/invoice-miner-matched-customer.png)

In UI user see information from the matched organization in UI, if this information is wrong it needs to be modified in database and cannot be done through Correction UI.

User should check and fill all required fields, including rows and when it's done he should be able to click on 'Accept and continue' button.

User is asked if want to leave the current page and navigate to newly created invoice.

![Leave Page Dialog](/.attachments/Procurement/invoice-miner-leave-current-page-dialog.png)
After clicking on Ok user is navigated to the record.

![Creating New Invoice](/.attachments/Procurement/creating-new-invoice.png)
![Newly Created Invoice](/.attachments/Procurement/purchase-invoice-with-preview.png)

User can still update any information on created purchase invoice until it is sent for approval.

## Duplicity Check
User gets notified while trying to create new purchase invoice with already existing invoice id. Than he has two options, cancel it or create anyway. When cancelled, the document is marked is duplicate and deactivated otherwise the invoice record is created as usual.

![Duplicity Invoice Record](/.attachments/Procurement/invoice-miner-duplicity-invoice.png)