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

src/utils/dataset/data-providers/interfaces.ts:1091

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

src/utils/dataset/data-providers/interfaces.ts:1096

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

src/utils/dataset/data-providers/interfaces.ts:1081

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

src/utils/dataset/data-providers/interfaces.ts:1086

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

src/utils/dataset/data-providers/interfaces.ts:1076

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

src/utils/dataset/data-providers/interfaces.ts:1071
