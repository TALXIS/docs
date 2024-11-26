Dataset object. If a property is optional, it does not exists in Microsoft's dataset implementation.

## Extends

- `Omit`\<`ComponentFramework.PropertyTypes.DataSet`, `"filtering"` \| `"records"`\>

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

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:1475

***

### addEventListener()?

> `optional` **addEventListener**: \<`K`\>(`event`, `eventListener`) => `void`

Allows to define listener method that will trigger when specific event occurs.

#### Type Parameters

• **K** *extends* keyof [`IDatasetEventListeners`](IDatasetEventListeners.md)

#### Parameters

• **event**: `K`

• **eventListener**: [`IDatasetEventListeners`](IDatasetEventListeners.md)\[`K`\]

#### Returns

`void`

#### Defined in

src/utils/dataset/interfaces.ts:239

***

### clearChanges()?

> `optional` **clearChanges**: () => `void`

Clears any changes in the dataset, resetting all record values to their initial state.

#### Returns

`void`

#### Defined in

src/utils/dataset/interfaces.ts:229

***

### columns

> **columns**: [`IColumn`](IColumn.md)[]

Metadata about a column in a dataset. If the column name ends with __virtual, it tells the provider it should not try to fetch column metadata from its Data Source. In this case, you need to specify all the necessary metadata yourself. If a property is optional, it does not exists in Microsoft's dataset implementation.

#### Overrides

`Omit.columns`

#### Defined in

src/utils/dataset/interfaces.ts:145

***

### error

> **error**: `boolean`

True if encountered error while data retrieval

#### Inherited from

`Omit.error`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:1485

***

### errorMessage

> **errorMessage**: `string`

The error message associated with the last encountered error, if applicable

#### Inherited from

`Omit.errorMessage`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:1490

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

src/utils/dataset/interfaces.ts:138

***

### getChanges()?

> `optional` **getChanges**: () => [`IRecordChanges`](IRecordChanges.md)

Retrieves the changes made to the records in the dataset. Change occures when `setValue` API on record is used to change it's initial value.
Only dirty changes are kept, meaning if later call of `setValue` resets the value to it's original state, it's change reference is removed.

#### Returns

[`IRecordChanges`](IRecordChanges.md)

#### Defined in

src/utils/dataset/interfaces.ts:224

***

### getDataSource()?

> `optional` **getDataSource**: () => `any`

Gets the current Data Source.

#### Returns

`any`

#### Defined in

src/utils/dataset/interfaces.ts:178

***

### getMetadata()

> **getMetadata**: () => `null` \| `EntityMetadata`

Gets the associated entity metadata.

#### Returns

`null` \| `EntityMetadata`

#### Defined in

src/utils/dataset/interfaces.ts:163

***

### getSearchQuery()?

> `optional` **getSearchQuery**: () => `null` \| `string`

Gets Quick find search query.

#### Returns

`null` \| `string`

#### Defined in

src/utils/dataset/interfaces.ts:208

***

### hasInvalidChanges()?

> `optional` **hasInvalidChanges**: () => `boolean`

Whether the dataset has any records with invalid values.

#### Returns

`boolean`

#### Defined in

src/utils/dataset/interfaces.ts:213

***

### isDirty()?

> `optional` **isDirty**: () => `boolean`

Checks if the dataset has unsaved changes. Change  can occure by using the `setValue` API on record.

#### Returns

`boolean`

#### Defined in

src/utils/dataset/interfaces.ts:218

***

### linking

> **linking**: `Linking`

Related entity info

#### Inherited from

`Omit.linking`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:1500

***

### loading

> **loading**: `boolean`

Indicate if the dataset property is in loading state or not

#### Inherited from

`Omit.loading`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:1505

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

#### Overrides

`Omit.paging`

#### Defined in

src/utils/dataset/interfaces.ts:150

***

### records

> **records**: `object`

Map of IDs to the full record object.

#### Index Signature

 \[`key`: `string`\]: [`IRecord`](IRecord.md)

#### Defined in

src/utils/dataset/interfaces.ts:158

***

### render()?

> `optional` **render**: () => `void`

Rerenders the Dataset Control

#### Returns

`void`

#### Defined in

src/utils/dataset/interfaces.ts:198

***

### save()?

> `optional` **save**: () => `Promise`\<`void`\>

Saves all unsaved changes in dataset.

#### Returns

`Promise`\<`void`\>

#### Defined in

src/utils/dataset/interfaces.ts:188

***

### setColumns()?

> `optional` **setColumns**: (`columns`) => `void`

Sets the columns in the dataset.

#### Parameters

• **columns**: [`IColumn`](IColumn.md)[]

#### Returns

`void`

#### Defined in

src/utils/dataset/interfaces.ts:234

***

### setCurrencies()?

> `optional` **setCurrencies**: (`currencies`) => `void`

Sets the currencies the dataset can work with.

#### Parameters

• **currencies**: [`ICurrency`](ICurrency.md)[]

#### Returns

`void`

#### Defined in

src/utils/dataset/interfaces.ts:168

***

### setDataSource()?

> `optional` **setDataSource**: (`dataSource`) => `void`

Allows you to change the initial Data Source.

#### Parameters

• **dataSource**: `any`

#### Returns

`void`

#### Defined in

src/utils/dataset/interfaces.ts:183

***

### setMetadata()?

> `optional` **setMetadata**: (`metadata`) => `void`

Allows you to change the initial associated entity metadata.

#### Parameters

• **metadata**: `EntityMetadata`

#### Returns

`void`

#### Defined in

src/utils/dataset/interfaces.ts:193

***

### setSearchQuery()?

> `optional` **setSearchQuery**: (`query`) => `void`

Sets quick find seach query.

#### Parameters

• **query**: `string`

#### Returns

`void`

#### Defined in

src/utils/dataset/interfaces.ts:203

***

### setTitle()?

> `optional` **setTitle**: (`title`) => `void`

Sets the dataset's title.

#### Parameters

• **title**: `string`

#### Returns

`void`

#### Defined in

src/utils/dataset/interfaces.ts:173

***

### sortedRecordIds

> **sortedRecordIds**: `string`[]

IDs of the records in the dataset, order by the query response result

#### Inherited from

`Omit.sortedRecordIds`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:1522

***

### sorting

> **sorting**: `SortStatus`[]

The sorting status for the current query.

#### Inherited from

`Omit.sorting`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:1527

## Methods

### clearSelectedRecordIds()

> **clearSelectedRecordIds**(): `void`

Clear selected record ids list

#### Returns

`void`

#### Inherited from

`Omit.clearSelectedRecordIds`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:1532

***

### getSelectedRecordIds()

> **getSelectedRecordIds**(): `string`[]

Retrieves all selected record ids

#### Returns

`string`[]

#### Inherited from

`Omit.getSelectedRecordIds`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:1537

***

### getTargetEntityType()

> **getTargetEntityType**(): `string`

Get DataSet target entity logical name

#### Returns

`string`

#### Inherited from

`Omit.getTargetEntityType`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:1542

***

### getTitle()

> **getTitle**(): `string`

Retrieves the view display name used by the dataset property

#### Returns

`string`

#### Inherited from

`Omit.getTitle`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:1547

***

### getViewId()

> **getViewId**(): `string`

Gets Id of view used by the dataset property

#### Returns

`string`

#### Inherited from

`Omit.getViewId`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:1552

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

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:1559

***

### refresh()

> **refresh**(): `void`

Refreshes the dataset based on filters, sorting, linking, new column. New data will be pushed to control in another 'updateView' cycle.

#### Returns

`void`

#### Inherited from

`Omit.refresh`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:1564

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

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:1570
