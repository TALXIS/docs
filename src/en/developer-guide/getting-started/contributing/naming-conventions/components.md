
# Introduction
You **need to follow these** naming conventions, if you want your pull request to be **approved**. We have to be consistent. These **apply only on newly developed components**, don't change it on the existing ones (applies to logical names), so that you don't break something.

## Logical Names
These are hidden from the end user and usually used in automatization as a reference to the data you want to get (Power Automate, server extension, client extensions).

## Display Names
These are usually user facing and should be grammatically right. It's the first thing customer sees, when he opens up TALXIS application.
___
# App Module

## Logical Name <!--[AM]-->
Lower case
```
- {publisherPrefix}_{buildingName}{appModuleModifier}
- talxis_contractstart
```

## Display Name <!--[AM]-->
Don't forget about translations and description!

### Product Solution <!--[AM]-->
```
- {productPublisherDisplayName} {buildingName} {appModuleModifier}
- TALXIS Contract Start
```

### Customer's Solution <!--[AM]-->
```
- {customersDisplayName} {buildingName} {appModuleModifier}
- GiTy Contract Core
```
___
# App Module Sitemap

## Logical Name <!--[AMS]-->
Lower case
```
- {publisherPrefix}_{buildingName}{appModuleModifier}
- talxis_contractstart
```

## Display Name <!--[AMS]-->
Don't forget about translations and description!

### Product Solution <!--[AMS]-->
```
- {productPublisherDisplayName} {buildingName} {appModuleModifier}
- TALXIS Contract Start
```

### Customer's Solution <!--[AMS]-->
```
- {customersDisplayName} {buildingName} {appModuleModifier}
- GiTy Contract Core
```

## Customizing the Sitemap
There're 3 types of groups, that can be added to sitemap:
- Area
  - {areaname}area
  - customerservicearea
- Group
  - {groupname}group
  - servicesgroup
- SubArea
  - {subareaname}subarea
  - casessubarea

Name all of them lower case.
___
# Entity

## Logical Name <!--[E]-->
Lower case
```
- {publisherPrefix}_{entityName}
- talxis_contract
```
_There can be entities, where we have something similar to namespace. But that's very rare and you probably won't get into that situation... I just want you to be aware of it._
```
 - talxis_configuration_virtualentity
```

## Display Name <!--[E]-->
Don't forget about translations and description!
It's important to add plural names as well.

![Entity Display Name](/.attachments/developer-guide/getting-started/contributing/entity-displayname.png)
___
# Field

## Logical Name <!--[F]-->
Lower case
### Global Optionset Field
```
- {publisherPrefix}_{fieldName}typecode
- talxis_contracttypecode
```
### Local Optionset - Two Options Field
```
- {prefix_entity}_{prefix_fieldName}
- talxis_callbackregistration_talxis_asynchronousprocessing
- talxis_callbackregistration_ntg_newfield
```
### Local Optionset - State Code Field
```
- {prefix_entity}_statecode
- talxis_callbackregistration_statecode
```
### Local Optionset - Status Code Field
```
- {prefix_entity}_statuscode
- talxis_callbackregistration_statuscode
```
### Lookup Field
```
- {publisherPrefix}_{referencedEntityName}id
- talxis_accountid
```
### DateTime Field
```
- {publisherPrefix}_{fieldName}datetime
- talxis_submittedondatetime
```
### DateOnly Field
```
- {publisherPrefix}_{fieldName}date
- talxis_contractexpirationdate
```

## Display Name <!--[F]-->
Don't forget about translations and description!
Field's display name is rendered in views. You can change it on form, but not in the views, so the display name of a field should always reflect that.
___
# OptionSet

