Interface for assigning custom controls to columns.

## Properties

### appliesTo

> **appliesTo**: `"renderer"` \| `"editor"` \| `"both"`

Whether the control should be used for `renderer`, `editor` or `both`.

#### Defined in

src/utils/dataset/interfaces.ts:121

***

### bindings?

> `optional` **bindings**: `object`

Parameters for the control. Only static bindings are supported.

#### Index Signature

 \[`name`: `string`\]: `object`

#### Defined in

src/utils/dataset/interfaces.ts:125

***

### name?

> `optional` **name**: `string`

Name of the control as it's saved in Dataverse (or Base Control, for example `OptionSet`).

#### Defined in

src/utils/dataset/interfaces.ts:117
