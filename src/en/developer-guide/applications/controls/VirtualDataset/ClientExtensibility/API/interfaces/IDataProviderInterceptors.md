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

src/utils/dataset/data-providers/interfaces.ts:1408

***

### onFirstDataLoad()

> **onFirstDataLoad**: () => `Promise`\<`void`\>

Callback that gets triggered nad awaited before the dataset loads first data. Useful for setting initialization code that needs to run before dataset records are loaded.

#### Returns

`Promise`\<`void`\>

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1390

***

### onOpenDatasetItem()

> **onOpenDatasetItem**: (`entityReference`) => `void`

Can be used to customizer or override the behavior for opening a dataset item.

#### Parameters

• **entityReference**: `EntityReference`

#### Returns

`void`

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1394

***

### onRecordSave()

> **onRecordSave**: (`record`) => `Promise`\<[`IRecordSaveOperationResult`](IRecordSaveOperationResult.md)\>

Can be used to provide custom logic for record saving.

#### Parameters

• **record**: [`IRecord`](IRecord.md)

#### Returns

`Promise`\<[`IRecordSaveOperationResult`](IRecordSaveOperationResult.md)\>

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1399

***

### onRetrieveRecordCommand()

> **onRetrieveRecordCommand**: (`options`?) => `Promise`\<[`ICommand`](ICommand.md)[]\>

Can be used to customize both main and inline ribbons.

#### Parameters

• **options?**: [`IRetrieveRecordCommandOptions`](IRetrieveRecordCommandOptions.md)

#### Returns

`Promise`\<[`ICommand`](ICommand.md)[]\>

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:1404
