---
Author: Jan Kostejn
---

# Custom Command Bar Buttons
_File Explorer_ control can be extended to support custom command bar buttons, which can trigger / cause some action.

## Configuration
These buttons can be added through configuration. First of all, make sure that you have a [collaboration workspace template record](/en/developer-guide/applications/controls/FileExplorer/collaborationworkspaces/#collaboration-workspace-template) created. This record is defining the features of an individual _File Explorer_ control instance. Once that is sorted out, you can start adding buttons in the **🖱️ Custom Buttons** tab.
![Custom Buttons tab on the Collaboration Workspace Template form](/.attachments/en/developer-guide/applications/controls/FileExplorer/custom-command-bar-buttons-tab-on-collaboration-workspace-template-form.png)

Here you add a new button (record) to the existing _File Explorer_ control instance. These records can be then exported and versioned in the data package through `pac tool cmt` cli command, which opens _Configuration Migration Tool_ on your local machine.

### _Collaboration Workspace Custom Command Bar Button_ Record
![Custom Command Bar Buttons main form](/.attachments/en/developer-guide/applications/controls/FileExplorer/custom-command-bar-buttons-main-form.png)

#### IDENTIFICATION Section
| Attribute                      | Description                                    |
| ------------------------------ | ---------------------------------------------- |
| Name                           | Logical name of the button                     |
| Collaboration Workspace Header | Associated _Collaboration Workspace Template_. |
| Status Reason                  | Only _Active_ records are retrieved and valid. |

#### BEHAVIOR Section
| Attribute                       | Description                                                                                                                                                                                                                                   |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Action                          | Action that should happen once the button is clicked on. See [available actions](#action-type-codes).                                                                                                                                         |
| On-demand Workflow / Flow Id \* | Id of the on-demand workflow or flow you wish to trigger. The triggering record is always the file you've triggered the action from.                                                                                                          |
| Function Name \*\*              | Name of the JavaScript function to call. The function must be exported from the web resource specified in _Web Resource Name_.                                                                                                                |
| Web Resource Name \*\*          | Logical name of the web resource that contains the function. The web resource is loaded dynamically when the button is clicked.                                                                                                               |
| Shown When                      | When should be the button shown to the user in the UI. See [available values](#shown-when-type-codes).                                                                                                                                        |
| Location                        | Where the button is rendered. See [available values](#button-location-type-codes). Defaults to _Header_ if not set.                                                                                                                          |
| Order                           | Numeric value that controls the rendering order of buttons within their location. Lower numbers appear first.                                                                                                                                 |
| File Name Filter                | Allows you to show the button only for a specific type of file. Example: `*.*` allows to select only files and not folders. There is [`minimatch`](https://www.npmjs.com/package/minimatch) library used for evaluation of these expressions. |

\* : Visible only if the _Action_ is set to _On-demand Workflow / Flow_ value.  
\*\* : Visible only if the _Action_ is set to _Script_ value.

##### Action Type Codes
| Name                      | Value     | Description                                                                                                                          |
| ------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| On-demand Workflow / Flow | 742070000 | Triggers an on-demand workflow or cloud flow. This action can't be awaited. Fire and forget.                                         |
| Script                    | 742070001 | Calls a JavaScript function exported from a web resource. Use _Function Name_ and _Web Resource Name_ to specify the target function. |

If there is "your" action missing, feel free to extend this feature and implement it.

##### Button Location Type Codes
| Name    | Value     | Description                                                                 |
| ------- | --------- | --------------------------------------------------------------------------- |
| Header  | 742070000 | Button appears in the Header Command Bar (top of the control).              |
| Context | 742070001 | Button appears inline on each file/folder row (Item Command Bar). |

##### Shown When Type Codes
| Name          | Value     | Description                                            |
| ------------- | --------- | ------------------------------------------------------ |
| Always        | 742070000 | Show the button all the time.                          |
| Selected Row  | 742070001 | Show only if one file or folder is selected.           |
| Selected Rows | 742070002 | Show if multiple files are selected.                   |
| None          | 742070003 | Show the button only if no file or folder is selected. |

#### LOOK Section
| Attribute          | Description                                                                                                                                                                                            |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Icon Name          | Name of the Fluent UI icon that you wish to use. The icons are referenced in _PascalCase_ notation. You can use [this resource](https://icon-sets.iconify.design/fluent-mdl2/) to find the right icon. |
| Display Name \*    | Display name of the button. This text is shown in the UI to the end user.                                                                                                                              |
| Success Message \* | Success message that is shown once the _Action_ is completed.                                                                                                                                          |
| Error Message \*   | Error message that is shown, when the _Action_ could not be completed.                                                                                                                                 |

\* : Localized JSON objects can be used. These values are not known at design time and due to the localization requirement, this was the best value / effort solution. The object has string _lcid_ (language codes) for properties with translated values. Example: `{ "1033": "This is the english localized value.", "1029": "Tohle je český překlad." }`.
