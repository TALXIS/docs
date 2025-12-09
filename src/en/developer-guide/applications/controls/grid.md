---
Author: Dominik Brych
---
# Grid

Grid is a dataset PCF wrapper over [Virtual Dataset](./VirtualDataset/general.md). It allows you to use the same features that are available in the Virtual Dataset while enabling direct binding to a Subgrid or Homepage grid. This page only covers the differences between the Grid and Virtual Dataset controls. For more information about all the features available in Grid, please refer to the [Virtual Dataset documentation](./VirtualDataset/general.md).

![Homepage Grid](/.attachments/applications/Controls/Grid/grid_main.png)
*Grid control on Homepage Grid with Client API support.*

## Usage

Since Grid can be directly bound to a Subgrid or Homepage grid, it does not require any additional configuration. You can simply add the Grid control to your form and bind it to the desired dataset. Of course, you can still use other parameters to customize the control's behavior the same way as you would with the Virtual Dataset control. Grid behaves the same as Virtual Dataset with `FetchXmlDataProvider`, so the behavior (for example in regards to the `Columns` binding) is identical.

## Ribbon

Grid is able to leverage the same Ribbon commands as the standard Power Apps grids. This means that you can use the existing Ribbon buttons and commands to perform actions on the Grid control, such as creating new records, deleting records, or exporting data. You can also render these buttons inline by following the instructions in the [Ribbon section of the Virtual Dataset documentation](./VirtualDataset/general.md#inline-ribbon).

### Grouping

To enable ribbon functionality with grouped records, configure the `RibbonGroupingDataset` binding to reference a view targeting the same entity as the main dataset. The view must exclude all filters and include any linked entities referenced in the main dataset.
