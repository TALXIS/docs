Main interface for data provider implementations.

## Extends

- `IEventEmitter`\<[`IDataProviderEventListeners`](IDataProviderEventListeners.md)\>

## Extended by

- [`IMemoryProvider`](IMemoryProvider.md)
- [`IFetchXmlDataProvider`](IFetchXmlDataProvider.md)

## Properties

### addEventListener()

> **addEventListener**: \<`K`\>(`event`, `eventListener`) => `void`

Allows defining a listener method that will trigger when a specific event occurs.

#### Type Parameters

• **K** *extends* keyof [`IDataProviderEventListeners`](IDataProviderEventListeners.md)

#### Parameters

• **event**: `K`

• **eventListener**: [`IDataProviderEventListeners`](IDataProviderEventListeners.md)\[`K`\]

#### Returns

`void`

#### Overrides

`IEventEmitter.addEventListener`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:694

***

### aggregation

> **aggregation**: [`IAggregation`](IAggregation.md)

Dataset aggregations.

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:750

***

### clearChanges()

> **clearChanges**: () => `void`

Clears all unsaved changes in the data provider.

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:866

***

### clearSelectedRecordIds()

> **clearSelectedRecordIds**: () => `void`

Clears the currently selected record IDs.
been used to create the child data provider.

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:841

***

### createNewDataProvider()

> **createNewDataProvider**: (`eventBubbleOptions`?) => [`IDataProvider`](IDataProvider.md)

Creates new Data Provider with the same settings as current one.
eventBubbleOptions - Options to control which events should bubble up from the new data provider to the parent.

#### Parameters

• **eventBubbleOptions?**: [`IEventBubbleOptions`](IEventBubbleOptions.md)

#### Returns

[`IDataProvider`](IDataProvider.md)

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:771

***

### destroy()

> **destroy**: () => `void`

Destroys the provider and clears all resources.

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:730

***

### getCurrencies()

> **getCurrencies**: () => [`ICurrency`](ICurrency.md)[]

Gets the currencies the provider is able to work with.

#### Returns

[`ICurrency`](ICurrency.md)[]

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:573

***

### getCustomProperty()

> **getCustomProperty**: (`name`) => `any`

Gets a custom property from the data provider.

#### Parameters

• **name**: `string`

#### Returns

`any`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:720

***

### getDataSource()

> **getDataSource**: () => `any`

Gets the current Data Source.

#### Returns

`any`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:652

***

### getDirtyRecordIds()

> **getDirtyRecordIds**: () => `string`[]

Returns the IDs of records that have unsaved changes.

#### Returns

`string`[]

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:856

***

### getEntityName()

> **getEntityName**: () => `string`

Returns the name of the associated entity.

#### Returns

`string`

The entity name.

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:664

***

### getGroupedRecordDataProviders()

> **getGroupedRecordDataProviders**: (`allLevels`?) => [`IDataProvider`](IDataProvider.md)[]

Returns all direct grouped records data providers.

#### Parameters

• **allLevels?**: `boolean`

If true, returns grouped record providers at all levels. If false, returns only direct children.

#### Returns

[`IDataProvider`](IDataProvider.md)[]

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:778

***

### getInvalidRecordIds()

> **getInvalidRecordIds**: () => `string`[]

Returns the IDs of records that have invalid values.

#### Returns

`string`[]

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:861

***

### getMetadata()

> **getMetadata**: () => `any`

Gets the associated entity metadata.

#### Returns

`any`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:633

***

### getNestingLevel()

> **getNestingLevel**: () => `number`

Returns how deep the data provider is nested.

#### Returns

`number`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:846

***

### getParentDataProvider()

> **getParentDataProvider**: () => `null` \| [`IDataProvider`](IDataProvider.md)

Gets the provider that has been used to create this data provider.

#### Returns

`null` \| [`IDataProvider`](IDataProvider.md)

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:765

***

### getParentRecordId()

> **getParentRecordId**: () => `string`

Returns the parent record ID, if this data provider is a child of another data provider.

#### Returns

`string`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:760

***

### getProperty()

