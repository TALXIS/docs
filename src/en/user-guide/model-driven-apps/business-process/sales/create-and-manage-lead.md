---
author: Timotej Paluš
---

# Create and manage leads

## Who is the Lead?
In Sales app, leads are potential sales. In other words, a lead is a potential customer who must be qualified or disqualified as a sales opportunity. When a lead is qualified, it can be converted to an opportunity.

You can collect leads from many different sources. For example, you can generate sales leads from advertisment webinars, inquiries from your website, or by word of mouth.

When you create a lead, there are system-required field to fill out (Topic). But other data, such as account, contact, the source of the lead, and description , can also help your sales staff in following up with the customers.

## List of all leads
You can view all created leads in the application. To view them, just go to the Leads group and you will see a view with **All Active Leads**. If you don't know what views are, take a look at this page: [View records](/en/user-guide/model-driven-apps/basic-app-elements/views/).

![Leads group](/.attachments/ModelDrivenAppUserGuide/leadsView.png)

## Create Lead
We are going to create **Lead** using forms. If you don't know what forms are, check out this [page](/en/user-guide/model-driven-apps/basic-app-elements/forms/).
1) In the site map, select **All active Leads**.

![Leads group](/.attachments/ModelDrivenAppUserGuide/leadGroup.png)

2) Select **New** button.

The Lead form opens.

![Lead form](/.attachments/ModelDrivenAppUserGuide/leadForm.png)

3) Fill in lead form

To save a **Lead**, it is necessary to fill-in the **Topic** field (e.g. _TALXIS licenses_). You can also provide data such as Lead source, Account or Contact. 

Options for Lead source:

![Lead Source](/.attachments/ModelDrivenAppUserGuide/leadSource.png)

4) Save form

After filling in all the necessary fields and saving the form, you can see the new lead in **All active leads**.

![New lead](/.attachments/ModelDrivenAppUserGuide/newLead.png)

5) Identify Lead

Navigate to **Identify** stage and click on **Next Stage**.

![Identify stage](/.attachments/ModelDrivenAppUserGuide/identifyStage.png)

## Qualify and convert a lead to an opportunity
If your lead has potential to become a sale, you can qualify the lead to an opportunity. When you qualify a lead, a new record to represent the lead as an opportunity is created. Any notes or activities on a lead record do not transfer to the opportunity record. The notes remain with the originating lead record.

_This is one way to create an Opportunity. More information in the [Create or edit opportunities](/en/user-guide/model-driven-apps/business-process/sales/create-or-edit-opportunity) section._

1) Go to **Leads**

2) Select or Create lead record.

3) Fill in the required fields

To qualify lead, you must fill in the required account field. Contact is voluntary but can help to work with opportunity.

You can add an existing account or create a new one in steps of the active stage.

![Qualify stage](/.attachments/ModelDrivenAppUserGuide/qualifyStage.png)

-OR-

Directly in the form

![Account on the form](/.attachments/ModelDrivenAppUserGuide/leadAccountForm.png)

After selecting / creating an account, its information will be displayed in the related records section.

![Related account](/.attachments/ModelDrivenAppUserGuide/relatedAccount.png)

4) Navigate **Develop** stage (qualify and convert lead to opportunity)

If you have filled in all the required fields, you can qualify Lead. Select **Qualify** stage and click on **Next stage**. 

Business process flow will move you to the stage **Develop** and that means that **Lead** or potential customer will become an **Opportunity.**

![Qualify Lead](/.attachments/ModelDrivenAppUserGuide/qualifyLead.png)

## What happens to notes, activities and attachments when leads are qualified?
When salespeople work on a lead, they use notes to store key information on the things they have researched about the lead or create activities to record their operations with lead. This could be information like appointment, phonecall and so on. When a lead is qualified, these notes and activities are displayed in the originating Lead record so that the information is not lost.

## Disqualify a lead
When you decide that a lead will not turn into an opportunity, you can disqualify it and still have an audit trail for your sales process. You can reactivate the record, including any attachments and notes, without having to re-enter all the data if the lead contacts you in the future. Deleting the record also removes any attachments and notes.

If Lead doesn't fit your expectations, you may disqualify him. You must state the reason for disqualification.

![Disqualify Lead](/.attachments/ModelDrivenAppUserGuide/disqualifyLead.png)

## Reactivate Lead

After disqualification, the form will be locked. You cannot edit the data in the form. If you later want to work with Lead, you can reactivate it with the **Reactivate** button.

![Reactivate Lead](/.attachments/ModelDrivenAppUserGuide/reactivateLead.png)