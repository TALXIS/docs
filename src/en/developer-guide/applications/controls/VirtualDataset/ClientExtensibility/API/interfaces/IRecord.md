Base interface for dataset record result. If a property is optional, it does not exists in Microsoft's dataset implementation.

## Extends

- `Omit`\<`ComponentFramework.PropertyHelper.DataSetApi.EntityRecord`, `"getFormattedValue"`\>

## Properties

### clearChanges()

> **clearChanges**: (`columnName`?) => `void`

Clears any changes in the record, resetting all record values to their initial state.

#### Parameters

• **columnName?**: `string`

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:541

***

### destroy()

> **destroy**: () => `void`

Destroys the record.

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:551

***

### expressions

> **expressions**: [`IRecordExpressions`](IRecordExpressions.md)

Allows you to set expressions for certain record properties. For example, you can specify a validation expression to create a custom validator for a column.

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:520

***

### getChanges()

> **getChanges**: (`columnName`?) => [`IFieldChange`](IFieldChange.md)[]

Retrieves the changes made to the record. Change occurs when `setValue` API on record is used to change its initial value.
Only dirty changes are kept, meaning if a later call of `setValue` resets the value to its original state, the change reference is removed.

#### Parameters

• **columnName?**: `string`

#### Returns

[`IFieldChange`](IFieldChange.md)[]

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:536

***

### getColumnInfo()

> **getColumnInfo**: (`columnName`) => [`IColumnInfo`](IColumnInfo.md)

Provides column information.

#### Parameters

• **columnName**: `string`

#### Returns

[`IColumnInfo`](IColumnInfo.md)

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:505

***

### getCurrencySymbol()

> **getCurrencySymbol**: (`columnName`) => `string`

Gets currency symbol for a given column.

#### Parameters

• **columnName**: `string`

#### Returns

`string`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:525

***

### getHeight()

> **getHeight**: (`columnWidths`, `defaultRowHeight`) => `number`

Returns the height for given record

#### Parameters

• **columnWidths**

• **defaultRowHeight**: `number`

#### Returns

`number`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:546

***

### getRawData()

> **getRawData**: () => `null` \| `object`

Retrieves the raw record data.

#### Returns

`null` \| `object`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:530

***

### getValue()

> **getValue**: (`columnName`) => `any`

Get the raw value of the record's column.

#### Parameters

• **columnName**: `string`

#### Returns

`any`

#### Overrides

`Omit.getValue`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:495

***

### isDirty()

> **isDirty**: (`columnName`?) => `boolean`

Checks if the record has unsaved changes. Change can occur by using the `setValue` API on the record.

#### Parameters

• **columnName?**: `string`

#### Returns

`boolean`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:515

***

### save()

> **save**: () => `Promise`\<`void`\>

Saves the record.

#### Returns

`Promise`\<`void`\>

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:500

***

### setValue()

> **setValue**: (`columnName`, `value`) => `void`

Sets the value of a given column.

#### Parameters

• **columnName**: `string`

• **value**: `any`

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:490

## Methods

### getFormattedValue()

> **getFormattedValue**(`columnName`): `null` \| `string`

Get the current formatted value of this record column.

#### Parameters

• **columnName**: `string`

Column name of the record

#### Returns

`null` \| `string`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:485

***

### getNamedReference()

> **getNamedReference**(): `EntityReference`

Get the object that encapsulates an Entity Reference as a plain object

#### Returns

`EntityReference`

#### Inherited from

`Omit.getNamedReference`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:2701

***

### getRecordId()

> **getRecordId**(): `string`

Get the record ID

#### Returns

`string`

#### Inherited from

`Omit.getRecordId`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:2679

***

### isValid()

> **isValid**(): `boolean`

Whether the record is valid.

#### Returns

`boolean`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:510
