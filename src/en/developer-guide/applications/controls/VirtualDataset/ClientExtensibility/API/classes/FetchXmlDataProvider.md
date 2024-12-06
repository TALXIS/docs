Provides functionality to use fetchXml as a data source.

## Extends

- `DataProvider`

## Implements

- [`IDataProvider`](../interfaces/IDataProvider.md)

## Constructors

### new FetchXmlDataProvider()

> **new FetchXmlDataProvider**(`fetchXml`, `options`?): [`FetchXmlDataProvider`](FetchXmlDataProvider.md)

Allows yout to use fetchXml as Data Source.

#### Parameters

• **fetchXml**: `string`

• **options?**: [`IFetchXmlDataProviderOptions`](../interfaces/IFetchXmlDataProviderOptions.md)

#### Returns

[`FetchXmlDataProvider`](FetchXmlDataProvider.md)

#### Overrides

`DataProvider.constructor`

#### Defined in

src/utils/dataset/data-providers/FetchXmlDataProvider/FetchXmlDataProvider.ts:68

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

src/utils/dataset/data-providers/FetchXmlDataProvider/FetchXmlDataProvider.ts:112

***

### getDataSource()

> **getDataSource**(): `undefined` \| `string`

Gets the current Data Source.

#### Returns

`undefined` \| `string`

#### Implementation of

