---
Author: Safija Hubljar
---
# Quick Lookup Simple Edit

<p>The Quick Lookup Simple Edit control enhances the ability to edit lookup values easily.</p>
<p> Users can:</p>
<ul>
  <li>Copy values with a single click on the icon</li>
  <li>Dissociate records by clicking the delete icon</li>
  <li>Open connected URLs directly by clicking the link icon</li>
</ul>
<p>Additionally, clicking on a field opens the editing dialog.</p>


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
        <code>{ entityType: "talxis_address", </br> id: "d5fa380a-aa37-ef11-8409-0022489d8923", </br> name: "K pérovně 945/7, Hostivař, 10200 Praha 10" }</code>
      </td>
      <td>  
      <code>{ entityType: "talxis_address", </br> id: "d5fa380a-aa37-ef11-8409-0022489d8923", </br> name: "K Pérovně 945/7, Hostivař, 10200 Praha 18 Czech Republic" }</code>
        </td>
      <td><code>bound</code></td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td>customButtonIcon</td>
      <td>Icon of custom button. It is possible to use only icons from the <a href="https://uifabricicons.azurewebsites.net/" target="_blank">Fluent UI icons</a> library</td>
      <td><code>SingleLine.Text</code></td>
      <td>
        <code>POI</code>
      </td>
      <td>N/A</td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>customButtonUrl</td>
      <td>URL of custom button.</td>
      <td><code>SingleLine.Text</code></td>
      <td>
        <code>https://www.google.com/maps/search/?api=1&query=50.0662464,14.5293889</code>
      </td>
      <td>N/A</td>
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
      <td>N/A</td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>customButtonExpandQuery</td>
      <td>Expand Query to pass to WebAPI to obtain data which are passed to CustomButtonUrl LiquidMapper.</td>
      <td><code>SingleLine.Text</code></td>
      <td>
        <code>talxis_Child_talxis_Parent_talxis_Parent($select=talxis_name)</code>
      </td>
      <td>N/A</td>
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
      <td>N/A</td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>formId</td>
      <td>ID of the form.</td>
      <td><code>SingleLine.Text</code></td>
      <td>
        <code>0f98e335-c08a-4921-b925-09ef9a517c12</code>
      </td>
      <td>N/A</td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>openFormWidth</td>
      <td>Width of the form opened in percentage.</td>
      <td><code>Whole.None</code></td>
      <td>
        <code>60</code>
      </td>
      <td>N/A</td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
  </tbody>
</table>

## Changelog

 <h2>2024-08-02</h2>
 <h3> Changed</h3>
<ul>
  <li>Changed PCF to use TextField Base control</li>
  <li>Moved buttons inside the text field</li>
</ul>


