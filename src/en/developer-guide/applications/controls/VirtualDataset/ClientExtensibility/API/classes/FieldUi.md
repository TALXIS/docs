Class representing the UI aspects of a field.

## Implements

- [`IColumnUi`](../interfaces/IColumnUi.md)

## Methods

### getControlParameters()

> **getControlParameters**(`defaultParameters`): [`IControlParameters`](../interfaces/IControlParameters.md)

Return the control parameters for a control. Includes possibe override from `setControlParametersExpression`.

#### Parameters

• **defaultParameters**: [`IControlParameters`](../interfaces/IControlParameters.md)

#### Returns

[`IControlParameters`](../interfaces/IControlParameters.md)

#### Implementation of

[`IColumnUi`](../interfaces/IColumnUi.md).[`getControlParameters`](../interfaces/IColumnUi.md#getcontrolparameters)

#### Defined in

src/utils/dataset/data-providers/Record/Field/FieldUi.ts:33

***

### getCustomControlComponent()

> **getCustomControlComponent**(): `undefined` \| [`ICustomColumnComponent`](../interfaces/ICustomColumnComponent.md)

Returns the custom component used for the column.

#### Returns

`undefined` \| [`ICustomColumnComponent`](../interfaces/ICustomColumnComponent.md)

#### Implementation of

[`IColumnUi`](../interfaces/IColumnUi.md).[`getCustomControlComponent`](../interfaces/IColumnUi.md#getcustomcontrolcomponent)

#### Defined in

src/utils/dataset/data-providers/Record/Field/FieldUi.ts:52

***

### getCustomControls()

> **getCustomControls**(`defaultCustomControls`): [`ICustomColumnControl`](../interfaces/ICustomColumnControl.md)[]

Returns all custom controls that can be used for this column.

#### Parameters

• **defaultCustomControls**: [`ICustomColumnControl`](../interfaces/ICustomColumnControl.md)[]

#### Returns

[`ICustomColumnControl`](../interfaces/ICustomColumnControl.md)[]

#### Implementation of

[`IColumnUi`](../interfaces/IColumnUi.md).[`getCustomControls`](../interfaces/IColumnUi.md#getcustomcontrols)

#### Defined in

src/utils/dataset/data-providers/Record/Field/FieldUi.ts:39

***

### getCustomFormatting()

> **getCustomFormatting**(`cellTheme`): [`ICustomColumnFormatting`](../interfaces/ICustomColumnFormatting.md)

Returns custo formatting for column,

#### Parameters

• **cellTheme**: `any`

#### Returns

[`ICustomColumnFormatting`](../interfaces/ICustomColumnFormatting.md)

#### Implementation of

[`IColumnUi`](../interfaces/IColumnUi.md).[`getCustomFormatting`](../interfaces/IColumnUi.md#getcustomformatting)

#### Defined in

src/utils/dataset/data-providers/Record/Field/FieldUi.ts:49

***

### getNotifications()

> **getNotifications**(): [`IAddControlNotificationOptions`](../interfaces/IAddControlNotificationOptions.md)[]

Returns all notifications for a column.

#### Returns

[`IAddControlNotificationOptions`](../interfaces/IAddControlNotificationOptions.md)[]

#### Implementation of

[`IColumnUi`](../interfaces/IColumnUi.md).[`getNotifications`](../interfaces/IColumnUi.md#getnotifications)

#### Defined in

src/utils/dataset/data-providers/Record/Field/FieldUi.ts:36

***

### isLoading()

> **isLoading**(): `boolean`

Whether the record column is loading.

#### Returns

`boolean`

#### Implementation of

[`IColumnUi`](../interfaces/IColumnUi.md).[`isLoading`](../interfaces/IColumnUi.md#isloading)

#### Defined in

src/utils/dataset/data-providers/Record/Field/FieldUi.ts:46
