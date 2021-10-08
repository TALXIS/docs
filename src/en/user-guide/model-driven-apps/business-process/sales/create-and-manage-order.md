---
author: Timotej Paluš
---

# Create and manage orders
Congratulations! Your hard work nurturing your customer has paid off and they're ready to place an order for your products or services. In Sales application, an order can originate from a customer's acceptance of a quote, or you can place an order without an accepted quote, depending on the situation.

When creating or generating a new order, you still need to **confirm** the order so that we know which order to work with.


## Ways to create orders
The order is automatically generated after accepting the quote but there are several ways to create an order. Let's take a look at them:
### Create an order from an opportunity
1) In the site map, select **Opportunities**.
2) Select the opportunity you want to create an order for.
3) Select **Orders** tab and click on **New Sales Order**.

![Order tab](/.attachments/ModelDrivenAppUserGuide/orderTab.png)

4) Fill in the fields.

When you create an order from an opportunity, you don't need to fill in the fields. Most field values come from the originating opportunity. In the header you can see orginating opportunity as well as originating quote. If you want you can change the _Subject_ for example to have a better overview of your orders.

![Order form](/.attachments/ModelDrivenAppUserGuide/orderForm.png)

5) Save form

If you return to the opportunity you created the order for, you will see a new item in the _Orders_ subgrid.

![Orders new item](/.attachments/ModelDrivenAppUserGuide/ordersNewItem.png)
### Create a new order
1) In the site map, select **Orders** and click on **New** button.

![Create new order](/.attachments/ModelDrivenAppUserGuide/orderNavigation.png)

2) Fill Order form

If you are creating an order directly from a sitemap, you must fill in all required fields.

Required fields:

* **Subject** - Quote description.
* **Account** - The account associated with this quote.

Optional fields:

* **Originating opportunity** - The opportunity associated with this quote.
* **Originating quote** - The quote associated with this order.
* **Contact** - The contact associated with this quote.


3) Save form
### Create an order from a won Stage
If the opportunity occurs at the end of the Sales process. You can create an order directly from the Won stage.
1) Open an opportunity at the end of the Sales process
2) Select **Won stage** and select **Finnish** button

The Orders dialog is displayed.

3) Select **Add New Order**

![Add new order form dialog](/.attachments/ModelDrivenAppUserGuide/addNewOrderDialog.png)

The form will open as when creating an order from an opportunity, you can see above in this article.

### Create an order from a quote
The last way to create an order is from an accepted quote.

1) Open accepted quote (if you have not created one, see [Create and manage quote](/en/user-guide/model-driven-apps/business-process/sales/create-and-manage-quote/).)

2) Select **Create Order** button.

![Add new order form dialog](/.attachments/ModelDrivenAppUserGuide/createOrderFromQuote.png)

A new order will be generated with the same products and other values will be transferred to the order as well as for example Subject, Account, Originating opportunity etc.

## Proceed an order
To proceed the order, you must be in the **Won stage** for the opportunity and the order must contain at least **one product**. See [Add products to order](/en/user-guide/model-driven-apps/business-process/sales/add-products-to-quote-order/).

1. In the won stage, select the order you want to confirm and press **Proceed** in the dialog.  
![Confirm order](/.attachments/ModelDrivenAppUserGuide/confirmOrder.png)

After confirming the order, its **Status Reason** changes from **Active/Draft** to **Ordered**.

![Order status](/.attachments/ModelDrivenAppUserGuide/orderStatus.png)

## Activate an order
After confirm order, the order is locked. It is necessary to activate it again for editing.

**Activating order from form**

![Activating order form form](/.attachments/ModelDrivenAppUserGuide/activateOrderFromForm.png)

**Activating order from subgrid**

![Activating order from subgrid](/.attachments/ModelDrivenAppUserGuide/activatingOrderFromSubgrid.png)

