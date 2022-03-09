---
Author: Jan Losenický
---

# WBS - Work Breakdown Structure

## Visual Example

![Gantt Displayed On Form](/.attachments/applications/Controls/wbsganttcontrol.png)

![WBS View Displayed On Form](/.attachments/applications/Controls/wbsviewcontrol.png)

## Description

This control is used to creating records of project task. There is a overview of all tasks related to project in callendar.

## Binding Fields

Control can be binded to any filed of type SingleLine.Text

## Inputs

- Mode - Specifies whether the fomr is binded to Project or Project Detail
    - Project
    - Project Detail
- Object Id - Specifies the id of current Project/Project Detail
- Object Name - Spcifies the name of current Project/ Project Detail
- Gant Item Field Name - Name of field to be displayed in Gannt

## Display Mode

You can switch between view and gantt mode by the button.

## Time Display

You can choose what are the time periods of displayed tasks. Options are:
- Half-Days
- Days
- Weeks
- Months

## Drag and Drop - Changing start/end date of project tasks

It is possible to change start/end date of project task by drag and drop.

Snapping (where the item snaps) is set by Time Display:
- Period = Half-Days or Days - Items snap to Half-Days
- Period = Weeks - Items snap to Days
- Period = Months - Items snap to Weeks