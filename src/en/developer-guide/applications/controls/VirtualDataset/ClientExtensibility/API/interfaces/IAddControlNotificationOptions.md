Options for setting record column notifications.

## Extends

- `Omit`\<`Xrm.Controls.AddControlNotificationOptions`, `"actions"`\>

## Properties

### actions?

> `optional` **actions**: [`IControlNotificationAction`](IControlNotificationAction.md)[]

A collection of actions

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:709

***

### buttonProps?

> `optional` **buttonProps**: `Omit`\<`any`, `"text"` \| `"key"`\>

Optional props to customize the look of notification button.

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:704

***

### iconName?

> `optional` **iconName**: `string`

Fluent UI icon representing the notification.

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:699

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

### text?

> `optional` **text**: `string`

Text of the notification.

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:694

***

### uniqueId

> **uniqueId**: `string`

The ID to use to clear this notification when using the clearNotification method.

#### Inherited from

`Omit.uniqueId`

#### Defined in

node\_modules/@types/xrm/index.d.ts:4387
