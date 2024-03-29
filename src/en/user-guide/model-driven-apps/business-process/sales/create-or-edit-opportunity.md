---
author: Timotej Paluš
---

# Create or edit Opportunities in sales process

In Sales process, an **opportunity** is a potential sale, like a lead, but with an opportunity you can forecast revenue, set a estimated close date, or current situation for the sale. You can also track activities in timeline that are performed with opportunity or set scheduled follow-up activity.


## List of all opportunities
You can view all created opportunities in the application. To view them, just go to the Opportunities group and you will see a view with **All Open opportunities**.

If you don't know what views are, take a look at this page: [View records](/en/user-guide/model-driven-apps/basic-app-elements/views/).

![Opportunity view](/.attachments/ModelDrivenAppUserGuide/listOpp.png)



## Ways to create opportunities

You can convert qualified leads to opportunities without reentering the data, and then you can track opportunities through the sales cycle. When you convert a qualified lead to an opportunity, you can access the lead record, which includes activities and notes, from the corresponding opportunity form.

-OR-

You can create a new opportunity that didn't originate from a lead.

::: tip
The preferred way is to create an opportunity from a lead. See [Qualify and convert a lead to an opportunity](/en/user-guide/model-driven-apps/business-process/sales/create-and-manage-lead/#qualify-and-convert-a-lead-to-an-opportunity).
:::

## Create Opportunity

1) In the site map, select **Opportunity**.

2) Create an opportunity from the Opportunities list using **New** button.

The Opportunity form opens.

![Opportunity form](/.attachments/ModelDrivenAppUserGuide/opportunityForm.png)

3) In the opportunity form, make sure that your potential customer’s important details are captured.

::: warning
When you create opportunity from lead, most of the fields will be automatically populated from the lead record.
:::

Required fields:
| Field        | Description    |
|:------------- |:-------------|
| Deal name | Interest in the opportunity, such as specific product details. (Software licences) |
| Currency | The currency is pre-populated based on system settings. |
| Account | The account associated with this opportunity. |
| Owner | Indicates the owner of the opportunity. You can assign the opportunity to another user or team. |

Optional fields:
| Field        | Description    |
|:------------- |:-------------|
| Primary Contact | The contact associated with this opportunity. |
| Estimated Close Date | n estimated date by which the opportunity is expected to close. |
| Estimated Value| An estimated value of the opportunity. |
| Status | The status the opportunity is in. |

4) To save your changes, on the command bar, select **Save**.

5) Follow the business process flow to move the opportunity to the next stage. In the **Develop** stage, enter data for these fields:

Required:  
**Name** - Name of the opportunity. (It is pre-populated by current name of the opportunity)

Optional:  
**Current Situation** - What it looks like with opportunity.  
**Problem statement** - Problem with opportunity.

![Develop stage](/.attachments/ModelDrivenAppUserGuide/developStage.png)

6) In the **Develop** stage, select **Next Stage**.

After the develop stage, you are trying to create a proposed solution for your opportunity. A solution that the customer would accept and was beneficial for both parties. These solutions can be in the form of [quote](/en/user-guide/model-driven-apps/business-process/sales/create-or-edit-quote/) or notes.

## Approval of proposed solutions
After discussing the proposed solutions with opportunity, you can move on to the next stage.

1) In the **Propose stage**, fill fields.

![Propose stage](/.attachments/ModelDrivenAppUserGuide/fillInProposedStage.png)

2) Select **Next Stage**.

After pressing the **Next Stage** button, you will be moved to the Won stage in which we close the opportunity. See [Close opportunity as won or lose](/en/user-guide/model-driven-apps/business-process/sales/close-opportunity/).

---
_If you use quotes, you will see a dialog with a quote and click there again on the next stage. You must have at least one accepted quote (see [create and manage quote](/en/user-guide/model-driven-apps/business-process/sales/create-and-manage-quote/)) to move from the stage._

![Quotes dialog next stage](/.attachments/ModelDrivenAppUserGuide/quoteDialogNextStage.png)

## Timeline
The **timeline** is used to store **activities** linked to a record. 

::: warning
In addition to activities that include opportunity, you will also see activities from related quotes, orders or originating lead in the timeline.
:::

More information about timeline [here](/en/user-guide/model-driven-apps/basic-app-elements/timeline/).

![Timeline in Lead](/.attachments/ModelDrivenAppUserGuide/activitiesOpp.png)

## Tags
Tags describe information about record and make it easy to locate related records that have the same tag. More information about tags [here](/en/user-guide/model-driven-apps/basic-app-elements/tag/).

![Timeline in Lead](/.attachments/ModelDrivenAppUserGuide/tagOpp.png)
## Scheduled follow-up activities
You can then see the upcoming activities in the **Scheduled Follow-up** section.

![Timeline in Lead](/.attachments/ModelDrivenAppUserGuide/followupLead.png)


