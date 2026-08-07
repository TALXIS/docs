---
Author: Dominik Brych
---
# Form

## Description

Form renders a form from FormXml, columns, data, and metadata that you provide through a Dataverse client API web resource.

## Visual example

![Form control rendering a sales-to-delivery handoff record with tabbed sections](/.attachments/applications/Controls/Form/form_overview.png)
*Form rendering a record with a notification bar, Save button, tabbed layout, and mixed field types across two columns.*

## Bindings

<table>
  <thead>
    <tr>
      <th>Property Name</th>
      <th>Description</th>
      <th>Of Type</th>
      <th>Input</th>
      <th>Output</th>
      <th>Usage</th>
      <th>Required</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>bindingField</td>
      <td>Bound multiline text field for the PCF host slot.</td>
      <td><code>Multiple</code></td>
      <td><code>N/A</code></td>
      <td><code>N/A</code></td>
      <td><code>bound</code></td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td>ClientApiWebResourceName</td>
      <td>JavaScript web resource that contains the handler functions.</td>
      <td><code>SingleLine.Text</code></td>
      <td><code>form-script.js</code></td>
      <td><code>N/A</code></td>
      <td><code>input</code></td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td>ClientApiConfigFunctionName</td>
      <td>Function called first to provide the form config.</td>
      <td><code>SingleLine.Text</code></td>
      <td><code>onLoadConfig</code></td>
      <td><code>N/A</code></td>
      <td><code>input</code></td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td>ClientApiFormContextFunctionName</td>
      <td>Function called after the form is ready and receives <code>formContext</code>.</td>
      <td><code>SingleLine.Text</code></td>
      <td><code>onGetFormContext</code></td>
      <td><code>N/A</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>Height</td>
      <td>Not fully supported at the moment. When set to <code>100%</code>, it currently only adds extra padding around the control.</td>
      <td><code>SingleLine.Text</code></td>
      <td><code>100%</code></td>
      <td><code>N/A</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
  </tbody>
</table>

## Integration model

### Runtime flow

At runtime the control:

1. Calls `Xrm.Utility.executeFunction(ClientApiWebResourceName, ClientApiConfigFunctionName, [{ setConfig }])`
2. Expects that function to call `setConfig(...)`
3. Builds the form from that config
4. If `ClientApiFormContextFunctionName` is set, calls `Xrm.Utility.executeFunction(ClientApiWebResourceName, ClientApiFormContextFunctionName, [{ formContext }])`

### Web resource contract

Your JavaScript web resource should expose a config function like this:

```js
function onLoadConfig(api) {
  api.setConfig({
    formXml,
    columns,
    data,
    metadata,
    onSave,
  });
}
```

If you also want the runtime form context, add a second function:

```js
function onGetFormContext(params) {
  const { formContext } = params;

  formContext.ui.setFormNotification("Loaded", "INFO", "loaded");
}
```

Typical property values then look like:

- `ClientApiWebResourceName`: `form-script.js`
- `ClientApiConfigFunctionName`: `onLoadConfig`
- `ClientApiFormContextFunctionName`: `onGetFormContext`

## Config shape

The config passed to `setConfig(...)` supports this shape:

```ts
{
  formXml: string;
  columns: IColumn[];
  data?: Record<string, any>;
  metadata: {
    PrimaryIdAttribute: string;
    PrimaryNameAttribute: string;
  };
  onSave?: (params: {
    recordId: string;
    updatedData: Record<string, any>;
  }) => Promise<
    | { success: true }
    | { success: false; error: string }
  >;
}
```

> **Note:** `formXml`, `columns`, and `metadata` are required. `data` is optional — when omitted, the form starts with an empty record object.

### Columns

`columns` is the field-definition array for the record. Each item describes one field that the form can bind to, including its logical name, display name, and data type.

In practice, this should follow the same `IColumn[]` shape used by the rest of the Base Controls stack.

```ts
const columns = [
  {
    name: "name",
    alias: "name",
    displayName: "Name",
    dataType: "SingleLine.Text",
    metadata: { IsValidForUpdate: true },
  },
  {
    name: "primarycontactid",
    alias: "primarycontactid",
    displayName: "Primary Contact",
    dataType: "Lookup.Simple",
    metadata: {
      IsValidForUpdate: true,
      Targets: ["contact"],
    },
  },
];
```
*Column definitions*

