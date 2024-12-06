Options for setting record column notifications.

## Extends

- `Omit`\<`Xrm.Controls.AddControlNotificationOptions`, `"actions"`\>

## Properties

### actions?

> `optional` **actions**: [`IControlNotificationAction`](IControlNotificationAction.md)[]

A collection of actions

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:484

***

### compact?

> `optional` **compact**: `boolean`

Whether the notification should be rendered in compact form.

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:474

***

### iconName?

> `optional` **iconName**: `string`

Fluent icon associated with the notification.

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:464

***

### messages

> **messages**: `string`[]

The message to display in the notification.
In the current release, only the first message specified in this array will be displayed.

#### Inherited from

`Omit.messages`

#### Defined in

node\_modules/@types/xrm/index.d.ts:4377

***

### notificationLevel?

> `optional` **notificationLevel**: `NotificationLevel`

Defines the type of notification.

#### Inherited from

`Omit.notificationLevel`

#### Defined in

node\_modules/@types/xrm/index.d.ts:4382

***

### renderedInOverflow?

> `optional` **renderedInOverflow**: `boolean`

Whether the notification should always be rendered in overflow.

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:479

***

### title?

> `optional` **title**: `string`

Title of the notification.

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:469

***

### uniqueId

> **uniqueId**: `string`

The ID to use to clear this notification when using the clearNotification method.

#### Inherited from

`Omit.uniqueId`

#### Defined in

node\_modules/@types/xrm/index.d.ts:4387
