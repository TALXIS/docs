---
Author: Matěj Samler
---

# Authentication diagram of File Explorer

![File Explorer Auth Requests](/.attachments/applications/Controls/FileExplorer/fileexplorer_authrequests.png)

File Explorer PCF (PowerApps Component Framework) control enables secure file interactions with SharePoint via Microsoft Graph API.
For more information about neccessary app consents, please refer to [this page](/docs/src/en/customizer-guide/required-application-consent.md#talxis---pcffilepicker).

After a successful authentication with the consented Azure app, the token is exchanged with securitytokens.services.talxis.com, a custom atuhentication service, which exchanges the App token for a MS Graph token with desired scopes. This is done using [On-Behalf-Of-Flow pattern](https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-on-behalf-of-flow)

That token is then used to access SharePoint resources via Microsoft Graph API, allowing the control to perform file operations such as upload, download, and delete.
