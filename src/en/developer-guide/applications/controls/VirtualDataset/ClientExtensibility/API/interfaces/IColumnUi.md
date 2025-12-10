Contains methods for getting UI information about the column.

## Properties

### getControlParameters()

> **getControlParameters**: (`currentParameters`) => [`IControlParameters`](IControlParameters.md)

Return the control parameters for a control. Includes possibe override from `setControlParametersExpression`.

#### Parameters

• **currentParameters**: [`IControlParameters`](IControlParameters.md)

#### Returns

[`IControlParameters`](IControlParameters.md)

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:318

***

### getCustomControlComponent()

> **getCustomControlComponent**: () => `undefined` \| [`ICustomColumnComponent`](ICustomColumnComponent.md)

Returns the custom component used for the column.

#### Returns

`undefined` \| [`ICustomColumnComponent`](ICustomColumnComponent.md)

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:333

***

### getCustomControls()

> **getCustomControls**: (`defaultCustomControls`) => [`ICustomColumnControl`](ICustomColumnControl.md)[]

Returns all custom controls that can be used for this column.

#### Parameters

• **defaultCustomControls**: [`ICustomColumnControl`](ICustomColumnControl.md)[]

#### Returns

[`ICustomColumnControl`](ICustomColumnControl.md)[]

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:323

***

### getCustomFormatting()

> **getCustomFormatting**: (`cellTheme`) => `undefined` \| [`ICustomColumnFormatting`](ICustomColumnFormatting.md)

Returns custo formatting for column,

#### Parameters

• **cellTheme**: `any`

#### Returns

`undefined` \| [`ICustomColumnFormatting`](ICustomColumnFormatting.md)

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:328

***

### getNotifications()

> **getNotifications**: () => [`IAddControlNotificationOptions`](IAddControlNotificationOptions.md)[]

Returns all notifications for a column.

#### Returns

[`IAddControlNotificationOptions`](IAddControlNotificationOptions.md)[]

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:309

***

### isLoading()

> **isLoading**: () => `boolean`

Whether the record column is loading.

#### Returns

`boolean`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:313
