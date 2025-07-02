Allows you to intercept certain data flows and inject custom data

## Properties

### columns()

> **columns**: (`columns`) => [`IColumn`](IColumn.md)[]

Intercepts all column getters. You can use it to add your own custom columns during runtime or edit existing ones. NEVER MANIPULATE THE ORIGINAL OBJECTS, ALWAYS USE SPREAD OPERATORS

#### Parameters

• **columns**: [`IColumn`](IColumn.md)[]

#### Returns

[`IColumn`](IColumn.md)[]

#### Defined in

src/utils/dataset/interfaces.ts:75
