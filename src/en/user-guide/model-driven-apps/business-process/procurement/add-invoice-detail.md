---
author: Timotej Paluš
---

# Add a purchase invoice detail

## Where to find purchase invoice details?
Purchase invoice details can be found in each invoice in the **Products** tab. If you have not yet created a purchase invoice, see this page: [Create a purchase invoice](/en/user-guide/model-driven-apps/business-process/procurement/create-purchase-invoice/).

![Filled in purchase invoice form](/.attachments/ModelDrivenAppUserGuide/purchaseDetailSubgrid.png)
## Create a new purchase invoice detail
1. Open the record with purchase invoice. If you have not yet created a purchase invoice, see this page: [Create a purchase invoice](/en/user-guide/model-driven-apps/business-process/procurement/create-purchase-invoice/).

2. Go to the **Products** tab and press **New Purchase Invoice Detail**.

![Create new purchase invoice detail](/.attachments/ModelDrivenAppUserGuide/addNewInvoiceDetail.png)

The [quick create form](/en/user-guide/model-driven-apps/basic-app-elements/forms/#quickcreate-form/) on the right will open.

![Purchase invoice detail form](/.attachments/ModelDrivenAppUserGuide/purchaseInvoiceDetailForm.png)

3. Fill in the form. 

| Field        | Description           | Example  |
| ------------- |:------------- |:-----:|
| Name of Purchase Invoice Detail | Name of purchase invoice detail. This field is ***required**. | Tesla model S |
| Purchase Invoice Header | Purchase invoice which includes the details of the invoice. This field is automatically pre-filled with the invoice from which we create the invoice detail. |  |
| Currency | The currency is pre-filled according to the system settings. | Czech koruna |
| Price per Unit | Price per unit of purchase invoice detail. This field is ***required**. | 10 500 kč |
| VAT per Unit | VAT rate from the price of the product. This field is **required**. | 1500 kč |
| Quantity | Number of units. | 20 |



4. Create a new purchase level category.  
To save the purchase invoice detail form, it is mandatory to at least select **Category level one**. 
::: tip
Category level is groupings of similar goods or services.

**Example:** John created a purchase invoice for the purchase of new office chairs and for the proposal to pass the administration should approve it.
:::

Click on the purchase category level one field and press **New Purchase Category Level One**.

![Create new purchase category level](/.attachments/ModelDrivenAppUserGuide/newPurchaseCategoryLevel.png)

A new [quick create form](/en/user-guide/model-driven-apps/basic-app-elements/forms/#quickcreate-form/)  opens.

![Purchase category level form](/.attachments/ModelDrivenAppUserGuide/purchaseCategoryLevelForm.png)

| Field        | Description           | Example  |
| ------------- |:------------- |:-----:|
| Name | Name of purchase category level. This field is ***required**. | Administration |
| Purchase Category Approver | The user who must approve the purchase invoice. This field is ***required**. |  |
| Automatic Approval Amount Limit | If the purchase invoice detail price is higher than the **Automatic Approval Amount Limit**, the category level approver must approve the purchase invoice. | 10000 |

Filled form  
![Filled purchase category level form](/.attachments/ModelDrivenAppUserGuide/filledCategoryLevelForm.png)

5. Save the form  
The saved form should look like the photo below.

![Filled purchase invoice details form](/.attachments/ModelDrivenAppUserGuide/filledPurchaseInvoiceDetailForm.png)

After saving the form, there will be a new record in the [subgrid](/en/user-guide/model-driven-apps/basic-app-elements/dashboards/).

![Purchase invoice details subgrid](/.attachments/ModelDrivenAppUserGuide/purchaseInvoiceDeatilSubgrid.png)

You can also see the total price for products on the **Information** tab.

![Total amount of purchase invoice](/.attachments/ModelDrivenAppUserGuide/totalAmountPurchaseInvoice.png)

## Edit a purchase invoice detail
1. Open the record with purchase invoice. If you have not yet created a purchase invoice, see this page: [Create a purchase invoice](/en/user-guide/model-driven-apps/business-process/procurement/create-purchase-invoice/).

2. Go to the **Products** tab.

3. Highlight the purchase invoice detail you want to edit and press **Edit** button.

![Edit purchase invoice detail](/.attachments/ModelDrivenAppUserGuide/editPurchaseInvoiceDetail.png)

## Deactivate a purchase invoice detail
::: danger
Never delete records, always deactivate them.
:::

1. Open the record with purchase invoice. If you have not yet created a purchase invoice, see this page: [Create a purchase invoice](/en/user-guide/model-driven-apps/business-process/procurement/create-purchase-invoice/).

2. Go to the **Products** tab.

3. Highlight the purchase invoice detail you want to deactivate and press **Deactivate** button.

![Deactivate purchase invoice detail](/.attachments/ModelDrivenAppUserGuide/deactivatePurchaseInvoiceDetail.png)