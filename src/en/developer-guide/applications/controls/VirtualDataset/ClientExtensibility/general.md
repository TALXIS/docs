---
Author: Dominik Brych
---
# Client Extensibility

You can extend the PCF functionalities by acessing it's API from a client script. You can access the API by registering an [`addOnOutputChange`](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/addonoutputchange) callback.
When your callback fires, you can retrieve the dataset instance. You can then use it's API to manipulate the control and register event handlers. Please refer to our [API docs](API/globals.md) to learn more.


<details>
<summary>Client Script Example</summary>

```javascript
let notificationIds = [];
function onFormLoad(executionContext) {
    const formContext = executionContext.getFormContext();
    const control = formContext.getControl('talxis_clientextensibilitybindingfield');
    control.addOnOutputChange((executionContext) => {
        const control = executionContext.getFormContext().getControl('talxis_clientextensibilitybindingfield');
        const dataset = control.getOutputs()['talxis_clientextensibilitybindingfield.fieldControl.DatasetControl'].value;
        //init, settings you apply to dataset here will be applied before first data fetch
        dataset.addEventListener('onNewDataLoaded', (dataset) => {
            Object.values(dataset.records).map(record => {
                record.setValue('talxis_sum__virtual', calculateSum(record));
            })
            dataset.render();
        });
        dataset.addEventListener('onRecordsSelected', (dataset, ids) => {
            notificationIds.map(id => Xrm.App.clearGlobalNotification(id));
            notificationIds = [];
            ids.map(id => {
                const notification =
                {
                    type: 2,
                    level: 1,
                    message: `Record ${dataset.records[id].getFormattedValue('talxis_name')} with id ${id} has been selected.`
                }
    
                Xrm.App.addGlobalNotification(notification).then(
                    function success(result) {
                        notificationIds.push(result);
                    }
                );
            })
        });
        dataset.addEventListener('onDatasetItemOpened', (dataset, entityReference) => {
            const alertStrings = { text: `Sample client script logic for opening of record ${entityReference.name}`, title: "Open" };
            const alertOptions = { height: 120, width: 260 };
            Xrm.Navigation.openAlertDialog(alertStrings, alertOptions);
        });

        dataset.getDataProvider().addEventListener('onCellValueChanged', (record, columnName) => {
            switch (columnName) {
                case 'talxis_decimal':
                case 'talxis_wholenone': {
                    record.setValue('talxis_sum__virtual', calculateSum(record));
                    dataset.render();
                }
            }
        });
        dataset.getDataProvider().addEventListener('onRecordSaved', (record) => {
            console.log(record.getRecordId(), 'has just been saved');
        });
    })
}

const calculateSum = (record) => {
    const value1 = record.getValue('talxis_decimal') ?? 0;
    const value2 = record.getValue('talxis_wholenone') ?? 0;
    return value1 + value2;
}
```
</details>