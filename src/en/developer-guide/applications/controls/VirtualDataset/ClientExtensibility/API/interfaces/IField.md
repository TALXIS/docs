Represents a field within a record.

## Properties

### destroy()

> **destroy**: () => `void`

Destroys the field.

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1297

***

### getColumn()

> **getColumn**: () => [`IColumn`](IColumn.md)

Returns the column definition associated with this field.

#### Returns

[`IColumn`](IColumn.md)

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1232

***

### getColumnInfo()

> **getColumnInfo**: () => [`IColumnInfo`](IColumnInfo.md)

Provides column information.

#### Returns

[`IColumnInfo`](IColumnInfo.md)

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1282

***

### getCurrencySymbol()

> **getCurrencySymbol**: () => `string`

Gets the currency symbol used for the field.

#### Returns

`string`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1272

***

### getCustomProperty()

> **getCustomProperty**: (`name`) => `any`

Retrieves custom properties stored on the field instance.

#### Parameters

• **name**: `string`

#### Returns

`any`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1292

***

### getFormattedValue()

> **getFormattedValue**: () => `null` \| `string`

Gets the formatted value of the field, if available.

#### Returns

`null` \| `string`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1247

***

### getRecord()

> **getRecord**: () => [`IRecord`](IRecord.md)

Returns the record to which the field belongs.

#### Returns

[`IRecord`](IRecord.md)

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1277

***

### getRequiredLevel()

> **getRequiredLevel**: () => `RequirementLevel`

Gets the required level for the field.

#### Returns

`RequirementLevel`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1262

***

### getValue()

> **getValue**: () => `any`

Gets the current raw value of the field.

#### Returns

`any`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1242

***

### isDirty()

> **isDirty**: () => `boolean`

Checks if the field has unsaved changes.

#### Returns

`boolean`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1252

***

### isDisabled()

> **isDisabled**: () => `boolean`

Determines if the field is currently disabled.

#### Returns

`boolean`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1267

***

### isValid()

> **isValid**: () => [`IFieldValidationResult`](IFieldValidationResult.md)

Whether the field is valid.

#### Returns

[`IFieldValidationResult`](IFieldValidationResult.md)

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1257

***

### setCustomProperty()

> **setCustomProperty**: (`name`, `value`) => `void`

Allows you to store custom properties on the field instance.

#### Parameters

• **name**: `string`

• **value**: `any`

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1287

***

### setValue()

> **setValue**: (`value`) => `void`

Sets the field's value.

#### Parameters

• **value**: `any`

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1237

***

### ui

> **ui**: [`FieldUi`](../classes/FieldUi.md)

Contains informatian about the field UI.

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1227
