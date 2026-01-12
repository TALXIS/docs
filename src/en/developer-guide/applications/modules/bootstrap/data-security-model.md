---
title: Data Security Model
tagline: Centralized and flexible control over portal permissions.
author: Safija Hubljar
---

## Introduction

The Portal Data Security Model gives you a flexible way to manage portal permissions across all entities. It relies on a combination of shared default rules and optional overrides, so you can enforce consistent access control without duplicating rules or hardcoding logic.

At the core, the model uses two main configuration tables:

* **Permission Level Defaults**
* **Entity Auth Template**

---

### Permission Level Defaults

This table sets default access rules that apply to all entities. The `talxis_permissionleveldefaults` are provided by TALXIS and are based on Business Unit security.

It’s mainly used in situations when you want the same rules applied across multiple entities

| Display Name             | Logical Name                            | Description                     |
| ------------------------ | --------------------------------------- | ------------------------------- |
| OData Filter             | `talxis_odatafilter`                    | Custom OData filter.            |
| FetchXML                 | `talxis_fetchxml`                       | FetchXML query expression.      |
| Power Fx                 | `talxis_powerfx`                        | Power Fx formula expression.    |
| Preferred Query Language | `talxis_preferredquerylanguagetypecode` | Preferred query language.       |
| Permission Level         | `talxis_permissionlevel`                | Specifies the permission level. |

---

### Entity Auth Template

The Entity Auth Template is used for entities that:

* Require entity-specific security rules

**Key features:**

* Handles both default and override queries
* Lets you control permissions at a fine-grained level per entity
* Supports custom filtering logic when defaults are not enough

| Display Name              | Logical Name                             | Description                                       |
| ------------------------- | ---------------------------------------- | ------------------------------------------------- |
| Entity Set Name           | `talxis_entitysetname`                   | Name of the entity set.                           |
| Entity Logical Name       | `talxis_entitylogicalname`               | Logical name of the entity.                       |
| Entity Description        | `talxis_entitydescription`               | Explanation of the entity.                        |
| Allowed Permission Levels | `talxis_allowedpermissionlevelstypecode` | Which permission levels are allowed.              |
| Owner Principal Id        | `talxis_ownerprincipalid`                | Unique ID of the record owner.                    |
| Modified By Principal Id  | `talxis_modifiedbyprincipalid`           | ID of the user who last modified the record.      |
| Default Read              | `talxis_default_read`                    | Default read permission.                          |
| Default Create            | `talxis_default_create`                  | Default create behavior.                          |
| Default Write             | `talxis_default_write`                   | Default write behavior.                           |
| Default Delete            | `talxis_default_delete`                  | Default delete behavior.                          |
| Default Select            | `talxis_default_select`                  | Attributes selected by default (comma-separated). |
| Override None OData       | `talxis_override_none_odata`             | No OData override applied.                        |
| Override None Power Fx    | `talxis_override_none_powerfx`           | No Power Fx override applied.                     |
| Override None FetchXML    | `talxis_override_none_fetchxml`          | No FetchXML override applied.                     |
| Override Basic OData      | `talxis_override_basic_odata`            | Basic OData override applied.                     |
| Override Basic Power Fx   | `talxis_override_basic_powerfx`          | Basic Power Fx override applied.                  |
| Override Basic FetchXML   | `talxis_override_basic_fetchxml`         | Basic FetchXML override applied.                  |
| Override Local OData      | `talxis_override_local_odata`            | Local OData override applied.                     |
| Override Local Power Fx   | `talxis_override_local_powerfx`          | Local Power Fx override applied.                  |
| Override Local FetchXML   | `talxis_override_local_fetchxml`         | Local FetchXML override applied.                  |
| Override Deep OData       | `talxis_override_deep_odata`             | Deep OData override applied.                      |
| Override Deep Power Fx    | `talxis_override_deep_powerfx`           | Deep Power Fx override applied.                   |
| Override Deep FetchXML    | `talxis_override_deep_fetchxml`          | Deep FetchXML override applied.                   |
| Override Global OData     | `talxis_override_global_odata`           | Global OData override applied.                    |
| Override Global Power Fx  | `talxis_override_global_powerfx`         | Global Power Fx override applied.                 |
| Override Global FetchXML  | `talxis_override_global_fetchxml`        | Global FetchXML override applied.                 |

---

### Permission Level optionset (talxis_permissionleveltypecode)

Supported types:

| Label                             | Value             |
|-----------------------------------|-------------------|
| None                              | 742070000         |
| Basic                             | 742070001         |
| Local                             | 742070002         |
| Deep                              | 742070003         |
| Global                            | 742070004         |

### Preferred Query Language optionset (talxis_preferredquerylanguagetypecode)

Supported types:

| Label                             | Value             |
|-----------------------------------|-------------------|
| Odata                             | 742070000         |
| FetchXML                          | 742070001         |

### Preconfigured Authorization Context Variables (talxis_configuration_authcontextvariable)