> **getProperty**: \<`K`\>(`name`) => [`IDataProviderProperties`](IDataProviderProperties.md)\[`K`\]

Gets the defined property.

#### Type Parameters

• **K** *extends* keyof [`IDataProviderProperties`](IDataProviderProperties.md)

#### Parameters

• **name**: `K`

#### Returns

[`IDataProviderProperties`](IDataProviderProperties.md)\[`K`\]

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:709

***

### getQuickFindColumns()

> **getQuickFindColumns**: () => [`IColumn`](IColumn.md)[]

Returns the columns that are used for quick find search.

#### Returns

[`IColumn`](IColumn.md)[]

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:879

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

src/utils/dataset/data-providers/interfaces.ts:689

***

### getSearchQuery()

> **getSearchQuery**: () => `string`

Retrieves the search query string.

#### Returns

`string`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:679

***

### getSelectedRecordIds()

> **getSelectedRecordIds**: (`options`?) => `string`[]

Returns the currently selected record IDs.

#### Parameters

• **options?**

• **options.includeChildrenRecordIds?**: `boolean`

If true, includes record IDs from child data providers. Defaults to `true`.

• **options.includeGroupRecordIds?**: `boolean`

If true, includes group record IDs in the result. Defaults to `false`.

#### Returns

`string`[]

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:819

***

### getSortedRecordIds()

> **getSortedRecordIds**: () => `string`[]

Returns the current record IDs sorted by the current sorting criteria.

#### Returns

`string`[]

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:813

***

### getSummarizationType()

> **getSummarizationType**: () => [`DataProviderSummarizationType`](../type-aliases/DataProviderSummarizationType.md)

What type of summary operations this provider has applied.
- `none` - no summarization is applied
- `aggregation` - only aggregation is applied, such as sum, average, etc (no grouping).
- `grouping` - grouping is applied, aggregation can be applied as well

#### Returns

[`DataProviderSummarizationType`](../type-aliases/DataProviderSummarizationType.md)

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:808

***

### getTopLevelDataProvider()

> **getTopLevelDataProvider**: () => [`IDataProvider`](IDataProvider.md)

If called on a nested data provider, returns the top-level data provider that servers as the root ancestor for all nested data providers.
I called from a top-level data provider, it returns itself.

#### Returns

[`IDataProvider`](IDataProvider.md)

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:795

***

### getViewId()

> **getViewId**: () => `string`

Returns the ID of the current view.

#### Returns

`string`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:669

***

### grouping

> **grouping**: [`IGrouping`](IGrouping.md)

Dataset grouping.

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:755

***

### isDestroyed()

> **isDestroyed**: () => `boolean`

Whether the data provider has been destroyed.

#### Returns

`boolean`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:725

***

### isDirty()

> **isDirty**: () => `boolean`

Checks if the dataset has unsaved changes.

#### Returns

`boolean`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:623

***

### isLoading()

> **isLoading**: () => `boolean`

Indicates whether the data provider is currently loading.

#### Returns

`boolean`

True if loading, false otherwise.

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:658

***

### isTopLevelDataProvider()

> **isTopLevelDataProvider**: () => `boolean`

Returns true if the data provider is a top-level data provider (not a child of another data provider).

#### Returns

`boolean`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:800

***

### isValid()

> **isValid**: () => `boolean`

Whether the provider contains only valid values.

#### Returns

`boolean`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:628

***

### newRecord()

> **newRecord**: (`options`?) => [`IRecord`](IRecord.md)

Returns instance of a new record associated with the data provider.

#### Parameters

• **options?**

• **options.addToDataset?**: `boolean`

If true, the new record will be added to the dataset's record collection.
NOTE: Appending a new record to a dataset is not implemented yet, so this option has currently no effect.
All records created via this method are standalone and not part of the dataset's record collection until such functionality is implemented.

#### Returns

[`IRecord`](IRecord.md)

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:874

***

### openDatasetItem()

> **openDatasetItem**: (`entityReference`) => `void`

Can be used to specify what default action happens for record opening on a specific provider.

#### Parameters

• **entityReference**: `EntityReference`

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:618

***

### requestRender()

