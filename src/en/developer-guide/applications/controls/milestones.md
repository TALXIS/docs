---
Author: Jan Losenický
---

# Milestones

## Visual Example

![Milestones Displayed On Form](/.attachments/Controls/milestonescontrol.png)

## Description

Milestones is custom control used to monitoring the project. There are some milestones (phases) of the project - Quotation, Design, Logistics, Installation, etc. 

Each milestone has planned start/end, estimated start/edn and actual start/end. From this data milestone control can count if the project is going on time or there is some delay.

You can go through milestones using the arrow, when u jump into new milestone, previous will be closed (set actual end) and new one will be set to active and actual start is filled.

## Binding Field

Control can be binded to any field of type SingleLine.Text.

## Inputs

- Mode
    - Single
    - Multiple
- Entity Name (required) - Logical name of entity
    - Example: `talxis_project`
- Id (required) - Id of the record
    - Example: `talxis_projectid`
- Milestones Relationship (required)
    - Logical name of relationship with milestones entity
    - Example: `talxis_talxis_projectdetail_talxis_milestone_projectdetailid`
- Active Instances Relationship (required)
    - Example: `talxis_talxis_projectdetail_talxis_projectprocessinstance_projectdetailid`
- Multiple Child Relationship
    - Example: `talxis_talxis_project_talxis_projectdetail_projectid`
- Child Entity Name
    - `talxis_projectdetail` 
- Child Entity Id Field
    - `talxis_projectdetailid` 
- Milestone Name Field - Displayed name of the milestone