## Logical Name <!--[OS]-->
See [Field](#field) for more info.

## Display Name <!--[OS]-->
Don't forget about translations and description!

![OptionSet Display Name](/.attachments/developer-guide/getting-started/contributing/optionset-displayname.png)

## Values
```
- N/A
  - {publisherOptionsetPrefix}998
- Other
  - {publisherOptionsetPrefix}999
```
___
# Form

## Logical Name <!--[FO]-->
You're giving logical names to tabs, sections, subgrids, quick view forms. Use lower case.
```
- {tab/sectionName}tab/section
- informationtab
- informationsection
- {entity/subgrid}subgrid/quickview
- productsubgrid
- productquickview
```
If you're adding a cell with control, make sure that the control element always contains the logical name **with prefix**!

## Display Name <!--[FO]-->
<br>

**_NOTE:_** Model forms are prefixed with the word "MODEL", such as "MODEL_Information".

## Customizing the Form
Don't forget about translations and description!
Labels of tabs are capitalized and they always need to have emoji describing them:
```
- ℹ️ Information
```

Sections are always upper case without the underline:
```
- INFORMATION
```
___
# View

## Logical Name <!--[V]-->
Only thing you have to edit after unpacking your changes is to change aliases for linked entities (if there're any) to something more readable.

## Display Name <!--[V]-->
Don't forget about translations and description!
Common sense + [CapitalizeMyTitle](https://capitalizemytitle.com/).

# Workflow/Flow

## Logical Name <!--[W]-->
File Name
```
- /Workflows/{prefix}_{workflowname}-{ID}.{ext}
- /Workflows/talxis_thisismynewworkflow-8669959F-F3D5-4E9E-93F4-96AAED40E942.xaml

OR

- /Workflows/{prefix}_{workflowname}.{ext}
- /Workflows/talxis_thisismynewworkflow.xaml
```

## Display Name <!--[W]-->
Lower case workflow unique name with prefix. For example: 
```
- talxis_thisismynewworkflow
```
___
# Action

## Logical Name <!--[A]-->
Unique Name - does not have prefix!
```
- {actionname}
- thisismynewaction
```
File Name
```
- /Workflows/{prefix}_actionname}-{ID}.{ext}
- /Workflows/talxis_thisismynewaction-8669959F-F3D5-4E9E-93F4-96AAED40E942.xaml

OR

- /Workflows/{prefix}_actionname}.{ext}
- /Workflows/talxis_thisismynewaction.xaml
```

## Display Name <!--[A]-->
Lower case action unique name with prefix. For example: 
```
- talxis_thisismynewaction
```
___
# Business Rule

## Logical Name <!--[BR]-->
There are no logical names.

## Display Name <!--[BR]-->
Don't forget about translations and description!
Common sense + [CapitalizeMyTitle](https://capitalizemytitle.com/).
___
# Publisher
This is basically static thing, you shouldn't be in position where you have to create publisher too often. That doesn't mean you shouldn't understand it...

## Product Solution <!--[P]-->

![Publisher](/.attachments/developer-guide/getting-started/contributing/publisher.png)

## Customer's Solution <!--[P]-->
- NETWORG
  - This will automatically generate prefix for names (ntg) and optionsets (XXX XXX), consult this with someone more senior - ALWAYS
___
# Relationship

## Logical Name <!--[R]-->
It's harder with this one... We're setting all properties to be lower case, but we can't rewrite the systems ones. Attributes that should be lower case are these:
- EntityRelationship Name
- ReferencingEntityName
- ReferencedEntityName
- ReferencingAttributeName
- NavigationPropertyName
- FirstEntityName
- SecondEntityName
- IntersectEntityName

### OneToMany EntityRelationship Name
- note: be sure to stay withing limit of 100 characters for 1:N relationships
- {publisherPrefix}\_{ReferencedEntityName}\_{ReferencingEntityName}\_{fieldName}id (fieldName is without prefix!)
- talxis_contact_talxis_case_customerid

### ManyToMany EntityRelationship Name & IntersectEntityName
- note: be sure to stay withing limit of 50 characters for N:N relationships
- {publisherPrefix}\_{FirstEntityName}\_{SecondEntityName}
- talxis_talxis_case_contact

## Display Name <!--[R]-->
There are no display names.
___
# Ribbon

## Logical Name <!--[RB]-->
```
- {prefix}.{entitylogicalname}.{ribbonlocation}.{buttonname}.{componentname}
- talxis.account.main.dosomethingcool.button
```

![Ribbon Logical Name](/.attachments/developer-guide/getting-started/contributing/ribbon-logicalname.png)
## Display Name <!--[RB]-->
Don't forget about translations and description!
Common sense + [CapitalizeMyTitle](https://capitalizemytitle.com/).
___

![Rules](/.attachments/developer-guide/getting-started/contributing/obama-rules.jpg)
