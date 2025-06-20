---
title: Data Quality Feature
tagline: Overview of the validation and transformation feature and how to use it.
author: David Wasserbauer
---

## Introduction

The Data Quality Feature enables administrators to evaluate and correct data records. This feature is based on two parallel concepts:

* **Data Check Rules** – identify data inconsistencies using queries and optional conditions
* **Transformation Steps** – automatically or manually correct values in records

Both mechanisms share a common structure and can be triggered manually.

## Core Entities and Relationships

### Data Check Rules

| Display Name    | Logical Name           | Description                                                                       |
| --------------- | ---------------------- | --------------------------------------------------------------------------------- |
| Data Check Rule | `talxis_datacheckrule` | Defines a validation rule using a FetchXML filter and optional PowerFx condition. |
| Data Check Log  | `talxis_datachecklog`  | Result log of a check rule execution on a specific record.                        |

### Transformation Steps

| Display Name             | Logical Name                    | Description                                                                          |
| ------------------------ | ------------------------------- | ------------------------------------------------------------------------------------ |
| Data Transformation Step | `talxis_datatransformationstep` | Defines a correction rule, including FetchXML query, attribute to update, and logic. |
| Data Transformation Log  | `talxis_datatransformationlog`  | Result log containing the original and new value.                                    |

### Shared Relationships

Both `talxis_datachecklog` and `talxis_datatransformationlog` include a polymorphic lookup:

| Field                 | Description                                                                          |
| --------------------- | ------------------------------------------------------------------------------------ |
| `talxis_datarecordid` | Reference to the target record affected by the rule (e.g., document header or line). |

## Execution Flow

### Automatic Execution (Albert VAT App only)

After records are imported (e.g. via Dataflows or Power Automate Flows), the main orchestration logic runs in the following sequence:

1. Pre-transformation data adjustments (e.g. categorization, enrichment)
2. All matching Transformation Steps (filtered by entity)
3. All matching Data Check Rules (filtered by entity)

This ensures records are corrected before checks are run, and issues are flagged only if still unresolved.

> ⚠️ This applies only to Albert VAT App. See [User Guide](https://thenetworg.sharepoint.com/:w:/r/teams/pct20004/Shared%20Documents/General/_DOCS/250509-DC-01%20VAT%20App%20-%20User%20Guide.docx?d=w621b4d97c59f40be860062708c44bbd1&csf=1&web=1&e=NfOERk) to get more info.

### Manual Execution

Both check rules and transformation steps can be manually triggered from the admin section. The buttons "Execute Rule" and "Execute Step" are available in the grid of the respective entity.

### Manual Corrections

Users can also manually edit records using a dedicated dialog. This action:

* Lets the user select the field and input a new value
* Creates a transformation log with type **Manual**
* Applies the change using plugin logic (`ResolveDataTransformationLog`)

## Filtering and Expressions

### FetchXML Filtering

Each rule/step includes a FetchXML query to identify relevant records. Complex logic can be applied using related entities and groups.

### Conditions via PowerFx (Functions)

To express more advanced conditions (e.g. math, combined fields), custom PowerFx-based APIs are used:

* Written as low-code plug-ins
* Require input `RecordId` and output `Result` (boolean)

Example syntax:

```plaintext
{
  Result:
    LookUp('Purchase Invoice Lines','Line ID' = GUID(RecordId)).Code = "0"
}
```

### Transformation Logic via PowerFx

For automated corrections, PowerFx functions can return a `NewValue` string to be applied to the target field.

Example:

```plaintext
{
  NewValue:
    Text(
      Patch(
        'Purchase Invoice Lines',
        LookUp('Purchase Invoice Lines', 'Line ID' = GUID(RecordId)),
        { Code: "XX"}
      ).Code
    )
}
```

## Status and Logs

### Check Log Statuses (`talxis_datachecklog.statuscode`)

| Value     | Meaning                            |
| --------- | ---------------------------------- |
| 742070000 | Evaluating condition               |
| 742070001 | Awaiting review                    |
| 742070002 | Checked (user confirmed/corrected) |
| 742070003 | Cancelled (condition false)        |
| 742070004 | Failed (custom API error)                 |

### Transformation Log Statuses (`talxis_datatransformationlog.statuscode`)

| Value     | Meaning                     |
| --------- | --------------------------- |
| 742070000 | Evaluating condition        |
| 742070001 | Awaiting processing         |
| 742070002 | Processed                   |
| 742070003 | Cancelled (condition false) |
| 742070004 | Failed (custom API or plugin error)              |

## Related Plugins and Flows

### Plugins

* **ValidateCustomApiCondition** – evaluates PowerFx condition and updates status
* **ResolveDataTransformationLog** – applies new value based on log record and updates status

### Power Automate Flows

* `talxis_datalog_creatorhandler` – creates transformation/check logs in batches
* `talxis_waitforpreviousinstancesandlogsfinished` – ensures steps run in defined order
* `talxis_executedatacheckrule_trigger` – triggers evaluation of a Data Check Rule
* `talxis_executedatatransformationstep_trigger` – triggers execution of a Data Transformation Step

## Summary

The Data Quality Feature enables structured validation and correction of records. It supports both automated (see [VAT APP User Guide](https://thenetworg.sharepoint.com/:w:/r/teams/pct20004/Shared%20Documents/General/_DOCS/250509-DC-01%20VAT%20App%20-%20User%20Guide.docx?d=w621b4d97c59f40be860062708c44bbd1&csf=1&web=1&e=NfOERk) for example) and manual workflows and provides a transparent, traceable mechanism to ensure data accuracy prior to downstream processing.