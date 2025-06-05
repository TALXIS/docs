---
Author: Jan Hajek
---

Certain client-side code requires to access protected APIs - like Microsoft Graph for accessing files, TALXIS Data Feed for accessing business registers and so on. Since browsers are getting more stricter about privacy - especially in regards of [third party cookies](https://cookie-script.com/all-you-need-to-know-about-third-party-cookies.html), it is becoming much harder to achieve a true single-sign-on experience. More on this topic from Microsoft Entra ID and SSO side can be found [here](https://learn.microsoft.com/en-us/entra/identity-platform/reference-third-party-cookies-spas).

# Handling authentication in Power Apps

> A more technical writeup can be found [here](https://hajekj.net/2025/04/28/using-entra-authentication-in-power-apps-pcfs-and-client-scripts/).

Since neither controls nor client scripts can interact with the authenticated session within Power Apps, each piece of client code has to handle authentication on its own. This would work fine, but however due to the third party cookies being restricted, each control has to either show its own popup or do a redirect. Redirect can disturb the user while working, and popups are fairly annoying, and there are also restrictions in place - when a popup can be open and when the popup blocker blocks it (the popup has to be open from within a [click event](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/allowPopupsForUserEvents?utm_source=chatgpt.com)).

Since we ship many controls and there are many scenarios where multiple controls are present on the same page, the user would be overwhelmed with dialogs telling them *Click to authenticate* for each control separately. This can be extremely frustrating for the users, and even more frustrating when happening on a mobile device.

Because of the reasons above, we resorted to leveraging a Token Broker to handle the authentication. The Token Broker is a piece of client code which loads into the page via Application Ribbon and registers authentication methods into `window.*` so other code can call it.

The token broker acts as a client facing application which "brokers" the tokens for other clients - controls and client code. This model is nothing really new - [Microsoft Teams does something similar](https://learn.microsoft.com/en-us/microsoftteams/platform/tabs/how-to/authentication/tab-sso-overview?WT.mc_id=AZ-MVP-5003178) for Teams apps (for the same [reasons](https://learn.microsoft.com/en-us/microsoftteams/platform/tabs/how-to/authentication/tab-sso-overview?WT.mc_id=AZ-MVP-5003178#third-party-cookies-on-ios)).

## Why did you not use ...?

### Custom APIs
Using Custom APIs in Dataverse would certainly work for **SOME** scenarios, however it doesn't have the option to work with the user's identity, which from a security standpoint would be a huge risk - especially when accessing SharePoint files for example. This would mean that anyone accessing/working with them would have the identity of an application rather than their own, so auditing and governance would get much more complicated.

### Asynchronous Processing
A lot of actions which we need to perform need to run to completion as soon as possible and waiting for something to complete the action sometime (this is how Power Automate works in general) is not really feasible.

### Power Automate
While it is [possible](https://hajekj.net/2025/05/08/dynamically-executing-power-automate-flows-from-client/) to execute Power Automate directly from within client-code (or asynchronously via entity creation - see above), we would be facing the same issues with identity like with Custom APIs and also performance would be really degraded.

### Nested App Authentication
NAA is [an emerging feature](https://learn.microsoft.com/en-us/office/dev/add-ins/develop/enable-nested-app-authentication-in-your-add-in) currently available only in some Microsoft products - Microsoft Teams and some Office apps. If you are big enough customer, tell your Microsoft executive that you want this available within Power Apps.

# App Registration Setup

> App registrations used by our services can be found [here](https://docs.talxis.com/en/customizer-guide/required-application-consent/)

The scenario typically consists of 3 app registrations:

### Shared Token Broker registration - TALXIS - Client
This is a shared app registration for every client control which wants to use the Token Broker.

### Control client registration
This app registration is unique and specific to each of the clients based on the workload it is supposed to do. It has the Token Broker pre-configured as a known client application.

### Control backend registration
One control can have multiple backends it is calling - for example Microsoft Graph and Data Feed API. The backend registration is usually an existing app registration (in case of Microsoft Graph or TALXIS Data Feed) or a unique one for its own API.

### Security
The reason for this is security - if a customer wants to use Company Picker PCF (which calls Data Feed), they only consent the broker app, the client app for the PCF and the TALXIS Data Feed. If they need to use the File Picker, they only consent the broker app, the File Picker client app (Microsoft Graph is in all tenants). This means that without the consent to File Picker app, in the first scenario, the Token Broker is unable to broker tokens for the File Picker workload and thus retrieve Microsoft Graph tokens.

# Exchanging tokens
From the nature of the authentication the Token Broker is able to exchange the token for the control client registration. The backend token has to be exchanged via the [on-behalf-of (OBO)](https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-on-behalf-of-flow) flow, which requires a confidential client. This means that this cannot be done just from the frontend (it could work with NAA, but see above) and a backend code aware of the client secret has to be involved.

## Security Token Service
In our Broker setup, the backend which performs the OBO flow is called Security Token Service. This service is shared for all our app registrations. It holds the secret (certificate) configured the control client in order to perform the OBO request and provide the token for the requested service (Microsoft Graph, Data Feed, ...) through the Token Broker to the client.

# More information
For more information, please refer to the [internal documentation](https://dev.azure.com/thenetworg/INT0015/_wiki/wikis/INT0015.wiki/4301/Authentication-Flow) (NETWORG employees only) or [reach out to us](https://networg.com).
