# Provision an Environment
All the following content follows Power Platform's best practices to meet all security and lifecycle management standards. Specific tenant situations may be consulted with NETWORG.

## Introduction
All the TALXIS applications are managed by NETWORG and cannot be customized by the customer or a third-party publisher. There needs to be an isolated Dataverse environment to ensure that premise. Isolated environment also makes it impossible for NETWORG to access any other Power Platform application in the tenant.

## Create a New Environment
**Following actions are done by the Power Platform administrator**. (NETWORG offers full Power Platform management if the customer prefers this option)

1. Go to the [Power Platform admin center](https://admin.powerplatform.microsoft.com/account/login/)
1. Select *Environments* from the left side menu and click on *New*
   1. Set *Name* (PCTYYXXX-PROD)
   1. Select *Region* (Europe)
   1. Select *Type* (Production)
   1. Set *Create a database* to *Yes*
   ![New environment](/.attachments/developer-guide/applications/onboarding/provision-an-environment/new-environment.png)
   1. Set *Language* to ***English*** - you can enable additional languages later, but English must be set as default language
   1. Set *URL* (lowercase environment's name)
   1. Set *Currency* for customer's primary reporting currency
   ![New environment](/.attachments/developer-guide/applications/onboarding/provision-an-environment/add-database.png)
1. Deploy additional (display) languages under a specific environment -> *Settings* -> *Product* -> *Languages*
![Deploy additional languages](/.attachments/developer-guide/applications/onboarding/provision-an-environment/settings-languages.png)
   1. Provisioning of a new language can take up to 20 minutes.
1. It is suggested to assign a security group to this environment to provision users