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

This table sets default access rules that apply to all entities.

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

- Power Fx is primarily used as an additional filter for create, update, and delete requests.

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

    - **None** –  Override for disallowed access
    - **Basic** – Access to owned records only
    - **Local** – Access to business unit records
    - **Deep** – Access to business unit records and all child business unit records
    - **Global** – Global access

- Start with OData overrides for simplicity and performance.
