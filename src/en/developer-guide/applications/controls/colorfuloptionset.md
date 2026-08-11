---
Author: Safija Hubljar
---

# Colorful Optionset

This control is changing design of optionset on form.

![Colorful Optionset Displayed On Form](/.attachments/applications/Controls/colorfuloptionsetcontrolbase.png)

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
      <td>optionsInput</td>
      <td>Binding field for optionset.</td>
      <td>
      <p><code>OptionSet</code></p>
      <td><p style="width: 200px"><code>[
  {
    "label": "Option 1",
    "value": 1,
    "color": "#eb1313",
    "iconName": null
  },
  </br>
  {
    "label": "Option 2",
    "value": 2,
    "color": null,
    "iconName": null
  },
  </br>
  {
    "label": "Option 3",
    "value": 3,
    "color": "#190eeb",
    "iconName": null
  }
]
</code></p>     </td>
      <td><p><code>3</code></p></td>
      <td><code>bound</code></td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td>optionsIconJSON</td>
      <td>Fluent UI icons for options.</td>
      <td><code>SingleLine.Text</code></td>
      <td>
      <p><code>
      {
        </br>
  "key": "CircleFill",
</br>
showOnlyOnHover: false,
</br>
  "iconProps": {
    "iconName": "CircleFill"
  }
  </br>
}
      </code></p>
      <code>undefiend</code>
      </td>
      <td>N/A</td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>useColorBackground</td>
      <td><p style="width: 180px">Enables the feature to use the color as the background color</p></td>
      <td><code>Enum</code></td>
      <td> <p> <code>true</code></p>
     <p> <code>false</code>  </p>  </td>
      <td>N/A</td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
  </tbody>
</table>

## Changelog

 <h2>2024-09-09</h2>
 <h3> Changed</h3>
<ul>
  <li>Changed PCF to use latest base controls</li>
</ul>