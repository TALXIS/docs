Base interface for dataset record result. If a property is optional, it does not exists in Microsoft's dataset implementation.

## Extends

- `Omit`\<`ComponentFramework.PropertyHelper.DataSetApi.EntityRecord`, `"getFormattedValue"`\>

## Properties

### clearChanges()?

> `optional` **clearChanges**: (`columnName`?) => `void`

Clears any changes in the record, resetting all record values to their initial state.

#### Parameters

• **columnName?**: `string`

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:319

***

### expressions?

> `optional` **expressions**: [`IRecordExpressions`](IRecordExpressions.md)

Allows you to set expressions for certain record properties. For example, you can specify a validation expression to create a custom validator for a column.

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:298

***

### getChanges()?

> `optional` **getChanges**: (`columnName`?) => [`IFieldChange`](IFieldChange.md)[]

Retrieves the changes made to the record. Change occurs when `setValue` API on record is used to change its initial value.
Only dirty changes are kept, meaning if a later call of `setValue` resets the value to its original state, the change reference is removed.

#### Parameters

• **columnName?**: `string`

#### Returns

[`IFieldChange`](IFieldChange.md)[]

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:314

***

### getColumnInfo()

> **getColumnInfo**: (`columnName`) => [`IColumnInfo`](IColumnInfo.md)

Provides column information.

#### Parameters

• **columnName**: `string`

#### Returns

[`IColumnInfo`](IColumnInfo.md)

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:281

***

### getCurrencySymbol()?

> `optional` **getCurrencySymbol**: (`columnName`) => `string`

Gets currency symbol for a given column.

#### Parameters

• **columnName**: `string`

#### Returns

`string`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:303

***

### getRawData()?

> `optional` **getRawData**: () => `null` \| `object`

Retrieves the raw record data.

#### Returns

`null` \| `object`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:308

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

src/utils/dataset/data-providers/interfaces.ts:271

***

### isDirty()

> **isDirty**: (`columnName`?) => `boolean`

Checks if the record has unsaved changes. Change can occur by using the `setValue` API on the record.

#### Parameters

• **columnName?**: `string`

#### Returns

`boolean`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:291

***

### save()

> **save**: () => `Promise`\<`void`\>

Saves the record.

#### Returns

`Promise`\<`void`\>

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:276

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

src/utils/dataset/data-providers/interfaces.ts:266

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

src/utils/dataset/data-providers/interfaces.ts:261

***

### getNamedReference()

> **getNamedReference**(): `EntityReference`

Get the object that encapsulates an Entity Reference as a plain object

#### Returns

`EntityReference`

#### Inherited from

`Omit.getNamedReference`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:1886

***

### getRecordId()

> **getRecordId**(): `string`

Get the record ID

#### Returns

`string`

#### Inherited from

`Omit.getRecordId`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:1875

***

### isValid()

> **isValid**(): `boolean`

Whether the record is valid.

#### Returns

`boolean`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:286
