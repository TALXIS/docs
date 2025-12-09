Interface for aggregations in dataset.

## Properties

### addAggregation()

> **addAggregation**: (`aggregation`) => `void`

Adds an aggregation to the dataset.

#### Parameters

• **aggregation**: [`IAggregationMetadata`](IAggregationMetadata.md)

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:402

***

### clear()

> **clear**: () => `void`

Clears all aggregations in the dataset.

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:406

***

### getAggregation()

> **getAggregation**: (`alias`) => `undefined` \| [`IAggregationMetadata`](IAggregationMetadata.md)

Gets aggregation metadata for an column alias.

#### Parameters

• **alias**: `string`

#### Returns

`undefined` \| [`IAggregationMetadata`](IAggregationMetadata.md)

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:415

***

### getAggregations()

> **getAggregations**: () => [`IAggregationMetadata`](IAggregationMetadata.md)[]

Gets all aggregations in the dataset.

#### Returns

[`IAggregationMetadata`](IAggregationMetadata.md)[]

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:410

***

### removeAggregation()

> **removeAggregation**: (`alias`) => `void`

Removes an aggregation from the dataset.

#### Parameters

• **alias**: `string`

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:420
