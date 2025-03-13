Allows you to define callbacks that will trigger during specific events.

## Properties

### onAfterRecordSaved()

> **onAfterRecordSaved**: (`record`) => `void`

Triggers when record has been saved.

#### Parameters

• **record**: [`IRecord`](IRecord.md)

#### Returns

`void`

#### Defined in

src/utils/dataset/interfaces.ts:44

***

### onChangesCleared()

> **onChangesCleared**: () => `void`

Triggers when dataset changes get cleared.

#### Returns

`void`

#### Defined in

src/utils/dataset/interfaces.ts:49

***

### onDatasetDestroyed()

> **onDatasetDestroyed**: () => `void`

Called when the Dataset has been destroyed.

#### Returns

`void`

#### Defined in

src/utils/dataset/interfaces.ts:64

***

### onDatasetItemOpened()

> **onDatasetItemOpened**: (`entityReference`) => `void`

Triggers when record has been opened. If specified, it overrides the native behavior.

#### Parameters

• **entityReference**: `EntityReference`

#### Returns

`void`

#### Defined in

src/utils/dataset/interfaces.ts:13

***

### onNewDataLoaded()

> **onNewDataLoaded**: () => `void`

Triggers when new data has been loaded, for example after a `refresh` or `loadExactPage` events.

#### Returns

`void`

#### Defined in

src/utils/dataset/interfaces.ts:18

***

### onPageSizeChanged()

> **onPageSizeChanged**: (`pageSize`) => `void`

Triggers when page size changes.

#### Parameters

• **pageSize**: `number`

#### Returns

`void`

#### Defined in

src/utils/dataset/interfaces.ts:54

***

### onRecordColumnClick()

> **onRecordColumnClick**: (`record`, `columnName`) => `void`

Triggers when user clicks a record column.

#### Parameters

• **record**: [`IRecord`](IRecord.md)

• **columnName**: `string`

#### Returns

`void`

#### Defined in

src/utils/dataset/interfaces.ts:59

***

### onRecordColumnValueChanged()

> **onRecordColumnValueChanged**: (`record`, `columnName`) => `void`

Triggers when record column value has been changed.

#### Parameters

• **record**: [`IRecord`](IRecord.md)

• **columnName**: `string`

#### Returns

`void`

#### Defined in

src/utils/dataset/interfaces.ts:29

***

### onRecordLoaded()

> **onRecordLoaded**: (`record`) => `void`

Triggers when new record has been loaded, for example after a `refresh` or `loadExactPage` events. Can be used to register expressions on a record.

#### Parameters

• **record**: [`IRecord`](IRecord.md)

#### Returns

`void`

#### Defined in

src/utils/dataset/interfaces.ts:24

***

### onRecordSave()

> **onRecordSave**: (`record`) => `Promise`\<`void`\>

Allows you to specify custom saving logic. If specified, the native `onSave` code in provider will not execute.

#### Parameters

• **record**: [`IRecord`](IRecord.md)

#### Returns

`Promise`\<`void`\>

#### Defined in

src/utils/dataset/interfaces.ts:39

***

### onRecordsSelected()

> **onRecordsSelected**: (`selectedRecordIds`) => `void`

Triggers when some record/s has been selected.

#### Parameters

• **selectedRecordIds**: `string`[]

#### Returns

`void`

#### Defined in

src/utils/dataset/interfaces.ts:34
