---
author: Timotej Paluš
---

# Add products to quote or order
You can add new or existing products to a quote or order. Quantity and price can change during the sales process and therefore it is important to record changes. For both quote and order, adding products is the same step-by-step procedure.

1) Open quote or order
2) Select **Products** 

The **Products** subgrid is displayed

![Products subgrid](/.attachments/ModelDrivenAppUserGuide/productsSubgrid.png)

3) Add new products

The quick create form appears on the right.

![Quote line item form](/.attachments/ModelDrivenAppUserGuide/quoteItemForm.png)

4) Fill in form

Here you have the two options: 

**Write-in a product** ![Write-in product](/.attachments/ModelDrivenAppUserGuide/writeinProduct.png)

When write-in a product, you must enter its name.

-OR-

**Select an existing product** ![Existing product](/.attachments/ModelDrivenAppUserGuide/existingProduct.png)

Either select an existing product that you have already created or create a new reusable product.

![Choose existing product](/.attachments/ModelDrivenAppUserGuide/chooseExistingProduct.png)

Fill in remaining fields:

Required fields:
* **Sales Quote** - The Quote associated with this line item.
* **Price per Unit** - Price per unit of product. 
* **Quantity** - Number  of products.

Optional fields:
* **VAT Rate[%]** - VAT rate in percent.
* **Currency** - The currency is pre-filled according to the system settings.

5) Save form

After saving the form, you can see the line item in the products subgrid. In the fields total amount and total amount with VAT, the total prices for the product are recalculated. If we did not enter the VAT rate, the **Total Amount** would be equal to the **Total Amount with VAT**.

![Products Subgrid item](/.attachments/ModelDrivenAppUserGuide/totalAmount.png)

6) Navigate back to **Information** tab

In the Amounts section, the total prices for all products per quote are calculated.

![Amounts section](/.attachments/ModelDrivenAppUserGuide/amountsSection.png)