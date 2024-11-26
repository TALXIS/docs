Allows you to use in-memory array as Data Source.

## Extends

- `DataProvider`

## Implements

- [`IDataProvider`](../interfaces/IDataProvider.md)

## Constructors

### new MemoryDataProvider()

> **new MemoryDataProvider**(`dataSource`, `columns`, `options`): [`MemoryDataProvider`](MemoryDataProvider.md)

Creates an instance of MemoryDataProvider.

#### Parameters

• **dataSource**: `object`[]

• **columns**: [`IColumn`](../interfaces/IColumn.md)[]

• **options**: [`IMemoryDataProviderOptions`](../interfaces/IMemoryDataProviderOptions.md)

#### Returns

[`MemoryDataProvider`](MemoryDataProvider.md)

#### Overrides

`DataProvider.constructor`

#### Defined in

src/utils/dataset/data-providers/memory-provider/MemoryDataProvider.ts:33

## Methods

### getColumns()

> **getColumns**(): [`IColumn`](../interfaces/IColumn.md)[]

Returns column information, such as column names and data types.

#### Returns

[`IColumn`](../interfaces/IColumn.md)[]

An array of column information objects.

#### Implementation of

[`IDataProvider`](../interfaces/IDataProvider.md).[`getColumns`](../interfaces/IDataProvider.md#getcolumns)

#### Defined in

src/utils/dataset/data-providers/memory-provider/MemoryDataProvider.ts:44

***

### getDataSource()

> **getDataSource**(): `object`[]

Gets the current Data Source.

#### Returns

`object`[]

#### Implementation of

[`IDataProvider`](../interfaces/IDataProvider.md).[`getDataSource`](../interfaces/IDataProvider.md#getdatasource)

#### Defined in

src/utils/dataset/data-providers/memory-provider/MemoryDataProvider.ts:99

***

### getEntityName()

> **getEntityName**(): `string`

Returns the name of the associated entity.

#### Returns

`string`

The entity name.

#### Implementation of

[`IDataProvider`](../interfaces/IDataProvider.md).[`getEntityName`](../interfaces/IDataProvider.md#getentityname)

#### Defined in

src/utils/dataset/data-providers/memory-provider/MemoryDataProvider.ts:135

***

### getErrorMessage()

> **getErrorMessage**(): `string`

Returns the error message from the last data retrieval attempt, if any.

#### Returns

`string`

#### Implementation of

[`IDataProvider`](../interfaces/IDataProvider.md).[`getErrorMessage`](../interfaces/IDataProvider.md#geterrormessage)

#### Defined in

src/utils/dataset/data-providers/memory-provider/MemoryDataProvider.ts:107

***

### getMetadata()

> **getMetadata**(): `EntityMetadata`

Gets the associated entity metadata.

#### Returns

`EntityMetadata`

#### Implementation of

[`IDataProvider`](../interfaces/IDataProvider.md).[`getMetadata`](../interfaces/IDataProvider.md#getmetadata)

#### Defined in

src/utils/dataset/data-providers/memory-provider/MemoryDataProvider.ts:127

***

### getPaging()

> **getPaging**(): `Paging` & `object`

Returns paging information (like page number, total pages, etc.).

#### Returns

`Paging` & `object`

The paging information.

#### Implementation of

[`IDataProvider`](../interfaces/IDataProvider.md).[`getPaging`](../interfaces/IDataProvider.md#getpaging)

#### Defined in

src/utils/dataset/data-providers/memory-provider/MemoryDataProvider.ts:48

***

### getRawRecordData()

> **getRawRecordData**(`recordId`): `null` \| `object`

Retrieves the raw record data for a given record by its ID.

#### Parameters

• **recordId**: `string`

#### Returns

`null` \| `object`

#### Implementation of

[`IDataProvider`](../interfaces/IDataProvider.md).[`getRawRecordData`](../interfaces/IDataProvider.md#getrawrecorddata)

#### Defined in

src/utils/dataset/data-providers/memory-provider/MemoryDataProvider.ts:92

***

### getRecords()

> **getRecords**(): [`IRecord`](../interfaces/IRecord.md)[]

Returns the list of records.

#### Returns

[`IRecord`](../interfaces/IRecord.md)[]

A list of records.

#### Implementation of

[`IDataProvider`](../interfaces/IDataProvider.md).[`getRecords`](../interfaces/IDataProvider.md#getrecords)

#### Defined in

src/utils/dataset/data-providers/memory-provider/MemoryDataProvider.ts:86

***

### getTitle()

> **getTitle**(): `string`

Returns the title provided by the data provider.

#### Returns

`string`

#### Implementation of

[`IDataProvider`](../interfaces/IDataProvider.md).[`getTitle`](../interfaces/IDataProvider.md#gettitle)

#### Defined in

src/utils/dataset/data-providers/memory-provider/MemoryDataProvider.ts:110

***

### getViewId()

> **getViewId**(): `string`

Returns the ID of the current view.

#### Returns

`string`

#### Implementation of

[`IDataProvider`](../interfaces/IDataProvider.md).[`getViewId`](../interfaces/IDataProvider.md#getviewid)

#### Defined in

src/utils/dataset/data-providers/memory-provider/MemoryDataProvider.ts:139

***

### isError()

> **isError**(): `boolean`

Returns true if an error occurred during the last data retrieval process.

#### Returns

`boolean`

#### Implementation of

[`IDataProvider`](../interfaces/IDataProvider.md).[`isError`](../interfaces/IDataProvider.md#iserror)

#### Defined in

src/utils/dataset/data-providers/memory-provider/MemoryDataProvider.ts:103

***

### openDatasetItem()

> **openDatasetItem**(): `void`

Can be used to specify what default action happens for record opening on a specific provider.

#### Returns

`void`

#### Implementation of

[`IDataProvider`](../interfaces/IDataProvider.md).[`openDatasetItem`](../interfaces/IDataProvider.md#opendatasetitem)

#### Defined in

src/utils/dataset/data-providers/memory-provider/MemoryDataProvider.ts:122

***

### refresh()

> **refresh**(): [`IRecord`](../interfaces/IRecord.md)[]

Refreshes the records list and returns the refreshed records.

#### Returns

[`IRecord`](../interfaces/IRecord.md)[]

A promise resolving to a list of refreshed records.

#### Implementation of

[`IDataProvider`](../interfaces/IDataProvider.md).[`refresh`](../interfaces/IDataProvider.md#refresh)

#### Defined in

src/utils/dataset/data-providers/memory-provider/MemoryDataProvider.ts:80

***

### save()

> **save**(`record`): `Promise`\<`void`\>

Saves the provided record to the database.

#### Parameters

• **record**: [`IRecord`](../interfaces/IRecord.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IDataProvider`](../interfaces/IDataProvider.md).[`save`](../interfaces/IDataProvider.md#save)

#### Defined in

src/utils/dataset/data-providers/memory-provider/MemoryDataProvider.ts:118

***

### setColumns()

> **setColumns**(`columns`): `void`

Sets the columns for the dataset.

#### Parameters

• **columns**: [`IColumn`](../interfaces/IColumn.md)[]

#### Returns

`void`

#### Implementation of

[`IDataProvider`](../interfaces/IDataProvider.md).[`setColumns`](../interfaces/IDataProvider.md#setcolumns)

#### Defined in

src/utils/dataset/data-providers/memory-provider/MemoryDataProvider.ts:40

***

### setDataSource()

> **setDataSource**(`dataSource`): `void`

Allows you to change the initial Data Source.

#### Parameters

• **dataSource**: `object`[]

The new data source.

#### Returns

`void`

#### Implementation of

[`IDataProvider`](../interfaces/IDataProvider.md).[`setDataSource`](../interfaces/IDataProvider.md#setdatasource)

#### Defined in

src/utils/dataset/data-providers/memory-provider/MemoryDataProvider.ts:96

***

### setMetadata()

> **setMetadata**(`metadata`): `void`

Allows you to change the initial associated entity metadata.

#### Parameters

• **metadata**: `EntityMetadata`

#### Returns

`void`

#### Implementation of

[`IDataProvider`](../interfaces/IDataProvider.md).[`setMetadata`](../interfaces/IDataProvider.md#setmetadata)

#### Defined in

src/utils/dataset/data-providers/memory-provider/MemoryDataProvider.ts:131

***

### setTitle()

> **setTitle**(`title`): `void`

Sets the dataset's title.

#### Parameters

• **title**: `string`

#### Returns

`void`

#### Implementation of

[`IDataProvider`](../interfaces/IDataProvider.md).[`setTitle`](../interfaces/IDataProvider.md#settitle)

#### Defined in

src/utils/dataset/data-providers/memory-provider/MemoryDataProvider.ts:114