> **requestRender**: () => `void`

Request a render of all components subscribed to the `onRenderRequested` event.

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:740

***

### retrieveRecordCommand()

> **retrieveRecordCommand**: (`options`?) => `Promise`\<[`ICommand`](ICommand.md)[]\>

Retrieve record's associated commands. This method should be used to fetch inline ribbon.

#### Parameters

• **options?**: [`IRetrieveRecordCommandOptions`](IRetrieveRecordCommandOptions.md)

#### Returns

`Promise`\<[`ICommand`](ICommand.md)[]\>

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:745

***

### setCurrencies()

> **setCurrencies**: (`currencies`) => `void`

Sets the currencies the dataset can work with.

#### Parameters

• **currencies**: [`ICurrency`](ICurrency.md)[]

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:578

***

### setCustomProperty()

> **setCustomProperty**: (`name`, `value`) => `void`

Allows you to set custom properties on the data provider. You can use this to store any custom information you need.

#### Parameters

• **name**: `string`

• **value**: `any`

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:716

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

src/utils/dataset/data-providers/interfaces.ts:646

***

### setError()

> **setError**: (`error`, `errorMessage`?) => `void`

Sets the error state of the provider.

#### Parameters

• **error**: `boolean`

• **errorMessage?**: `string`

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:735

***

### setInterceptor()

> **setInterceptor**: \<`K`\>(`name`, `interceptor`) => `void`

Allows you to define interceptors to customize data flows in Dataset.

#### Type Parameters

• **K** *extends* keyof [`IDataProviderInterceptors`](IDataProviderInterceptors.md)

#### Parameters

• **name**: `K`

• **interceptor**: [`IInterceptor`](../type-aliases/IInterceptor.md)\<[`IDataProviderInterceptors`](IDataProviderInterceptors.md), `K`\>

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:699

***

### setLoading()

> **setLoading**: (`value`) => `void`

Sets whether the data provider is currently loading.

#### Parameters

• **value**: `boolean`

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:684

***

### setMetadata()

> **setMetadata**: (`metadata`) => `void`

Allows you to change the initial associated entity metadata.

#### Parameters

• **metadata**: `any`

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:639

***

### setProperty()

> **setProperty**: \<`K`\>(`name`, `value`) => `void`

Allows settings of additional properties on data provider.

#### Type Parameters

• **K** *extends* keyof [`IDataProviderProperties`](IDataProviderProperties.md)

#### Parameters

• **name**: `K`

• **value**: [`IDataProviderProperties`](IDataProviderProperties.md)\[`K`\]

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:704

***

### setSelectedRecordIds()

> **setSelectedRecordIds**: (`ids`) => `void`

Sets the currently selected record IDs.

#### Parameters

• **ids**: `string`[]

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:829

***

### setTitle()

> **setTitle**: (`title`) => `void`

Sets the dataset's title.

#### Parameters

• **title**: `string`

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:568

***

### setViewId()

> **setViewId**: (`id`) => `void`

Sets the id of the current view

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:674

***

### toggleSelectedRecordId()

> **toggleSelectedRecordId**: (`recordId`, `options`?) => `void`

Toggles the selection state of a record ID.

#### Parameters

• **recordId**: `string`

• **options?**

• **options.clearExisting?**: `boolean`

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:835

## Methods

### createGroupedRecordDataProvider()

> **createGroupedRecordDataProvider**(`group`): [`IDataProvider`](IDataProvider.md)

Returns a child data provider that can be used to retrieve grouped records. If a provider for this group already exists, it will be returned instead.

#### Parameters

• **group**: [`IRecord`](IRecord.md)

The record representing the group for which to retrieve child records.

#### Returns

[`IDataProvider`](IDataProvider.md)

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:784

***

### getColumns()

> **getColumns**(): [`IColumn`](IColumn.md)[]

Returns current columns

#### Returns

[`IColumn`](IColumn.md)[]

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:540

***

### getColumnsMap()

> **getColumnsMap**(): `object`

Returns a map of all columns that have been defined for the provider. Also includes columns that have been deleted via `setColumns`.

#### Returns

`object`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:546

