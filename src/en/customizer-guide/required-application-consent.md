
# Applications

| Name | Consent Link | Owner | Client ID |
| - | - | - | - |
| [TALXIS Deployments](#talxis-deployments) | [LINK](https://talxis.com/add-deployment-app) | INT0006 | 4ab337b1-27bc-421d-8d56-7462bbea9831
| [TALXIS Data Feed](#talxis-data-feed) | [LINK](https://login.microsoftonline.com/common/adminconsent?client_id=e8af2b8e-a8de-4669-8d94-6b684068beef) | INT0010 | e8af2b8e-a8de-4669-8d94-6b684068beef
| [TALXIS Data Feed - Flow](#talxis-data-feed---flow) | [LINK](https://talxis.com/add-connectors-app) | INT0010 | 28d529aa-b85e-4469-9cf3-937bea582555
| [TALXIS - PCF.MapPicker](#talxis---pcfmappicker) | [LINK](https://login.microsoftonline.com/common/adminconsent?client_id=1dc2b128-6003-42b6-a989-d78d6c0d0a5c) | INT0015 | 1dc2b128-6003-42b6-a989-d78d6c0d0a5c
| [TALXIS - PCF.FilePicker](#talxis---pcffilepicker) | [LINK](https://talxis.com/add-dms-app) | INT0015 | 1fd1cbbe-eefe-4583-b422-4a7661cf5c60
| [TALXIS - PCF.CompanyProfileHinting](#talxis---pcfcompanyprofilehinting) | [LINK](https://talxis.com/add-controls-app) | INT0015 | b8becf32-7f36-4d2f-bbdc-456c6e910405
| [TALXIS - PCF.AddressPicker](#talxis---pcfaddresspicker) | [LINK](https://login.microsoftonline.com/common/adminconsent?client_id=7941f3c9-f4db-441d-9fce-7b3eb7a2ef10) | INT0015 | 7941f3c9-f4db-441d-9fce-7b3eb7a2ef10
| [TALXIS - Client](#talxis---client) | [LINK](https://login.microsoftonline.com/common/adminconsent?client_id=526f3cf8-fd5c-4648-87f6-b0e4b986acdb) | INT0015 | 526f3cf8-fd5c-4648-87f6-b0e4b986acdb

# Details

## TALXIS Deployments

Used for deployments of applications to Power Platform environment. Application can only write to environments where permissions have been [explicitly granted to the service principal](https://learn.microsoft.com/en-us/power-platform/admin/manage-application-users). The principal is non-interactive.

### Permissions
* Access Common Data Service (Dataverse) as organization user
* Sign in and read user profile

## TALXIS Data Feed

## TALXIS Data Feed - Flow

## TALXIS - PCF.MapPicker

## TALXIS - PCF.FilePicker

## TALXIS - PCF.CompanyProfileHinting

## TALXIS - PCF.AddressPicker

## TALXIS - Client

Used in an [authentication broker (internal)](https://dev.azure.com/thenetworg/INT0015/_wiki/wikis/INT0015.wiki/4301/Authentication-Flow?anchor=authentication-broker) scenario, where a token is required from PCF or custom code. It prevents users from getting multiple authentication popups due to 3rd party cookie restrictions.
