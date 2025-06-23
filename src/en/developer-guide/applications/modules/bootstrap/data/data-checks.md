---
title: Data Check Rules
tagline: Define and execute validation rules to identify incorrect or incomplete records.
author: David Wasserbauer
---

## Introduction

Data Check Rules allow administrators to identify records that do not comply with expected data quality criteria. Each rule specifies a target entity, a query to identify records of interest, and an optional condition for advanced validation logic.

When a rule is executed, it generates a set of log records representing failed validations. These logs can be reviewed, manually resolved, or serve as the basis for further automated actions.

![Data Check Rule Form](/.attachments/applications/modules/bootstrap/data/data-check-rule-form.png)

## Entity Definitions

### Data Check Rule (`talxis_datacheckrule`)

| Display Name         | Logical Name         | Description                                                                  |
| -------------------- | -------------------- | ---------------------------------------------------------------------------- |
| Name                 | `talxis_name`        | Name of the rule, typically includes its purpose or target field.            |
| Entity Name          | `talxis_entityname`  | Logical name of the entity to which the rule applies.                        |
| Filter Query         | `talxis_query`       | FetchXML query identifying relevant records.                                 |
| Condition (Function) | `talxis_conditionid` | Optional reference to a PowerFx-based function used for more advanced logic. |
| Description          | `talxis_description` | Optional explanation of what the rule validates or checks.                   |

### Data Check Log (`talxis_datachecklog`)

| Display Name           | Logical Name                 | Description                                                    |
| ---------------------- | ---------------------------- | -------------------------------------------------------------- |
| Data Record            | `talxis_datarecordid`        | Polymorphic lookup to the affected record.                     |
| Data Check Rule        | `talxis_ruleid`              | Reference to the rule that created this log.                   |
| Status (Reason)        | `statuscode`                 | Current processing status (see table below).                   |

## Status Values

| Code      | Status Name     | Meaning                                                |
| --------- | --------------- | ------------------------------------------------------ |
| 742070000 | Evaluation      | Awaiting result of condition evaluation.               |
| 742070001 | Pending         | Condition passed or not defined, needs user attention. |
| 742070002 | Checked         | Confirmed by user, optionally after manual correction. |
| 742070003 | Cancelled       | Condition evaluated to false.                          |
| 742070004 | Error           | Error occurred during evaluation.                      |

## Rule Execution

Rules can be triggered in two ways:

### 1. Automatically

* As part of a broader processing pipeline (e.g., after data import).
* System filters rules by entity name and runs them on newly imported data.

> ⚠️ This applies only to Albert VAT App. See [User Guide](https://thenetworg.sharepoint.com/:w:/r/teams/pct20004/Shared%20Documents/General/_DOCS/250509-DC-01%20VAT%20App%20-%20User%20Guide.docx?d=w621b4d97c59f40be860062708c44bbd1&csf=1&web=1&e=NfOERk) to get more info.

### 2. Manually

* Rules can be run on demand from the admin UI.
* The "Run Rule" button is available in the grid view of active rules.

Each rule execution creates one or more log entries in `talxis_datachecklog`, depending on the number of matching records.

## PowerFx Conditions

Rules may include an optional condition defined in a PowerFx-based Custom API (a Function). This enables scenarios that FetchXML cannot support, such as:

* Calculations
* Multi-entity logic
* Value comparisons

### Requirements

* Input: `RecordId` (string)
* Output: `Result` (boolean)

Example function body:

```plaintext
{
  Result:
    LookUp('Invoice Lines','Line ID' = GUID(RecordId)).Amount > 1000
}
```

If the condition returns `true`, a log entry is marked for review. 

If `false`, the `statuscode` is set to `cancelled`.

## Manual Resolution

Users can resolve check logs via the following options:

* **Mark as Checked**: Indicates that the data is acceptable despite the check failure.
* **Perform Correction**: Launches a dialog to apply a correction directly to the source record. This creates a related Data Transformation Log.

## Related Plugins

* **ValidateCustomApiCondition** – When a check rule includes a condition, this plugin executes the corresponding Function and updates the log status.

## Automation Integration

Data Check Rules can be used as part of larger workflows. Typical integration points include:

* Post-import validation
* Pre-submission data quality assurance
* Audit trail creation

Each check log entry provides a clear indication of where data failed to meet defined criteria, enabling both reactive and preventive data governance.