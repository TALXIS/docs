Can be used to specify record UI expressions. These can be used to modify the record UI during runtime.

## Properties

### setCellEditorParametersExpression()

> **setCellEditorParametersExpression**: (`columnName`, `parameterExpression`) => `void`

Allows you to override parameters that are passed to cell editor control.

#### Parameters

• **columnName**: `string`

• **parameterExpression**

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:414

***

### setHeightExpression()

> **setHeightExpression**: (`columnName`, `heightExpression`) => `void`

Sets the height for individual cells, which determines the height of the entire row.

- If you specify a height for only one cell, the entire row will adjust to that cell's height.
- If multiple cells in a row have specified heights, the row height will match the tallest cell.

The provided expression accepts two parameters:

- `columnWidth` - The current width of the column where the cell is being rendered.
- `rowHeight` - The default row height, used if no cells in the row specify a custom height.

#### Parameters

• **columnName**: `string`

• **heightExpression**

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:409

***

### setLoadingExpression()

> **setLoadingExpression**: (`columnName`, `loadingExpression`) => `void`

Allows you to specify whether the given column is being loaded or not. Useful if you want to show the cell only when some asynchronous operation finishes.

#### Parameters

• **columnName**: `string`

• **loadingExpression**

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:395

***

### setNotificationsExpression()

> **setNotificationsExpression**: (`columnName`, `notificationExpression`) => `void`

Allows you to add notifications to a column. Notifications appear as a set of buttons next to the column formatted value.

#### Parameters

• **columnName**: `string`

• **notificationExpression**

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:390
