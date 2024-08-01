---
Author: Safija Hubljar
---
# Quick Lookup Simple Edit

 <p>
        The <strong>Quick Lookup Simple Edit</strong> control enables users to efficiently manage and edit lookup fields directly within their interface. It provides a user-friendly way to interact with lookup data, offering several key features:
    </p>
    <ul>
        <li><strong>Copy Functionality:</strong> Users can easily copy the value from the lookup field, simplifying data replication and management tasks.</li>
        <li><strong>Edit Dialog:</strong> Clicking on the field opens a dialog for editing the lookup field. This dialog provides a dedicated space for making changes to the selected record.</li>
        <li><strong>Link Access:</strong> If a link is associated with the record, users can open it via an icon. This provides direct access to related resources or details.</li>
        <li><strong>Record Deletion:</strong> Users can delete the record by clicking a delete icon, with a confirmation prompt to ensure that the deletion is intentional.</li>
    </ul>
    <p>
        This control enhances the user experience by streamlining lookup field interactions and providing intuitive options for data management.
    </p>

<img src='/.attachments/applications/Controls/quicklookupsimpleedit-1.png' width="300px" />
<img src='/.attachments/applications/Controls/quicklookupsimpleedit.png' width="300px" />


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
      <td>A binding field to bind the control to.</td>
      <td><code>Lookup.Simple</code></td>
      <td>
        <code>accountId</code>
      </td>
      <td><code>5b34e4fd-a937-ef11-8409-0022489d8923</code></td>
      <td><code>bound</code></td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td>customButtonIcon</td>
      <td>Icon of custom button.</td>
      <td><code>SingleLine.Text</code></td>
      <td>
        <code>custom-icon.svg</code>
      </td>
      <td><code>icon-custom</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>customButtonUrl</td>
      <td>URL of custom button.</td>
      <td><code>SingleLine.Text</code></td>
      <td>
        <code>https://example.com/button</code>
      </td>
      <td><code>https://example.com/button</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>customButtonLabel</td>
      <td>Label of custom button.</td>
      <td><code>SingleLine.Text</code></td>
      <td>
        <code>Submit</code>
      </td>
      <td><code>Submit</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>customButtonExpandQuery</td>
      <td>Expand Query to pass to WebAPI to obtain data which are passed to CustomButtonUrl LiquidMapper.</td>
      <td><code>SingleLine.Text</code></td>
      <td>
        <code>select * from accounts where status='active'</code>
      </td>
      <td><code>{"data": [{"accountId": "12345", "accountName": "Acme Corp"}]}</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>enableCopyButton</td>
      <td>Enable Copy Button.</td>
      <td><code>SingleLine.Text</code></td>
      <td>
        <code>true</code>
      </td>
      <td><code>Enabled</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>formId</td>
      <td>ID of the form.</td>
      <td><code>SingleLine.Text</code></td>
      <td>
        <code>contactForm</code>
      </td>
      <td><code>6a72a270-9b64-4c01-a1ae-2941a9428a14</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>openFormWidth</td>
      <td>Width of the form opened in percentage.</td>
      <td><code>Whole.None</code></td>
      <td>
        <code>75%</code>
      </td>
      <td><code>75%</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
  </tbody>
</table>


