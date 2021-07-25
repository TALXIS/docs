---
author: Timotej Paluš
---

# Approval of purchase invoice
The approval process is divided into two stages. [Pending for approval](/en/user-guide/model-driven-apps/business-process/procurement/approve-purchase-invoice/#pending-for-approval-stage) stage and [Pre-approved](/en/user-guide/model-driven-apps/business-process/procurement/approve-purchase-invoice/#pre-approved-stage) stage. At each stage, the purchase invoice is approved by a different type of user.

Notification of acceptance of purchase invoice will come via **email** or **ms teams** as you can see on the [first page](/en/user-guide/model-driven-apps/business-process/procurement/#sending-purchase-invoices-for-the-approval-process).

## Pending for approval stage
At this stage, the purchase invoice is sent for approval to the [category level approvers](/en/user-guide/model-driven-apps/business-process/procurement/roles-in-procurement/#category-level-approver) or to the users in the [override approvers section](/en/user-guide/model-driven-apps/business-process/procurement/create-purchase-invoice/#override-approvers).

If the purchase invoice **is approved**, it is sent to the [Pre-approved](/en/user-guide/model-driven-apps/business-process/procurement/approve-purchase-invoice/#pre-approved-stage) stage.

## Pre-approved stage
At this stage, purchase invoices must be approved by [chief approvers](/en/user-guide/model-driven-apps/business-process/procurement/create-purchase-invoice/#override-approvers).

If the purchase invoice is approved, it becomes **Closed** and [payment is awaited](/en/user-guide/model-driven-apps/business-process/procurement/mark-invoice-as-paid/).

For both stages, you can see a note in the [timeline](/en/user-guide/model-driven-apps/basic-app-elements/timeline/) that the purchase invoice has been approved.  
![Approve in timeline](/.attachments/ModelDrivenAppUserGuide/approveTimeline.png)

## What if the purchase invoice is rejected?
If the purchase invoice **is not approved**, it is sent back to the owner for adjustment. After edits, the user can [resubmit it for approval](/en/user-guide/model-driven-apps/business-process/procurement/sent-for-approval)

## What if the approver is not available?
Sometimes it happens that the approver is not available (out of office) for approval of the purchase invoice and without this purchase the company would not be able to function. In this case, the approval of the invoice is automatically redirected to his superior.

![Find Delegation](/.attachments/ModelDrivenAppUserGuide/FindDelegation.png)

The picture above shows the simple structure of the company. In this case, the purchase invoice must be approved by _Approver 1_ and _Approver 2_.

_Approver 2_ approves the invoice because she is available. However, _Approver 1_ is not available, so the invoice must be approved by his supervisor. Unfortunately, the superior of _Approver 1_ is not available either, so the approval process will be transferred to the CEO.