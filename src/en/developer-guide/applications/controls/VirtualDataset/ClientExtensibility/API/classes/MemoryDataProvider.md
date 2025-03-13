Allows you to use in-memory array as Data Source.

## Extends

- `DataProvider`

## Constructors

### new MemoryDataProvider()

> **new MemoryDataProvider**(`dataSource`): [`MemoryDataProvider`](MemoryDataProvider.md)

Creates an instance of MemoryDataProvider.

#### Parameters

• **dataSource**: `object`[]

#### Returns

[`MemoryDataProvider`](MemoryDataProvider.md)

#### Overrides

`DataProvider.constructor`

#### Defined in

src/utils/dataset/data-providers/memory-provider/MemoryDataProvider.ts:18

## Methods

### addEventListener()

> **addEventListener**\<`K`\>(`event`, `eventListener`): `void`

Allows defining a listener method that will trigger when a specific event occurs.

#### Type Parameters

• **K** *extends* keyof [`IDatasetEventListeners`](../interfaces/IDatasetEventListeners.md)

#### Parameters

• **event**: `K`

• **eventListener**: [`IDatasetEventListeners`](../interfaces/IDatasetEventListeners.md)\[`K`\]

#### Returns

`void`

#### Inherited from

`DataProvider.addEventListener`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:284

***

### clearChanges()

> **clearChanges**(): `void`

Clears any changes in the dataset, resetting all record values to their initial state.

#### Returns

`void`

#### Inherited from

`DataProvider.clearChanges`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:326

***

### destroy()

> **destroy**(): `void`

Call to destroy the provider.

#### Returns

`void`

#### Inherited from

`DataProvider.destroy`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:74

***

### fireEventListeners()

> **fireEventListeners**\<`K`\>(`event`, ...`par`): `ReturnType`\<[`IDatasetEventListeners`](../interfaces/IDatasetEventListeners.md)\[`K`\]\>[]

Fires event listeners for a specific event.

#### Type Parameters

• **K** *extends* keyof [`IDatasetEventListeners`](../interfaces/IDatasetEventListeners.md)

#### Parameters

• **event**: `K`

• ...**par**: `Parameters`\<[`IDatasetEventListeners`](../interfaces/IDatasetEventListeners.md)\[`K`\]\>

#### Returns

`ReturnType`\<[`IDatasetEventListeners`](../interfaces/IDatasetEventListeners.md)\[`K`\]\>[]

#### Inherited from

`DataProvider.fireEventListeners`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:331

***

### getAllDefinedColumns()

> **getAllDefinedColumns**(): [`IColumn`](../interfaces/IColumn.md)[]

Same as `getColumns`, but it additionaly returns columns that have previously been defined as well. For example, if a column is removed
via `setColumns`, it will no longer appear in `getColumns` result, but it will still be redurned with `getAllDefinedColumns`.

#### Returns

[`IColumn`](../interfaces/IColumn.md)[]

#### Inherited from

`DataProvider.getAllDefinedColumns`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:222

***

### getChanges()

> **getChanges**(): `object`

Retrieves the changes made to the records in the dataset.

#### Returns

`object`

#### Inherited from

`DataProvider.getChanges`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:311

***

### getColumns()

> **getColumns**(): [`IColumn`](../interfaces/IColumn.md)[]

Returns column information, such as column names and data types.

#### Returns

[`IColumn`](../interfaces/IColumn.md)[]

An array of column information objects.

#### Inherited from

`DataProvider.getColumns`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:213

***

### getCurrencies()

> **getCurrencies**(): [`ICurrency`](../interfaces/ICurrency.md)[]

Gets the currencies the provider is able to work with.

#### Returns

[`ICurrency`](../interfaces/ICurrency.md)[]

#### Inherited from

`DataProvider.getCurrencies`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:256

***

### getEntityName()

> **getEntityName**(): `string`

Returns the name of the associated entity.

#### Returns

`string`

The entity name.

#### Inherited from

`DataProvider.getEntityName`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:126

***

### getErrorMessage()

> **getErrorMessage**(): `string`

Returns the error message from the last data retrieval attempt, if any.

#### Returns

`string`

#### Inherited from

`DataProvider.getErrorMessage`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:108

***

### getFiltering()

> **getFiltering**(): `null` \| `FilterExpression`

Gets the current filtering.

#### Returns

`null` \| `FilterExpression`

#### Inherited from

`DataProvider.getFiltering`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:235

***

### getLinking()

> **getLinking**(): `LinkEntityExposedExpression`[]

Retrieves the link entity expressions used to join related entities.

#### Returns

`LinkEntityExposedExpression`[]

#### Inherited from

`DataProvider.getLinking`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:247

***

### getPaging()

> **getPaging**(): `Paging` & `object`

Returns paging information (like page number, total pages, etc.).

#### Returns

`Paging` & `object`

The paging information.

#### Inherited from

`DataProvider.getPaging`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:166

***

### getRawData()

> **getRawData**(): `null` \| `object`[]

Retrieves raw provider data.

#### Returns

`null` \| `object`[]

#### Inherited from

`DataProvider.getRawData`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:149

***

### getRawRecordData()

> **getRawRecordData**(`recordId`): `null` \| `object`

Retrieves the raw record data for a given record by its ID.

#### Parameters

• **recordId**: `string`

#### Returns

`null` \| `object`

#### Inherited from

`DataProvider.getRawRecordData`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:146

***

### getRecordCurrencySymbol()

> **getRecordCurrencySymbol**(`record`, `columnName`): `string`

Retrieves the currency symbol for a specific column in a record.

#### Parameters

• **record**: [`IRecord`](../interfaces/IRecord.md)

• **columnName**: `string`

#### Returns

`string`

#### Inherited from

