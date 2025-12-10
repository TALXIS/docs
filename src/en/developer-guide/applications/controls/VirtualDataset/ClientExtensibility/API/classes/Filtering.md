Contains methods that simplify filtering operations on a data provider.

## Extends

- `DataProviderExtension`

## Methods

### getFilterExpression()

> **getFilterExpression**(`filterOperator`): `false` \| `FilterExpression`

If `FieldValueClass` was provided, validates all conditions before returning the filter expression. If validation fails, returns `false`.

#### Parameters

• **filterOperator**: `FilterOperator`

#### Returns

`false` \| `FilterExpression`

#### Defined in

src/utils/dataset/data-providers/extensions/filtering/Filtering.ts:45