| Variable                  |  Description                             | Use Case                                                                                                                      |
| ------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------|
| `childbusinessunits`      | First level of child business units of the user’s business units                              | Used to filter subordinate business units of the current user.           |
| `mybusinessunits`         | Security Team of type business units, where user belongs to via child teams (security teams)  | Retrieves business units the user has access to through security teams.  |
| `mysecurityteamsarray`    | All security teams the current user belongs to                                                | Retrieves all security teams of the user.                                |

### Preconfigured Permission Level Defaults (talxis_permissionleveldefaults)

| Permission Level | OData Filter | FetchXML | Power Fx | Use Case |
|-----------------|-------------|----------|----------|----------|
| None | `createdon eq null` | `<condition attribute='createdon' operator='null' />` | `false` | Default – no access to records |
| Basic | `talxis_accessprincipalid eq '{ { AuthorizationContextVariables.talxis_accessprincipalid } }'` | `<condition attribute='talxis_ownerprincipalid' operator='eq' value='{ { AuthorizationContextVariables.talxis_accessprincipalid } }' />` | `talxis_accessprincipalid = AuthorizationContextVariables.talxis_accessprincipalid` | Access to records owned by the current user |
| Local | `Microsoft.Dynamics.CRM.In(PropertyName='owningbusinessunit',PropertyValues='{ { AuthorizationContextVariables.mybusinessunits } }')` | `<condition attribute='owningbusinessunit' operator='in'>{ { AuthorizationContextVariables.mybusinessunits_fetchxml } }</condition>` | `owningbusinessunit in AuthorizationContextVariables.mybusinessunits` | Access to records within the user’s business units |
| Deep | `Microsoft.Dynamics.CRM.In(PropertyName='owningbusinessunit',PropertyValues='{ { AuthorizationContextVariables.mybusinessunits } }') or Microsoft.Dynamics.CRM.In(PropertyName='owningbusinessunit',PropertyValues='{ { AuthorizationContextVariables.childbusinessunits } }')` | `<condition attribute='owningbusinessunit' operator='in'>{ { AuthorizationContextVariables.mybusinessunits_fetchxml } }{ { AuthorizationContextVariables.childbusinessunits_fetchxml } }</condition>` | `owningbusinessunit in AuthorizationContextVariables.mybusinessunits || owningbusinessunit in AuthorizationContextVariables.childbusinessunits` | Access to records within the user’s business units and their child units |
| Global | `*` | `*` | `true` | Full access – for administrators and superusers |

### Expected User Roles

The following outlines which roles are expected to configure different parts of the security model based on required expertise:

**Developers**:`talxis_permissionleveldefaults` and `talxis_entityauthtemplate` should be configured by developers, as they require knowledge of the querying languages. Any configuration allowed with `talxis_advancedmode=true` should also be handled by developers, due to the same level of technical expertise required.

**Customer/Admins/Consultants**:`talxis_configuration_authruleset`,`talxis_configuration_authretrievefilter`, and `talxis_configuration_authwritecondition` can be managed by customer admins or consultants, mainly by working with `talxis_permissionleveltypecode`.

### Best Practices and Considerations

When setting up filters using FetchXML, OData, or Power Fx, keep these guidelines in mind:

1. **Use explicit filters, avoid wildcards**

   * Don’t use `*` in EntitySetName or filters unless absolutely necessary.
   * Wildcards bypass detailed permission controls and can create serious security risks.

```xml
<filter type="or">
    <condition attribute="name" operator="not-null" />
    <condition attribute="createdon" operator="gt" value="2024-01-01" />
</filter>
```

2. Filter Language and Scope

- OData filters are usually sufficient for most scenarios and perform better than FetchXML for simple queries.

- FetchXML filters are used to query and filter data using the full set of FetchXML functionality

- Power Fx is used to filter create, update, and delete requests.

Example OData filter

```text
contactid eq '{{ AuthorizationContextVariables.talxis_currentuser_contactid }}'
```

Equivalent FetchXML filter:

```xml
      <condition attribute="contactid" operator="eq" value="{{ AuthorizationContextVariables.talxis_currentuser_contactid }}" />
```

3. Unsupported Scenarios

- Nested queries retrieved via $expand or link-entity do not enforce permissions on child entities, only the top-level entity respects the filter rules.

- Some operators, such as `in` on link-entities, are not supported and should be avoided.

- Converting complex FetchXML to OData is not always reliable, always manually verify results.

4. Testing and Validation

- Always manually validate filters after defining them.

- Test filters with multiple users having different permission levels to ensure they enforce security correctly.

- Use both OData and FetchXML overrides in a sandbox environment before deploying to production.

Test example scenario:

- User A: Should only see accounts they own

- User B: Should see all accounts created after 2024-01-01

- Verify that OData and FetchXML overrides return expected records for each user.

5. Recommended Override Usage

- Use the override levels (None, Basic, Local, Deep, Global) to control the scope and priority of your filter rules:

    - **None** –  No OData override applied
    - **Basic** – Access to owned records only
    - **Local** – Access to business unit records
    - **Deep** – Access to business unit records and all child business unit records
    - **Global** – Global access

- Start with OData overrides for simplicity and performance.

### Rules Caching

Rules are cached for 15 minutes at the backend. If you need them refreshed in an emergency situation, a backend app service restart is required.
