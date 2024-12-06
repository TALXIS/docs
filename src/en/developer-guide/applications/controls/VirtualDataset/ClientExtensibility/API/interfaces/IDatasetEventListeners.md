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

src/utils/dataset/interfaces.ts:43

***

### onChangesCleared()

> **onChangesCleared**: () => `void`

Triggers when dataset changes get cleared.

#### Returns

`void`

#### Defined in

src/utils/dataset/interfaces.ts:48

***

### onDatasetItemOpened()

> **onDatasetItemOpened**: (`entityReference`) => `void`

Triggers when record has been opened. If specified, it overrides the native behavior.

#### Parameters

• **entityReference**: `EntityReference`

#### Returns

`void`

#### Defined in

src/utils/dataset/interfaces.ts:12

***

### onNewDataLoaded()

> **onNewDataLoaded**: () => `void`

Triggers when new data has been loaded, for example after a `refresh` or `loadExactPage` events.

#### Returns

`void`

#### Defined in

src/utils/dataset/interfaces.ts:17

***

### onPageSizeChanged()

> **onPageSizeChanged**: (`pageSize`) => `void`

Triggers when page size changes.

#### Parameters

• **pageSize**: `number`

#### Returns

`void`

#### Defined in

src/utils/dataset/interfaces.ts:53

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

src/utils/dataset/interfaces.ts:28

***

### onRecordLoaded()

> **onRecordLoaded**: (`record`) => `void`

Triggers when new record has been loaded, for example after a `refresh` or `loadExactPage` events. Can be used to register expressions on a record.

#### Parameters

• **record**: [`IRecord`](IRecord.md)

#### Returns

`void`

#### Defined in

src/utils/dataset/interfaces.ts:23

***

### onRecordSave()

> **onRecordSave**: (`record`) => `Promise`\<`void`\>

Allows you to specify custom saving logic. If specified, the native `onSave` code in provider will not execute.

#### Parameters

• **record**: [`IRecord`](IRecord.md)

#### Returns

`Promise`\<`void`\>

#### Defined in

src/utils/dataset/interfaces.ts:38

***

### onRecordsSelected()

> **onRecordsSelected**: (`selectedRecordIds`) => `void`

Triggers when some record/s has been selected.

#### Parameters

• **selectedRecordIds**: `string`[]

#### Returns

`void`

#### Defined in

src/utils/dataset/interfaces.ts:33
