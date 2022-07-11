# Deploy an Environment
All the following content follows Power Platform's best practices to meet all security and lifecycle management standards. Specific tenant situations may be consulted with NETWORG.

## Introduction
All Dataverse customizations published by NETWORG are distributed through managed solutions if technically possible. There are automated deployments to avoid unnecessary manual actions and smoothen up the release of a new application version.

## Consent Application Registrations
**Following actions are done by the global (tenant) administrator**. (NETWORG offers full tenant management if the customer prefers this option)

Application registration allows to interact with customer's Dataverse environments without interactive access. The automated deployments are not possible without this step.

1. Consent application registrations by visiting following links
   1. [TALXIS Deployments](https://talxis.com/add-deployment-app)
   1. [TALXIS Portals](https://talxis.com/add-portals-app)
   1. [TALXIS Metadata Service](https://talxis.com/add-metadata-app)

These applications cannot read any Dataverse data without creating application user on a specific environment and assigning it a proper security role.

## Configure an Existing Environment for the Deployment
### Prerequisites
1. [Provision an environment](./provision-an-environment.md)
1. [Provide an interactive access to an environment](./provide-an-interactive-access-to-an-environment.md)

**Following actions are done by the Dataverse environment System administrator**. (NETWORG performs these steps)

### Automated Steps
1. Perform a POST to `https://missioncontrol.services.talxis.com/onboarding/provisionappuser`
```json
{
   "tenant": "tenant.com",
   "environmentUrl": "https://environmentName.crm4.dynamics.com",
   "serviceAdminCredentials":
   {
      "type": "user",
      "userName": "admin_networg@tenant.onmicrosoft.com",
      "password": "*************"
   }
}
```

### Manual Steps
1. Go to `{environmentUrl}//main.aspx?app=d365default&forceUCI=0&newWindow=true&pagetype=entityrecord&etn=systemuser&formid=d26924ef-4d80-46f7-ab1d-e6ae80a54ce8`
1. Set *Application Id* to *4ab337b1-27bc-421d-8d56-7462bbea9831*
![Application user form](/.attachments/developer-guide/applications/onboarding/deploy-an-environment/application-user-form.png)
1. Save the form
1. Assign the appropriate security permissions and roles for deployment (System Administrator)