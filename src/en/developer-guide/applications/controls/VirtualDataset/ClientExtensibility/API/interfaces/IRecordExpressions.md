Can be used to specify record expressions. These can be used to modify the record behavior during runtime.

## Properties

### setCurrencySymbolExpression()

> **setCurrencySymbolExpression**: (`columnName`, `currencySymbolExpression`) => `void`

Allows you to specify a currency symbol for a given column.

#### Parameters

• **columnName**: `string`

• **currencySymbolExpression**

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:594

***

### setDisabledExpression()

> **setDisabledExpression**: (`columnName`, `disabledExpression`) => `void`

Allows you to specify whether a column is read-only (disabled) or editable (not disabled).

#### Parameters

• **columnName**: `string`

• **disabledExpression**

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:584

***

### setFormattedValueExpression()

> **setFormattedValueExpression**: (`columnName`, `valueExpression`) => `void`

Sets an expression as the column's formatted value. The expression is evaluated each time `getFormattedValue` is called, with the resulting value used as the column's  formatted value.

#### Parameters

• **columnName**: `string`

• **valueExpression**

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:579

***

### setRequiredLevelExpression()

> **setRequiredLevelExpression**: (`columnName`, `requiredLevelExpression`) => `void`

Allows you to specify the requirement level for a given column.

#### Parameters

• **columnName**: `string`

• **requiredLevelExpression**

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:589

***

### setValidationExpression()

> **setValidationExpression**: (`columnName`, `validator`) => `void`

Allows you to create a custom validator for a column.

#### Parameters

• **columnName**: `string`

• **validator**

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:568

***

### setValueExpression()

> **setValueExpression**: (`columnName`, `valueExpression`) => `void`

Sets an expression as the column's value. The expression is evaluated each time `getValue` is called, with the resulting value used as the column's value.
Setting a value expression does trigger unsaved changes as it is treated as if it were the column's original value.

#### Parameters

• **columnName**: `string`

• **valueExpression**

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:574

***

### ui

> **ui**: [`IRecordUiExpression`](IRecordUiExpression.md)

Expressions to manipulate UI.

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:563
