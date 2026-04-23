Dataset object. If a property is optional, it does not exists in Microsoft's dataset implementation.

## Extends

- `Omit`\<`ComponentFramework.PropertyTypes.DataSet`, `"filtering"` \| `"records"` \| `"columns"`\>.`IEventEmitter`\<[`IDataProviderEventListeners`](IDataProviderEventListeners.md)\>

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

src/utils/dataset/interfaces.ts:11

***

### getSelectedRecordIds()

> **getSelectedRecordIds**: (`options`?) => `string`[]

Retrieves all selected record ids

#### Parameters

• **options?**

• **options.includeChildrenRecordIds?**: `boolean`

• **options.includeGroupRecordIds?**: `boolean`

#### Returns

`string`[]

#### Overrides

`Omit.getSelectedRecordIds`

#### Defined in

src/utils/dataset/interfaces.ts:44

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

> **paging**: `Omit`\<`Paging`, `"loadNextPage"` \| `"loadExactPage"` \| `"loadPreviousPage"`\> & `object`

Pagination status and actions.

#### Type declaration

##### loadExactPage()

> **loadExactPage**: (`pageNumber`) => `Promise`\<[`IRecord`](IRecord.md)[]\>

Returns exact page of records.

###### Parameters

• **pageNumber**: `number`

###### Returns

`Promise`\<[`IRecord`](IRecord.md)[]\>

##### loadNextPage()

> **loadNextPage**: () => `Promise`\<[`IRecord`](IRecord.md)[]\>

Returns next page of records.

###### Returns

`Promise`\<[`IRecord`](IRecord.md)[]\>

##### loadPreviousPage()

> **loadPreviousPage**: () => `Promise`\<[`IRecord`](IRecord.md)[]\>

Loads previous page of records

###### Returns

`Promise`\<[`IRecord`](IRecord.md)[]\>

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

src/utils/dataset/interfaces.ts:19

***

### refresh()

> **refresh**: () => `Promise`\<[`IRecord`](IRecord.md)[]\>

Refreshes the dataset based on filters, sorting, linking, new column. New data will be pushed to control in another 'updateView' cycle.

Refreshes the records list and returns the refreshed records.

#### Returns

`Promise`\<[`IRecord`](IRecord.md)[]\>

A promise resolving to a list of refreshed records.

#### Overrides

`Omit.refresh`

#### Defined in

src/utils/dataset/interfaces.ts:23

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
