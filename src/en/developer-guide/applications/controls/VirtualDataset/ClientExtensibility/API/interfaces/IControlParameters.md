Collection of parameters for rendering controls.

## Properties

### AutoFocus?

> `optional` **AutoFocus**: `object`

Sets focus on the control when it is rendered.

#### raw

> **raw**: `boolean`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:112

***

### CellType?

> `optional` **CellType**: `object`

Dataset only: Determines whether the control is being used as a Cell Editor 
or Cell Renderer when rendered as part of a Dataset.

#### raw

> **raw**: `"renderer"` \| `"editor"`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:105

***

### Column?

> `optional` **Column**: [`IColumn`](IColumn.md)

Dataset only: Column associated with the record, if rendered within a Dataset.

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:68

***

### ColumnAlignment?

> `optional` **ColumnAlignment**: `object`

Dataset only: Aligns content, applicable when rendered as part of a Dataset.

#### raw

> **raw**: `undefined` \| `"left"` \| `"center"` \| `"right"`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:80

***

### Dataset?

> `optional` **Dataset**: [`IDataset`](IDataset.md)

Dataset only: Dataset instance when the control is rendered as part of a Dataset.

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:58

***

### EnableNavigation?

> `optional` **EnableNavigation**: `object`

Enables navigation to other pages.

#### raw

> **raw**: `boolean`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:73

***

### EnableOptionSetColors?

> `optional` **EnableOptionSetColors**: `object`

OptionSet only: Displays colors for each option.

#### raw

> **raw**: `boolean`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:133

***

### EnableTypeSuffix?

> `optional` **EnableTypeSuffix**: `object`

Dataset only: Displays a type suffix, such as an icon for a Phone field.

#### raw

> **raw**: `boolean`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:126

***

### IsInlineNewEnabled?

> `optional` **IsInlineNewEnabled**: `object`

Lookup only: Enables creating new records directly from the control.

#### raw

> **raw**: `boolean`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:119

***

### IsPrimaryColumn?

> `optional` **IsPrimaryColumn**: `object`

Dataset only: Indicates if the control is bound to a primary Dataset column.

#### raw

> **raw**: `boolean`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:87

***

### PrefixIcon?

> `optional` **PrefixIcon**: `object`

Dataset only: Allows you to set an icon before formatted value. Should be a JSON string that accomodates the [`IIconProps`](https://developer.microsoft.com/en-us/fluentui#/controls/web/icon#implementation) interface
NOTE: This only works for `GridCellRenderer` Base Control, which is the default control for rendering cells in a dataset.

#### raw

> **raw**: `string`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:141

***

### Record?

> `optional` **Record**: [`IRecord`](IRecord.md)

Dataset only: Record instance when the control is rendered as part of a Record.

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:63

***

### ShowErrorMessage?

> `optional` **ShowErrorMessage**: `object`

Decides if the control should display it's own error messages for native errors. For example, if a user inputs 
an invalid value (e.g., a string in a number field), the platform 
(Form, Grid) should show the error message, not the control itself. In this case, the parameter will be false to tell the control it should not display the error message
that comes with the bound attribute.

#### raw

> **raw**: `boolean`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:97

***

### SuffixIcon?

> `optional` **SuffixIcon**: `object`

Dataset only: Allows you to set an icon after formatted value. Should be a JSON string that accomodates the [`IIconProps`](https://developer.microsoft.com/en-us/fluentui#/controls/web/icon#implementation) interface
NOTE: This only works for `GridCellRenderer` Base Control, which is the default control for rendering cells in a dataset.

#### raw

> **raw**: `string`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:148
