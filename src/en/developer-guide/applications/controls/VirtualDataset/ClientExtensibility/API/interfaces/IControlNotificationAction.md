Interface to define the actions on a control notification

## Extends

- `ControlNotificationAction`

## Properties

### actions

> **actions**: () => `void`[]

Array of functions. The corresponding actions for the message.

#### Inherited from

`Xrm.Controls.ControlNotificationAction.actions`

#### Defined in

node\_modules/@types/xrm/index.d.ts:4407

***

### iconName?

> `optional` **iconName**: `string`

Fluent icon associated with the action.

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:491

***

### message?

> `optional` **message**: `string`

The body message of the notification to be displayed to the user. Limit your message to 100 characters for optimal user experience.

#### Inherited from

`Xrm.Controls.ControlNotificationAction.message`

#### Defined in

node\_modules/@types/xrm/index.d.ts:4402