[`IDataProvider`](../interfaces/IDataProvider.md).[`getDataSource`](../interfaces/IDataProvider.md#getdatasource)

#### Defined in

src/utils/dataset/data-providers/FetchXmlDataProvider/FetchXmlDataProvider.ts:141

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

src/utils/dataset/data-providers/FetchXmlDataProvider/FetchXmlDataProvider.ts:106

***

### getErrorMessage()

> **getErrorMessage**(): `string`

Returns the error message from the last data retrieval attempt, if any.

#### Returns

`string`

#### Implementation of

[`IDataProvider`](../interfaces/IDataProvider.md).[`getErrorMessage`](../interfaces/IDataProvider.md#geterrormessage)

#### Defined in

src/utils/dataset/data-providers/FetchXmlDataProvider/FetchXmlDataProvider.ts:93

***

### getMetadata()

> **getMetadata**(): `EntityMetadata`

Gets the associated entity metadata.

#### Returns

`EntityMetadata`

#### Implementation of

[`IDataProvider`](../interfaces/IDataProvider.md).[`getMetadata`](../interfaces/IDataProvider.md#getmetadata)

#### Defined in

src/utils/dataset/data-providers/FetchXmlDataProvider/FetchXmlDataProvider.ts:96

***

### getPaging()

> **getPaging**(): `object`

Returns paging information (like page number, total pages, etc.).

#### Returns

`object`

The paging information.

##### firstPageNumber

> **firstPageNumber**: `number`

##### hasNextPage

> **hasNextPage**: `boolean`

##### hasPreviousPage

> **hasPreviousPage**: `boolean`

##### lastPageNumber

> **lastPageNumber**: `number`

##### loadExactPage()

> **loadExactPage**: (`pageNumber`) => `Promise`\<[`IRecord`](../interfaces/IRecord.md)[]\>

###### Parameters

• **pageNumber**: `number`

###### Returns

`Promise`\<[`IRecord`](../interfaces/IRecord.md)[]\>

##### loadNextPage()

> **loadNextPage**: () => `Promise`\<[`IRecord`](../interfaces/IRecord.md)[]\>

###### Returns

`Promise`\<[`IRecord`](../interfaces/IRecord.md)[]\>

##### loadPreviousPage()

> **loadPreviousPage**: () => `Promise`\<[`IRecord`](../interfaces/IRecord.md)[]\>

###### Returns

`Promise`\<[`IRecord`](../interfaces/IRecord.md)[]\>

##### pageNumber

> **pageNumber**: `number`

##### pageSize

> **pageSize**: `number`

##### reset()

> **reset**: () => `Promise`\<[`IRecord`](../interfaces/IRecord.md)[]\>

###### Returns

`Promise`\<[`IRecord`](../interfaces/IRecord.md)[]\>

##### setPageSize()

> **setPageSize**: (`pageSize`) => `void`

###### Parameters

• **pageSize**: `number`

###### Returns

`void`

##### totalResultCount

> **totalResultCount**: `number`

#### Implementation of

[`IDataProvider`](../interfaces/IDataProvider.md).[`getPaging`](../interfaces/IDataProvider.md#getpaging)

#### Defined in

src/utils/dataset/data-providers/FetchXmlDataProvider/FetchXmlDataProvider.ts:159

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

src/utils/dataset/data-providers/FetchXmlDataProvider/FetchXmlDataProvider.ts:203

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

src/utils/dataset/data-providers/FetchXmlDataProvider/FetchXmlDataProvider.ts:153

***

### getTitle()

> **getTitle**(): `string`

Returns the title provided by the data provider.

#### Returns

`string`

#### Implementation of

[`IDataProvider`](../interfaces/IDataProvider.md).[`getTitle`](../interfaces/IDataProvider.md#gettitle)

#### Defined in

src/utils/dataset/data-providers/FetchXmlDataProvider/FetchXmlDataProvider.ts:86

***

### getViewId()

> **getViewId**(): `string`

Returns the ID of the current view.

#### Returns

`string`

#### Implementation of

[`IDataProvider`](../interfaces/IDataProvider.md).[`getViewId`](../interfaces/IDataProvider.md#getviewid)

#### Defined in

src/utils/dataset/data-providers/FetchXmlDataProvider/FetchXmlDataProvider.ts:199

***

### isError()

> **isError**(): `boolean`

Returns true if an error occurred during the last data retrieval process.

#### Returns

`boolean`

#### Implementation of

[`IDataProvider`](../interfaces/IDataProvider.md).[`isError`](../interfaces/IDataProvider.md#iserror)

#### Defined in

src/utils/dataset/data-providers/FetchXmlDataProvider/FetchXmlDataProvider.ts:82

***

### openDatasetItem()

> **openDatasetItem**(`entityReference`): `void`

Can be used to specify what default action happens for record opening on a specific provider.

#### Parameters

• **entityReference**: `EntityReference`

#### Returns

`void`

#### Implementation of

[`IDataProvider`](../interfaces/IDataProvider.md).[`openDatasetItem`](../interfaces/IDataProvider.md#opendatasetitem)

#### Defined in

src/utils/dataset/data-providers/FetchXmlDataProvider/FetchXmlDataProvider.ts:207

***

### refresh()

> **refresh**(): `Promise`\<[`IRecord`](../interfaces/IRecord.md)[]\>

Refreshes the records list and returns the refreshed records.

#### Returns

`Promise`\<[`IRecord`](../interfaces/IRecord.md)[]\>

A promise resolving to a list of refreshed records.

#### Implementation of

[`IDataProvider`](../interfaces/IDataProvider.md).[`refresh`](../interfaces/IDataProvider.md#refresh)

#### Defined in

src/utils/dataset/data-providers/FetchXmlDataProvider/FetchXmlDataProvider.ts:145

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

src/utils/dataset/data-providers/FetchXmlDataProvider/FetchXmlDataProvider.ts:195

***

### setColumns()

> **setColumns**(`columns`): `void`

Sets the columns for the dataset.

#### Parameters

• **columns**: [`IFetchXmlDataProviderColumn`](../interfaces/IFetchXmlDataProviderColumn.md)[]

#### Returns

`void`

#### Implementation of

[`IDataProvider`](../interfaces/IDataProvider.md).[`setColumns`](../interfaces/IDataProvider.md#setcolumns)

#### Defined in

src/utils/dataset/data-providers/FetchXmlDataProvider/FetchXmlDataProvider.ts:120

***

### setDataSource()

> **setDataSource**(`fetchXml`): `void`

Allows you to change the initial Data Source.

#### Parameters

• **fetchXml**: `string`

#### Returns

`void`

#### Implementation of

[`IDataProvider`](../interfaces/IDataProvider.md).[`setDataSource`](../interfaces/IDataProvider.md#setdatasource)

#### Defined in

src/utils/dataset/data-providers/FetchXmlDataProvider/FetchXmlDataProvider.ts:127

***

### setMetadata()

> **setMetadata**(`metadata`): `void`

Allows you to change the initial associated entity metadata.

#### Parameters

• **metadata**: [`DeepPartial`](../type-aliases/DeepPartial.md)\<`EntityMetadata`\>

#### Returns

`void`

#### Implementation of

[`IDataProvider`](../interfaces/IDataProvider.md).[`setMetadata`](../interfaces/IDataProvider.md#setmetadata)

#### Defined in

src/utils/dataset/data-providers/FetchXmlDataProvider/FetchXmlDataProvider.ts:99

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

src/utils/dataset/data-providers/FetchXmlDataProvider/FetchXmlDataProvider.ts:90
