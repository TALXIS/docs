---
author: Ondrej Juda
---

# Configure contract review and approval

This part of the documentation is **important** for review and approval to work properly. Without creating a configuration, the processes in the background don't work.

Configuration is done through **TALXIS Configuration - Contract Review** entity records. You can find it in the **Settings** area in the TALXIS Contract application.

You specify the users for the review and approval process in this configuration. You can also create more configurations for different contracts. They will be chosen based on the contract attribute values you specify.

## Where to find the configuration

Review and approval configuration records are located in the **Settings** area, in the **Review** subarea.

![Review Subarea](/.attachments/CustomizerGuide/Contract/configure-contract-review-and-approval-1.png)

## Create a configuration record

1. Navigate to the **Settings** area, to the **Review** subarea, click the **New** button.

![Review Subarea New Record](/.attachments/CustomizerGuide/Contract/configure-contract-review-and-approval-2.png)

2. Fill in the **Name** attribute and click the **Save** button.

The record must be saved before we can continue to the next steps.

![Saved New Record](/.attachments/CustomizerGuide/Contract/configure-contract-review-and-approval-3.png)

3. Fill in the **Query**. (_optional_)

Thanks to the query, you can choose on which contracts this configuration is used. It is based on contract attribute values - Type, Contract Number, Counterparty, etc.

>How to create a query for **Type of the Contract**:
>
>1.Click the **Add** button and choose to **Add row**.
>
>![Query Add Row](/.attachments/CustomizerGuide/Contract/configure-contract-review-and-approval-4.png)
>
>2.Choose the **Type of the Contract** attribute in the first column.
>
>![Query Attibute](/.attachments/CustomizerGuide/Contract/configure-contract-review-and-approval-5.png)
>
>3. Leave the **Equals** operator in the second column because we want only those contracts with the type we specify in the next step.
>
>4. Pick the type you want in the third column.
>
>![Attribute Value](/.attachments/CustomizerGuide/Contract/configure-contract-review-and-approval-6.png)
>
>This configuration will be applied only on the contracts with the **Type of the Contract** you chose.

4. Choose users for the process.

You'll find three sections on the bottom where you can add existing users as reviewers, admins, representatives. These users will be picked from this configuration during the review and approval process. Click here to learn more about their responsibilities: [Roles in the contract process](/en/user-guide/model-driven-apps/business-process/contract/roles-in-the-contract-process/).

>Add a user as a reviewer:
>
>1. Find the **Reviewers** section and click the **Add Existing User** button.
>
>![Add A Reviewer](/.attachments/CustomizerGuide/Contract/configure-contract-review-and-approval-7.png)
>
>2. Look up the users, select them and click the **Add** button.
>
>![Add A Reviewer](/.attachments/CustomizerGuide/Contract/configure-contract-review-and-approval-8.png)
>
>3. Selected users should appear in the grid in a few seconds.