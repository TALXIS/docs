> **DeepPartial**\<`T`\>: `{ [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P] }`

Makes all properties optional.

## Type Parameters

• **T**

## Defined in

src/utils/dataset/data-providers/interfaces.ts:726
