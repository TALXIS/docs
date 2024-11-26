---
Author: Dominik Brych
---
# Client Extensibility

You can extend the functionalities of the control by accessing it's API through a client script. To access the API, you need to register an [`addOnOutputChange`](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/addonoutputchange) callback on the control.

When the callback is triggered, you can retrieve the dataset instance. From there, you can use its API to manipulate the control and register event handlers.


```javascript
function onFormLoad(executionContext) {
    const formContext = executionContext.getFormContext();
    const control = formContext.getControl('talxis_clientextensibilitybindingfield');
    control.addOnOutputChange((executionContext) => {
        const control = executionContext.getFormContext().getControl('talxis_clientextensibilitybindingfield');
        const dataset = control.getOutputs()['talxis_clientextensibilitybindingfield.fieldControl.DatasetControl'].value;

        dataset.addEventListener('onRecordLoaded', (record) => {
            //register record expressions
        })

        dataset.addEventListener('onDatasetItemOpened', (entityReference) => {
            openAlertDialog(entityReference);
        });
        dataset.addEventListener('onRecordsSelected', (ids) => {
            showSelectedRecordsNotifications(ids, dataset)
        });
    })
}
```

## Record Expressions

Record expressions allow you to dynamically manipulate specific cells within a record (row) by defining a callback function for certain events. Each expression is tied to a specific record cell. The API currently supports setting expressions for the following types of customizations:

### Dynamic Cell Values

If specified, the control will use it's returned value as cell's value. You can think of it as setting a formula on a cell in Excel. Unlike `setValue`, speficying this callback does not trigger any changes on the dataset, even if the value is different between renders. This means the user will not see any pending changes, unless they directly manipulate the cell value. If they do, that value will take precedence over the expression. If the user removes the change, the expression will be used again.

```javascript
dataset.addEventListener('onRecordLoaded', (record) => {
    //value of this cell will always be the sum of talxis_decimal and 
    //talxis_wholenone
    record.expressions?.setValueExpression('talxis_sum__virtual', () => {
        const value1 = record.getValue('talxis_decimal') ?? 0;
        const value2 = record.getValue('talxis_wholenone') ?? 0;
        return value1 + value2;
    })
})
```

> **_NOTE:_**  When calculating the value, **DO NOT** call `getValue` on the same record and cell. If you do, you will end up in an infinite loop.

### Cell Validation

You can define custom validation logic to supplement the built-in validation. When triggered, your logic will run alongside the native validation. If your custom validation fails, the user will not be able to save their changes. You can (should) also provide a custom error message that will be displayed in the UI.

```javascript
dataset.addEventListener('onRecordLoaded', (record) => {
    //validation for this cell will fail if it's value is <= 0
    record.expressions?.setValidationExpression('talxis_sum__virtual', () => {
        const value = record.getValue('talxis_sum__virtual') ?? 0;
        return {
            error: value <= 0,
            errorMessage: value <= 0 ? 'Has to be positive number!' : ''
        }
    })
})
```

### Cell Disabling

When a control's `EnableEditing` attribute is set to true and a column's `IsValidForUpdate` property is also true, all cells within that column are editable by default. However, there may be cases where you want to disable editing for specific cells. This can be achieved by defining a disabled expression for those cells.

```javascript
record.expressions?.setDisabledExpression('talxis_name', () => {
    //disable editing if the value ends with '7'
    if (record.getValue('talxis_name')?.endsWith('7')) {
        return true;
    }
    return false;
})
```
![Dynamic Row Heights](/.attachments/applications/Controls/VirtualDataset/disabled.gif)

### Cell Editor Parameters

You can tailor the parameters of the Cell Editor control to meet your specific requirements. For instance, if you need to use a custom viewId for a Lookup, you can achieve this by implementing your own `getAllViews` method to return the desired viewId

> **_NOTE:_**  Passed parameters always adhere to the Base Control interface for the specified data type.

```javascript
dataset.addEventListener('onRecordLoaded', (record) => {
    record.expressions?.ui.setCellEditorParametersExpression('transactioncurrencyid', (parameters) => {
        return {
            ...parameters,
            value: {
                ...parameters.value,
                getAllViews: (entityName) => {
                    return [{
                        isDefault: true,
                        viewId: 'a2420357-be1d-4480-8da8-0ee8c33cd95a'
                    }]
                }
            }
        }
    })
})
```
> **_NOTE:_**  Never directly manipulate the passed parameters. **Always use** spread operator and return a new object!



### Dynamic Row Height

You can override the height of a cell in a record by specifying this expression. Your callback function will also receive the current width of the cell and the default row height used by the control. If you set a custom height for a cell, the tallest cell in the row will determine the row's overall height. The remaining cells will automatically adjust to fill the available space.

