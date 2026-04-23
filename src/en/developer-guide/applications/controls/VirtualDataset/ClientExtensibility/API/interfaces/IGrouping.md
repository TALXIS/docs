Interface for grouping records in a dataset.

## Properties

### addGroupBy()

> **addGroupBy**: (`groupBy`, `order`?) => `void`

Adds a group by metadata to the dataset.

#### Parameters

• **groupBy**: [`IGroupByMetadata`](IGroupByMetadata.md)

The group by metadata to add.

• **order?**: `number`

Optional order for the group by. If not provided, it will be added at the end of other grouped columns.

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:454

***

### clear()

> **clear**: () => `void`

Clears all grouping by metadata in the dataset.

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:462

***

### getGroupBy()

> **getGroupBy**: (`alias`) => `undefined` \| [`IGroupByMetadata`](IGroupByMetadata.md)

Gets grouping metadata for a specific alias.

#### Parameters

• **alias**: `string`

#### Returns

`undefined` \| [`IGroupByMetadata`](IGroupByMetadata.md)

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:448

***

### getGroupBys()

> **getGroupBys**: () => [`IGroupByMetadata`](IGroupByMetadata.md)[]

Gets all grouping metadata in the dataset.

#### Returns

[`IGroupByMetadata`](IGroupByMetadata.md)[]

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:444

***

### removeGroupBy()

> **removeGroupBy**: (`alias`) => `void`

Removes grouping for a specific alias.

#### Parameters

• **alias**: `string`

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:458
