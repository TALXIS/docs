> **IInterceptor**\<`T`, `K`\>: (`parameters`, `defaultAction`) => `ReturnType`\<`T`\[`K`\]\>

Can be used to simplify injecting of custom logic into existing methods.

## Type Parameters

• **T** *extends* `{ [K in keyof T]: Function }`

• **K** *extends* keyof `T`

## Parameters

• **parameters**: `Parameters`\<`T`\[`K`\]\>\[`0`\]

• **defaultAction**

## Returns

`ReturnType`\<`T`\[`K`\]\>

## Defined in

src/helpers/events/Interceptors.ts:5
