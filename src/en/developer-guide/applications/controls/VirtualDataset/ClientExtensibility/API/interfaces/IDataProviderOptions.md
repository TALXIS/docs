Additional options for Data Provider.

## Properties

### entityMetadata?

> `optional` **entityMetadata**: `DeepPartial`\<`EntityMetadata`\>

Can be used to define/override Entity Metadata.

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:225

***

### title?

> `optional` **title**: `string`

Sets the title describing the provider.

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:215

***

### userSettings?

> `optional` **userSettings**: `UserSettings` \| `UserSettings`

Only needs to be passed if the provider is running in an environment without User Settings present in window.Xrm (for example local PCF harness).

#### Defined in

src/utils/dataset/data-providers/interfaces.ts:220