### Metadata

`metadata` is the minimal record-level metadata object:

```ts
{
  PrimaryIdAttribute: string;
  PrimaryNameAttribute: string;
}
```

`PrimaryIdAttribute` identifies the record id field and `PrimaryNameAttribute` identifies the primary text field for the record.

### Data

`data` is the actual record payload. Its structure should match what you normally get back from Dataverse when retrieving a record. That means:

- scalar values live under their logical names
- lookup values follow the Dataverse lookup pattern, for example:
  - `_primarycontactid_value`
  - `_primarycontactid_value@OData.Community.Display.V1.FormattedValue`
  - `_primarycontactid_value@Microsoft.Dynamics.CRM.lookuplogicalname`
- formatted values and option-set values can remain in the Dataverse-style record shape

So the control should be fed with a Dataverse-shaped record object, not a custom transformed payload.

```ts
const data = {
  accountid: "11111111-1111-1111-1111-111111111111",
  name: "Contoso Ltd.",
  telephone1: "+420 123 456 789",
  "_primarycontactid_value": "22222222-2222-2222-2222-222222222222",
  "_primarycontactid_value@OData.Community.Display.V1.FormattedValue": "Adele Vance",
  "_primarycontactid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "contact",
};
```
*Record payload*

## Custom save

You can provide your own save implementation through `onSave`.

```js
async function onSave(params) {
  const { recordId, updatedData } = params;

  try {
    await Xrm.WebApi.updateRecord("account", recordId, updatedData);
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Save failed.",
    };
  }
}
```

When save succeeds, the control treats the updated fields as saved. When save fails, the returned `error` message is surfaced back through the form save flow.

## Form context

If `ClientApiFormContextFunctionName` is configured, your handler receives:

```js
function onGetFormContext(params) {
  const { formContext } = params;
}
```

The exposed `formContext` is meant to work in the same way as the Microsoft model-driven app form context for the documented surface. The main entry points are `formContext.data`, `formContext.ui`, `formContext.getAttribute(name)`, and `formContext.getControl(name)`.

For the broader conceptual model, see the Microsoft docs for:

- [formContext](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/clientapi-form-context)
- [formContext.data](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-data)
- [formContext.ui](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui)
- [attribute methods](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes)
- [control methods](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls)

```js
function onGetFormContext(params) {
  const { formContext } = params;

  const phone = formContext.getAttribute("telephone1");
  phone?.addOnChange(() => {
    console.log(phone.getValue());
  });

  formContext.data.entity.addOnSave((executionContext) => {
    const eventArgs = executionContext.getEventArgs();
    if (!formContext.data.isValid()) {
      eventArgs.preventDefault();
    }
  });
}
```
*Reacting to field changes and gating save on validity*

> **Note:** Execution-context support is currently very limited. In most handlers it is effectively an empty object. The main meaningful behavior today is in save handlers, where `executionContext.getEventArgs().preventDefault()` can stop the save.

## Minimal example

```js
function onLoadConfig(api) {
  api.setConfig({
    formXml: formXml,
    columns: columns,
    data: record,
    metadata: {
      PrimaryIdAttribute: "accountid",
      PrimaryNameAttribute: "name",
    },
    onSave: async ({ recordId, updatedData }) => {
      await Xrm.WebApi.updateRecord("account", recordId, updatedData);
      return { success: true };
    },
  });
}

function onGetFormContext(params) {
  const { formContext } = params;
  formContext.ui.setFormNotification("Ready", "INFO", "ready");
}
```

## Local testing

The control's repo also includes a local testing path under `Form/local-dev/`:

- `localMock.ts` creates a local `Xrm` instance, adds `Utility.executeFunction`, and reloads the control through `requestRender`
- `form-script.js` contains the local config/form-context handlers used by that mock path

That local mock is only for running the control outside a real Dataverse host. The primary integration model for real usage is still the web resource contract described above.

> **Note:** The mock is currently **disabled**: the `createLocalMock(this, context, container)` call in `index.ts`'s `init` is commented out (since the control switched to the published `@talxis/base-controls` package). To use it locally, uncomment that line before running `npm start`.