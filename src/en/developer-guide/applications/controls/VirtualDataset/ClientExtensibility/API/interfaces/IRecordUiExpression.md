Can be used to specify record UI expressions. These can be used to modify the record UI during runtime.

## Properties

### setControlParametersExpression()

> **setControlParametersExpression**: (`columnName`, `controlParametersExpression`) => `void`

Allows you to override parameters that are passed to a control.

#### Parameters

• **columnName**: `string`

• **controlParametersExpression**

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:638

***

### setCustomControlComponentExpression()

> **setCustomControlComponentExpression**: (`columnName`, `customControlComponentExpression`) => `void`

Allows you to create a custom renderer for a record column. ONLY USE IF YOU ARE USING THE CLIENT API WITHIN YOUR OWN CUSTOM PCF!

#### Parameters

• **columnName**: `string`

• **customControlComponentExpression**

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:643

***

### setCustomControlsExpression()

> **setCustomControlsExpression**: (`columnName`, `customControlExpression`) => `void`

Allows you to set a custom controls for a column.

#### Parameters

• **columnName**: `string`

• **customControlExpression**

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:628

***

### setCustomFormattingExpression()

> **setCustomFormattingExpression**: (`columnName`, `customFormattingExpression`) => `void`

Allows you to set custom formatting for column. If you do not specify a text color, it will be calculated automatically based on provided background color.

#### Parameters

• **columnName**: `string`

• **customFormattingExpression**

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:633

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

src/utils/dataset/data-providers/interfaces.ts:623

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

src/utils/dataset/data-providers/interfaces.ts:609

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

src/utils/dataset/data-providers/interfaces.ts:604
