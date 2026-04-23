Allows you to use in-memory array as Data Source.

## Extends

- `DataProvider`

## Implements

- [`IMemoryProvider`](../interfaces/IMemoryProvider.md)

## Accessors

### aggregation

> `get` **aggregation**(): [`IAggregation`](../interfaces/IAggregation.md)

Dataset aggregations.

#### Returns

[`IAggregation`](../interfaces/IAggregation.md)

Dataset aggregations.

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`aggregation`](../interfaces/IMemoryProvider.md#aggregation)

#### Inherited from

`DataProvider.aggregation`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:410

***

### grouping

> `get` **grouping**(): [`IGrouping`](../interfaces/IGrouping.md)

Dataset grouping.

#### Returns

[`IGrouping`](../interfaces/IGrouping.md)

Dataset grouping.

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`grouping`](../interfaces/IMemoryProvider.md#grouping)

#### Inherited from

`DataProvider.grouping`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:442

## Methods

### clearChanges()

> **clearChanges**(): `void`

Clears all unsaved changes in the data provider.

#### Returns

`void`

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`clearChanges`](../interfaces/IMemoryProvider.md#clearchanges)

#### Inherited from

`DataProvider.clearChanges`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:743

***

### clearSelectedRecordIds()

> **clearSelectedRecordIds**(): `void`

Clears the currently selected record IDs.
been used to create the child data provider.

#### Returns

`void`

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`clearSelectedRecordIds`](../interfaces/IMemoryProvider.md#clearselectedrecordids)

#### Inherited from

`DataProvider.clearSelectedRecordIds`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:707

***

### createGroupedRecordDataProvider()

> **createGroupedRecordDataProvider**(`group`): [`IDataProvider`](../interfaces/IDataProvider.md)

Returns a child data provider that can be used to retrieve grouped records. If a provider for this group already exists, it will be returned instead.

#### Parameters

• **group**: [`IRecord`](../interfaces/IRecord.md)

The record representing the group for which to retrieve child records.

#### Returns

[`IDataProvider`](../interfaces/IDataProvider.md)

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`createGroupedRecordDataProvider`](../interfaces/IMemoryProvider.md#creategroupedrecorddataprovider)

#### Inherited from

`DataProvider.createGroupedRecordDataProvider`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:542

***

### createNewDataProvider()

> **createNewDataProvider**(`eventBubbleOptions`?): [`IDataProvider`](../interfaces/IDataProvider.md)

Creates new Data Provider with the same settings as current one.
eventBubbleOptions - Options to control which events should bubble up from the new data provider to the parent.

#### Parameters

• **eventBubbleOptions?**: [`IEventBubbleOptions`](../interfaces/IEventBubbleOptions.md)

#### Returns

[`IDataProvider`](../interfaces/IDataProvider.md)

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`createNewDataProvider`](../interfaces/IMemoryProvider.md#createnewdataprovider)

#### Inherited from

`DataProvider.createNewDataProvider`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:505

***

### getColumns()

> **getColumns**(): [`IColumn`](../interfaces/IColumn.md)[]

Returns current columns

#### Returns

[`IColumn`](../interfaces/IColumn.md)[]

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`getColumns`](../interfaces/IMemoryProvider.md#getcolumns)

#### Inherited from

`DataProvider.getColumns`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:262

***

### getColumnsMap()

> **getColumnsMap**(): `object`

Returns a map of all columns that have been defined for the provider. Also includes columns that have been deleted via `setColumns`.

#### Returns

`object`

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`getColumnsMap`](../interfaces/IMemoryProvider.md#getcolumnsmap)

#### Inherited from

`DataProvider.getColumnsMap`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:763

***

### getCurrencies()

> **getCurrencies**(): [`ICurrency`](../interfaces/ICurrency.md)[]

Gets the currencies the provider is able to work with.

#### Returns

[`ICurrency`](../interfaces/ICurrency.md)[]

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`getCurrencies`](../interfaces/IMemoryProvider.md#getcurrencies)

#### Inherited from

`DataProvider.getCurrencies`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:302

***

### getCustomProperty()

> **getCustomProperty**(`name`): `any`

Gets a custom property from the data provider.

#### Parameters

• **name**: `string`

#### Returns

`any`

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`getCustomProperty`](../interfaces/IMemoryProvider.md#getcustomproperty)

#### Inherited from

`DataProvider.getCustomProperty`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:191

***

### getDataSource()

> **getDataSource**(): `any`

Gets the current Data Source.

#### Returns

`any`

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`getDataSource`](../interfaces/IMemoryProvider.md#getdatasource)

#### Inherited from

`DataProvider.getDataSource`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:127

***

### getDirtyRecordIds()

> **getDirtyRecordIds**(): `string`[]

Returns the IDs of records that have unsaved changes.

#### Returns

`string`[]

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`getDirtyRecordIds`](../interfaces/IMemoryProvider.md#getdirtyrecordids)

#### Inherited from

`DataProvider.getDirtyRecordIds`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:352

***

### getEntityName()

> **getEntityName**(): `string`

Returns the name of the associated entity.

#### Returns

`string`

The entity name.

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`getEntityName`](../interfaces/IMemoryProvider.md#getentityname)

#### Inherited from

`DataProvider.getEntityName`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:156

***

### getErrorMessage()

> **getErrorMessage**(): `string`

Returns the error message from the last data retrieval attempt, if any.

#### Returns

`string`

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`getErrorMessage`](../interfaces/IMemoryProvider.md#geterrormessage)

#### Inherited from

`DataProvider.getErrorMessage`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:139

***

### getFiltering()

> **getFiltering**(): `null` \| `FilterExpression`

Gets the current filtering.

#### Returns

`null` \| `FilterExpression`

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`getFiltering`](../interfaces/IMemoryProvider.md#getfiltering)

#### Inherited from

`DataProvider.getFiltering`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:280

***

### getGroupedRecordDataProvider()

> **getGroupedRecordDataProvider**(`groupedRecordId`): `null` \| [`IDataProvider`](../interfaces/IDataProvider.md)

Returns a child data provider for a specific parent record ID.

#### Parameters

• **groupedRecordId**: `string`

#### Returns

`null` \| [`IDataProvider`](../interfaces/IDataProvider.md)

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`getGroupedRecordDataProvider`](../interfaces/IMemoryProvider.md#getgroupedrecorddataprovider)

#### Inherited from

`DataProvider.getGroupedRecordDataProvider`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:538

***

### getGroupedRecordDataProviders()

> **getGroupedRecordDataProviders**(`allLevels`?): [`IDataProvider`](../interfaces/IDataProvider.md)[]

Returns all direct grouped records data providers.

#### Parameters

• **allLevels?**: `boolean`

If true, returns grouped record providers at all levels. If false, returns only direct children.

#### Returns

[`IDataProvider`](../interfaces/IDataProvider.md)[]

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`getGroupedRecordDataProviders`](../interfaces/IMemoryProvider.md#getgroupedrecorddataproviders)

#### Inherited from

`DataProvider.getGroupedRecordDataProviders`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:494

***

### getInvalidRecordIds()

> **getInvalidRecordIds**(): `string`[]

Returns the IDs of records that have invalid values.

#### Returns

`string`[]

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`getInvalidRecordIds`](../interfaces/IMemoryProvider.md#getinvalidrecordids)

#### Inherited from

`DataProvider.getInvalidRecordIds`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:739

***

### getLinking()

> **getLinking**(): `LinkEntityExposedExpression`[]

Retrieves the link entity expressions used to join related entities.

#### Returns

`LinkEntityExposedExpression`[]

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`getLinking`](../interfaces/IMemoryProvider.md#getlinking)

#### Inherited from

`DataProvider.getLinking`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:292

***

### getMetadata()

> **getMetadata**(): `any`

Gets the associated entity metadata.

#### Returns

`any`

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`getMetadata`](../interfaces/IMemoryProvider.md#getmetadata)

#### Inherited from

`DataProvider.getMetadata`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:133

***

### getNestingLevel()

> **getNestingLevel**(): `number`

Returns how deep the data provider is nested.

#### Returns

`number`

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`getNestingLevel`](../interfaces/IMemoryProvider.md#getnestinglevel)

#### Inherited from

`DataProvider.getNestingLevel`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:731

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

> **reset**: () => `void`

###### Returns

`void`

##### setPageNumber()

> **setPageNumber**: (`pageNumber`) => `void`

###### Parameters

• **pageNumber**: `number`

###### Returns

`void`

##### setPageSize()

> **setPageSize**: (`pageSize`) => `void`

###### Parameters

• **pageSize**: `number`

###### Returns

`void`

##### totalResultCount

> **totalResultCount**: `number`

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`getPaging`](../interfaces/IMemoryProvider.md#getpaging)

#### Inherited from

`DataProvider.getPaging`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:231

***

### getParentDataProvider()

> **getParentDataProvider**(): `null` \| [`IDataProvider`](../interfaces/IDataProvider.md)

Gets the provider that has been used to create this data provider.

#### Returns

`null` \| [`IDataProvider`](../interfaces/IDataProvider.md)

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`getParentDataProvider`](../interfaces/IMemoryProvider.md#getparentdataprovider)

#### Inherited from

`DataProvider.getParentDataProvider`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:615

***

### getParentRecordId()

> **getParentRecordId**(): `string`

Returns the parent record ID, if this data provider is a child of another data provider.

#### Returns

`string`

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`getParentRecordId`](../interfaces/IMemoryProvider.md#getparentrecordid)

#### Inherited from

`DataProvider.getParentRecordId`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:735

***

### getProperty()

> **getProperty**\<`K`\>(`name`): [`IDataProviderProperties`](../interfaces/IDataProviderProperties.md)\[`K`\]

Gets the defined property.

#### Type Parameters

• **K** *extends* keyof [`IDataProviderProperties`](../interfaces/IDataProviderProperties.md)

#### Parameters

• **name**: `K`

#### Returns

[`IDataProviderProperties`](../interfaces/IDataProviderProperties.md)\[`K`\]

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`getProperty`](../interfaces/IMemoryProvider.md#getproperty)

#### Inherited from

`DataProvider.getProperty`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:182

***

### getQuickFindColumns()

> **getQuickFindColumns**(): [`IColumn`](../interfaces/IColumn.md)[]

Returns the columns that are used for quick find search.

#### Returns

[`IColumn`](../interfaces/IColumn.md)[]

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`getQuickFindColumns`](../interfaces/IMemoryProvider.md#getquickfindcolumns)

#### Inherited from

`DataProvider.getQuickFindColumns`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:781

***

### getRawData()

> **getRawData**(): [`IRawRecord`](../interfaces/IRawRecord.md)[]

Returns an array of raw data records.

#### Returns

[`IRawRecord`](../interfaces/IRawRecord.md)[]

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`getRawData`](../interfaces/IMemoryProvider.md#getrawdata)

#### Inherited from

`DataProvider.getRawData`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:176

***

### getRecordCurrencySymbol()

> **getRecordCurrencySymbol**(`record`, `columnName`): `string`

Retrieves the currency symbol for a specific column in a record.

#### Parameters

• **record**: [`IRecord`](../interfaces/IRecord.md)

• **columnName**: `string`

#### Returns

`string`

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`getRecordCurrencySymbol`](../interfaces/IMemoryProvider.md#getrecordcurrencysymbol)

#### Inherited from

`DataProvider.getRecordCurrencySymbol`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:311

***

### getRecordIndex()

> **getRecordIndex**(`recordId`): `number`

Returns array index of a record by it's ID. This index corresponds to the record's position in an array that's return by the

#### Parameters

• **recordId**: `string`

#### Returns

`number`

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`getRecordIndex`](../interfaces/IMemoryProvider.md#getrecordindex)

#### Inherited from

`DataProvider.getRecordIndex`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:755

***

### getRecords()

> **getRecords**(): [`IRecord`](../interfaces/IRecord.md)[]

Returns the list of records.

#### Returns

[`IRecord`](../interfaces/IRecord.md)[]

A list of records.

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`getRecords`](../interfaces/IMemoryProvider.md#getrecords)

#### Inherited from

`DataProvider.getRecords`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:711

***

### getSearchQuery()

> **getSearchQuery**(): `string`

Retrieves the search query string.

#### Returns

`string`

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`getSearchQuery`](../interfaces/IMemoryProvider.md#getsearchquery)

#### Inherited from

`DataProvider.getSearchQuery`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:286

***

### getSelectedRecordIds()

> **getSelectedRecordIds**(`options`?): `string`[]

Returns the currently selected record IDs.

#### Parameters

• **options?**

• **options.includeChildrenRecordIds?**: `boolean`

If true, includes record IDs from child data providers. Defaults to `true`.

• **options.includeGroupRecordIds?**: `boolean`

If true, includes group record IDs in the result. Defaults to `false`.

#### Returns

`string`[]

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`getSelectedRecordIds`](../interfaces/IMemoryProvider.md#getselectedrecordids)

#### Inherited from

`DataProvider.getSelectedRecordIds`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:635

***

### getSortedRecordIds()

> **getSortedRecordIds**(): `string`[]

Returns the current record IDs sorted by the current sorting criteria.

#### Returns

`string`[]

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`getSortedRecordIds`](../interfaces/IMemoryProvider.md#getsortedrecordids)

#### Inherited from

`DataProvider.getSortedRecordIds`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:631

***

### getSorting()

> **getSorting**(): `SortStatus`[]

Retrieves the current sorting criteria.

#### Returns

`SortStatus`[]

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`getSorting`](../interfaces/IMemoryProvider.md#getsorting)

#### Inherited from

`DataProvider.getSorting`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:283

***

### getSummarizationType()

> **getSummarizationType**(): [`DataProviderSummarizationType`](../type-aliases/DataProviderSummarizationType.md)

What type of summary operations this provider has applied.
- `none` - no summarization is applied
- `aggregation` - only aggregation is applied, such as sum, average, etc (no grouping).
- `grouping` - grouping is applied, aggregation can be applied as well

#### Returns

[`DataProviderSummarizationType`](../type-aliases/DataProviderSummarizationType.md)

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`getSummarizationType`](../interfaces/IMemoryProvider.md#getsummarizationtype)

#### Inherited from

`DataProvider.getSummarizationType`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:619

***

### getTitle()

> **getTitle**(): `string`

Returns the title provided by the data provider.

#### Returns

`string`

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`getTitle`](../interfaces/IMemoryProvider.md#gettitle)

#### Inherited from

`DataProvider.getTitle`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:168

***

### getTopLevelDataProvider()

> **getTopLevelDataProvider**(): [`IDataProvider`](../interfaces/IDataProvider.md)

If called on a nested data provider, returns the top-level data provider that servers as the root ancestor for all nested data providers.
I called from a top-level data provider, it returns itself.

#### Returns

[`IDataProvider`](../interfaces/IDataProvider.md)

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`getTopLevelDataProvider`](../interfaces/IMemoryProvider.md#gettopleveldataprovider)

#### Inherited from

`DataProvider.getTopLevelDataProvider`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:603

***

### getViewId()

> **getViewId**(): `string`

Returns the ID of the current view.

#### Returns

`string`

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`getViewId`](../interfaces/IMemoryProvider.md#getviewid)

#### Inherited from

`DataProvider.getViewId`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:160

***

### isDestroyed()

> **isDestroyed**(): `boolean`

Whether the data provider has been destroyed.

#### Returns

`boolean`

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`isDestroyed`](../interfaces/IMemoryProvider.md#isdestroyed)

#### Inherited from

`DataProvider.isDestroyed`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:179

***

### isDirty()

> **isDirty**(): `boolean`

Checks if the dataset has unsaved changes.

#### Returns

`boolean`

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`isDirty`](../interfaces/IMemoryProvider.md#isdirty)

#### Inherited from

`DataProvider.isDirty`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:339

***

### isError()

> **isError**(): `boolean`

Returns true if an error occurred during the last data retrieval process.

#### Returns

`boolean`

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`isError`](../interfaces/IMemoryProvider.md#iserror)

#### Inherited from

`DataProvider.isError`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:142

***

### isLoading()

> **isLoading**(): `boolean`

Indicates whether the data provider is currently loading.

#### Returns

`boolean`

True if loading, false otherwise.

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`isLoading`](../interfaces/IMemoryProvider.md#isloading)

#### Inherited from

`DataProvider.isLoading`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:295

***

### isTopLevelDataProvider()

> **isTopLevelDataProvider**(): `boolean`

Returns true if the data provider is a top-level data provider (not a child of another data provider).

#### Returns

`boolean`

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`isTopLevelDataProvider`](../interfaces/IMemoryProvider.md#istopleveldataprovider)

#### Inherited from

`DataProvider.isTopLevelDataProvider`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:611

***

### isValid()

> **isValid**(): `boolean`

Whether the provider contains only valid values.

#### Returns

`boolean`

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`isValid`](../interfaces/IMemoryProvider.md#isvalid)

#### Inherited from

`DataProvider.isValid`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:349

***

### openDatasetItem()

> **openDatasetItem**(`entityReference`): `void`

Can be used to specify what default action happens for record opening on a specific provider.

#### Parameters

• **entityReference**: `EntityReference`

#### Returns

`void`

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`openDatasetItem`](../interfaces/IMemoryProvider.md#opendatasetitem)

#### Inherited from

`DataProvider.openDatasetItem`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:87

***

### refresh()

> **refresh**(): `Promise`\<[`IRecord`](../interfaces/IRecord.md)[]\>

Refreshes the records list and returns the refreshed records.

#### Returns

`Promise`\<[`IRecord`](../interfaces/IRecord.md)[]\>

A promise resolving to a list of refreshed records.

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`refresh`](../interfaces/IMemoryProvider.md#refresh)

#### Inherited from

`DataProvider.refresh`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:197

***

### requestRender()

> **requestRender**(): `void`

Request a render of all components subscribed to the `onRenderRequested` event.

#### Returns

`void`

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`requestRender`](../interfaces/IMemoryProvider.md#requestrender)

#### Inherited from

`DataProvider.requestRender`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:355

***

### retrieveRecordCommand()

> **retrieveRecordCommand**(`options`?): `Promise`\<[`ICommand`](../interfaces/ICommand.md)[]\>

Retrieve record's associated commands. This method should be used to fetch inline ribbon.

#### Parameters

• **options?**: [`IRetrieveRecordCommandOptions`](../interfaces/IRetrieveRecordCommandOptions.md)

#### Returns

`Promise`\<[`ICommand`](../interfaces/ICommand.md)[]\>

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`retrieveRecordCommand`](../interfaces/IMemoryProvider.md#retrieverecordcommand)

#### Inherited from

`DataProvider.retrieveRecordCommand`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:359

***

### save()

> **save**(`records`?): `Promise`\<[`IRecordSaveOperationResult`](../interfaces/IRecordSaveOperationResult.md)[]\>

Saves the provided record to the database.

#### Parameters

• **records?**: [`IRecord`](../interfaces/IRecord.md)[]

The records to save. If not provided, all dirty records will be saved.

#### Returns

`Promise`\<[`IRecordSaveOperationResult`](../interfaces/IRecordSaveOperationResult.md)[]\>

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`save`](../interfaces/IMemoryProvider.md#save)

#### Inherited from

`DataProvider.save`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:382

***

### setColumns()

> **setColumns**(`columns`): `void`

Sets the columns for the dataset.

#### Parameters

• **columns**: [`IColumn`](../interfaces/IColumn.md)[]

#### Returns

`void`

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`setColumns`](../interfaces/IMemoryProvider.md#setcolumns)

#### Inherited from

`DataProvider.setColumns`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:266

***

### setCurrencies()

> **setCurrencies**(`currencies`): `void`

Sets the currencies the dataset can work with.

#### Parameters

• **currencies**: [`ICurrency`](../interfaces/ICurrency.md)[]

#### Returns

`void`

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`setCurrencies`](../interfaces/IMemoryProvider.md#setcurrencies)

#### Inherited from

`DataProvider.setCurrencies`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:305

***

### setCustomProperty()

> **setCustomProperty**(`name`, `value`): `void`

Allows you to set custom properties on the data provider. You can use this to store any custom information you need.

#### Parameters

• **name**: `string`

• **value**: `any`

#### Returns

`void`

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`setCustomProperty`](../interfaces/IMemoryProvider.md#setcustomproperty)

#### Inherited from

`DataProvider.setCustomProperty`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:188

***

### setError()

> **setError**(`value`, `errorMessage`?): `void`

Sets the error state of the provider.

#### Parameters

• **value**: `boolean`

• **errorMessage?**: `string`

#### Returns

`void`

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`setError`](../interfaces/IMemoryProvider.md#seterror)

#### Inherited from

`DataProvider.setError`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:145

***

### setFiltering()

> **setFiltering**(`filtering`): `void`

Sets the latest filtering information.

#### Parameters

• **filtering**: `null` \| `FilterExpression`

The filtering criteria, or null if no filter is applied.

#### Returns

`void`

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`setFiltering`](../interfaces/IMemoryProvider.md#setfiltering)

#### Inherited from

`DataProvider.setFiltering`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:274

***

### setLinking()

> **setLinking**(`expr`): `void`

Sets the link entity expressions for joining related entities.

#### Parameters

• **expr**: `LinkEntityExposedExpression`[]

#### Returns

`void`

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`setLinking`](../interfaces/IMemoryProvider.md#setlinking)

#### Inherited from

`DataProvider.setLinking`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:277

***

### setLoading()

> **setLoading**(`value`): `void`

Sets whether the data provider is currently loading.

#### Parameters

• **value**: `boolean`

#### Returns

`void`

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`setLoading`](../interfaces/IMemoryProvider.md#setloading)

#### Inherited from

`DataProvider.setLoading`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:298

***

### setMetadata()

> **setMetadata**(`metadata`): `void`

Allows you to change the initial associated entity metadata.

#### Parameters

• **metadata**: `any`

#### Returns

`void`

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`setMetadata`](../interfaces/IMemoryProvider.md#setmetadata)

#### Inherited from

`DataProvider.setMetadata`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:136

***

### setProperty()

> **setProperty**\<`K`\>(`name`, `value`): `void`

Allows settings of additional properties on data provider.

#### Type Parameters

• **K** *extends* keyof [`IDataProviderProperties`](../interfaces/IDataProviderProperties.md)

#### Parameters

• **name**: `K`

• **value**: [`IDataProviderProperties`](../interfaces/IDataProviderProperties.md)\[`K`\]

#### Returns

`void`

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`setProperty`](../interfaces/IMemoryProvider.md#setproperty)

#### Inherited from

`DataProvider.setProperty`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:185

***

### setSearchQuery()

> **setSearchQuery**(`query`?): `void`

Sets a new search query for filtering.

#### Parameters

• **query?**: `string`

#### Returns

`void`

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`setSearchQuery`](../interfaces/IMemoryProvider.md#setsearchquery)

#### Inherited from

`DataProvider.setSearchQuery`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:289

***

### setSelectedRecordIds()

> **setSelectedRecordIds**(`ids`, `options`?): `void`

Sets the currently selected record IDs.

#### Parameters

• **ids**: `string`[]

• **options?**

• **options.\_\_bubbleUp?**: `boolean`

#### Returns

`void`

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`setSelectedRecordIds`](../interfaces/IMemoryProvider.md#setselectedrecordids)

#### Inherited from

`DataProvider.setSelectedRecordIds`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:652

***

### setSorting()

> **setSorting**(`sorting`): `void`

Sets the latest sorting information.

#### Parameters

• **sorting**: `SortStatus`[]

The latest sorting details as an array of SortStatus objects.

#### Returns

`void`

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`setSorting`](../interfaces/IMemoryProvider.md#setsorting)

#### Inherited from

`DataProvider.setSorting`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:271

***

### setTitle()

> **setTitle**(`title`): `void`

Sets the dataset's title.

#### Parameters

• **title**: `string`

#### Returns

`void`

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`setTitle`](../interfaces/IMemoryProvider.md#settitle)

#### Inherited from

`DataProvider.setTitle`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:172

***

### setViewId()

> **setViewId**(`viewId`): `string`

Sets the id of the current view

#### Parameters

• **viewId**: `string`

#### Returns

`string`

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`setViewId`](../interfaces/IMemoryProvider.md#setviewid)

#### Inherited from

`DataProvider.setViewId`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:164

***

### toggleSelectedRecordId()

> **toggleSelectedRecordId**(`recordId`, `options`?): `void`

Toggles the selection state of a record ID.

#### Parameters

• **recordId**: `string`

• **options?**

• **options.clearExisting?**: `boolean`

#### Returns

`void`

#### Implementation of

[`IMemoryProvider`](../interfaces/IMemoryProvider.md).[`toggleSelectedRecordId`](../interfaces/IMemoryProvider.md#toggleselectedrecordid)

#### Inherited from

`DataProvider.toggleSelectedRecordId`

#### Defined in

src/utils/dataset/data-providers/DataProvider.ts:691
