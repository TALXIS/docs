---
Author: Mirza Kobasevic
---
# Info Card

This control displays basic contact/account information in the form of a card. If control is bound for SingleLine.Text, it displays information of the current user/account. By binding the control to the lookup field, it is possible to display the information of any contact/account.


<img src='/.attachments/applications/controls/InfoCard/accountinfocard.png' height='300px' />
<img src='/.attachments/applications/controls/InfoCard/contactinfocard.png' height='300px' />

# Bindings

<table>
  <thead>
    <tr>
      <th>Property Name</th>
      <th>Description</th>
      <th>Of Type</th>
      <th>Input</th>
      <th>Usage</th>
      <th>Required</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>bindingField</td>
      <td>Binding field.</td>
      <td>
        <p><code>SingleLine.Text</code></p>
        <p><code>Lookup.Simple</code></p>
      </td>
      <td></td>
      <td><code>bound</code></td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td>mode</td>
      <td>Mode decides what the card will display (account, contact)</td>
      <td><code>Enum</code></td>
      <td>
        <p><code>contact</code></p>
        <p><code>account</code></p>
      </td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>fetchXml</td>
      <td>FetchXML Query for filtering and displaying attributes.</td>
      <td><code>SingleLine.Text</code></td>
      <td><pre><code>&lt;fetch version="1.0" mapping="logical"&gt;
  &lt;entity name="contact"&gt;
    &lt;attribute name="emailaddress1" /&gt;
    &lt;attribute name="emailaddress2" /&gt;
    &lt;attribute name="mobilephone" /&gt;
  &lt;/entity&gt;
&lt;/fetch&gt;</code></pre>
</td>
      <td><code>input</code></td>
      <td><code>false</code>
    </td>
    </tr>
    <tr>
      <td>actionLink</td>
      <td>Link for contact/account profile editing.</td>
      <td><code>SingleLine.Text</code></td>
      <td></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
  </tbody>
</table>