***

### getErrorMessage()

> **getErrorMessage**(): `string`

Returns the error message from the last data retrieval attempt, if any.

#### Returns

`string`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:491

***

### getFiltering()

> **getFiltering**(): `null` \| `FilterExpression`

Gets the current filtering.

#### Returns

`null` \| `FilterExpression`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:588

***

### getGroupedRecordDataProvider()

> **getGroupedRecordDataProvider**(`groupedRecordId`): `null` \| [`IDataProvider`](IDataProvider.md)

Returns a child data provider for a specific parent record ID.

#### Parameters

• **groupedRecordId**: `string`

#### Returns

`null` \| [`IDataProvider`](IDataProvider.md)

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:789

***

### getLinking()

> **getLinking**(): [`ILinkEntityExposedExpression`](ILinkEntityExposedExpression.md)[]

Retrieves the link entity expressions used to join related entities.

#### Returns

[`ILinkEntityExposedExpression`](ILinkEntityExposedExpression.md)[]

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:598

***

### getPaging()

> **getPaging**(): `Omit`\<`Paging`, `"loadNextPage"` \| `"loadExactPage"` \| `"loadPreviousPage"`\> & `object`

Returns paging information (like page number, total pages, etc.).

#### Returns

`Omit`\<`Paging`, `"loadNextPage"` \| `"loadExactPage"` \| `"loadPreviousPage"`\> & `object`

The paging information.

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:521

***

### getRawData()

> **getRawData**(): [`IRawRecord`](IRawRecord.md)[]

Returns an array of raw data records.

#### Returns

[`IRawRecord`](IRawRecord.md)[]

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:603

***

### getRawDataMap()

> **getRawDataMap**(): `object`

Same as `getRawData`, but returns a map instead of array for fast lookups.

#### Returns

`object`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:608

***

### getRecordIndex()

> **getRecordIndex**(`recordId`): `number`

Returns array index of a record by it's ID. This index corresponds to the record's position in an array that's return by the

#### Parameters

• **recordId**: `string`

#### Returns

`number`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:851

***

### getRecords()

> **getRecords**(): [`IRecord`](IRecord.md)[]

Returns the list of records.

#### Returns

[`IRecord`](IRecord.md)[]

A list of records.

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:515

***

### getSorting()

> **getSorting**(): `SortStatus`[]

Retrieves the current sorting criteria.

#### Returns

`SortStatus`[]

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:593

***

### getTitle()

> **getTitle**(): `string`

Returns the title provided by the data provider.

#### Returns

`string`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:563

***

### isError()

> **isError**(): `boolean`

Returns true if an error occurred during the last data retrieval process.

#### Returns

`boolean`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:486

***

### refresh()

> **refresh**(): `Promise`\<[`IRecord`](IRecord.md)[]\>

Refreshes the records list and returns the refreshed records.

#### Returns

`Promise`\<[`IRecord`](IRecord.md)[]\>

A promise resolving to a list of refreshed records.

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:509

***

### save()

> **save**(`records`?): `Promise`\<[`IRecordSaveOperationResult`](IRecordSaveOperationResult.md)[]\>

Saves the provided record to the database.

#### Parameters

• **records?**: [`IRecord`](IRecord.md)[]

The records to save. If not provided, all dirty records will be saved.

#### Returns

`Promise`\<[`IRecordSaveOperationResult`](IRecordSaveOperationResult.md)[]\>

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:558

***

### setColumns()

> **setColumns**(`columns`): `void`

Sets the columns for the dataset.

#### Parameters

• **columns**: `any`

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:552

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

src/utils/dataset/data-providers/interfaces.ts:503

***

### setLinking()

> **setLinking**(`expr`): `void`

Sets the link entity expressions for joining related entities.

#### Parameters

• **expr**: [`ILinkEntityExposedExpression`](ILinkEntityExposedExpression.md)[]

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:583

***

### setSearchQuery()

> **setSearchQuery**(`query`?): `void`

Sets a new search query for filtering.

#### Parameters

• **query?**: `string`

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:613

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

src/utils/dataset/data-providers/interfaces.ts:497
