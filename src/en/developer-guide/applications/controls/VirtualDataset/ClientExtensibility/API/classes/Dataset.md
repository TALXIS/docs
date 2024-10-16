Uses Data Provider and is passed as dataset parameter to PCF's

## Implements

- [`IDataset`](../interfaces/IDataset.md)

## Constructors

### new Dataset()

> **new Dataset**(`dataProvider`): [`Dataset`](Dataset.md)

Creates an instance of Dataset.

#### Parameters

• **dataProvider**: `DataProvider`

#### Returns

[`Dataset`](Dataset.md)

#### Defined in

src/utils/dataset/Dataset.ts:28

## Accessors

### columns

> `get` **columns**(): `Column` & `object`[]

Metadata about a column in a dataset. If the column name ends with `__virtual`, it tells the provider it should not try to fetch column metadata from its Data Source.
In this case, you need to specify all the necessary metadata yourself.

#### Returns

`Column` & `object`[]

Metadata about a column in a dataset. If the column name ends with `__virtual`, it tells the provider it should not try to fetch column metadata from its Data Source.
In this case, you need to specify all the necessary metadata yourself.

#### Implementation of

[`IDataset`](../interfaces/IDataset.md).[`columns`](../interfaces/IDataset.md#columns)

#### Defined in

src/utils/dataset/Dataset.ts:31

***

### error

> `get` **error**(): `boolean`

True if encountered error while data retrieval

#### Returns

`boolean`

True if encountered error while data retrieval

#### Implementation of

[`IDataset`](../interfaces/IDataset.md).[`error`](../interfaces/IDataset.md#error)

#### Defined in

src/utils/dataset/Dataset.ts:43

***

### errorMessage

> `get` **errorMessage**(): `string`

The error message associated with the last encountered error, if applicable

#### Returns

`string`

The error message associated with the last encountered error, if applicable

#### Implementation of

[`IDataset`](../interfaces/IDataset.md).[`errorMessage`](../interfaces/IDataset.md#errormessage)

#### Defined in

src/utils/dataset/Dataset.ts:46

***

### filtering

> `get` **filtering**(): `Omit`\<`Filtering`, `"getFilter"`\> & `object`

Filter state for a dataset.

#### Returns

`Omit`\<`Filtering`, `"getFilter"`\> & `object`

Filter state for a dataset.

#### Implementation of

[`IDataset`](../interfaces/IDataset.md).[`filtering`](../interfaces/IDataset.md#filtering)

#### Defined in

src/utils/dataset/Dataset.ts:88

***

### linking

> `get` **linking**(): `Linking`

Related entity info

#### Returns

`Linking`

Related entity info

#### Implementation of

[`IDataset`](../interfaces/IDataset.md).[`linking`](../interfaces/IDataset.md#linking)

#### Defined in

src/utils/dataset/Dataset.ts:58

***

### loading

> `get` **loading**(): `boolean`

Indicate if the dataset property is in loading state or not

#### Returns

`boolean`

Indicate if the dataset property is in loading state or not

#### Implementation of

[`IDataset`](../interfaces/IDataset.md).[`loading`](../interfaces/IDataset.md#loading)

#### Defined in

src/utils/dataset/Dataset.ts:49

***

### records

> `get` **records**(): `object`

Map of IDs to the full record object.

#### Returns

`object`

Map of IDs to the full record object.

#### Implementation of

[`IDataset`](../interfaces/IDataset.md).[`records`](../interfaces/IDataset.md#records)

#### Defined in

src/utils/dataset/Dataset.ts:102

***

### sortedRecordIds

> `get` **sortedRecordIds**(): `string`[]

IDs of the records in the dataset, order by the query response result

#### Returns

`string`[]

IDs of the records in the dataset, order by the query response result

#### Implementation of

[`IDataset`](../interfaces/IDataset.md).[`sortedRecordIds`](../interfaces/IDataset.md#sortedrecordids)

#### Defined in

src/utils/dataset/Dataset.ts:123

***

### sorting

> `get` **sorting**(): `SortStatus`[]

The sorting status for the current query.

> `set` **sorting**(`sort`): `void`

The sorting status for the current query.

#### Parameters

• **sort**: `SortStatus`[]

#### Returns

`SortStatus`[]

The sorting status for the current query.

#### Implementation of

[`IDataset`](../interfaces/IDataset.md).[`sorting`](../interfaces/IDataset.md#sorting)

#### Defined in

src/utils/dataset/Dataset.ts:52

## Methods

### addEventListener()

> **addEventListener**\<`K`\>(`event`, `eventListener`): `void`

Allows to define listener method that will trigger when specific event occurs.

#### Type Parameters

• **K** *extends* keyof [`IDatasetEventListeners`](../interfaces/IDatasetEventListeners.md)

#### Parameters

• **event**: `K`

• **eventListener**: [`IDatasetEventListeners`](../interfaces/IDatasetEventListeners.md)\[`K`\]

#### Returns

`void`

#### Implementation of

[`IDataset`](../interfaces/IDataset.md).[`addEventListener`](../interfaces/IDataset.md#addeventlistener)

#### Defined in

src/utils/dataset/Dataset.ts:197

***

### clearSelectedRecordIds()

> **clearSelectedRecordIds**(): `void`

Clear selected record ids list

#### Returns

`void`

#### Implementation of

[`IDataset`](../interfaces/IDataset.md).[`clearSelectedRecordIds`](../interfaces/IDataset.md#clearselectedrecordids)

#### Defined in

src/utils/dataset/Dataset.ts:130

***

### getDataProvider()

> **getDataProvider**(): `DataProvider`

Returns a data provider instance.

#### Returns

`DataProvider`

#### Implementation of

[`IDataset`](../interfaces/IDataset.md).[`getDataProvider`](../interfaces/IDataset.md#getdataprovider)

#### Defined in

src/utils/dataset/Dataset.ts:173

***

### getDataSource()

> **getDataSource**(): `any`

Gets the Data Source.

#### Returns

`any`

#### Implementation of

[`IDataset`](../interfaces/IDataset.md).[`getDataSource`](../interfaces/IDataset.md#getdatasource)

#### Defined in

src/utils/dataset/Dataset.ts:40

***

### getMetadata()

> **getMetadata**(): `null` \| `EntityMetadata`

Gets the associated entity metadata.

#### Returns

`null` \| `EntityMetadata`

#### Implementation of

[`IDataset`](../interfaces/IDataset.md).[`getMetadata`](../interfaces/IDataset.md#getmetadata)

#### Defined in

src/utils/dataset/Dataset.ts:158

***

### getSelectedRecordIds()

> **getSelectedRecordIds**(): `string`[]

Retrieves all selected record ids

#### Returns

`string`[]

#### Implementation of

[`IDataset`](../interfaces/IDataset.md).[`getSelectedRecordIds`](../interfaces/IDataset.md#getselectedrecordids)

#### Defined in

src/utils/dataset/Dataset.ts:133

***

### getTargetEntityType()

> **getTargetEntityType**(): `string`

Get DataSet target entity logical name

#### Returns

`string`

#### Implementation of

[`IDataset`](../interfaces/IDataset.md).[`getTargetEntityType`](../interfaces/IDataset.md#gettargetentitytype)

#### Defined in

src/utils/dataset/Dataset.ts:142

***

### getTitle()

> **getTitle**(): `string`

Retrieves the view display name used by the dataset property

#### Returns

`string`

#### Implementation of

[`IDataset`](../interfaces/IDataset.md).[`getTitle`](../interfaces/IDataset.md#gettitle)

#### Defined in

src/utils/dataset/Dataset.ts:145

***

### getViewId()

> **getViewId**(): `string`

Gets Id of view used by the dataset property

#### Returns

`string`

#### Implementation of

[`IDataset`](../interfaces/IDataset.md).[`getViewId`](../interfaces/IDataset.md#getviewid)

#### Defined in

src/utils/dataset/Dataset.ts:148

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

#### Implementation of

[`IDataset`](../interfaces/IDataset.md).[`openDatasetItem`](../interfaces/IDataset.md#opendatasetitem)

#### Defined in

src/utils/dataset/Dataset.ts:151

***

### refresh()

> **refresh**(): `Promise`\<`void`\>

Refreshes the dataset based on filters, sorting, linking, new column. New data will be pushed to control in another 'updateView' cycle.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IDataset`](../interfaces/IDataset.md).[`refresh`](../interfaces/IDataset.md#refresh)

#### Defined in

src/utils/dataset/Dataset.ts:154

***

### setDataSource()

> **setDataSource**(`dataSource`): `void`

Allows you to change the initial Data Source.

#### Parameters

• **dataSource**: `any`

#### Returns

`void`

#### Implementation of

[`IDataset`](../interfaces/IDataset.md).[`setDataSource`](../interfaces/IDataset.md#setdatasource)

#### Defined in

src/utils/dataset/Dataset.ts:37

***

### setMetadata()

> **setMetadata**(`metadata`): `void`

Allows you to change the initial associated entity metadata.

#### Parameters

• **metadata**: `EntityMetadata`

#### Returns

`void`

#### Implementation of

[`IDataset`](../interfaces/IDataset.md).[`setMetadata`](../interfaces/IDataset.md#setmetadata)

#### Defined in

src/utils/dataset/Dataset.ts:161

***

### setSelectedRecordIds()

> **setSelectedRecordIds**(`ids`): `void`

Set the ids of the selected records

#### Parameters

• **ids**: `string`[]

List of recordId's

#### Returns

`void`

#### Implementation of

[`IDataset`](../interfaces/IDataset.md).[`setSelectedRecordIds`](../interfaces/IDataset.md#setselectedrecordids)

#### Defined in

src/utils/dataset/Dataset.ts:138
