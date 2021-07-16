---
title: TALXIS Procurement
tagline: TALXIS Procurement is an application developed primarily for the management and approval.
author: Timotej Paluš
---


## Application features

TALXIS Procurement is an application developed primarily for the management and approval of purchase invoices, but also the maintenance of a database of organizations and contacts or activities such as tasks.


### **Organizations and contacts management**

The application makes it easy to manage the organizations you work with. You can create new suppliers, customers, partners, etc. Each organization can be assigned a parent organization if it is a subsidiary and assigned a primary contact with whom you communicate within the organization.

### **Sending purchased invoices for the approval process**

When a company needs to buy services or products, it is good for the issued invoice to go through the approval process and thus avoid an overpriced or excessive purchase.
With _Talxis procurement_, this problem is solved. You can create a purchase invoice that will be approved before it is issued to avoid conflicts. 

Invoice approval notifications are sent to Email or MS teams, where the user can select an action of purchase invoice.

**MS Teams**

![Approval in MS Teams](/.attachments/Procurement/ApprovalTeams.png)

**Outlook**

![Approval in Outlook](/.attachments/Procurement/ApprovalOutlook.jpg)

**Category level approvers**

Thurchase invoice is approved by the members of the given category level. Invoice category level is groupings of similar goods or services with common supply and demand drivers and suppliers

_Example_ : John created a purchase invoice for the purchase of new office chairs and for the proposal to pass the administration should approve it

**Chief approvers**

Another important component is the chief approvers, for which you can set the price, which should be approved by them when the purchase invoice exceeds.

_Example_ : The price of office chairs on a purchase invoice has exceeded the $ 10,000 limit and therefore the CFO should then look at whether to issue or reject this invoice due to the excessive price. 

**Find Delegation**

Sometimes it happens that the approver is not available (out of office) for approval of the purchase invoice and without this purchase the company would not be able to function. In this case, the approval of the invoice is automatically redirected to his superior.

![Find Delegation](/.attachments/Procurement/FindDelegation.png)

The picture above shows the simple structure of the company. In this case, the purchase invoice must be approved by _Approver 1_ and _Approver 2_.

_Approver 2_ approves the invoice because she is available. However, _Approver 1_ is not available, so the invoice must be approved by his supervisor. Unfortunately, the superior of _Approver 1_ is not available either, so the approval process will be transferred to the CEO.

### **Purchase invoice has been paid**

After the purchase invoice has been approved by all approvers, it is automatically sent to the accountant for payment. When the payment is made, they can confirm via email or MS Teams that the invoice has been paid. 

## Entities
Entities are types or categories of records that you may encounter in this application. You can see important entities in the left navigation menu:
* Organisations – Accounts of supplier organizations
* Contacts – the individuals you communicate with, through your organizations
* Projects 
* Purchase Invoices
* Configuration

### **Organisations**

Under organizations, you'll find Accounts records that are used to maintain information about your customers, partners, suppliers, and other organizations with whom you come into business.

In order to save the record, you must fill in the following fields on the Information tab:

| Field        | Definition    |
| ------------- |:-------------|
| Account Name | name of the organization |
| Short Code | an abbreviation for the organization used in the numbering of invoices assigned to this organization (listed as Customer) |
| Relationship Type | select the type of relationship that best matches. It is possible to select several options, or all |

Filling in additional information is not mandatory, other useful fields that you might want to fill in are the following: Primary Contact, Headquarters or Establishment Address

### **Contacts**

Contacts are specific people from the organizations (Accounts) with whom you communicate. To save the record, it is necessary to fill in only the surname.

**History and Relationships**

The History and Relationships tab displays the timeline of the record and Connections — connections to other records, typically the Account for which the person works.
To create a new connection, use the Connect button in the top bar.

![Connect Button](/.attachments/Procurement/connectButton.png)

For example, you can add links to other organizations (such as a former employee) or recommendations.

**Consents**

On the Consents tab, you can see the consents granted to you, for example, for sending offers or newsletters, and the validity dates of the consents, or the preferred methods of contacting you.

### **Projects**

There is only one Information tab on the project record. Under projects, you can add individual Accounts that are included in the project using the Add Existing Account button. 

At the same time, it is possible to fill in, for example, the planned and actual start and end of the project, the expected and real costs and revenues.


### **Purchase Invoices**
Invoices can be found in the left menu divided into the following categories according to where they are currently in the approval process:
* New
* Pending for approval
* Pre-approved
* Approved
* Paid
* All

**Purchase Invoices group**

![Purchase Invoices Group](/.attachments/Procurement/PurchaseInvoicesGroup.png)

When you select one of the options, you will see a table of all invoices falling into this category with the values of some important fields that you fill in on the invoice.

**Process**

