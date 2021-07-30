---
author: Timotej Paluš
---

# Create an manage purchase invoice
In this section we will show you how to create a purchase invoice and what else is on the purchase invoice form.

## What is a purchase invoice?
It is a document that is issued by the purchaser of goods and services, confirming that the order is indeed valid and has been fulfilled by the seller. This invoice is created after the purchase order which is issued by the purchaser to the seller. The due date on the purchase invoice is the date by which the purchaser commits to pay the seller for the itemized goods and services. [](https://livfin.com/blog/difference-between-sales-purchase-invoice-finance/)
##  Where to find them?
All purchase invoices can be found in the **Purchase invoice** group on the [sitemap](/en/user-guide/model-driven-apps/basic-app-elements/sitemap/). This group divides into subareas: **New, Pending for approval, Pre-approved, Closed, Paid, All** according to which stage of the [business process flow](/en/user-guide/model-driven-apps/basic-app-elements/business-process-flow/) the purchase invoice is currently in.

After clicking on one of the subareas, a view with records will open. More about views [here](/en/user-guide/model-driven-apps/basic-app-elements/views/).

![Purchase invoice group](/.attachments/ModelDrivenAppUserGuide/purchaseInvoiceGroup.png)

## Create a purchase invoice
1. In the **Purchase Invoices** group, select **New** subarea.
2. Press the **New** button at the top
![Create purchase invoice](/.attachments/ModelDrivenAppUserGuide/createPurchaseInvoice.png)

After pressing the **New** button, the purchase invoice form will open. More about forms [here](/en/user-guide/model-driven-apps/basic-app-elements/forms/).

![Purchase invoice form](/.attachments/ModelDrivenAppUserGuide/purchaseInvoiceForm.png)

3. Fill in a form.  
There are many fields in the form that can be filled in. Not all fields and [controls](/en/user-guide/model-driven-apps/basic-app-elements/controls/) are available immediately after opening the form, but only after saving the form.

::: warning
The form header contains the **owner** of the purchase invoice, **status** and the **status reason**. These fields cannot be modified!  
![Purchase invoice form header](/.attachments/ModelDrivenAppUserGuide/purchaseInvoiceFormHeader.png)
:::

The fields described in the tables below are divided by section.

**Information**  
| Field        | Description           | Example  |
| ------------- |:------------- |:-----:|
| Internal Id | Automatically generated purchase invoice id after saving the form. This field cannot be edited. | PI00003 |
| Purchase Invoice Number | Own invoice number. | You can enter the number of the month when the invoice was issued. (January = 1) |
| Invoice Name | The name of your purchase invoice. This field is **required.** | Purchase of cars |
| Supplier | The supplier is the account from which you receive the product. You can select an existing account with [lookup control](/en/user-guide/model-driven-apps/basic-app-elements/lookup/)  or create a new one via [forms](/en/user-guide/model-driven-apps/business-process/contact-management/use-accounts/#create-a-new-account) or [quickcreate form](/en/user-guide/model-driven-apps/basic-app-elements/forms/#quickcreate-form). This field is **required.** | |
| Project | Project under which the invoice is issued. You can select an existing project with [lookup control](/en/user-guide/model-driven-apps/basic-app-elements/lookup/)  or create a new one via [forms](/en/user-guide/model-driven-apps/business-process/procurement/create-project/#create-a-new-account) or [quickcreate form](/en/user-guide/model-driven-apps/basic-app-elements/forms/#quickcreate-form). This field is **required.** |  |
| Project Detail | Detail of the project. You can select an existing project detail with [lookup control](/en/user-guide/model-driven-apps/basic-app-elements/lookup/)  or create a new one via [forms](/en/user-guide/model-driven-apps/business-process/procurement/create-project/#create-a-new-account) or [quickcreate form](/en/user-guide/model-driven-apps/basic-app-elements/forms/#quickcreate-form). |  |
| Customer | The customer is the account for which we purchase products. You can select an existing account with [lookup control](/en/user-guide/model-driven-apps/basic-app-elements/lookup/)  or create a new one via [forms](/en/user-guide/model-driven-apps/business-process/contact-management/use-accounts/#create-a-new-account) or [quickcreate form](/en/user-guide/model-driven-apps/basic-app-elements/forms/#quickcreate-form). This field is **required.** |  |
| Currency | The currency is pre-filled according to the system settings. | Czech koruna |
| Total Amount | The total amount is automatically calculated from the products that are on the invoice. | |
| Total Amount with VAT | The total amount with VAT is automatically calculated from the products that are on the invoice. |  |

**Details**
| Field        | Description           | Example  |
| ------------- |:------------- |:-----:|
| Invoice Type | The type of invoice you want to approve. | Invoice/Performa Invoice/Notice |
| Variable Symbol | Variable symbol when paying an invoice. |  |
| Description | Invoice description. | Cars for the logistics department | 

**Dates**
| Field        | Description           |
| ------------- |:------------- |
| Date of Issue | The day the invoice was issued. This field is **required.** |
| Date of Taxable Supply | This field is **required.** |
| Due Date | Purchase invoice due date. This field is **required.** |
| Approval Started On | The date when the approval process began. This field is filled in automatically. |
| Payment Sent On | The date the payment was sent. |

4. Save the form  
The saved form should look like the photo below.

![Filled in purchase invoice form](/.attachments/ModelDrivenAppUserGuide/filledInPurchaseInvoiceForm.png)
## Timeline
The **timeline** is used to store **activities** linked to a record. In addition to the classic actions with a timeline, the timeline will also display information about whether the purchase invoice was approved, etc. This functionality is available only after saving the form. More information about timeline [here](/en/user-guide/model-driven-apps/basic-app-elements/timeline/).

![Timeline in purchase invoice](/.attachments/ModelDrivenAppUserGuide/timelineInPI.png)
## Override approvers
In the **Override Approvers** section, you can set the purchase invoice to be approved by a user other than the [category level approver](/en/user-guide/model-driven-apps/business-process/procurement/roles-in-procurement/#category-level-approver). To select a new approver, press three dots and add existing user.

![Override approvers](/.attachments/ModelDrivenAppUserGuide/overrideApprover.png)
## Products
In the **Products** tab, you can add new purchase invoice details. Purchase invoice can contain more purchase invoice details. More about creating purchase invoice details [here](/en/user-guide/model-driven-apps/business-process/procurement/add-invoice-detail/).

![Filled in purchase invoice form](/.attachments/ModelDrivenAppUserGuide/purchaseInvoiceProducts.png)
## Approval
The **Approval** tab contains information about the procurement process. These fields cannot be edited and are updated automatically.

![Approval tab](/.attachments/ModelDrivenAppUserGuide/approvalTab.png)

**Durations in days**  
| Field        | Description |
| ------------- |:------------- |
| Prepare Stage For | How many days was the purchase invoice in the **Prepare** stage. |
| Pending for Approval Stage For | How many days was the invoice in the **Pending for Approval** stage. |
| Pre-Approved Stage For | How many days was the invoice in the **Pre-Approved** stage. |
| Closed Stage For | How many days was the invoice in the **Closed** stage. |

**Dates**
| Field        | Description |
| ------------- |:------------- |
| Approval Started On | The date when the approval process began. |
| Pending for Approval From | The date when the approval emails has been sent for the [category level approvers](/en/user-guide/model-driven-apps/business-process/procurement/roles-in-procurement/#category-level-approver) or approvers define in [override section](/en/user-guide/model-driven-apps/business-process/procurement/create-purchase-invoice/#override-approvers). |
| Pre-approved From | The date when the approval emails has been sent for the [chief approvers](/en/user-guide/model-driven-apps/business-process/procurement/roles-in-procurement/#chief-approver). |
| Closed From | The date from which the purchase invoice is closed and waiting for confirmation of payment. |

**Other**
| Field        | Description |
| ------------- |:------------- |
| Total Amount Check | Total amount from all purchase invoice details in **Products** tab. |
| Total Amount with VAT Check | Total amount with VAT from all purchase invoice details in **Products** tab. |
| Were Total Amounts Changed During Approval | If the total amount in the purchase invoice has changed during the procurement process, this field will be set to **yes**. |
