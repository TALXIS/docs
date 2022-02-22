---
author: Timotej Paluš
---

# Subgrid
Subgrid is view (list records) like that we already known from previous section ([View records](/en/user-guide/model-driven-apps/basic-app-elements/view/)). Subgrid contains all related records in one place. With the subgrid you can perform the same actions such as sorting, filtering, etc.

**_Example:_** Account can have multiple contacts. To see them all on the form, we need subgrid.

---
**Subgrid below shows all contacts that are assigned to account.**

![Subrid contacts](/.attachments/ModelDrivenAppUserGuide/subgridContacts.png)

---
**You can edit/delete/activate/deactivate records by selecting particular record and hit one of the buttons.**

![Operation with subgrid 1](/.attachments/ModelDrivenAppUserGuide/subgridActions1.png)

_Dont worry,  is not deleted only relationship between account and contact will be gone_. 

---
**You can also create new records into subgrid or add existing records**

![Operation with subgrid 2](/.attachments/ModelDrivenAppUserGuide/subgridAddRecord.png)

The record creation button displays the **quick create form.**

If you want to **add an existing record**, a list of records of the given type will appear on the right, where you can choose which records to assign. You can add more records at once. To find records, you can use [lookup control](/en/user-guide/model-driven-apps/basic-app-elements/lookup/).

![Add existing records](/.attachments/ModelDrivenAppUserGuide/addExistingRecords.png)
