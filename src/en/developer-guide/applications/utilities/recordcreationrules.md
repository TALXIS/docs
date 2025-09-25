---
title: Record Creation Rules
tagline: Define rules for automatic record creation via Dataverse records
author: Matěj Samler
---

# Record Creation Rules

Record Creation rules allow you to define custom rules for listening to CRUD operations on records and automatically creating new records in response to those operations.
These rules are defined via Dataverse records themselves, making them easy to manage and modify without needing to change any code.

## Entities

### Record Creation Rule

Record creation rules is the main entity for defining rules.

Looking at its form, we can see multiple sections:

#### Source entity

- Source Entity Name: Logical name of the entity to listen to
- Trigger Messages: A multiselect optionset for selecting which CRUD operations to listen to. We can select Create, Update, Delete or Assign.
- Filtering Attributes: A comma-separated list of attributes to filter on. This is only applicable when the Trigger Message is set to Update. If this is left empty, the rule will trigger on any update.
- Query: After saving of the record, a query builder will become available. This allows you to define additional filtering criteria for the rule.

#### Target entity

- Entity Name: Logical name of the entity to create records in
- Liquid Map: A liquid template for mapping attributes from the source entity to the target entity. The source entity is used as the data input, so all of its attributes can be accessed directly. There are also some custom Dataverse tags available, see [Liquid](../utilities/liquid.md) for more information.

#### Update Source Record (After Action)

- Success: A liquid template for updating the source record after the target record has been successfully created. Can be used to change status, set a lookup to the created record, etc.

## Record Creation Rule Log

In case of an error during the execution of a record creation rule, a log record will be created. In case of an error, the execution of the message is not halted and the operation will succeed, but the error will be logged for later review.

## How it works

In the background, there are multiple components working together to make this functionality work.

**On create of a new record creation rule, we:**

- Check if a record creation rule listener is already registered for the given source entity and for the selected message. If not, we register a new listener.

**On delete of a record creation rule, we:**

- Check if there are any other record creation rules for the same source entity and message. If not, we unregister the listener.

**When a message is received by the listener, we:**

- Retrieve all record creation rules for the given entity and message
- For each rule, check if the filtering attributes match (if defined)
- For each rule, check if the query matches (if defined)
- For each matching rule, create a new target record based on the liquid map
- For each matching rule, update the source record based on the after action liquid map (if defined)
- In case of an error during processing of a rule, create a log record

The creation itself is done by using an Action

## Implementation details

The main components of the implementation are:

### Workflow activity

- **Plugin Registrator**: Responsible for registering the listeners. Registers a new SDK message on a processing step of the source entity.
- **Plugin Deletor**: Responsible for unregistering the listeners. Unregisters the SDK message if there are no more rules for the given entity and message.

### Plugin

- **ProcessRecordCreationRule**: The main listener plugin. Listens to the messages defined in the record creation rules and processes them.

### Workflows

- **DeleteRuleListener**: A workflow that is called by the plugin deletor to delete the listener.
- **RegisterRuleListener**: A workflow that is called by the plugin registrator to register the listener.
- **talxis_createrecordfromrule**: A workflow that is called by the main listener plugin to create the target record and update the source record. It uses the liquid maps defined in the rule to perform the creation and update.
