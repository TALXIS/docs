# Why is it required to consent the applications?
The TALXIS ecosystem consists of various SaaS (System as a Service) products. Most of the products require communication with other TALXIS and Microsoft services. Every data flow between these **must** be strongly secured. Since TALXIS is primarily built on top of Microsoft technology stack, [Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/fundamentals/whatis) was chosen as an identity platform. Microsoft Entra ID implements [OpenID Connect (OIDC) and OAuth 2.0](https://learn.microsoft.com/en-us/entra/identity-platform/v2-protocols) protocols to satisfy this requirement for strong security. If you wish to use the TALXIS products, you will need to consent the client applications so that [your organization's Microsoft Entra ID trusts](https://learn.microsoft.com/en-us/entra/identity-platform/v2-protocols#app-registration) them and issues valid security tokens to them.

A typical user grant flow ([authorization code](https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow) / [implicit](https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-implicit-grant-flow)) consists of the application requesting an other service, and because there is no valid token for the service, user is prompted through a pop-up window, where he should log-in to the requested service. To streamline the token management, TALXIS products are mainly using OBO ([On-Behalf-Of]((https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-on-behalf-of-flow))) grant flow. Thanks to this approach, a true SSO (single sign-on) is possible and the amount of additional pop-ups is limited to its minimum.

The application registrations bellow were separated by the product or service and often by the client they are consumed from as well. This enables TALXIS to support the OBO grant flow while enabling your organization's admins to limit the permissions they grant. It is **not recommended** to approve all of them. If you are not sure which ones apply to you, contact [NETWORG](https://www.networg.com/) to provide you with a specific list matching your setup.

# Terminology
All the application registrations will be referencing some terms you should be familiar with before proceeding.
| Term       | Explanation                                                                            |
|------------|----------------------------------------------------------------------------------------|
| API Name   | The name of the service or API the application registration wants the permissions for. |
| Claim      | Sometimes referred to as scope, this is the logical name of the permission.            |
| Permission | Description of the permission.                                                         |
| Type       | Either a [Delegated permission](https://learn.microsoft.com/en-us/entra/identity-platform/permissions-consent-overview#delegated-access-access-on-behalf-of-a-user) or an [Application permission](https://learn.microsoft.com/en-us/entra/identity-platform/permissions-consent-overview#app-only-access-access-without-a-user). They differ in access context. **Delegated permission** => the application will never be able to access anything the signed in user themselves couldn't access. **Application permission** => the application will be able to access any data that the permission is associated with. |

# Power Platform Deployments
TALXIS deployments to the downstream Power Platform Dataverse environments are fully automated to save resources and prevent any errors. If your organization's Dataverse environment is to be deployed by TALXIS, make sure to consent the following application.

| Name                                      | Consent Link                                                                                               |
|-------------------------------------------|------------------------------------------------------------------------------------------------------------|
| [TALXIS Deployments](#talxis-deployments) | [🔗](https://login.microsoftonline.com/common/adminconsent?client_id=4ab337b1-27bc-421d-8d56-7462bbea9831)  |

## TALXIS Deployments
Application can read & write only to environments where permissions have been [explicitly granted to the service principal](https://learn.microsoft.com/en-us/power-platform/admin/manage-application-users). The principal is non-interactive.

| API Name                       | Claim              | Permission                                       | Type      | **Business Justification**                                                                                             |
|--------------------------------|--------------------|--------------------------------------------------|-----------|------------------------------------------------------------------------------------------------------------------------|
| Windows Azure Active Directory | User.Read          | Sign in and read user profile                    | Delegated | The application must be aware of the identity used in the context of the deployment.                                   |
| Dataverse                      | user_impersonation | Access Common Data Service as organization users | Delegated | The application must be able to impersonate the non-interactive user used for the deployment when accessing Dataverse. |

If you need to setup the Dataverse environment as well, maybe take a look [here](/en/developer-guide/applications/onboarding/deploy-an-environment.md) first.

# TALXIS Portal
If you have selected TALXIS Portal as your hosting option, these are the application registrations requiring consent.

| Name                                                | Consent Link                                                                                              |
|-----------------------------------------------------|-----------------------------------------------------------------------------------------------------------|
| [TALXIS Portals](#talxis-portals)                   | [🔗](https://login.microsoftonline.com/common/adminconsent?client_id=8d532ed4-92e0-4760-8798-51a97ba148e1) |
| [TALXIS Metadata Service](#talxis-metadata-service) | [🔗](https://login.microsoftonline.com/common/adminconsent?client_id=017cc2db-5fcd-44e3-af71-11b1b77b51b7) |

## TALXIS Portals
Application is used to access data inside Dataverse environment. It can read & write only to environments where permissions have been [explicitly granted to the service principal](https://learn.microsoft.com/en-us/power-platform/admin/manage-application-users). The principal is non-interactive.

| API Name        | Claim              | Permission                                       | Type      | **Business Justification**                                                                                                  |
|-----------------|--------------------|--------------------------------------------------|-----------|-----------------------------------------------------------------------------------------------------------------------------|
| Dataverse       | user_impersonation | Access Common Data Service as organization users | Delegated | The application must be able to impersonate the non-interactive user used for accessing data to be presented in the Portal. |
| Microsoft Graph | User.Read          | Sign in and read user profile                    | Delegated | The application must be aware of the identity used in the context of the data access.                                       |

## TALXIS Metadata Service
Application is used to access metadata of the application inside Dataverse environment. It can read only to environments where permissions have been [explicitly granted to the service principal](https://learn.microsoft.com/en-us/power-platform/admin/manage-application-users). The principal is non-interactive.

| API Name        | Claim              | Permission                                       | Type      | **Business Justification**                                                                                                                |
|-----------------|--------------------|--------------------------------------------------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------|
| Dataverse       | user_impersonation | Access Common Data Service as organization users | Delegated | The application must be able to impersonate the non-interactive user used for accessing metadata to render the application in the Portal. |
| Microsoft Graph | User.Read          | Sign in and read user profile                    | Delegated | The application must be aware of the identity used in the context of the metadata access.                                                 |

# Power Automate
These are the application registrations through which TALXIS Power Automate Connectors obtain the token and user identity with it.

| Name                                                                                                  | Consent Link                                                                                               |
|-------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| [TALXIS - Connectors - MsGraph](#talxis---connectors---msgraph)                                       | [🔗](https://login.microsoftonline.com/common/adminconsent?client_id=9abe7859-8203-4041-abb0-d82f52673a0d)  |
| [TALXIS - Data Feed - Flow](#talxis---data-feed---flow)                                               | [🔗](https://login.microsoftonline.com/common/adminconsent?client_id=28d529aa-b85e-4469-9cf3-937bea582555)  |
| [TALXIS - Documents - Flow](#talxis---documents---flow)                                               | [🔗](https://login.microsoftonline.com/common/adminconsent?client_id=9e11c855-6c8f-46b1-8608-ba2ce87ee92d)  |
| [TALXIS - Email Connector - Flow](#talxis---email-connector---flow)                                   | [🔗](https://login.microsoftonline.com/common/adminconsent?client_id=902749a8-29c9-4446-9634-10de78074c96)  |
| [Signi.com - Power Automate](#signicom---power-automate)                                              | [🔗](https://login.microsoftonline.com/common/adminconsent?client_id=2a470e76-25c7-4ae2-9999-79b24dfe1e72)  |
| [TALXIS - Portal - Cloud Flow Registration - Flow](#talxis---portal---cloud-flow-registration---flow) | [🔗](https://login.microsoftonline.com/common/adminconsent?client_id=0f52068f-49af-4b10-9aa1-a212bddc56d5)  |
| [TALXIS - STS - Flow](#talxis---sts---flow)                                                           | [🔗](https://login.microsoftonline.com/common/adminconsent?client_id=9bc073cf-6729-41dd-9823-033ed705fbc0)  |
| [TALXIS - Surveys - Flow](#talxis---surveys---flow)                                                   | [🔗](https://login.microsoftonline.com/common/adminconsent?client_id=f2983f6d-6272-4a56-be39-59220d52942b)  |


## TALXIS - Connectors - MsGraph
Application registration for TALXIS custom connector for Microsoft Graph. This connector allows to call some actions, that the native connector does not have support for.

| API Name        | Claim              | Permission                              | Type          | **Business Justification**                                                                                               |
|-----------------|--------------------|-----------------------------------------|---------------|--------------------------------------------------------------------------------------------------------------------------|
| Microsoft Graph | User.Read          | Sign in and read user profile           | Delegated     | The application must be aware of the identity used in the context of the actions.                                        |
| Microsoft Graph | User.ReadWrite.All | Read and write all users' full profiles | **Delegated** | The connector can manipulate with user objects and it needs this permission to do so. It is only a delegated permission. |

## TALXIS - Data Feed - Flow
Application registration for TALXIS Data Feed Power Automate connector. This connector exposes range of public data. For example: getting public holidays for a given state, getting organization data from business register, geocoding addresses, etc.

| API Name                | Claim                | Permission                                          | Type      | **Business Justification**                                                                   |
|-------------------------|----------------------|-----------------------------------------------------|-----------|----------------------------------------------------------------------------------------------|
| Microsoft Graph | User.Read          | Sign in and read user profile           | Delegated     | The application must be aware of the identity used in the context of the actions.                                        |
| TALXIS Data Feed **\*** | API.AccessAsUser.All | Access TALXIS Data Feed as current user                    | Delegated | Required so that the Power Automate connector can communicate with the TALXIS Data Feed API. |
---
**\***: Requires consent of [TALXIS Data Feed](#talxis-data-feed).

## TALXIS - Documents - Flow
Application registration for TALXIS Documents Power Automate connector. This connector can be used for generating Word, Excel and Power Point documents from templates.

| API Name        | Claim          | Permission                                          | Type      | **Business Justification**                                                        |
|-----------------|----------------|-----------------------------------------------------|-----------|-----------------------------------------------------------------------------------|
| Microsoft Graph | User.Read          | Sign in and read user profile           | Delegated     | The application must be aware of the identity used in the context of the actions.                                        |
| TALXIS - Documents **\*** | user_impersonation | Access TALXIS Documents API as current user                    | Delegated | Required so that the Power Automate connector can communicate with the TALXIS Documents API. |
---
**\***: Requires consent of [TALXIS - Documents](#talxis---documents).

## TALXIS - Email Connector - Flow
Application registration for TALXIS Email Power Automate connector. This connector can send emails from custom domains.

| API Name                        | Claim                | Permission                      | Type      | **Business Justification**                                                                                |
|---------------------------------|----------------------|---------------------------------|-----------|-----------------------------------------------------------------------------------------------------------|
| Microsoft Graph                 | User.Read            | Sign in and read user profile   | Delegated | The application must be aware of the identity used in the context of the actions.                         |
| TALXIS - Email Connector **\*** | API.AccessAsUser.All | Access TALXIS Email Connector API as current user    | Delegated | Required so that the Power Automate connector can communicate with the TALXIS Email Connector API. |
---
**\***: Requires consent of [TALXIS - Email Connector](#TALXIS---Email-Connector).

## Signi.com - Power Automate
Application registration for Signi Power Automate connector. This connector is developed and maintained by TALXIS. The connector supports multiple e-signature scenarios.

| API Name         | Claim                | Permission                    | Type      | **Business Justification**                                                                         |
|------------------|----------------------|-------------------------------|-----------|----------------------------------------------------------------------------------------------------|
| Microsoft Graph  | User.Read            | Sign in and read user profile | Delegated | The application must be aware of the identity used in the context of the actions.                  |
| Signi.com **\*** | API.AccessAsUser.All | Access TALXIS Signi proxy as current user  | Delegated | Required so that the Power Automate connector can communicate with the TALXIS Signi proxy. |
---
**\***: Requires consent of [Signi.com](#signicom).

<!-- KOS: I don't think this one is used by the customers
## TALXIS - Portal - Cloud Flow Registration - Flow
TBD

| API Name                                 | Claim          | Permission                    | Type      | **Business Justification**                                                        |
|------------------------------------------|----------------|-------------------------------|-----------|-----------------------------------------------------------------------------------|
| Microsoft Graph                          | User.Read      | Sign in and read user profile | Delegated | The application must be aware of the identity used in the context of the actions. |
| TALXIS Portals - Dataverse Access **\*** | access_as_user | Access as user                | Delegated |  |
---
**\***: Requires consent of [TALXIS Portal](#TALXIS-Portal).
-->

## TALXIS - STS - Flow
Application registration for TALXIS Security Token Service Power Automate connector. This connector can generate security tokens for magic links and password-less or one-time sign in scenarios.

| API Name            | Claim          | Permission                    | Type      | **Business Justification**                                                        |
|---------------------|----------------|-------------------------------|-----------|-----------------------------------------------------------------------------------|
| Microsoft Graph     | User.Read      | Sign in and read user profile | Delegated | The application must be aware of the identity used in the context of the actions. |
| TALXIS - STS **\*** | access_as_user | Access as user                | Delegated | Required so that the Power Automate connector can communicate with the TALXIS STS API. |
---
**\***: Requires consent of [TALXIS - STS](#TALXIS---STS).

## TALXIS - Surveys - Flow
Application registration for TALXIS Surveys Power Automate connector. This connector can create and update session. It can also wait for the survey response before continuing.

| API Name                      | Claim              | Permission                    | Type      | **Business Justification**                                                        |
|-------------------------------|--------------------|-------------------------------|-----------|-----------------------------------------------------------------------------------|
| Microsoft Graph               | User.Read          | Sign in and read user profile | Delegated | The application must be aware of the identity used in the context of the actions. |
| TALXIS - Surveys - API **\*** | user_impersonation | User Impersonation            | Delegated | Required so that the Power Automate connector can communicate with the TALXIS Surveys API. |
---
**\***: Requires consent of [TALXIS - Surveys - API](#TALXIS---Surveys---API).

# Power Apps Component Framework
[PCF](https://learn.microsoft.com/en-us/power-apps/developer/component-framework/overview) controls make it possible to deliver custom user experiences to your Power Apps applications - both Canvas and Model-driven. Although the PCF provides a context through which the control can interact with the host (getting latest data, saving data, etc.), there is no API for getting the user token due to security implications. If the control wants to interact with a different service, it needs to get the token on its own. That is why these application registrations exist.

| Name                                                                     | Consent Link                                                                                               |
|--------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| [TALXIS - PCF.AddressPicker](#talxis---pcfaddresspicker)                 | [🔗](https://login.microsoftonline.com/common/adminconsent?client_id=7941f3c9-f4db-441d-9fce-7b3eb7a2ef10)  |
| [TALXIS - PCF.BizMachineProspector](#talxis---pcfbizmachineprospector)   | [🔗](https://login.microsoftonline.com/common/adminconsent?client_id=dbea120b-e671-40e3-b90c-7b92b45041d1)  |
| [TALXIS - PCF.Calendar](#talxis---pcfcalendar)                           | [🔗](https://login.microsoftonline.com/common/adminconsent?client_id=0fc632dc-da62-4805-aa08-aa2d70716d20)  |
| [TALXIS - PCF.CompanyProfileHinting](#talxis---pcfcompanyprofilehinting) | [🔗](https://login.microsoftonline.com/common/adminconsent?client_id=b8becf32-7f36-4d2f-bbdc-456c6e910405)  |
| [TALXIS - PCF.Documents](#talxis---pcfdocuments)                         | [🔗](https://login.microsoftonline.com/common/adminconsent?client_id=31c4f4d3-36cc-4e50-ae36-45b2b63b9600)  |
| [TALXIS - PCF.FilePicker](#talxis---pcffilepicker)                       | [🔗](https://login.microsoftonline.com/common/adminconsent?client_id=1fd1cbbe-eefe-4583-b422-4a7661cf5c60)  |
| [TALXIS - PCF.InvoiceRecognition](#talxis---pcfinvoicerecognition)       | [🔗](https://login.microsoftonline.com/common/adminconsent?client_id=ff48c017-4051-46e9-a67b-313de6b17a4b)  |
| [TALXIS - PCF.MapPicker](#talxis---pcfmappicker)                         | [🔗](https://login.microsoftonline.com/common/adminconsent?client_id=1dc2b128-6003-42b6-a989-d78d6c0d0a5c)  |
| [TALXIS - PCF.PeopleGrid](#talxis---pcfpeoplegrid)                       | [🔗](https://login.microsoftonline.com/common/adminconsent?client_id=7facec0a-d26e-4f71-a213-38b317b4dfe0)  |
| [TALXIS - PCF.ResourceScheduler](#talxis---pcfresourcescheduler)         | [🔗](https://login.microsoftonline.com/common/adminconsent?client_id=17b8c511-3a62-4af6-a93e-86201d4e8bc3)  |

## TALXIS - PCF.AddressPicker
Application registration for TALXIS Address Picker PCF.

| API Name                | Claim                | Permission                       | Type      | **Business Justification**                                                                   |
|-------------------------|----------------------|----------------------------------|-----------|----------------------------------------------------------------------------------------------|
| Microsoft Graph         | User.Read            | Sign in and read user profile    | Delegated | The application must be aware of the identity used in the context of the actions.            |
| TALXIS Data Feed **\*** | API.AccessAsUser.All | Access Data Feed as Current User | Delegated | Required so that the Power Automate connector can communicate with the TALXIS Data Feed API. |
---
**\***: Requires consent of [TALXIS Data Feed](#talxis-data-feed).

## TALXIS - PCF.BizMachineProspector
Application registration for TALXIS BizMachine Prospector PCF.

| API Name                | Claim                | Permission                       | Type      | **Business Justification**                                                                   |
|-------------------------|----------------------|----------------------------------|-----------|----------------------------------------------------------------------------------------------|
| Microsoft Graph         | User.Read            | Sign in and read user profile    | Delegated | The application must be aware of the identity used in the context of the actions.            |
| TALXIS Data Feed **\*** | API.AccessAsUser.All | Access Data Feed as Current User | Delegated | Required so that the Power Automate connector can communicate with the TALXIS Data Feed API. |
---
**\***: Requires consent of [TALXIS Data Feed](#talxis-data-feed).

## TALXIS - PCF.Calendar
Application registration for TALXIS Calendar PCF.

| API Name        | Claim               | Permission                         | Type      | **Business Justification**                                                                           |
|-----------------|---------------------|------------------------------------|-----------|------------------------------------------------------------------------------------------------------|
| Microsoft Graph | Calendars.ReadWrite | Have full access to user calendars | Delegated | The application must have access to users' calendars in order to show or change users' Appointments. |
| Microsoft Graph | User.Read           | Sign in and read user profile      | Delegated | The application must be aware of the identity used in the context of the actions.                    |
| Microsoft Graph | User.Read.All       | Read all users' full profiles      | Delegated | The application must be aware of the identity of all users to access their calendars.                |

## TALXIS - PCF.CompanyProfileHinting
Application registration for TALXIS Company Profile Hinting PCF.

| API Name                | Claim                | Permission                       | Type      | **Business Justification**                                                                   |
|-------------------------|----------------------|----------------------------------|-----------|----------------------------------------------------------------------------------------------|
| Microsoft Graph         | User.Read            | Sign in and read user profile    | Delegated | The application must be aware of the identity used in the context of the actions.            |
| TALXIS Data Feed **\*** | API.AccessAsUser.All | Access Data Feed as Current User | Delegated | Required so that the Power Automate connector can communicate with the TALXIS Data Feed API. |
---
**\***: Requires consent of [TALXIS Data Feed](#talxis-data-feed).

## TALXIS - PCF.Documents
Application registration for TALXIS Document Viewer PCF.

| API Name                  | Claim              | Permission                    | Type      | **Business Justification**                                                        |
|---------------------------|--------------------|-------------------------------|-----------|-----------------------------------------------------------------------------------|
| Microsoft Graph           | User.Read          | Sign in and read user profile | Delegated | The application must be aware of the identity used in the context of the actions. |
| TALXIS - Documents **\*** | user_impersonation | User Impersonation            | Delegated |  |
---
**\***: Requires consent of [TALXIS - Documents](#TALXIS---Documents).

## TALXIS - PCF.FilePicker
Application registration for TALXIS File Picker PCF.

| API Name        | Claim               | Permission                                    | Type      | **Business Justification**                                                            |
|-----------------|---------------------|-----------------------------------------------|-----------|---------------------------------------------------------------------------------------|
| Microsoft Graph | Files.ReadWrite     | Have full access to user files                | Delegated | The application must be aware of all the files the user has access to.                |
| Microsoft Graph | Files.ReadWrite.All | Have full access to all files user can access | Delegated | The application must be aware of all the files in the SPO or Environment File System. |
| Microsoft Graph | Group.Read.All      | Read all groups                               | Delegated |  |
| Microsoft Graph | Sites.Read.All      | Read items in all site collections            | Delegated |  |
| Microsoft Graph | User.Read           | Sign in and read user profile                 | Delegated | The application must be aware of the identity used in the context of the actions.     |

## TALXIS - PCF.FilePicker - Group Creation
TBD

| API Name        | Claim                     | Permission                       | Type      | **Business Justification**                                                                  |
|-----------------|---------------------------|----------------------------------|-----------|---------------------------------------------------------------------------------------------|
| Microsoft Graph | Group.ReadWrite.All       | Read and write all groups        | Delegated | The application must be aware of all the groups to work with groups.                        |
| Microsoft Graph | GroupMember.ReadWrite.All | Read and write group memberships | Delegated | The application must be aware of all the group mebmers in order to work with group members. |
| Microsoft Graph | User.Read                 | Sign in and read user profile    | Delegated | The application must be aware of all the group members to work with group members.          |

## TALXIS - PCF.FilePicker - Advanced Permissions
TBD

| API Name        | Claim            | Permission                                                       | Type      | **Business Justification**                                                         |
|-----------------|------------------|------------------------------------------------------------------|-----------|------------------------------------------------------------------------------------|
| Microsoft Graph | People.Read      | Read users' relevant people lists                                | Delegated |  |
| Microsoft Graph | Sites.Manage.All | Create, edit, and delete items and lists in all site collections | Delegated |  |
| Microsoft Graph | User.Read        | Sign in and read user profile                                    | Delegated | The application must be aware of all the group members to work with group members. |

## TALXIS - PCF.InvoiceRecognition
Application registration for TALXIS Invoice Recognition PCF.

| API Name                | Claim                | Permission                       | Type      | **Business Justification**                                                                   |
|-------------------------|----------------------|----------------------------------|-----------|----------------------------------------------------------------------------------------------|
| Microsoft Graph         | User.Read            | Sign in and read user profile    | Delegated | The application must be aware of the identity used in the context of the actions.            |
| TALXIS Data Feed **\*** | API.AccessAsUser.All | Access Data Feed as Current User | Delegated | Required so that the Power Automate connector can communicate with the TALXIS Data Feed API. |
---
**\***: Requires consent of [TALXIS Data Feed](#talxis-data-feed).

## TALXIS - PCF.MapPicker
Application registration for TALXIS Map Picker PCF.

| API Name                | Claim                | Permission                       | Type      | **Business Justification**                                                                   |
|-------------------------|----------------------|----------------------------------|-----------|----------------------------------------------------------------------------------------------|
| Microsoft Graph         | User.Read            | Sign in and read user profile    | Delegated | The application must be aware of the identity used in the context of the actions.            |
| TALXIS Data Feed **\*** | API.AccessAsUser.All | Access Data Feed as Current User | Delegated | Required so that the Power Automate connector can communicate with the TALXIS Data Feed API. |
---
**\***: Requires consent of [TALXIS Data Feed](#talxis-data-feed).

## TALXIS - PCF.PeopleGrid
Application registration for TALXIS People Grid PCF.

| API Name                | Claim                | Permission                       | Type      | **Business Justification**                                                                   |
|-------------------------|----------------------|----------------------------------|-----------|----------------------------------------------------------------------------------------------|
| Microsoft Graph         | User.Read            | Sign in and read user profile    | Delegated | The application must be aware of the identity used in the context of the actions.            |
| TALXIS Data Feed **\*** | API.AccessAsUser.All | Access Data Feed as Current User | Delegated | Required so that the Power Automate connector can communicate with the TALXIS Data Feed API. |
---
**\***: Requires consent of [TALXIS Data Feed](#talxis-data-feed).

## TALXIS - PCF.ResourceScheduler
Application registration for TALXIS Resource Scheduler PCF.

| API Name        | Claim              | Permission                     | Type      | **Business Justification**                                                        |
|-----------------|--------------------|--------------------------------|-----------|-----------------------------------------------------------------------------------|
| Microsoft Graph | User.Read          | Sign in and read user profile  | Delegated | The application must be aware of the identity used in the context of the actions. |
| Microsoft Graph | User.ReadBasic.All | Read all users' basic profiles | Delegated | The application must be aware of other users' identities to work with them.       |

# Other
Miscellaneous TALXIS application registrations. Some of these are probably being called from the [PCFs](#power-apps-component-framework) or [cloud flows](#power-automate).


| Name                                                    | Consent Link                                                                                              |
|---------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|
| [TALXIS Client](#talxis-client)                         | [🔗](https://login.microsoftonline.com/common/adminconsent?client_id=526f3cf8-fd5c-4648-87f6-b0e4b986acdb) |
| [TALXIS - Flow Monitor](#talxis---flow-monitor)         | [🔗](https://login.microsoftonline.com/common/adminconsent?client_id=4e16f256-c0d0-4cdf-8172-fa5131656d35) |
| [TALXIS - Signi](#talxis---signi)                       | [🔗](https://login.microsoftonline.com/common/adminconsent?client_id=bcdc8f94-8bbd-4b29-a60f-ae0f4d040359) |
| [TALXIS - Redirect Service](#talxis---redirect-service) | [🔗](https://login.microsoftonline.com/common/adminconsent?client_id=1ca20719-fd11-4865-b748-b3cb43776caa) |
| [TALXIS - STS](#talxis---sts)                           | [🔗](https://login.microsoftonline.com/common/adminconsent?client_id=898fa510-7571-44f0-a026-c0beb3f89d9d) |
| [TALXIS - Surveys - API](#talxis---surveys---api)       | [🔗](https://login.microsoftonline.com/common/adminconsent?client_id=a4d3a04f-f76e-4b53-8d8e-2964804535d4) |
| [TALXIS Bot](#talxis-bot)                               | [🔗](https://login.microsoftonline.com/common/adminconsent?client_id=d4d71a7e-5d32-4c17-a20a-2f796ba30556) |
| [TALXIS Community Inviter](#talxis-community-inviter)   | [🔗](https://login.microsoftonline.com/common/adminconsent?client_id=941eeab3-4a97-4b29-bce8-7e39c2589c3a) |
| [TALXIS Data Feed](#talxis-data-feed)                   | [🔗](https://login.microsoftonline.com/common/adminconsent?client_id=e8af2b8e-a8de-4669-8d94-6b684068beef) |
| [TALXIS - Documents](#TALXIS---Documents)               | [🔗](https://login.microsoftonline.com/common/adminconsent?client_id=1521b230-d369-49ab-b059-00f5c339f046) |
| [TALXIS - Email Connector](#TALXIS---Email-Connector)   | [🔗](https://login.microsoftonline.com/common/adminconsent?client_id=bd229f8f-ea50-423f-881a-e7eef5560580) |


## TALXIS Client
TBD

| API Name        | Claim     | Permission                    | Type      | **Business Justification**                                                                |
|-----------------|-----------|-------------------------------|-----------|-------------------------------------------------------------------------------------------|
| Microsoft Graph | User.Read | Sign in and read user profile | Delegated | The application must be aware of the identity used in the context of the metadata access. |

## TALXIS - Flow Monitor
Application is used to access data inside Power Automate. Collect and manage theese to data to inform about issues on specific flows and flow runs. 

| API Name          | Claim              | Permission                                       | Type        | **Business Justification**                                                                                                            |
|-------------------|--------------------|--------------------------------------------------|-------------|---------------------------------------------------------------------------------------------------------------------------------------|
| Power Automate    | user_impersonation | Access Common Data Service as organization users | Delegated   |  |
| Microsoft Graph   | User.Read          | Sign in and read user profile                    | Delegated   | The application must be aware of the identity used in the context of the metadata access.                                             |
| Microsoft Graph   | User.Read.All      | Read all users' full profiles                    | Application |  |
| Power Automate    | Flows.Manage.All   | Allow the application to manage flows            | Delegated   | The application must be able to read all manage flows in order to monitor the flow runs-                                              |
| Power Automate    | User               | Access Microsoft Flow as signed in user          | Delegated   | The application must be able to impersonate the non-interactive user used for the specific connections when accessing Power Automate. |
| PowerApps Service | User               | Access the PowerApps Service API                 | Delegated   | |

## Signi.com
Application is used to send and electronically sign documents sent via email.

| API Name        | Claim                | Permission                    | Type      | **Business Justification**                                                                                                                 |
|-----------------|----------------------|-------------------------------|-----------|--------------------------------------------------------------------------------------------------------------------------------------------|
| Microsoft Graph | User.Read            | Sign in and read user profile | Delegated | The application must be aware of the identity used in the context of the metadata access.                                                  |
| Microsoft Graph | GroupMember.Read.All | Read group memberships        | Delegated | The application must be able to impersonate the non-interactive user used for accessing metadata to use application data in the documents. |

## TALXIS - Redirect Service
TBD

| API Name        | Claim              | Permission                                       | Type      | **Business Justification**                                                            |
|-----------------|--------------------|--------------------------------------------------|-----------|---------------------------------------------------------------------------------------|
| Dataverse       | user_impersonation | Access Common Data Service as organization users | Delegated | |
| Microsoft Graph | User.Read          | Sign in and read user profile                    | Delegated | The application must be aware of the identity used in the context of the data access. |

## TALXIS - STS
TBD

| API Name        | Claim              | Permission                                       | Type      | **Business Justification**                                                            |
|-----------------|--------------------|--------------------------------------------------|-----------|---------------------------------------------------------------------------------------|
| Dataverse       | user_impersonation | Access Common Data Service as organization users | Delegated | |
| Microsoft Graph | User.Read          | Sign in and read user profile                    | Delegated | The application must be aware of the identity used in the context of the data access. |

## TALXIS - Surveys - API
Application is used to create and send survey with data from Dataverse.

| API Name        | Claim              | Permission                                       | Type      | **Business Justification**                                                                                                                |
|-----------------|--------------------|--------------------------------------------------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------|
| Dataverse       | user_impersonation | Access Common Data Service as organization users | Delegated | The application must be able to impersonate the non-interactive user used for accessing metadata to show application data in the survey.  |
| Microsoft Graph | User.Read          | Sign in and read user profile                    | Delegated | The application must be aware of the identity used in the context of the data access.                                                     |

## TALXIS Bot
TBD

| API Name        | Claim                            | Permission                                  | Type        | **Business Justification**                                                                                                         |
|-----------------|----------------------------------|---------------------------------------------|-------------|------------------------------------------------------------------------------------------------------------------------------------|
| Microsoft Graph | Calls.AccessMedia.All            | Access media streams in a call as an app    | Application | The application must be able to access media streams in order to process them and show valid information to the user.              |
| Microsoft Graph | Calls.Initiate.All               | Initiate outgoing 1 to 1 calls from the app | Application |  |
| Microsoft Graph | Calls.InitiateGroupCall.All      | Initiate outgoing group calls from the app  | Application |  |
| Microsoft Graph | Calls.JoinGroupCall.All          | Join group calls and meetings as an app     | Application |  |
| Microsoft Graph | Calls.JoinGroupCallAsGuest.All   | Join group calls and meetings as a guest    | Application |  |
| Microsoft Graph | OnlineMeetings.Read.All          | Read online meeting details                 | Application |  |
| Microsoft Graph | OnlineMeetings.ReadWrite.All     | Read and create online meetings             | Application |  |
| Microsoft Graph | OnlineMeetingTranscript.Read.All | Read all transcripts of online meetings     | Application | The application must be able to access online meeting transcripts in order to process them and show valid information to the user. |
| Microsoft Graph | openid                           | Sign users in                               | Delegated   |  |
| Microsoft Graph | profile                          | View users' basic profile                   | Delegated   |  |
| Microsoft Graph | User.Read                        | Sign in and read user profile               | Delegated   | The application must be aware of the identity used in the context of the data access.                                              |
| Microsoft Graph | User.Read.All                    | Read all users' full profiles               | Delegated   | The application must be able to access other users profiles in order to process them and show valid information to the user.       |
| Microsoft Graph | User.ReadBasic.All               | Read all users' basic profiles              | Delegated   | The application must be able to access other users profiles in order to process them and show valid information to the user.       |

<!-- ## TALXIS Community Inviter
TBD

| API Name | Claim | Permission | Type | **Business Justification** |
|----------|-------|------------|------|----------------------------|
| -        | -     | -          | -    | -                          |
-->
## TALXIS Data Feed
Application registration for TALXIS Data Feed used in PCF controls.

| API Name        | Claim     | Permission                    | Type      | **Business Justification**                                                            |
|-----------------|-----------|-------------------------------|-----------|---------------------------------------------------------------------------------------|
| Microsoft Graph | User.Read | Sign in and read user profile | Delegated | The application must be aware of the identity used in the context of the data access. |

## TALXIS - Documents
TBD

| API Name        | Claim              | Permission                                       | Type      | **Business Justification**                                                            |
|-----------------|--------------------|--------------------------------------------------|-----------|---------------------------------------------------------------------------------------|
| Dataverse       | user_impersonation | Access Common Data Service as organization users | Delegated | |
| Microsoft Graph | User.Read          | Sign in and read user profile                    | Delegated | The application must be aware of the identity used in the context of the data access. |

## TALXIS - Email Connector
TBD

| API Name        | Claim              | Permission                                       | Type      | **Business Justification**                                                            |
|-----------------|--------------------|--------------------------------------------------|-----------|---------------------------------------------------------------------------------------|
| Microsoft Graph | User.Read          | Sign in and read user profile                    | Delegated | The application must be aware of the identity used in the context of the data access. |
___
___
___
___
___
___
___
___
___
___
___
___

# Applications

| Name | Consent Link | Owner | Client ID |
| - | - | - | - |
| [TALXIS Data Feed](#talxis-data-feed) | [LINK](https://login.microsoftonline.com/common/adminconsent?client_id=e8af2b8e-a8de-4669-8d94-6b684068beef) | INT0010 | e8af2b8e-a8de-4669-8d94-6b684068beef
| [TALXIS Data Feed - Flow](#talxis-data-feed---flow) | [LINK](https://talxis.com/add-connectors-app) | INT0010 | 28d529aa-b85e-4469-9cf3-937bea582555
| [TALXIS - PCF.MapPicker](#talxis---pcfmappicker) | [LINK](https://login.microsoftonline.com/common/adminconsent?client_id=1dc2b128-6003-42b6-a989-d78d6c0d0a5c) | INT0015 | 1dc2b128-6003-42b6-a989-d78d6c0d0a5c
| [TALXIS - PCF.FilePicker](#talxis---pcffilepicker) | [LINK](https://talxis.com/add-dms-app) | INT0015 | 1fd1cbbe-eefe-4583-b422-4a7661cf5c60
| [TALXIS - PCF.FilePicker - Group Creation](#talxis---pcffilepicker---group-creation) | [LINK](https://login.microsoftonline.com/common/adminconsent?client_id=6fc7f36a-b972-45c9-8516-06c0600b4183) | INT0015 | 6fc7f36a-b972-45c9-8516-06c0600b4183
| [TALXIS - PCF.FilePicker - Advanced Permissions](#talxis---pcffilepicker---advanced-permissions) | [LINK](https://login.microsoftonline.com/common/adminconsent?client_id=a6631d2e-c9f0-4327-ba73-5fc8cb87a037) | INT0015 | 6fc7f36a-b972-45c9-8516-06c0600b4183
| [TALXIS - PCF.CompanyProfileHinting](#talxis---pcfcompanyprofilehinting) | [LINK](https://talxis.com/add-controls-app) | INT0015 | b8becf32-7f36-4d2f-bbdc-456c6e910405
| [TALXIS - PCF.AddressPicker](#talxis---pcfaddresspicker) | [LINK](https://login.microsoftonline.com/common/adminconsent?client_id=7941f3c9-f4db-441d-9fce-7b3eb7a2ef10) | INT0015 | 7941f3c9-f4db-441d-9fce-7b3eb7a2ef10
| [TALXIS - Client](#talxis---client) | [LINK](https://login.microsoftonline.com/common/adminconsent?client_id=526f3cf8-fd5c-4648-87f6-b0e4b986acdb) | INT0015 | 526f3cf8-fd5c-4648-87f6-b0e4b986acdb
| [TALXIS - PCF.PeopleGrid](#talxis---pcfpeoplegrid) | [LINK](https://login.microsoftonline.com/common/adminconsent?client_id=7facec0a-d26e-4f71-a213-38b317b4dfe0) | INT0015, PCT21016 | 7facec0a-d26e-4f71-a213-38b317b4dfe0

## TALXIS Deployments

Used for deployments of applications to Power Platform environment. 

### Permissions (delegated)
* Access Common Data Service (Dataverse) as organization user
* Sign in and read signed in user profile

## TALXIS Data Feed

Used as a resource to verify TALXIS Data Feed access. Doesn't need to be explicitly consented.

## TALXIS Data Feed - Flow

Enables use of TALXIS Data Feed API from Power Automate.

### Permissions (delegated)
* Access Data Feed as Current User
* Sign in and read signed in user profile

## TALXIS - PCF.MapPicker

Map control used in TALXIS applications.

### Permissions (delegated)
* Access Data Feed as Current User
* Sign in and read signed in user profile

## TALXIS - PCF.FilePicker

Custom control that allows users to work with SharePoint or Dataverse documents easily and directly from TALXIS applications. Optionally complemented with [TALXIS - PCF.FilePicker - Group Creation](#talxis---pcffilepicker---group-creation) application.

### Permissions (delegated)
* Read items in all site collections
* Have full access to all files user can access
* Have full access to user files
* Read all groups
* Sign in and read signed in user profile

## TALXIS - PCF.FilePicker - Group Creation

Optional app registration if you want the File Picker PCF to allow for group creation via UI. Primarily used in the previous version of File Picker.

### Permissions (delegated)
* Read and write all groups
* Read and write group memberships
* Sign in and read signed in user profile

## TALXIS - PCF.FilePicker - Advanced Permissions

TBD

## TALXIS - PCF.CompanyProfileHinting

Company autosuggest control used in TALXIS applications.

### Permissions (delegated)
* Access Data Feed as Current User
* Sign in and read signed in user profile

## TALXIS - PCF.AddressPicker

Address autosuggest control used in TALXIS applications.

### Permissions (delegated)
* Access Data Feed as Current User
* Sign in and read signed in user profile

## TALXIS - Client

Used in an [authentication broker (internal)](https://dev.azure.com/thenetworg/INT0015/_wiki/wikis/INT0015.wiki/4301/Authentication-Flow?anchor=authentication-broker) scenario, where a token is required from PCF or custom code. It prevents users from getting multiple authentication popups due to 3rd party cookie restrictions.

## TALXIS - PCF.PeopleGrid

* INT0015 - PoepleGrid connects accounts with contacts and allows tracking of additional metadata such as contact's function withing specified account from Data Feed.
* PCT21016 - PoepleGrid connects accounts with contacts and allows tracking of extensive amount of metadata from Data Feed.

### Permissions (delegated)
* Access Data Feed as Current User
* Sign in and read signed in user profile
