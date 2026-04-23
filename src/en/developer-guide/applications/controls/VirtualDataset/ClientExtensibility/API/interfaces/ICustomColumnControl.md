Interface for assigning custom controls to columns.

## Properties

### appliesTo

> **appliesTo**: `"editor"` \| `"renderer"` \| `"both"`

Whether the control should be used for `renderer`, `editor` or `both`.

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1462

***

### bindings?

> `optional` **bindings**: `object`

Parameters for the control. Only static bindings are supported.

#### Index Signature

 \[`name`: `string`\]: `object`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1466

***

### name?

> `optional` **name**: `string`

Name of the control as it's saved in Dataverse (or Base Control, for example `OptionSet`).

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1458
