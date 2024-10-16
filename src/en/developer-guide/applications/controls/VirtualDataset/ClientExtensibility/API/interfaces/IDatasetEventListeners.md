Allows you to define callbacks that will trigger during specific events.

## Properties

### onDatasetItemOpened()

> **onDatasetItemOpened**: (`dataset`, `entityReference`) => `void`

Triggers when record has been opened by a PCF.

#### Parameters

• **dataset**: [`IDataset`](IDataset.md)

• **entityReference**: `EntityReference`

#### Returns

`void`

#### Defined in

src/utils/dataset/interfaces.ts:15

***

### onNewDataLoaded()

> **onNewDataLoaded**: (`dataset`) => `void`

Triggers when new load has been loaded, for example after a `refresh` or `loadExactPage` events.

#### Parameters

• **dataset**: [`IDataset`](IDataset.md)

#### Returns

`void`

#### Defined in

src/utils/dataset/interfaces.ts:20

***

### onRecordsSelected()

> **onRecordsSelected**: (`dataset`, `selectedRecordIds`) => `void`

Triggers when some record/s has been selected by the PCF.

#### Parameters

• **dataset**: [`IDataset`](IDataset.md)

• **selectedRecordIds**: `string`[]

#### Returns

`void`

#### Defined in

src/utils/dataset/interfaces.ts:10
