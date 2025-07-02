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

> **_NOTE:_**  If you are using Typescript, you should always use Dataset typings (`IDataset`, `IRecord`...) from `@talxis/client-libraries`. **DO NOT USE** any properties/methods that are not defined in typings. If you do, your scripts might break with any PCF update!

## Aggregations
If the control has active aggregations, it automatically creates a virtual record that contains the aggregated values and pinnes it to the bottom of the dataset. This record is not part of the regular dataset, so you cannot acces it through the `onRecordLoaded` event. In order to access this record instance, you need to retrieve the dataset that was used to create this record. This can be done by registering the `onChildDatasetInitialized` event on the main dataset. Once you have the aggregated dataset instance, you can register events and expressions the same as you would for the main dataset.

```javascript
dataset.addEventListener('onChildDatasetInitialized', (childDataset) => {
    childDataset.addEventListener('onRecordLoaded', (record) => {
        //register record expressions for the aggregated record
    })
})
```
> **_NOTE:_**  Due to issues with compatibility, validations are completely disabled for the aggregated record. All other client extensibility features are available, including custom controls, notifications, and conditional formatting.

## Interceptors

Interceptors are a way to intercept certain flows in Dataset and inject your own data.

### Columns

You can intercept every column call and tweak the resulting columns as needed. This ensures you keep control over the columns, even when some other code (for example the "Edit Columns" feature) uses `setColumns` and overrides your column definitions. With columns interceptor, you can make sure your customizations stay in place since it triggers whenever the Dataset requests columns (and hence will always be the last writer).

```javascript
this._dataset.setInterceptor('columns', (columns: IColumn[]) => {
    const columnsMap = new Map(columns.map(column => [column.name, column]));
    const heightColumn = columnsMap.get('height');
    if (!heightColumn) {
        return columns;
    }
    columnsMap.set(heightColumn.name, {
        ...heightColumn,
        displayName: 'Height [cm]'
    });
    return [...columnsMap.values()];
})
```

Code example above shows how we can dynamically set the display name of height column to include the information about units.

> **_NOTE:_**  **NEVER** mutate the columns array directly. Always create a new one. Using `Map` is the recommended approach

![Columns interceptor](/.attachments/applications/Controls/VirtualDataset/column_interceptor.png)


## Record Expressions

Record expressions allow you to dynamically manipulate specific cells within a record (row) by defining a callback function for certain events. Each expression is tied to a specific record cell. The API currently supports setting expressions for the following types of customizations:

### Cell Values

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

### Formatted Cell Values

If specified, the control will use it's returned value as cell's formatted value. For example, you can append some units to the value for better clarity.

```javascript
record.expressions.setFormattedValueExpression("height", (defaultFormattedValue) => {
    if (!defaultFormattedValue) {
      return defaultFormattedValue;
    }
    return `${defaultFormattedValue} cm`;
  }
);
record.expressions.setFormattedValueExpression("weight", (defaultFormattedValue) => {
    if (!defaultFormattedValue) {
      return defaultFormattedValue;
    }
    return `${defaultFormattedValue} kg`;
  }
);

```

![Dynamic Row Heights](/.attachments/applications/Controls/VirtualDataset/control_parameters.png)

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


### Cell Control Parameters
You can adjust the cell control’s parameters to fit your specific needs. Native cell renderer has two optional parameters: `PrefixIcon` and `SuffixIcon` which accept stringified [`IIconProps`](https://developer.microsoft.com/en-us/fluentui#/controls/web/icon) object. You can use them to add custom icons to cell values. Each datatype can have slightly different parameters which you can edit. For example, on Lookups, you can change the method for savedquery retrieval to change the Lookup results.

```javascript
record.expressions.ui.setControlParametersExpression("decimal", (defaultParameters) => {
    return {
      ...defaultParameters,
      SuffixIcon: {
        raw: JSON.stringify({
          iconName: "CheckMark",
        }),
      },
    };
  }
);
record.expressions.ui.setControlParametersExpression("number", (defaultParameters) => {
    return {
      ...defaultParameters,
      SuffixIcon: {
        raw: JSON.stringify({
          imageProps: {
            src: "https://img.icons8.com/?size=512&id=OU2ddOKw840K&format=png",
          },
        }),
      },
    };
  }
);
```

![Cell Control Parameters](/.attachments/applications/Controls/VirtualDataset/cell_control_parameters.png)


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
            return 42;
        }
        const avgCharWidth = 14 * 0.5;

        // Calculate the max number of characters that fit in one line
        const charsPerLine = Math.floor(columnWidth / avgCharWidth);

        // Calculate the number of lines needed
        const numLines = Math.ceil(value.length / charsPerLine);

        // Calculate the height based on the number of lines
        const lineHeight = 14 * 1.5;
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
            text: 'Single Action',
            actions: [{
                actions: []
            }]
        },
        {
            uniqueId: 'action2',
            iconName: 'LightningBolt',
            text: 'Two Actions',
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
            text: 'Multiple Actions',
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
            buttonProps: {
                iconOnly: true
            },
            text: 'Increment',
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
            buttonProps: {
                iconOnly: true
            },
            text: 'Decrement',
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

### Conditional Formatting

Cells can be styled with different formatting based on specific conditions, allowing you to customize their appearance with ease. You have the flexibility to define the primary color, background color, or text color for a cell. You can choose to set all of these properties explicitly or specify just one, and the remaining colors will be calculated automatically for a cohesive look. Additionally, you can optionally include a `themeOverride` parameter for more detailed and precise theme customization. Whenever possible, the new colors should be derived from the `defaultCellTheme` parameter to ensure consistency in the design.

```javascript
//calculating the formatting for bmi field based the bmi value
record.expressions.ui.setCustomFormattingExpression('bmi', (defaultTheme) => {
    const bmi = record.getValue('bmi');
    let backgroundColor = undefined;
    let textColor = undefined;
    switch (true) {
        case bmi <= 18.5:
            backgroundColor = defaultTheme.semanticColors.errorBackground;
            textColor = defaultTheme.semanticColors.errorText;
            break;

        case bmi <= 25.0:
            backgroundColor = defaultTheme.semanticColors.successBackground;
            textColor = defaultTheme.semanticColors.successIcon;
            break;

        case bmi <= 30.0:
            backgroundColor = defaultTheme.semanticColors.warningBackground;
            textColor = defaultTheme.semanticColors.messageText;
            break;

        default:
            backgroundColor = defaultTheme.semanticColors.errorBackground;
            textColor = defaultTheme.semanticColors.errorText;
    }
    return {
        backgroundColor: backgroundColor,
        textColor: textColor,
        themeOverride: {
            fonts: {
                medium: {
                    fontWeight: 600
                }
            }
        }
    }
})
```
![Conditional Formatting](/.attachments/applications/Controls/VirtualDataset/conditional_formatting.gif)

### Custom Controls

You can assign a custom PCF to a specific cell. To read more about this feature, refer to the [cell customizer](../CellCustomizers/general.md) section of this guide.

```typescript
record.expressions.ui.setCustomControlsExpression( "talxis_singlelinetext", (defaultControls) => {
    if (record.getValue("talxis_singlelinetext")?.startsWith("#")) {
      return [
        {
          appliesTo: "both",
          name: "talxis_TALXIS.PCF.ColorPicker",
        },
      ];
    }
    return defaultControls;
  }
);
```
*Code snippet above returns the `talxis_TALXIS.PCF.ColorPicker` if the cell value startsWith with "#". Otherwise it will return the default controls.*

![Conditional control](/.attachments/applications/Controls/VirtualDataset/conditional_control.gif)