`DataProvider.getRecordCurrencySymbol`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:262

***

### getRecords()

> **getRecords**(): [`IRecord`](../interfaces/IRecord.md)[]

Returns the list of records.

#### Returns

[`IRecord`](../interfaces/IRecord.md)[]

A list of records.

#### Inherited from

`DataProvider.getRecords`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:205

***

### getSearchQuery()

> **getSearchQuery**(): `string`

Retrieves the search query string.

#### Returns

`string`

#### Inherited from

`DataProvider.getSearchQuery`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:241

***

### getSorting()

> **getSorting**(): `SortStatus`[]

Retrieves the current sorting criteria.

#### Returns

`SortStatus`[]

#### Inherited from

`DataProvider.getSorting`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:238

***

### getTitle()

> **getTitle**(): `string`

Returns the title provided by the data provider.

#### Returns

`string`

#### Inherited from

`DataProvider.getTitle`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:138

***

### getViewId()

> **getViewId**(): `string`

Returns the ID of the current view.

#### Returns

`string`

#### Inherited from

`DataProvider.getViewId`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:130

***

### hasInvalidChanges()

> **hasInvalidChanges**(): `boolean`

Whether the dataset has any records with invalid values.

#### Returns

`boolean`

#### Inherited from

`DataProvider.hasInvalidChanges`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:292

***

### isDirty()

> **isDirty**(): `boolean`

Checks if the dataset has unsaved changes.

#### Returns

`boolean`

#### Inherited from

`DataProvider.isDirty`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:295

***

### isError()

> **isError**(): `boolean`

Returns true if an error occurred during the last data retrieval process.

#### Returns

`boolean`

#### Inherited from

`DataProvider.isError`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:111

***

### isLoading()

> **isLoading**(): `boolean`

Indicates whether the data provider is currently loading.

#### Returns

`boolean`

True if loading, false otherwise.

#### Inherited from

`DataProvider.isLoading`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:250

***

### isValid()

> **isValid**(): `boolean`

Whether the provider contains only valid values.

#### Returns

`boolean`

#### Inherited from

`DataProvider.isValid`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:298

***

### refresh()

> **refresh**(): `Promise`\<[`IRecord`](../interfaces/IRecord.md)[]\>

Refreshes the records list and returns the refreshed records.

#### Returns

`Promise`\<[`IRecord`](../interfaces/IRecord.md)[]\>

A promise resolving to a list of refreshed records.

#### Inherited from

`DataProvider.refresh`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:153

***

### setColumns()

> **setColumns**(`columns`): `void`

Sets the columns for the dataset.

#### Parameters

• **columns**: [`IColumn`](../interfaces/IColumn.md)[]

#### Returns

`void`

#### Inherited from

`DataProvider.setColumns`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:218

***

### setCurrencies()

> **setCurrencies**(`currencies`): `void`

Sets the currencies the dataset can work with.

#### Parameters

• **currencies**: [`ICurrency`](../interfaces/ICurrency.md)[]

#### Returns

`void`

#### Inherited from

`DataProvider.setCurrencies`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:259

***

### setError()

> **setError**(`value`, `errorMessage`?): `void`

Sets the error state of the provider.

#### Parameters

• **value**: `boolean`

• **errorMessage?**: `string`

#### Returns

`void`

#### Inherited from

`DataProvider.setError`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:115

***

### setFiltering()

> **setFiltering**(`filtering`): `void`

Sets the latest filtering information.

#### Parameters

• **filtering**: `null` \| `FilterExpression`

The filtering criteria, or null if no filter is applied.

#### Returns

`void`

#### Inherited from

`DataProvider.setFiltering`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:229

***

### setInterceptor()

> **setInterceptor**\<`K`\>(`name`, `interceptor`): `void`

Allows you to define interceptors to customize data flows in Dataset.

#### Type Parameters

• **K** *extends* `"columns"`

#### Parameters

• **name**: `K`

• **interceptor**: [`IDatasetInterceptors`](../interfaces/IDatasetInterceptors.md)\[`K`\]

#### Returns

`void`

#### Inherited from

`DataProvider.setInterceptor`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:288

***

### setLinking()

> **setLinking**(`expr`): `void`

Sets the link entity expressions for joining related entities.

#### Parameters

• **expr**: `LinkEntityExposedExpression`[]

#### Returns

`void`

#### Inherited from

`DataProvider.setLinking`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:232

***

### setLoading()

> **setLoading**(`value`): `void`

Sets whether the data provider is currently loading.

#### Parameters

• **value**: `boolean`

#### Returns

`void`

#### Inherited from

`DataProvider.setLoading`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:253

***

### setSearchQuery()

> **setSearchQuery**(`query`?): `void`

Sets a new search query for filtering.

#### Parameters

• **query?**: `string`

#### Returns

`void`

#### Inherited from

`DataProvider.setSearchQuery`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:244

***

### setSorting()

> **setSorting**(`sorting`): `void`

Sets the latest sorting information.

#### Parameters

• **sorting**: `SortStatus`[]

The latest sorting details as an array of SortStatus objects.

#### Returns

`void`

#### Inherited from

`DataProvider.setSorting`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:226

***

### setTitle()

> **setTitle**(`title`): `void`

Sets the dataset's title.

#### Parameters

• **title**: `string`

#### Returns

`void`

#### Inherited from

`DataProvider.setTitle`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:142

***

### toggleRecordFieldValidity()

> **toggleRecordFieldValidity**(`recordFieldId`, `isValid`): `void`

Internal method. Toggles whether a record field is valid or not.

#### Parameters

• **recordFieldId**: `string`

• **isValid**: `boolean`

#### Returns

`void`

#### Inherited from

`DataProvider.toggleRecordFieldValidity`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:302