```javascript
dataset.addEventListener('onRecordLoaded', (record) => {
    record.expressions?.ui.setHeightExpression('talxis_multiline__virtual', (columnWidth, rowHeight) => {
        const value = record.getValue('talxis_multiline__virtual') ?? "";
        const length = value.length;
        let minHeight = rowHeight;
        let maxHeight = 200;
        if (length === 0) {
            return undefined;
        }
        const avgCharWidth = 14 * 0.5;

        // Calculate the max number of characters that fit in one line
        const charsPerLine = Math.floor(columnWidth / avgCharWidth);

        // Calculate the number of lines needed
        const numLines = Math.ceil(value.length / charsPerLine);

        // Calculate the height based on the number of lines
        const lineHeight = 14 * 1.2; // 1.2 multiplier for line spacing
        let totalHeight = numLines * lineHeight;
        if (totalHeight < minHeight) {
            totalHeight = minHeight;
        }
        if (totalHeight > maxHeight) {
            totalHeight = maxHeight
        }

        return Math.ceil(totalHeight);
    })
})
```

> **_NOTE:_**  Code for height calculation is AI generated and might need some revision to work correctly in all cases.
</details>

The above code dynamically calculates the required row height to accommodate the content of a cell with multiline input. This ensures that the text is fully visible without truncation, as the row height automatically adjusts to fit the length of the text.

![Dynamic Row Heights](/.attachments/applications/Controls/VirtualDataset/dynamic_height.gif)

### Cell Loading

You can use this expression to tell the control if specific cell should appear as being loaded. This is usefull if you need to do some async operation before the cell value can be calculated.

```javascript
dataset.addEventListener('onRecordLoaded', (record) => {
    //will put all cells into a loading state.
    for (const column of dataset.columns) {
        record.expressions?.ui.setLoadingExpression(column.name, () => {
            return true;
        })
    }
})
```
![Loading](/.attachments/applications/Controls/VirtualDataset/loading.gif)

### Cell Notifications
You can enhance specific cells by adding buttons, each capable of executing multiple actions. 
If a button is linked to a single action, clicking it will immediately trigger the action. When multiple actions are assigned, clicking the button will display a pop-up menu, allowing the user to select the desired action. 
Additionally, notifications can be assigned to an empty virtual column, effectively creating an inline ribbon.

```javascript
record.expressions?.ui.setNotificationsExpression('talxis_name', () => {
    return [{
            uniqueId: 'action1',
            iconName: 'LightningBolt',
            title: 'Single Action',
            actions: [{
                actions: []
            }]
        },
        {
            uniqueId: 'action2',
            iconName: 'LightningBolt',
            title: 'Two Actions',
            messages: ['Choose one of the following actions:'],
            actions: [{
                message: 'Action 1',
                actions: [() => alert('Action 1')]
            }, {
                message: 'Action 2',
                actions: [() => alert('Action 2')]
            }]
        },
        {
            uniqueId: 'action3',
            iconName: 'LightningBolt',
            title: 'Multiple Actions',
            messages: ['Choose one of the following actions:'],
            actions: [{
                    message: 'Action 1',
                    actions: [() => alert('Action 1')]
                }, {
                    message: 'Action 2',
                    actions: [() => alert('Action 2')]
                },
                {
                    message: 'Action 3',
                    actions: [() => alert('Action 3')]
                }, {
                    message: 'Action 4',
                    actions: [() => alert('Action 4')]
                }
            ]
        }
    ];
})
```
![Dynamic Row Heights](/.attachments/applications/Controls/VirtualDataset/ribbon.gif)


Notifications can be useful tool for extending the control functionality. For instance, they can be utilized to create an interactive counter, as demonstrated in the following example:

```javascript
record.expressions?.ui.setNotificationsExpression('talxis_wholenone', () => {
    return [{
            uniqueId: 'increment',
            iconName: 'Add',
            compact: true,
            title: 'Increment',
            actions: [{
                actions: [() => {
                    const value = record.getValue(columnName) ?? 0;
                    record.setValue(columnName, value + 1);
                    dataset.render();
                }]
            }]
        },
        {
            uniqueId: 'decrement',
            iconName: 'Remove',
            compact: true,
            title: 'Decrement',
            actions: [{
                actions: [() => {
                    const value = record.getValue(columnName) ?? 0;
                    record.setValue(columnName, value - 1);
                    dataset.render();
                }]
            }]
        }
    ];
})
```

![Dynamic Row Heights](/.attachments/applications/Controls/VirtualDataset/counter.gif)



