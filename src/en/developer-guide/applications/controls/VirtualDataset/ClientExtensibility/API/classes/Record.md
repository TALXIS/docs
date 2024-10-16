Instance of a record,

## Implements

- [`IRecord`](../interfaces/IRecord.md)

## Constructors

### new Record()

> **new Record**(`recordId`, `dataProvider`): [`Record`](Record.md)

Creates an instance of Record.

#### Parameters

• **recordId**: `string`

• **dataProvider**: `DataProvider`

#### Returns

[`Record`](Record.md)

#### Defined in

src/utils/dataset/data-providers/Record.ts:24

## Methods

### getFormattedValue()

> **getFormattedValue**(`columnName`): `null` \| `string`

Get the current formatted value of this record column.

#### Parameters

• **columnName**: `string`

Column name of the record

#### Returns

`null` \| `string`

#### Implementation of

[`IRecord`](../interfaces/IRecord.md).[`getFormattedValue`](../interfaces/IRecord.md#getformattedvalue)

#### Defined in

src/utils/dataset/data-providers/Record.ts:34

***

### getNamedReference()

> **getNamedReference**(): `EntityReference`

Get the object that encapsulates an Entity Reference as a plain object

#### Returns

`EntityReference`

#### Implementation of

[`IRecord`](../interfaces/IRecord.md).[`getNamedReference`](../interfaces/IRecord.md#getnamedreference)

#### Defined in

src/utils/dataset/data-providers/Record.ts:199

***

### getRawData()

> **getRawData**(): `object`

Retrieves the raw record data.

#### Returns

`object`

#### Implementation of

[`IRecord`](../interfaces/IRecord.md).[`getRawData`](../interfaces/IRecord.md#getrawdata)

#### Defined in

src/utils/dataset/data-providers/Record.ts:213

***

### getRecordId()

> **getRecordId**(): `string`

Get the record ID

#### Returns

`string`

#### Implementation of

[`IRecord`](../interfaces/IRecord.md).[`getRecordId`](../interfaces/IRecord.md#getrecordid)

#### Defined in

src/utils/dataset/data-providers/Record.ts:107

***

### save()

> **save**(): `Promise`\<`void`\>

Saves the record.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IRecord`](../interfaces/IRecord.md).[`save`](../interfaces/IRecord.md#save)

#### Defined in

src/utils/dataset/data-providers/Record.ts:209

***

### setValue()

> **setValue**(`columnName`, `value`): `void`

Sets the value of a given column.

#### Parameters

• **columnName**: `string`

• **value**: `any`

#### Returns

`void`

#### Implementation of

[`IRecord`](../interfaces/IRecord.md).[`setValue`](../interfaces/IRecord.md#setvalue)

#### Defined in

src/utils/dataset/data-providers/Record.ts:123
