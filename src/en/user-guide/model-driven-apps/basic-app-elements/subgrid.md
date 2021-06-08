---
author: Timotej Paluš
---

# Sub-grid
Subgrid is view (list records) like that we already known from previous section(**View records**). Subgrid contains all related records for particular record. With the subgrid you can perform the same actions such as sorting, filtering, etc.

**_Example:_** Account can have multiple contacts. To see them all on the form, we need subgrid.

---
**Subgrid below shows all contacts that are assigned to account.**

![Subrid contacts](/.attachments/ModelDrivenAppUserGuide/subgridContacts.png)

---
**You can edit/delete/activate/deactivate records by selecting one and hit button.**

![Operation with subgrid 1](/.attachments/ModelDrivenAppUserGuide/subgridOperations1.png)

_Dont worry,  is not deleted only relationship between account and contact will be gone_. 

---
**You can also create new records into subgrid or add existing records**

![Operation with subgrid 2](/.attachments/ModelDrivenAppUserGuide/subgridAddRecord.png)

The record creation button displays the **quick create form.**

If you want to **add an existing record**, a list of records of the given type will appear on the right, where you can choose which records to assign. You can add more records at once. To find records, you can use _lookup control_.

![Add existing records](/.attachments/ModelDrivenAppUserGuide/addExistingRecords.png)