The Status and Status Reason fields are linked to the invoice process, which is displayed in red at the top of the record.

<!-- todo add picture -->
![Purchase Invoices BPF](/.attachments/Procurement/PurchaseInvoiceBPF.png)

**Status of Purchase Invoice**

The status of the invoice in which it is currently located. Possible values are:

| Status        | Definition    |
| ------------- |:-------------|
| Active     | The invoice is active, it is possible to edit it (it was not sent for approval, it is not closed or it was not canceled) |
| Pending for Approval      | The invoice is awaiting approval      |
| Closed  | the invoice is already closed, has been approved or rejected      |
| Inactive  | The invoice is not active, it has been canceled     |

_The invoice can only be edited in the Active state, in other states only the invoice lines on the Products tab can be changed_

**Status Reason of Purchase Invoice**

Status Reason is a subcategory of Status, it indicates the reason why the invoice is in the given status and specifies its status. Some Status Reasons have the same name as Statuses because you do not need to specify them further.

_For example, if the Invoice Status is Pending for Approval, the Status Reason will also be Pending for Approval._

| Status Reason       | Definition    |
| ------------- |:-------------|
| Active     | The invoice is active, it is possible to edit it (it was not sent for approval, it is not closed or it was not canceled; same as _Status Active_) |
| Pending for Approval      | The invoice is waiting for approval (same as _Status Pending for Approval_)      |
| Pre-Approved  | The invoice has been pre-approved      |
| Rejected   | The invoice has been rejected     |
| Paid       | The invoice has already been paid      |
| Inactive  | The invoice is inactive |
| Canceled   | The invoice has been canceled    |

**Owner**

The person who created the invoice in the application is filled in as the owner of the invoice. The owner on invoices cannot be changed.

**Invoice numbering**

After saving the invoice, the Internal Id field is automatically filled in (locked, cannot be changed) in the format:

_Short Code for the given Account / year / invoice number_

**Currency**

The currency on the invoice is automatically filled in according to the set default currency.

**Total amount & Total amount with VAT**

Total amount and Total amount with VAT are calculated from the invoice lines on the Products tab (Purchase Invoice Details)

These fields are recalculated automatically, but sometimes it may take a while for the resulting amount to be overwritten, in which case refresh the page or you can use the manual recalculation button (calculator symbol) and then Recalculate.

![Total Amount](/.attachments/Procurement/totalAmount.png)

**Were Total Amounts Changed During Approval**

The _Were Total Amounts Changed During Approval_ field cannot be edited manually. This field indicates whether the invoice amount (Total Amount and Total Anout with VAT) remained the same during the approval process, its values are Yes and No.
If the light is set to Yes, it means that the amount has not changed, if to No, it has been adjusted in the process.

![Were Total Amounts Changed](/.attachments/Procurement/wereTotalAmountsChanged.png)

**Timeline**

You can create your own notes on the saved record, to which you can also attach files (by clicking on the + symbol).
At the same time, system notes are displayed here in the approval process - for example, to whom the invoice was sent for approval. An important function of the timeline on invoices is also the display of responses to approval (rejection or confirmation) as well as additional comments (eg when rejecting an invoice).
Notes are sorted by the time they were added, you can sort or filter them.

![Invoice Timeline](/.attachments/Procurement/invoiceTimeline.png)

**Products tab (Purchase Invoice Details)**

On the Products tab, you can use the New Purchase Invoice Detail button to add individual invoice items (lines). The option will be available to you only after the first saving of the invoice - rows can be added to an existing record.

![Invoice Products](/.attachments/Procurement/invoiceProducts.png)

After clicking on the new Purchase Invoice Details button, a form will appear in the right part of the screen, in which you can enter details. Pay attention to the mandatory Category field, where you can select an existing category or create a new one via the New Purchase Category option.

![Invoice Detail Quick Create](/.attachments/Procurement/InvoiceDetailQuickCreate.png)

### **Configuration**

This option is not available to everyone, the Director permission is required to make changes.

In the lower left corner, switch the Customers area to the Settings area and then select the TALXIS Configuration option in the left panel.

Here you can change the following:

| Field        | Definition    |
| ------------- |:-------------|
| Configuration Name | Name for the given configuration |
| Accounting Email | Users who belong to the accounting department |
| Approval Reminder | After how many hours an alert should arrive for a pending Approval |
| Due Date Reminder  | How many days before the due date of the invoice should be notified |
| Check Availability In Next Hours | After how many hours to check if the user is available for Approval |
| All Must Approve Above Limit | An invoice that must be approved by the chief approvers if the invoice exceeds the given price |
| Chief Approvers | Approvers who must approve an invoice if it exceeds a given price |

![Configuration](/.attachments/Procurement/configuration.png)