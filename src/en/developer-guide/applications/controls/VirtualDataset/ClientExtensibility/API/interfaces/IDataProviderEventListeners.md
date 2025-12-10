Allows you to define callbacks that will trigger during specific events.

## Properties

### onAfterRecordSaved()

> **onAfterRecordSaved**: (`result`) => `void`

Runs after a record in a dataset has been saved.

#### Parameters

• **result**: [`IRecordSaveOperationResult`](IRecordSaveOperationResult.md)

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1359

***

### onAfterSaved()

> **onAfterSaved**: (`results`) => `void`

Runs after all records in dataset have been saved. Does not run if auto-save is disabled. You can use `onAfterRecordSaved` to react to individual record saves.

#### Parameters

• **results**: [`IRecordSaveOperationResult`](IRecordSaveOperationResult.md)[]

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1373

***

### onBeforeFirstDataLoaded()

> **onBeforeFirstDataLoaded**: () => `void`

Triggers before first data are loaded. Fires only once, before the data is about to be loaded.

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1351

***

### onBeforeNewDataLoaded()

> **onBeforeNewDataLoaded**: () => `void`

Triggers before the data is loaded, for example before a `refresh` or `loadExactPage` events.

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1312

***

### onBeforeRecordSaved()

> **onBeforeRecordSaved**: (`record`) => `void`

Runs before the datasat is about to be saved.

#### Parameters

• **record**: [`IRecord`](IRecord.md)

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1355

***

### onDestroyed()

> **onDestroyed**: () => `void`

Called when the Dataset has been destroyed.

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1338

***

### onError()

> **onError**: (`errorMessage`, `details`?) => `void`

Called when an error occurs in the dataset.

#### Parameters

• **errorMessage**: `string`

• **details?**: `any`

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1343

***

### onFirstDataLoaded()

> **onFirstDataLoaded**: () => `void`

Same as `onNewDataLoaded`, but triggers only once, when the dataset is first loaded.

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1316

***

### onLoading()

> **onLoading**: (`isLoading`) => `void`

Triggers when the dataset switches it's loading state.

#### Parameters

• **isLoading**: `boolean`

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1347

***

### onNestedProviderPagingLimitReached()

> **onNestedProviderPagingLimitReached**: () => `void`

Toggles when a child data provider reaches it's paging limit (5000).

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1378

***

### onNewDataLoaded()

> **onNewDataLoaded**: () => `void`

Triggers when new data has been loaded, for example after a `refresh` or `loadExactPage` events.

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1307

***

### onPageSizeChanged()

> **onPageSizeChanged**: (`pageSize`) => `void`

Triggers when page size changes.

#### Parameters

• **pageSize**: `number`

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1333

***

### onRecordColumnValueChanged()

> **onRecordColumnValueChanged**: (`record`, `columnName`, `newValue`) => `void`

Triggers when record column value has been changed.

#### Parameters

• **record**: [`IRecord`](IRecord.md)

• **columnName**: `string`

• **newValue**: `any`

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1325

***

### onRecordCommandsRetrieved()

> **onRecordCommandsRetrieved**: (`commands`, `options`?) => `void`

Fires whenever record commands are retrieved by any part of code.

#### Parameters

• **commands**: [`ICommand`](ICommand.md)[]

• **options?**: [`IRetrieveRecordCommandOptions`](IRetrieveRecordCommandOptions.md)

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1368

***

### onRecordLoaded()

> **onRecordLoaded**: (`record`) => `void`

Triggers when new record has been loaded, for example after a `refresh` or `loadExactPage` events. Can be used to register expressions on a record.

#### Parameters

• **record**: [`IRecord`](IRecord.md)

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1321

***

### onRecordsSelected()

> **onRecordsSelected**: (`selectedRecordIds`) => `void`

Triggers when some record/s has been selected.

#### Parameters

• **selectedRecordIds**: `string`[]

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1329

***

### onRenderRequested()

> **onRenderRequested**: () => `void`

Runs when something from outside of dataset requests a rerender of control that uses it.

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1363
