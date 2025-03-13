Dataset object. If a property is optional, it does not exists in Microsoft's dataset implementation.

## Extends

- `Omit`\<`ComponentFramework.PropertyTypes.DataSet`, `"filtering"` \| `"records"` \| `"columns"`\>

## Properties

### addColumn()?

> `optional` **addColumn**: (`name`, `entityAlias`?) => `void`

Adds column to the columnset

#### Parameters

• **name**: `string`

column name to be added to the columnset

• **entityAlias?**: `string`

entity alias for which the column name needs to be added

#### Returns

`void`

#### Inherited from

`Omit.addColumn`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:2244

***

### addEventListener()

> **addEventListener**: \<`K`\>(`event`, `eventListener`) => `void`

Allows to define listener method that will trigger when specific event occurs.

#### Type Parameters

• **K** *extends* keyof [`IDatasetEventListeners`](IDatasetEventListeners.md)

#### Parameters

• **event**: `K`

• **eventListener**: [`IDatasetEventListeners`](IDatasetEventListeners.md)\[`K`\]

#### Returns

`void`

#### Defined in

src/utils/dataset/interfaces.ts:332

***

### clearChanges()

> **clearChanges**: () => `void`

Clears any changes in the dataset, resetting all record values to their initial state.

#### Returns

`void`

#### Defined in

src/utils/dataset/interfaces.ts:322

***

### columns

> **columns**: [`IColumn`](IColumn.md)[]

Metadata about a column in a dataset. If the column name ends with __virtual, it tells the provider it should not try to fetch column metadata from its Data Source. In this case, you need to specify all the necessary metadata yourself. If a property is optional, it does not exists in Microsoft's dataset implementation.

#### Defined in

src/utils/dataset/interfaces.ts:227

***

### destroy()

> **destroy**: () => `void`

Destroyes the dataset.

#### Returns

`void`

#### Defined in

src/utils/dataset/interfaces.ts:342

***

### error

> **error**: `boolean`

True if encountered error while data retrieval

#### Inherited from

`Omit.error`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:2254

***

### errorMessage

> **errorMessage**: `string`

The error message associated with the last encountered error, if applicable

#### Inherited from

`Omit.errorMessage`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:2259

***

### filtering

> **filtering**: `Omit`\<`Filtering`, `"getFilter"`\> & `object`

Filter state for a dataset.

#### Type declaration

##### getFilter()

> **getFilter**: () => `null` \| `FilterExpression`

###### Returns

`null` \| `FilterExpression`

#### Defined in

src/utils/dataset/interfaces.ts:220

***

### fireEventListeners()?

> `optional` **fireEventListeners**: \<`K`\>(`event`, ...`par`) => `ReturnType`\<[`IDatasetEventListeners`](IDatasetEventListeners.md)\[`K`\]\>[]

Fires all registered event listener for a given event.

#### Type Parameters

• **K** *extends* keyof [`IDatasetEventListeners`](IDatasetEventListeners.md)

#### Parameters

• **event**: `K`

• ...**par**: `Parameters`\<[`IDatasetEventListeners`](IDatasetEventListeners.md)\[`K`\]\>

#### Returns

`ReturnType`\<[`IDatasetEventListeners`](IDatasetEventListeners.md)\[`K`\]\>[]

#### Defined in

src/utils/dataset/interfaces.ts:347

***

### getChanges()

> **getChanges**: () => [`IRecordChanges`](IRecordChanges.md)

Retrieves the changes made to the records in the dataset. Change occures when `setValue` API on record is used to change it's initial value.
Only dirty changes are kept, meaning if later call of `setValue` resets the value to it's original state, it's change reference is removed.

#### Returns

[`IRecordChanges`](IRecordChanges.md)

#### Defined in

src/utils/dataset/interfaces.ts:317

***

### getDataProvider()

> **getDataProvider**: () => [`IDataProvider`](IDataProvider.md)

Gets the data provider instance for this dataset.

#### Returns

[`IDataProvider`](IDataProvider.md)

#### Defined in

src/utils/dataset/interfaces.ts:266

***

### getDataSource()

> **getDataSource**: () => `any`

Gets the current Data Source.

#### Returns

`any`

#### Defined in

src/utils/dataset/interfaces.ts:261

***

### getMetadata()

> **getMetadata**: () => `any`

Gets the associated entity metadata.

#### Returns

`any`

#### Defined in

src/utils/dataset/interfaces.ts:246

***

### getSearchQuery()

> **getSearchQuery**: () => `null` \| `string`

Gets Quick find search query.

#### Returns

`null` \| `string`

#### Defined in

src/utils/dataset/interfaces.ts:296

***

### hasInvalidChanges()

> **hasInvalidChanges**: () => `boolean`

Whether the dataset has any invalid changes.

#### Returns

`boolean`

#### Defined in

src/utils/dataset/interfaces.ts:301

***

### isDirty()

> **isDirty**: () => `boolean`

Checks if the dataset has unsaved changes. Change  can occure by using the `setValue` API on record.

#### Returns

`boolean`

#### Defined in

src/utils/dataset/interfaces.ts:306

***

### isValid()

> **isValid**: () => `boolean`

Whether the dataset has any invalid values.

#### Returns

`boolean`

#### Defined in

src/utils/dataset/interfaces.ts:311

***

### linking

> **linking**: `Linking`

Related entity info

#### Inherited from

`Omit.linking`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:2269

***

### loading

> **loading**: `boolean`

Indicate if the dataset property is in loading state or not

#### Inherited from

`Omit.loading`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:2274

