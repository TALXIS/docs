---
author: Timotej Paluš
---

# Approvals Configuration
This part of the documentation is **important** for approval process to work properly. Without creating a configuration, the processes in the background don't work.

Configuration is done through **TALXIS Configuration - Purchase approval** entity records. You can find it in the **Settings area** in the TALXIS procurement application.

## Where to find the configuration
Purchase configuration records are located in the **Settings** area, in the **TALXIS Configuration - Purchase approval**

![View of configurations](/.attachments/CustomizerGuide/Procurement/procurementConfigView.png)

## Create a configuration record
1. Navigate to **Settings** area.
2. Select **TALXIS Configuration - Purchase approval** subarea and select **New**.  
![Create new configuration](/.attachments/CustomizerGuide/Procurement/procurementNewConfiguration.png)

After pressing the **New** button, the purchase invoice form will open. More about forms [here](/en/user-guide/model-driven-apps/basic-app-elements/forms/).

![Procurement configuration](/.attachments/CustomizerGuide/Procurement/procurementConfigForm.png)

3. Fill in a form.  

| Field        | Definition    |
| ------------- |:-------------|
| Configuration Name | Name for the given configuration. |
| Accounting Email | Users who belong to the accounting department. |
| Approval Reminder | After how many hours an alert should arrive for a pending Approval. |
| Due Date Reminder  | How many days before the due date of the invoice should be user notified. |
| Check Availability In Next Hours | After how many hours to check if the user is available for Approval. |
| All Must Approve Above Limit | An invoice that must be approved by the chief approvers if the invoice exceeds the given price. |

4. Save the form  
The saved form should look like the photo below.

![Filled in procurement configuration form](/.attachments/CustomizerGuide/Procurement/filledProcurementConfigForm.png)

## Add chief approver
After saving the form, it is possible to add chief approvers. Just press the **Add existing User** button and select a user.

**Subgrid with chief approvers and button to add existing user**  
![Add chief approver](/.attachments/CustomizerGuide/Procurement/addChiefApprover.png)

**Select and add user**  
![Add chief approver](/.attachments/CustomizerGuide/Procurement/addChiefApproverQuickCreate.png)

**Added user to chief approvers subgrid**  
![Add chief approver](/.attachments/CustomizerGuide/Procurement/addedChiefApprover.png)
