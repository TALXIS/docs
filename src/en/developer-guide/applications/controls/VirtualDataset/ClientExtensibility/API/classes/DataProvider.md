Base class for all Data Providers.

## Extended by

- [`FetchXmlDataProvider`](FetchXmlDataProvider.md)
- [`MemoryDataProvider`](MemoryDataProvider.md)

## Implements

- [`IDataProvider`](../interfaces/IDataProvider.md)

## Constructors

### new DataProvider()

> **new DataProvider**(`dataSource`, `columns`, `options`?): [`DataProvider`](DataProvider.md)

Creates an instance of DataProvider.

#### Parameters

• **dataSource**: `any`

• **columns**: `Column` & `object`[]

• **options?**: [`IDataProviderOptions`](../interfaces/IDataProviderOptions.md)

#### Returns

[`DataProvider`](DataProvider.md)

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:41


### addEventListener()

> **addEventListener**\<`K`\>(`event`, `eventListener`): `void`

Allows to define listener method that will trigger when specific event occurs.

#### Type Parameters

• **K** *extends* keyof [`IDataProviderEventListeners`](../interfaces/IDataProviderEventListeners.md)

#### Parameters

• **event**: `K`

• **eventListener**: [`IDataProviderEventListeners`](../interfaces/IDataProviderEventListeners.md)\[`K`\]

#### Returns

`void`

#### Implementation of

[`IDataProvider`](../interfaces/IDataProvider.md).[`addEventListener`](../interfaces/IDataProvider.md#addeventlistener)

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:139