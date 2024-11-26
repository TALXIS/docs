Metadata about a column in a dataset. If the column name ends with `__virtual`, it tells the provider it should not try to fetch column metadata from its Data Source.
In this case, you need to specify all the necessary metadata yourself. If a property is optional, it does not exists in Microsoft's dataset implementation.

## Extends

- `Column`

## Properties

### alias

> **alias**: `string`

The alias of this column.

#### Inherited from

`ComponentFramework.PropertyHelper.DataSetApi.Column.alias`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:1834

***

### dataType

> **dataType**: `string`

The manifest type of this column's values.

#### Inherited from

`ComponentFramework.PropertyHelper.DataSetApi.Column.dataType`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:1829

***

### disableSorting?

> `optional` **disableSorting**: `boolean`

Prevents the UI from making the column sortable.

#### Inherited from

`ComponentFramework.PropertyHelper.DataSetApi.Column.disableSorting`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:1859

***

### displayName

> **displayName**: `string`

Localized display name for the column

#### Inherited from

`ComponentFramework.PropertyHelper.DataSetApi.Column.displayName`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:1824

***

### isHidden?

> `optional` **isHidden**: `boolean`

The column visibility state.

#### Inherited from

`ComponentFramework.PropertyHelper.DataSetApi.Column.isHidden`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:1849

***

### isPrimary?

> `optional` **isPrimary**: `boolean`

Is specific column the primary attrribute of the view's entity

#### Inherited from

`ComponentFramework.PropertyHelper.DataSetApi.Column.isPrimary`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:1854

***

### name

> **name**: `string`

Name of the column, unique in this dataset

#### Inherited from

`ComponentFramework.PropertyHelper.DataSetApi.Column.name`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:1819

***

### order

> **order**: `number`

The column order for the layout

#### Inherited from

`ComponentFramework.PropertyHelper.DataSetApi.Column.order`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:1839

***

### visualSizeFactor

> **visualSizeFactor**: `number`

Customized column width ratios

#### Inherited from

`ComponentFramework.PropertyHelper.DataSetApi.Column.visualSizeFactor`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:1844
