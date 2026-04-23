Configuration properties for data provider behavior and features.

## Properties

### allowAggregationWithoutGrouping?

> `optional` **allowAggregationWithoutGrouping**: `boolean`

Whether the data provider should support aggregations without grouping. By default, the data provider will ignore aggregations if no columns are grouped.

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:53

***

### autoSave?

> `optional` **autoSave**: `boolean`

NOTE: Setting this property to `true` does not mean the provider will auto-save changes. It simply gives provider more context on the environment it is running in.
For example, if `retrieveRecordCommand` is called, and `autoSave` is true, the provider will not return an executable save command if there are unsaved changes.

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:42

***

### groupingType

> **groupingType**: `"flat"` \| `"nested"`

Decides how to provider should handle grouping. If set to `nested`, the provider will create a hierarchy of data providers for each group level.
If set to `flat`, the provider will create a flat list of records with filters applied for each group.

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:37

***

### hasPreviousState?

> `optional` **hasPreviousState**: `boolean`

Description placeholder

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:64

***

### inlineRibbonButtonsIds?

> `optional` **inlineRibbonButtonsIds**: `Set`\<`string`\>

Set of ribbon button ids that will be considered as inline ribbon buttons.

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:60

***

### isStandalone?

> `optional` **isStandalone**: `boolean`

Whether the provider is going to be used in an environment where the host environment does not create any dataset instance, for example in field PCF.
Should only be set to `false` by the host environment (DatasetAdapter for both Power Apps and Portal).

#### Default

```ts
true
```

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:48
