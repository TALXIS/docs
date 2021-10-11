---
author: Timotej Paluš
---

# Create and manage quotes
Quote is basically offer with products or services. You are trying to create a quote that would meet customer expectations.

A sale typically starts with a draft quote. A quote undergoes several revisions between the salesperson and customer before it is accepted. After the quote is accepted, an order is generated from the quote.

You'll probably edit a quote multiple times as a sale progresses. Initially, you create a draft, and then you need to accept it by a customer.

## Ways to create quote
There are several ways to create a quote. Let's take a look at them:
### Create a quote from an opportunity

1) In the site map, select **Opportunities**.

2) Select the opportunity you want to create a quote for.

3) Select **Quotes** tab or just click on **Create Quote** button in command bar.

You should see Quotes subgrid.

![Quotes subgrid](/.attachments/ModelDrivenAppUserGuide/quotesSubgrid.png)

4) Create new **Quote**.

The **Quote** form opens.

![Quote form from Opportunity](/.attachments/ModelDrivenAppUserGuide/quoteFormOpp.png)

5) Fill in the fields.

When you create a quote from an opportunity, you don't need to fill in the fields. Most field values come from the originating opportunity. In the header you can see orginating opportunity. If you want you can change the subject for example to have a better overview of your quotes.

6) Save form

If you return to the opportunity you created the quote for, you will see a new item in the _Quotes_ subgrid.

![Quote subrid first item](/.attachments/ModelDrivenAppUserGuide/quoteSubgridFirstItem.png)

### Create a new quote
1) In the site map, select **Quotes** and click on **New** button.

![Create new Quote](/.attachments/ModelDrivenAppUserGuide/createQuote.png)

2) Fill Quote form

If you are creating a quote directly from a sitemap, you must fill in all required fields.

Required fields:

* **Subject** - Quote description.
* **Account** - The account associated with this quote.

Optional fields:

* **Originating opportunity** - The opportunity associated with this quote.
* **Contact** - The contact associated with this quote.

3) Save form

If you want to assign a quote to opportunity, just set the particural opportunity in the quote header as originating opportunity.

### Create a quote from a Propose Stage

1) In the site map, select **Opportunities**.

2) Select the opportunity you want to create a quote for.

3) Navigate to **Propose** stage and click on **Next Stage**

![Propose Stage](/.attachments/ModelDrivenAppUserGuide/proposeStage.png)

You should see dialog with all Quotes.

![Quote Dialog](/.attachments/ModelDrivenAppUserGuide/quoteDialog.png)

4) Select **Add New Quote**

The **Quote** form opens.

![Quote Dialog](/.attachments/ModelDrivenAppUserGuide/quoteFormDialog.png)

5) Fill in the fields

When you create a quote from an **Propose Stage**, you don't need to fill in the fields. Most field values come from the originating opportunity. In the header you can see orginating opportunity. If you want you can change the subject for example to have a better overview of your quotes.

6) Save form

## Accepting quote
Once the customer approves the quote we can accept it. To accept a quote, we need to have at least one product in the quote. See [Add products to quote](/en/user-guide/model-driven-apps/business-process/sales/add-products-to-quote-order/).

After accepting the quote, the quote will be locked and cannot be edited. You can unlock it again using the redraft button.

### Accepting quote from command bar
Quote can be accepted directly from its form by pressing the **Accepted by Customer** button

![Accepted by Customer button](/.attachments/ModelDrivenAppUserGuide/acceptQuoteButton.png)

### Accepting quote from subgrid
You can also accept a quote from subgrid in opportunity by selecting the quote and pressing **Mark as Accepted**.

![Accept quote from subgrid](/.attachments/ModelDrivenAppUserGuide/acceptQuoteSubgrid.png)

### Accepting quote from prospose stage
Or you can accept a quote from the propose stage as we created in the article above. Just select the record and press **Mark as Accepted**.

![Accept quote from dialog](/.attachments/ModelDrivenAppUserGuide/acceptQuoteDialog.png)

## Redraft a quote
If you want to edit a quote but have already accepted it, you can unlock it using the **Redraft** button.

**Redraft button on the quote form**

![Redraft Button](/.attachments/ModelDrivenAppUserGuide/redraftButton.png)

**Redraft in Quotes subgrid**

![Redraft subgrid](/.attachments/ModelDrivenAppUserGuide/redraftSubgrid.png)

## Export quote to PDF
There is an **Export to PDF** button on the quote. Press it, wait a moment and the generated pdf with quote and products will be downloaded.

::: warning
If you do not see the **Export to PDF** button, it means that no configuration has been created in the settings. Contact your system administrator.
:::
![Export to PDF quote](/.attachments/ModelDrivenAppUserGuide/exportToPDFQuote.png)