Allows you to define callbacks that will trigger during specific events.

## Properties

### onCellValueChanged()

> **onCellValueChanged**: (`record`, `columnName`) => `void`

Triggers when column value has been changed.

#### Parameters

• **record**: [`IRecord`](IRecord.md)

• **columnName**: `string`

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:179

***

### onRecordSaved()

> **onRecordSaved**: (`record`) => `void`

Triggers when record has been saved.

#### Parameters

• **record**: [`IRecord`](IRecord.md)

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:174
