Event handlers for record-level events.

## Properties

### onAfterSaved()

> **onAfterSaved**: (`result`) => `void`

Triggers when the save operation is completed, either successfully or with an error.

#### Parameters

• **result**: [`IRecordSaveOperationResult`](IRecordSaveOperationResult.md)

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:173

***

### onBeforeSaved()

> **onBeforeSaved**: () => `void`

Triggers before the record starts saving.

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:168

***

### onFieldClicked()

> **onFieldClicked**: (`columnName`) => `void`

Triggers when a field is clicked.

#### Parameters

• **columnName**: `string`

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:164

***

### onFieldValueChanged()

> **onFieldValueChanged**: (`columnName`, `newValue`) => `void`

Triggers when a field value is changed.

#### Parameters

• **columnName**: `string`

• **newValue**: `any`

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:160
