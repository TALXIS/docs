---
title: Data Transformation Steps
tagline: Define and execute rules that correct values in target records.
author: David Wasserbauer
---

## Introduction

Data Transformation Steps provide a structured mechanism for correcting data in target records.

Each step defines which records to modify, which field to update, and what new value to apply. Execution results are logged for full auditability.

![Data Transformation Step Form](/.attachments/applications/modules/bootstrap/data/data-transformation-step-form.png)

## Entity Definitions

### Data Transformation Step (`talxis_datatransformationstep`)

| Display Name                | Logical Name              | Description                                               |
| ----------------------------| --------------------------| ----------------------------------------------------------|
| Name                        | `talxis_name`             | Descriptive name of the transformation step.              |
| Entity Name                 | `talxis_entityname`       | Logical name of the entity being transformed.             |
| Target Field                | `talxis_attributename`    | Field name to update (logical name).                      |
| Step Number                 | `talxis_stepnumber`       | Execution order; lower numbers are processed first.       |
| Filter Query                | `talxis_query`            | FetchXML to select records for update.                    |
| Condition (Function)        | `talxis_conditionid`      | Optional PowerFx condition.                               |
| Transformation (Function)   | `talxis_transformationid` | PowerFx function that computes the applies new value.     |
| Description                 | `talxis_description`      | Optional explanation of what the step does.               |

### Data Transformation Log (`talxis_datatransformationlog`)

| Display Name            | Logical Name                           | Description                                                  |
| ----------------------- | -------------------------------------- | -------------------------------------------------------------|
| Data                    | `talxis_datarecordid`                  | Polymorphic reference to the target record.                  |
| Transformation Step     | `talxis_stepid`                        | Reference to the originating step.                           |
| Original Value          | `talxis_originalvalue`                 | Value before the transformation.                             |
| New Value               | `talxis_newvalue`                      | Value after the transformation.                              |
| Type (Manual/Automatic) | `talxis_datatransformationlogtypecode` | Indicates how the change was triggered.                      |
| Reason Description      | `talxis_reasondescription`             | Used to capture the reason for manual transformations.       |
| Error Message           | `talxis_errormessage`                  | Stores error messages generated during custom API execution. |
| Status                  | `statuscode`                           | Processing result (see below).                               |

## Status Values

| Code      | Status Name            | Meaning                      |
| --------- | -----------------------| ---------------------------- |
| 742070000 | Evaluation             | Condition pending.           |
| 742070001 | Waiting for processing | Ready for execution.         |
| 742070002 | Processed              | Change applied successfully. |
| 742070003 | Cancelled              | Condition returned false.    |
| 742070004 | Error                  | Error during execution.      |

## Execution Flow

### Step Ordering

Each transformation step includes a `Step Number` that defines its place in the execution sequence. The system:

1. Sorts steps by this number (ascending)
2. Waits for all steps with lower numbers to finish before running the next group

The flow `talxis_waitforpreviousinstancesandlogsfinished` handles this sequencing.

> ⚠️ This applies when multiple steps are executed at the same time.

### Automatic Execution

Triggered after data import or other orchestration points, the steps run:

* Based on their target entity (matched against the import type)
* Only if their FetchXML query returns results
* Conditionally, if a Function is defined

> ⚠️ This applies only to Albert VAT App. See [User Guide](https://thenetworg.sharepoint.com/:w:/r/teams/pct20004/Shared%20Documents/General/_DOCS/250509-DC-01%20VAT%20App%20-%20User%20Guide.docx?d=w621b4d97c59f40be860062708c44bbd1&csf=1&web=1&e=NfOERk) to get more info.

### Manual Execution

From the admin interface, a user can trigger a specific step using the **Execute Step** button. The system will:

* Evaluate FetchXML
* Create logs for eligible records
* Evaluate condition (if present)
* Run the plugin to apply the change

## PowerFx Conditions

Used to determine whether a record qualifies for update. Function requirements:

* Input: `RecordId` (string)
* Output: `Result` (boolean)

Example:

```plaintext
{
  Result:
    LookUp('Invoice Lines','Line ID' = GUID(RecordId)).Country = "CZ"
}
```

## PowerFx Value Computation

In contrast to checks, transformations can also compute the actual value to be applied. A dedicated PowerFx function returns:

* Input: `RecordId`
* Output: `NewValue` (string)

Example:

```plaintext
{
  NewValue:
    Text(
      Patch(
        'Invoice Lines',
        LookUp('Invoice Lines', 'Line ID' = GUID(RecordId)),
        { Country: "DE" }
      ).Country
    )
}
```

## Manual Corrections via Dialog

Manual corrections allow users to:

* Select a field to update (validated for writability)
* Enter a new value based on data type
* Confirm the change

This creates a `talxis_datatransformationlog` with:

* Type: Manual
* Step: *(not linked to any step)*

Plugin `ResolveDataTransformationLog` applies the change based on the new value.

## Related Plugins

* **ResolveDataTransformationLog** – Applies the new value to the record based on the transformation log.

## Automation Integration

Transformation steps are typically triggered as part of a post-import process, but may also run independently. Each step provides:

* Controlled correction mechanism
* Traceable log per change
* Flexible logic with conditions and value computation