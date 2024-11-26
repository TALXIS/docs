Interface for the Data Provider.

## Properties

### addEventListener()

> **addEventListener**: \<`K`\>(`event`, `eventListener`) => `void`

Allows defining a listener method that will trigger when a specific event occurs.

#### Type Parameters

• **K** *extends* keyof [`IDatasetEventListeners`](IDatasetEventListeners.md)

#### Parameters

• **event**: `K`

• **eventListener**: [`IDatasetEventListeners`](IDatasetEventListeners.md)\[`K`\]

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:240

***

### clearChanges()

> **clearChanges**: () => `void`

Clears any changes in the dataset, resetting all record values to their initial state.

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:182

***

### fireEventListeners()

> **fireEventListeners**: \<`K`\>(`event`, ...`par`) => `ReturnType`\<[`IDatasetEventListeners`](IDatasetEventListeners.md)\[`K`\]\>[]

Fires event listeners for a specific event.

#### Type Parameters

• **K** *extends* keyof [`IDatasetEventListeners`](IDatasetEventListeners.md)

#### Parameters

• **event**: `K`

• ...**par**: `Parameters`\<[`IDatasetEventListeners`](IDatasetEventListeners.md)\[`K`\]\>

#### Returns

`ReturnType`\<[`IDatasetEventListeners`](IDatasetEventListeners.md)\[`K`\]\>[]

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:245

***

### getChanges()

> **getChanges**: () => [`IRecordChanges`](IRecordChanges.md)

Retrieves the changes made to the records in the dataset.

#### Returns

[`IRecordChanges`](IRecordChanges.md)

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:177

***

### getCurrencies()

> **getCurrencies**: () => [`ICurrency`](ICurrency.md)[]

Gets the currencies the provider is able to work with.

#### Returns

[`ICurrency`](ICurrency.md)[]

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:122

***

### getDataSource()

> **getDataSource**: () => `any`

Gets the current Data Source.

#### Returns

`any`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:203

***

### getEntityName()

> **getEntityName**: () => `string`

Returns the name of the associated entity.

#### Returns

`string`

The entity name.

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:215

***

### getMetadata()

> **getMetadata**: () => `null` \| `EntityMetadata`

Gets the associated entity metadata.

#### Returns

`null` \| `EntityMetadata`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:187

***

### getRecordCurrencySymbol()

> **getRecordCurrencySymbol**: (`record`, `columnName`) => `string`

Retrieves the currency symbol for a specific column in a record.

#### Parameters

• **record**: [`IRecord`](IRecord.md)

• **columnName**: `string`

#### Returns

`string`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:235

***

### getSearchQuery()

> **getSearchQuery**: () => `string`

Retrieves the search query string.

#### Returns

`string`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:225

***

### getViewId()

> **getViewId**: () => `string`

Returns the ID of the current view.

#### Returns

`string`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:220

***

### hasInvalidChanges()

> **hasInvalidChanges**: () => `boolean`

Whether the dataset has any records with invalid values.

#### Returns

`boolean`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:167

***

### isDirty()

> **isDirty**: () => `boolean`

Checks if the dataset has unsaved changes.

#### Returns

`boolean`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:172

***

### isLoading()

> **isLoading**: () => `boolean`

Indicates whether the data provider is currently loading.

#### Returns

`boolean`

True if loading, false otherwise.

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:209

***

### openDatasetItem()

> **openDatasetItem**: (`entityReference`) => `void`

Can be used to specify what default action happens for record opening on a specific provider.

#### Parameters

• **entityReference**: `EntityReference`

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:162

***

### setCurrencies()

> **setCurrencies**: (`currencies`) => `void`

Sets the currencies the dataset can work with.

#### Parameters

• **currencies**: [`ICurrency`](ICurrency.md)[]

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:127

***

### setDataSource()

> **setDataSource**: (`dataSource`) => `void`

Allows you to change the initial Data Source.

#### Parameters

• **dataSource**: `any`

