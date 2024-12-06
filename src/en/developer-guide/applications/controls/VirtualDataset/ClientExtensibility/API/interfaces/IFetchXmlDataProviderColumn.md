Interface representing the configuration of a column 
for the FetchXML Data Provider.

## Extends

- [`DeepPartial`](../type-aliases/DeepPartial.md)\<[`IColumn`](IColumn.md)\>

## Properties

### alias?

> `optional` **alias**: `string`

The alias of this column.

#### Inherited from

`DeepPartial.alias`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:1834

***

### dataType?

> `optional` **dataType**: `string`

The manifest type of this column's values.

#### Inherited from

`DeepPartial.dataType`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:1829

***

### disableSorting?

> `optional` **disableSorting**: `boolean`

Prevents the UI from making the column sortable.

#### Inherited from

`DeepPartial.disableSorting`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:1859

***

### displayName?

> `optional` **displayName**: `string`

Localized display name for the column

#### Inherited from

`DeepPartial.displayName`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:1824

***

### isDraggable?

> `optional` **isDraggable**: `boolean`

If user can customize the column position. Default set to `true`.

#### Inherited from

`DeepPartial.isDraggable`

#### Defined in

src/utils/dataset/interfaces.ts:101

***

### isHidden?

> `optional` **isHidden**: `boolean`

The column visibility state.

#### Inherited from

`DeepPartial.isHidden`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:1849

***

### isPrimary?

> `optional` **isPrimary**: `boolean`

Is specific column the primary attrribute of the view's entity

#### Inherited from

`DeepPartial.isPrimary`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:1854

***

### name

> **name**: `string`

Name of the column, unique in this dataset

#### Overrides

`DeepPartial.name`

#### Defined in

src/utils/dataset/data-providers/FetchXmlDataProvider/FetchXmlDataProvider.ts:23

***

### order?

> `optional` **order**: `number`

The column order for the layout

#### Inherited from

`DeepPartial.order`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:1839

***

### type?

> `optional` **type**: `"data"` \| `"action"`

Column may either hold data or serve other purposes, such as displaying a ribbon. 
This distinction allows the control to adjust its behavior, such as omitting data-specific features like editable buttons in column headers when the column is not data-related.

#### Inherited from

`DeepPartial.type`

#### Defined in

src/utils/dataset/interfaces.ts:97

***

### visualSizeFactor?

> `optional` **visualSizeFactor**: `number`

Customized column width ratios

#### Inherited from

`DeepPartial.visualSizeFactor`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:1844
