---
Author: Safija Hubljar
---
# Phone Picker

<p>Provides features that extend the native Phone field control. Most notably:</p>

- **Autoformat**: Inputed number gets automatically formated based on provided country code. This includes automatic detection of country prefix.
- **Verification** (optional):  If enabled, the control will check if the provided number has been verified (through SMS OTP). Verification status is displayed directly in the control. If not verified, the user has the option to trigger verification directly through the control.


<img src='/.attachments/applications/Controls/phonepickerbase.png' width="300px" />

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
      <td>phoneNumber</td>
      <td>Phone number field</td>
      <td>
      <p><code>SingleLine.Phone</code></p>
     <p><code>SingleLine.Text</code></p>
      <p<code>SingleLine</code></p>
      <td>
        <code>111 222 333</code>
      </td>
      <td><code>+420 111 222 333</code></td>
      <td><code>bound</code></td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td>entityName</td>
      <td><p style="width: 180px">Entity name of the record the PhonePicker is on. Required if verification feature is on.</p></td>
      <td><code>SingleLine.Text</code></td>
      <td>
        <code>account</code>
      </td>
      <td>N/A</td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>defaultCountryCode</td>
      <td>Default Country code. CZ by default</td>
      <td><code>SingleLine.Text</code></td>
      <td>
        <code>CZ</code>
      </td>
      <td>N/A</td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>placeholderMessage</td>
      <td>Placeholder message</td>
      <td><code>SingleLine.Text</code></td>
      <td>
        <code>---</code>
      </td>
      <td>N/A</td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>verificationFeature</td>
      <td>Enable the functionality for verification phone number.</td>
      <td><code>Enum</code></td>
      <td>
        <p><code>0</code></p>
        <p><code>1</code></p>
      </td>
      <td>N/A</td>
      <td><code>input</code></td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td>verificationDialogDisabled</td>
      <td>Field for disabling the verification dialog.</td>
      <td><code>Enum</code></td>
      <td>
        <p><code>true</code></p>
        <p><code>false</code></p>
      </td>
      <td>N/A</td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>enforceMobile</td>
      <td>Enforces the use of a mobile number or allows a landline.</td>
      <td><code>Enum</code></td>
      <td>
       <p> <code>0</code></p>
       <p> <code>1</code></p>
      </td>
      <td>N/A</td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>callFeature</td>
      <td>Enable call functionality.</td>
      <td><code>Enum</code></td>
      <td>
        <p<code>0</code></p>
        <p<code>1</code></p>
      </td>
      <td>N/A</td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>plainPhone</td>
      <td>Binding field returning plain phone number</td>
      <td>
      <p><code>SingleLine.Phone</code></p>
      <p><code>SingleLine.Text</code></p>
      <p><code>SingleLine</code></p>
      </td>
      <td><p style="width: 130px"><code>+420 111 222 333</code></p></td>
      <td><p style="width: 150px"><code>+420 111 222 333</code></p></td>
      <td><code>bound</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>clickToCopyEnabled</td>
      <td>Enable click to copy button.</td>
      <td><code>Enum</code></td>
      <td>
       <p><code>true</code></p>
        <p<code>false</code></p>
       </td>
      <td>N/A</td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
  </tbody>
</table>

## Changelog

 <h2>2024-08-07</h2>
 <h3> Changed</h3>
<ul>
  <li>Changed PCF to use TextField Base control</li>
</ul>