The new data source.

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:198

***

### setLoading()

> **setLoading**: (`value`) => `void`

Sets whether the data provider is currently loading.

#### Parameters

• **value**: `boolean`

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:230

***

### setMetadata()

> **setMetadata**: (`metadata`) => `void`

Allows you to change the initial associated entity metadata.

#### Parameters

• **metadata**: `EntityMetadata`

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:192

***

### setTitle()

> **setTitle**: (`title`) => `void`

Sets the dataset's title.

#### Parameters

• **title**: `string`

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:117

## Methods

### getColumns()

> **getColumns**(): [`IColumn`](IColumn.md)[]

Returns column information, such as column names and data types.

#### Returns

[`IColumn`](IColumn.md)[]

An array of column information objects.

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:97

***

### getErrorMessage()

> **getErrorMessage**(): `string`

Returns the error message from the last data retrieval attempt, if any.

#### Returns

`string`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:61

***

### getFiltering()

> **getFiltering**(): `null` \| `FilterExpression`

Gets the current filtering.

#### Returns

`null` \| `FilterExpression`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:137

***

### getLinking()

> **getLinking**(): `LinkEntityExposedExpression`[]

Retrieves the link entity expressions used to join related entities.

#### Returns

`LinkEntityExposedExpression`[]

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:147

***

### getPaging()

> **getPaging**(): `Paging` & `object`

Returns paging information (like page number, total pages, etc.).

#### Returns

`Paging` & `object`

The paging information.

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:91

***

### getRawRecordData()

> **getRawRecordData**(`recordId`): `null` \| `object`

Retrieves the raw record data for a given record by its ID.

#### Parameters

• **recordId**: `string`

#### Returns

`null` \| `object`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:152

***

### getRecords()

> **getRecords**(): [`IRecord`](IRecord.md)[]

Returns the list of records.

#### Returns

[`IRecord`](IRecord.md)[]

A list of records.

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:85

***

### getSorting()

> **getSorting**(): `SortStatus`[]

Retrieves the current sorting criteria.

#### Returns

`SortStatus`[]

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:142

***

### getTitle()

> **getTitle**(): `string`

Returns the title provided by the data provider.

#### Returns

`string`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:112

***

### isError()

> **isError**(): `boolean`

Returns true if an error occurred during the last data retrieval process.

#### Returns

`boolean`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:56

***

### refresh()

> **refresh**(): [`IRecord`](IRecord.md)[] \| `Promise`\<[`IRecord`](IRecord.md)[]\>

Refreshes the records list and returns the refreshed records.

#### Returns

[`IRecord`](IRecord.md)[] \| `Promise`\<[`IRecord`](IRecord.md)[]\>

A promise resolving to a list of refreshed records.

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:79

***

### save()

> **save**(`record`): `Promise`\<`void`\>

Saves the provided record to the database.

#### Parameters

• **record**: [`IRecord`](IRecord.md)

#### Returns

`Promise`\<`void`\>

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:107

***

### setColumns()

> **setColumns**(`columns`): `void`

Sets the columns for the dataset.

#### Parameters

• **columns**: `Column`[]

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:102

***

### setFiltering()

> **setFiltering**(`filtering`): `void`

Sets the latest filtering information.

#### Parameters

• **filtering**: `null` \| `FilterExpression`

The filtering criteria, or null if no filter is applied.

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:73

***

### setLinking()

> **setLinking**(`expr`): `void`

Sets the link entity expressions for joining related entities.

#### Parameters

• **expr**: `LinkEntityExposedExpression`[]

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:132

***

### setSearchQuery()

> **setSearchQuery**(`query`?): `void`

Sets a new search query for filtering.

#### Parameters

• **query?**: `string`

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:157

***

### setSorting()

> **setSorting**(`sorting`): `void`

Sets the latest sorting information.

#### Parameters

• **sorting**: `SortStatus`[]

The latest sorting details as an array of SortStatus objects.

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:67
