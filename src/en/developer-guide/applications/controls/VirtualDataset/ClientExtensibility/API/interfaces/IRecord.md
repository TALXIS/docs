Base interface for dataset record result. If a property is optional, it does not exists in Microsoft's dataset implementation.

## Extends

- `Omit`\<`ComponentFramework.PropertyHelper.DataSetApi.EntityRecord`, `"getFormattedValue"`\>.`IEventEmitter`\<[`IRecordEvents`](IRecordEvents.md)\>

## Properties

### addEventListener()

> **addEventListener**: \<`K`\>(`event`, `eventListener`) => `void`

Allows defining a listener method that will trigger when a specific event occurs.

#### Type Parameters

• **K** *extends* keyof [`IRecordEvents`](IRecordEvents.md)

#### Parameters

• **event**: `K`

• **eventListener**: [`IRecordEvents`](IRecordEvents.md)\[`K`\]

#### Returns

`void`

#### Overrides

`IEventEmitter.addEventListener`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1010

***

### clearChanges()

> **clearChanges**: () => `void`

Clears all unsaved changes in the record.

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1005

***

### destroy()

> **destroy**: () => `void`

Destroys the record.

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:980

***

### expressions

> **expressions**: [`IRecordExpressions`](IRecordExpressions.md)

Allows you to set expressions for certain record properties. For example, you can specify a validation expression to create a custom validator for a column.

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:960

***

### getColumnInfo()

> **getColumnInfo**: (`columnName`) => [`IColumnInfo`](IColumnInfo.md)

Provides column information.

#### Parameters

• **columnName**: `string`

#### Returns

[`IColumnInfo`](IColumnInfo.md)

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:941

***

### getCurrencySymbol()

> **getCurrencySymbol**: (`columnName`) => `string`

Gets currency symbol for a given column.

#### Parameters

• **columnName**: `string`

#### Returns

`string`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:965

***

### getDataProvider()

> **getDataProvider**: () => [`IDataProvider`](IDataProvider.md)

Returns the data provider associated with this record.

#### Returns

[`IDataProvider`](IDataProvider.md)

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:985

***

### getField()

> **getField**: (`columnName`) => [`IField`](IField.md)

Gets Field for a given column.

#### Parameters

• **columnName**: `string`

#### Returns

[`IField`](IField.md)

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:931

***

### getFields()

> **getFields**: () => [`IField`](IField.md)[]

Returns field instances for all columns in the record.

#### Returns

[`IField`](IField.md)[]

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1000

***

### getIndex()

> **getIndex**: () => `number`

Return the records index in the dataset.

#### Returns

`number`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:956

***

### getRawData()

> **getRawData**: () => [`IRawRecord`](IRawRecord.md)

Retrieves the raw record data. This object corresponds to the record's initial state, before any changes are made.

#### Returns

[`IRawRecord`](IRawRecord.md)

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:970

***

### getSummarizationType()

> **getSummarizationType**: () => [`DataProviderSummarizationType`](../type-aliases/DataProviderSummarizationType.md)

Returns the summarization type of the record.

#### Returns

[`DataProviderSummarizationType`](../type-aliases/DataProviderSummarizationType.md)

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:995

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

src/utils/dataset/data-providers/interfaces.ts:926

***

### isDirty()

> **isDirty**: (`columnName`?) => `boolean`

Checks if the record has unsaved changes. Change can occur by using the `setValue` API on the record.

#### Parameters

• **columnName?**: `string`

#### Returns

`boolean`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:951

***

### isSaving()

> **isSaving**: () => `boolean`

Whether the record is currently being saved.

#### Returns

`boolean`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:990

***

### removeEventListener()

> **removeEventListener**: \<`K`\>(`event`, `eventListener`) => `void`

Removes a previously defined event listener.

#### Type Parameters

• **K** *extends* keyof [`IRecordEvents`](IRecordEvents.md)

#### Parameters

• **event**: `K`

The event type to remove the listener from.

• **eventListener**: [`IRecordEvents`](IRecordEvents.md)\[`K`\]

The listener function to remove.

#### Returns

`void`

#### Overrides

`IEventEmitter.removeEventListener`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1017

***

### save()

> **save**: () => `Promise`\<[`IRecordSaveOperationResult`](IRecordSaveOperationResult.md)\>

Saves the record.

#### Returns

`Promise`\<[`IRecordSaveOperationResult`](IRecordSaveOperationResult.md)\>

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:936

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

src/utils/dataset/data-providers/interfaces.ts:921

***

### toRawData()

> **toRawData**: () => [`IRawRecord`](IRawRecord.md)

Gets the current record state as a raw data object, including any unsaved changes.

#### Returns

[`IRawRecord`](IRawRecord.md)

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:975

## Methods

### getFormattedValue()

> **getFormattedValue**(`columnName`): `null` \| `string`

Get the current formatted value of this record column.

#### Parameters

• **columnName**: `string`

#### Returns

`null` \| `string`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:916

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

src/utils/dataset/data-providers/interfaces.ts:946
