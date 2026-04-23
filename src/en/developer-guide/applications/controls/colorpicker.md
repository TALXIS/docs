---
Author: Dominik Brych
---
# Color Picker

## Visual example

<iframe style="border: 0px solid rgba(0, 0, 0, 1);   border-radius: 10px;" width="730" height="600" src="https://embed.figma.com/proto/CIf7LPbQa9gZTMTiH1e07g/NETWORG-Web-UI-Master?page-id=3578%3A2513&node-id=3578-4408&p=f&viewport=2506%2C1783%2C0.27&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3578%3A4408&embed-host=share" allowfullscreen></iframe>

## Description

Color Picker enables users to select a color through an interactive palette. Additionally, users can directly input a valid RGB, HEX, or color string into the field. If an invalid color is entered, an error message will be displayed, and the invalid value will not be propagated to the framework. 

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


