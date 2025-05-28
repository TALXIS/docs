---
Author: Matěj Samler
---

# Authentication diagram of File Explorer

``` mermaid
%%{init: {'theme': 'dark'}}%%
sequenceDiagram
    participant U as User
    participant FE as File Explorer PCF
    participant AAD as AAD (Azure Active Directory)
    participant AZ as Azure (TALXIS STS)
    participant MG as Microsoft Graph Api
    participant SP as SharePoint

    U ->> FE: Interaction in app

    FE ->> AAD: Silent SSO or Pop-Up
    activate AAD
    AAD -->> FE: Return token
    deactivate AAD

    FE ->> FE: Use returned token

    FE ->> AZ: Call using<br>On-Behalf-Of Flow
    activate AZ
    AZ ->> AZ: 
    Note over AZ: TALXIS Security Tokens Service
    AZ -->> FE: Return token
    deactivate AZ

    FE ->> FE: Use returned token

    FE ->> MG: Authenticated request
    activate MG
    MG ->> SP: File read/File write
    activate SP
    SP -->> MG: Result
    deactivate SP
    MG -->> FE: Result
    deactivate MG

    FE ->> U: Response
```

File Explorer PCF (PowerApps Component Framework) control enables secure file interactions with SharePoint via Microsoft Graph API.
For more information about neccessary app consents, please refer to [this page](/docs/src/en/customizer-guide/required-application-consent.md#talxis---pcffilepicker).

After a successful authentication with the consented Azure app, the token is exchanged with securitytokens.services.talxis.com, a custom atuhentication service, which exchanges the App token for a MS Graph token with desired scopes. This is done using [On-Behalf-Of-Flow pattern](https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-on-behalf-of-flow)

That token is then used to access SharePoint resources via Microsoft Graph API, allowing the control to perform file operations such as upload, download, and delete.

For more information, please refer to the [internal documentation](https://dev.azure.com/thenetworg/INT0015/_wiki/wikis/INT0015.wiki/4301/Authentication-Flow)
