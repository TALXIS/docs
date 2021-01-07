---
author: Tomas Prokop
---

# Lookup References
Whenever you need to pass a record reference using string you need to deal with serializing both record ID and an entity logical name. On many places you can find lookups passed as strings in a form of RecordUrl. This is common especially for the workflow engine and Code Activities.

A big advantage is the workflow designer can build RecordUrl of arguments dynamically for you.

![RecordUrl Designer](/.attachments/Screen%20Shot%202021-01-07%20at%2011.12.11%20PM.png)

To help you with serializing and parsing these URL placeholders containing record references you can use *RecordUrl Utility Feature*.

The utility uses [RetrieveCurrentOrganizationRequest](https://docs.microsoft.com/en-us/dotnet/api/microsoft.crm.sdk.messages.retrievecurrentorganizationrequest) to get current organization web application URL.

A resulting serialized string may look like this:
```
https://yourorg.crm4.dynamics.com/main.aspx?etn=talxis_contact&id=e1841cd1-d8fa-4b26-8cb9-837e44037a3d
```

::: warning
Don't share these links with users because Record URLs usually do not contain application identifier (appId). Users may not be navigated to a corrent app module.
:::

## Workflow/Action
![RecordUrl Code Activity](/.attachments/Screen%20Shot%202021-01-07%20at%2011.15.03%20PM.png)

## Flow
![RecordUrl Code Activity](/.attachments/Screen%20Shot%202021-01-07%20at%2011.40.34%20PM.png)