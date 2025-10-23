---
title: Portal Invitation
tagline: Portal invitation process enables inviting users to the Portal via email.
author: Mirza Kobašević
---

## Introduction

Portal invitation process enables inviting users to the Portal via email. User Invitation feature is located in the TALXIS Admin application in the Users & Apps group.

![Portal Invitation in sitemap](/.attachments/applications/modules/bootstrap/portal-invitation/sitemap.png)

## Entities & Relationships

### Access Principal Invitationi (talxis_accessprincipalinvitation)

Attributes:

| Display Name      | Logical Name                | Description                                                            |
|-------------------|-----------------------------|------------------------------------------------------------------------|
| Email             | talxis_email                | Email for user invitation. (primary name)                              |
| Access Principal  | talxis_accessprincipalid    | Access Principal Lookup.                                               |
| Invitation Id     | talxis_invitationid         | Id that is used for invitation URL (created in Plugin, Alternate key). |
| Security Type     | talxis_securitytypetypecode | Security Team or Business Unit & Ruleset combination.                  |
| Website           | talxis_websiteid            | The Website for which user is invited to.                              |
| Processed         | talxis_processedtypecode    | Indication if invitation is processed or not.                          |
| Email Template    | talxis_templateid           | Email template which will be used for invitation.                      |
| Status            | statecode                   | [Invitation status.](/en/developer-guide/applications/modules/bootstrap/portal-invitation/#invitation-status) |
| Status Reason     | statuscode                  | [Invitation status reason.](/en/developer-guide/applications/modules/bootstrap/portal-invitation/#invitation-status-reason) |

#### Invitation status

| Display Name | Value      |
|--------------|------------|
| Active       | 0          |
| Inactive     | 1          |

#### Invitation status reason

| Display Name | Value      | Status   |
|--------------|------------|----------|
| Draft        | 1          | Active   |
| Invited      | 742070001  | Active   |
| Redeemed     | 742070002  | Inactive |
| Inactive     | 2          | Inactive |
| Canceled     | 742070003  | Inactive |
| Expired      | 742070004  | Inactive |
| Failed       | 742070005  | Inactive |

### Business Unit - Rule Set - Invitation (talxis_businessunitrulesetinvitation)

Temporary entity for holding information about Business Unit - Rule Set combinations for one invitation.

| Display Name      | Logical Name                | Description                        |
|-------------------|-----------------------------|------------------------------------|
| Business Unit     | talxis_businessunitid       | Business unit lookup.              |
| Rule Set          | talxis_rulesetid            | Rule set lookup.                   |
| Invitation        | talxis_invitationid         | Access Principal Invitation lookup |


## Usage & Implementation

1. Access Principal invitation records can be created in TALXIS Admin App. Fields Email and Website are required.

![Portal Invitation creation](/.attachments/applications/modules/bootstrap/portal-invitation/creation.png)

2. Website and Email Template fields are prepopulated on creation form load with current website and default website Email intvitation template that can be defined on Website form.

![Website Form](/.attachments/applications/modules/bootstrap/portal-invitation/website.png)

3. On Access Principal Invitation record save, new Access Principal and related Contact are created for provided email (if it is not already present in the system). Access Principal is populated for invitation record and the user is given the possibility to edit contact/access principal settings information and choose the type of security.

![Access Principal Settings](/.attachments/applications/modules/bootstrap/portal-invitation/access-principal-settings.png)

4. When the Security Team type is selected, the admin can add Access principal to specific Security Teams directly on the invitation record.

![Security Team Type](/.attachments/applications/modules/bootstrap/portal-invitation/security-team-type.png)

5. If Business Unit & Rule Set type is selected, the admin can create multiple Business Unit - Rule Set combinations for access principal. Those combinations are created as new Security Teams after invitation is sent to the user.

![Business Unit & Rule Set Type](/.attachments/applications/modules/bootstrap/portal-invitation/access-principal-settings.png)

6. After invitation configuration is finished, admin can send invitation to the user with "Send invitation" Form ribbon button that is visible only for Draft invitations.

![Invite button](/.attachments/applications/modules/bootstrap/portal-invitation/invite-button.png)

7. Invitation process is handled by `talxis_inviteuserinportal` cloud flow that handles necessary security team creation, composes invitation URL and sends Email to user for Portal signup.

8. If Invitation Email template is not provided, general TALXIS template is used. By creating new template, user can set: language, subject, sender email, branded look... Tags that are composed in cloud flow that can be used in the template are:

```json
{
  "talxis_email": "string",
  "url": "string",
  "talxis_securitytypetypecode": "string",
  "talxis_websiteid_talxis_name": "website name",
  "talxis_websiteid_talxis_hostname": "website hostname",
  "talxis_businessunitrulesetinvitations": [
    {
      "talxis_businessunitid_name": "BU name",
      "talxis_rulesetid_name": "Rule set name",
    }
  ]
}
```

![Default TALXIS Template](/.attachments/applications/modules/bootstrap/portal-invitation/default-template.png)