***

### paging

> **paging**: `Paging` & `object`

Paging state for a dataset

#### Type declaration

##### loadExactPage()

> **loadExactPage**: (`pageNumber`, `save`?) => `void`

###### Parameters

• **pageNumber**: `number`

• **save?**: `boolean`

###### Returns

`void`

##### pageNumber

> **pageNumber**: `number`

##### setPageNumber()

> **setPageNumber**: (`pageNumber`) => `void`

###### Parameters

• **pageNumber**: `number`

###### Returns

`void`

#### Overrides

`Omit.paging`

#### Defined in

src/utils/dataset/interfaces.ts:232

***

### records

> **records**: `object`

Map of IDs to the full record object.

#### Index Signature

 \[`key`: `string`\]: [`IRecord`](IRecord.md)

#### Defined in

src/utils/dataset/interfaces.ts:241

***

### render()

> **render**: () => `void`

Rerenders the Dataset Control

#### Returns

`void`

#### Defined in

src/utils/dataset/interfaces.ts:286

***

### save()

> **save**: () => `Promise`\<`void`\>

Saves all unsaved changes in dataset.

#### Returns

`Promise`\<`void`\>

#### Defined in

src/utils/dataset/interfaces.ts:276

***

### setColumns()

> **setColumns**: (`columns`) => `void`

Sets the columns in the dataset.

#### Parameters

• **columns**: `any`

#### Returns

`void`

#### Defined in

src/utils/dataset/interfaces.ts:327

***

### setCurrencies()

> **setCurrencies**: (`currencies`) => `void`

Sets the currencies the dataset can work with.

#### Parameters

• **currencies**: [`ICurrency`](ICurrency.md)[]

#### Returns

`void`

#### Defined in

src/utils/dataset/interfaces.ts:251

***

### setDataSource()

> **setDataSource**: (`dataSource`) => `void`

Allows you to change the initial Data Source.

#### Parameters

• **dataSource**: `any`

#### Returns

`void`

#### Defined in

src/utils/dataset/interfaces.ts:271

***

### setInterceptor()

> **setInterceptor**: \<`K`\>(`name`, `interceptor`) => `void`

Allows you to define interceptors to customize data flows in Dataset.

#### Type Parameters

• **K** *extends* `"columns"`

#### Parameters

• **name**: `K`

• **interceptor**: [`IDatasetInterceptors`](IDatasetInterceptors.md)\[`K`\]

#### Returns

`void`

#### Defined in

src/utils/dataset/interfaces.ts:337

***

### setMetadata()

> **setMetadata**: (`metadata`) => `void`

Allows you to change the initial associated entity metadata.

#### Parameters

• **metadata**: `any`

#### Returns

`void`

#### Defined in

src/utils/dataset/interfaces.ts:281

***

### setSearchQuery()

> **setSearchQuery**: (`query`) => `void`

Sets quick find seach query.

#### Parameters

• **query**: `string`

#### Returns

`void`

#### Defined in

src/utils/dataset/interfaces.ts:291

***

### setTitle()

> **setTitle**: (`title`) => `void`

Sets the dataset's title.

#### Parameters

• **title**: `string`

#### Returns

`void`

#### Defined in

src/utils/dataset/interfaces.ts:256

***

### sortedRecordIds

> **sortedRecordIds**: `string`[]

IDs of the records in the dataset, order by the query response result

#### Inherited from

`Omit.sortedRecordIds`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:2291

***

### sorting

> **sorting**: `SortStatus`[]

The sorting status for the current query.

#### Inherited from

`Omit.sorting`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:2296

## Methods

### clearSelectedRecordIds()

> **clearSelectedRecordIds**(): `void`

Clear selected record ids list

#### Returns

`void`

#### Inherited from

`Omit.clearSelectedRecordIds`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:2301

***

### getSelectedRecordIds()

> **getSelectedRecordIds**(): `string`[]

Retrieves all selected record ids

#### Returns

`string`[]

#### Inherited from

`Omit.getSelectedRecordIds`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:2306

***

### getTargetEntityType()

> **getTargetEntityType**(): `string`

Get DataSet target entity logical name

#### Returns

`string`

#### Inherited from

`Omit.getTargetEntityType`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:2311

***

### getTitle()

> **getTitle**(): `string`

Retrieves the view display name used by the dataset property

#### Returns

`string`

#### Inherited from

`Omit.getTitle`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:2316

***

### getViewId()

> **getViewId**(): `string`

Gets Id of view used by the dataset property

#### Returns

`string`

#### Inherited from

`Omit.getViewId`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:2321

***

### openDatasetItem()

> **openDatasetItem**(`entityReference`): `void`

Open dataSet item for a given EntityReference. It will check if there is a command with command button id "Mscrm.OpenRecordItem".
If there is, it will execute the command, otherwise it will just navigate to the associated form of the entityReference

#### Parameters

• **entityReference**: `EntityReference`

entity reference

#### Returns

`void`

#### Inherited from

`Omit.openDatasetItem`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:2328

***

### refresh()

> **refresh**(): `void`

Refreshes the dataset based on filters, sorting, linking, new column. New data will be pushed to control in another 'updateView' cycle.

#### Returns

`void`

#### Inherited from

`Omit.refresh`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:2333

***

### setSelectedRecordIds()

> **setSelectedRecordIds**(`ids`): `void`

Set the ids of the selected records

#### Parameters

• **ids**: `string`[]

List of recordId's

#### Returns

`void`

#### Inherited from

`Omit.setSelectedRecordIds`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:2339
