Can be used to get the total for a data provider.

## Extends

- `DataProviderExtension`

## Methods

### getDataProvider()

> **getDataProvider**(): [`IDataProvider`](../interfaces/IDataProvider.md)

Can be used to get the data provider that is used to get the aggregated values.

#### Returns

[`IDataProvider`](../interfaces/IDataProvider.md)

#### Defined in

src/utils/dataset/data-providers/extensions/TotalRow.ts:52

***

### getTotalRowRecord()

> **getTotalRowRecord**(): `null` \| [`IRecord`](../interfaces/IRecord.md)

Returns the total row record. If there are no aggregations or the main data provider has no records, null is returned. If the aggregation data provider is loading or in error state, a dummy record is returned with loading/error states set on all columns.

#### Returns

`null` \| [`IRecord`](../interfaces/IRecord.md)

#### Defined in

src/utils/dataset/data-providers/extensions/TotalRow.ts:25
