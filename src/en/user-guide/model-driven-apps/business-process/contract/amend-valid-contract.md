---
author: Ondřej Juda
---

# Amend valid contract

Amendments are for modificating, correcting, deleting from, or adding to existing contracts.

We have a simple solution so you can comfortably create new amendments to an existing contract using one button. Amendments are tracked as type **Amendment** whether their parent contracts have type **Original contract**. You'll find all amendments on the parent contract in the **Amendments** tab.

::: tip Note
You can amend only contracts with status reason **Valid**.
:::

## Create an amendment

1. Navigate to the valid contract you want to amend. 

::: tip Note
A contract becomes valid after it is signed by a counterparty: [Mark contract as signed](/en/user-guide/model-driven-apps/business-process/contract/sign-the-contract/#mark-contract-as-signed).
:::

2. Click the **Create Amendment** button.

On the top of the form, there is a ribbon where you'll find a button called **Create Amendment** if the contract is **Valid**.


![Create Amendment Button](/.attachments/ModelDrivenAppUserGuide/Contract/amend-valid-contract-1.png)

A background process will take care of the rest. After it finishes, it'll navigate you to the new amendment.

![New Amendment](/.attachments/ModelDrivenAppUserGuide/Contract/amend-valid-contract-2.png)

3. New amendment.

After the new amendment form opens you can notice that the basic information is identical to its parent. Only attributes **Document Type** and **Parent Contract** are different. **Document Type** is **Amendment** and **Parent Contract** refers to the original contract.

## See all original contract amendments

1. Navigate to the original contract.
2. Choose the **Amendments** tab.

All amendments related to this original contract are here.

![All Related Amendments](/.attachments/ModelDrivenAppUserGuide/Contract/amend-valid-contract-3.png)

## Amend an existing amendment

Amending an amendment works the same as amending a valid contract. The amendment has to be **Valid** and it is done using the **Create Amendment** button.