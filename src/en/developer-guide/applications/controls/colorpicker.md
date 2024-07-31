---
Author: Dominik Brych
---
# Color Picker

Color Picker enables users to select a color through an interactive palette. Additionally, users can directly input a valid RGB, HEX, or color string into the field. If an invalid color is entered, an error message will be displayed, and the invalid value will not be propagated to the framework. 

<img src='/.attachments/applications/Controls/colorpicker.png' width="300px" />


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
      <td>value</td>
      <td>Binding field containing the color value.</td>
      <td><code>SingleLine.Text</code></td>
      <td>
        <p><code>#000000</code></p>
        <p style="width: 130px"><code>rgb(0, 0, 0)</code></p>
        <p><code>black</code></p>
      </td>
      <td><code>#000000</code></td>
      <td><code>bound</code></td>
      <td><code>true</code></td>
    </tr>
  </tbody>
</table>


