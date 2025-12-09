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

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:2638

***

### alignment?

> `optional` **alignment**: `"left"` \| `"center"` \| `"right"`

Alignment of the column. If not defined, numbers will be aligned to right by default. Rest are aligned to left.

#### Inherited from

`DeepPartial.alignment`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1508

***

### autoHeight?

> `optional` **autoHeight**: `boolean`

Whether the row height should adjust automatically based on cell's content.

#### Inherited from

`DeepPartial.autoHeight`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1550

***

### controls?

> `optional` **controls**: [`ICustomColumnControl`](ICustomColumnControl.md)[]

Can be used to render custom PCF as cell renderer/editor.

#### Inherited from

`DeepPartial.controls`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1555

***

### dataType?

> `optional` **dataType**: [`DataType`](../type-aliases/DataType.md)

The manifest type of this column's values.

#### Inherited from

`DeepPartial.dataType`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1483

***

### disableSorting?

> `optional` **disableSorting**: `boolean`

Prevents the UI from making the column sortable.

#### Inherited from

`DeepPartial.disableSorting`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:2663

***

### displayName?

> `optional` **displayName**: `string`

Localized display name for the column

#### Inherited from

`DeepPartial.displayName`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:2628

***

### grouping?

> `optional` **grouping**: `object`

Grouping information for the column

#### alias?

> `optional` **alias**: `string`

Optional alias. If not provided, it will be derived from the column name.

#### isGrouped

> **isGrouped**: `boolean`

Whether the column should be grouped.

#### Inherited from

`DeepPartial.grouping`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1528

***

### isDraggable?

> `optional` **isDraggable**: `boolean`

If user can customize the column position. Default set to `true`.

#### Inherited from

`DeepPartial.isDraggable`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1503

***

### isHidden?

> `optional` **isHidden**: `boolean`

The column visibility state.

#### Inherited from

`DeepPartial.isHidden`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:2653

***

### isPrimary?

> `optional` **isPrimary**: `boolean`

Is specific column the primary attribute of the view's entity

#### Inherited from

`DeepPartial.isPrimary`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:2658

***

### isVirtual?

> `optional` **isVirtual**: `boolean`

Whether the underlying column exists in Data Provider's data source. If se to true, it will let the provider know
that it should not try to fetch any metadata for it. Any metadata should then be provided through the metadata attribute.

#### Inherited from

`DeepPartial.isVirtual`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1489

***

### metadata?

> `optional` **metadata**: `Partial`\<`Omit`\<`AttributeMetadata`, `"OptionSet"`\> & `object`\>

Additional metadata for the column.

#### Inherited from

`DeepPartial.metadata`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1494

***

### oneClickEdit?

> `optional` **oneClickEdit**: `boolean`

Ensures that the cell editor control is used as cell renderer, eliminating the need for users to double click a cell to load the editor control.

NOTE: Cell editor controls can be more resource intensive to render. It is recommended to use this option only when performance is not a concern, and the use case specifically benefits from this behavior.

#### Inherited from

`DeepPartial.oneClickEdit`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1545

***

### order?

> `optional` **order**: `number`

The column order for the layout

#### Inherited from

`DeepPartial.order`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:2643

***

### type?

> `optional` **type**: `"data"` \| `"action"`

Column may either hold data or serve other purposes, such as displaying a ribbon. 
This distinction allows the control to adjust its behavior, such as omitting data-specific features like editable buttons in column headers when the column is not data-related.

#### Inherited from

`DeepPartial.type`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1499

***

### visualSizeFactor?

> `optional` **visualSizeFactor**: `number`

Customized column width ratios

#### Inherited from

`DeepPartial.visualSizeFactor`

#### Defined in

node\_modules/@types/powerapps-component-framework/componentframework.d.ts:2648
