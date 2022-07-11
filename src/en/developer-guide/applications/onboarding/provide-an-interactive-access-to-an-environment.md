# Provide an Interactive Access to an Environment
All the following content follows Power Platform's best practices to meet all security and lifecycle management standards. Specific tenant situations may be consulted with NETWORG.

## Introduction
Interactive access is required due to configuration of the managed applications. For example, setting up connections for connection references being used in the managed flows. Since this can't be done without interactive access, NETWORG requires one interactive user for [the isolated environment](/provision-an-environment.md). Since the access is provided only to this isolated environment, NETWORG cannot access any data outside of the scope of the delivery.

## Add a User
**Following actions are done by the global (tenant) administrator**. (NETWORG offers full tenant management if the customer prefers this option)

1. Go to [Microsoft 365 admin center](https://admin.microsoft.com/)
1. Navigate to *Users* -> *Active users* -> *Add a user*
![Add a user](/.attachments/developer-guide/applications/onboarding/provide-an-interactive-access-to-an-environment/add-a-user.png)
   1. *Display name* should be set to *NETWORG Admin Account*
   1. *Username* should be set to *admin_networg*
   1. Check *Automatically create a password*
   1. Check *Require this user to change their password when they first sign in*
1. Assign this user ***Power Apps per user plan*** license
1. Provide NETWORG with credentials

## Add the User to an Isolated Environment
### Prerequisites
1. [Provision an environment](/provision-an-environment.md)

**Following actions are done by the Power Platform administrator**. (NETWORG offers full Power Platform management if the customer prefers this option)

1. If you have a security group assigned to the isolated environment, make sure that the user is part of this group and wait for up to 24 hours
1. If you do not have a security group assigned to the environment, you must add the user manually
   1. Go to the [Power Platform admin center](https://admin.powerplatform.microsoft.com/)
   1. Navigate to *Environments* -> select *[the isolated environment](/provision-an-environment.md)* you have created -> *Settings* -> *Users + permissions* -> *Users*
   ![Environment settings - Users](/.attachments/developer-guide/applications/onboarding/provide-an-interactive-access-to-an-environment/settings-users.png)
   1. Click on *Add user* and type in the *[created user](#add-a-user)*
   1. *Add* the user and assign the appropriate security permissions and roles for deployment (System Administrator)