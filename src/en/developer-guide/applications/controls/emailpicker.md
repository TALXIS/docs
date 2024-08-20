---
Author: Safija Hubljar
---

# Email Picker

Provides features that extend the native Email field control. This includes checking the format of the entered email and also provides an optional verification feature. If verification is enabled, the control will check whether the entered email is verified and the verification status will be displayed directly in the control. Additionally, the control allows the user to initiate the verification process directly through the control if the email is not verified.

![Email Picker Displayed On Form](/.attachments/applications/Controls/emailpickercontrolshared.png)


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
      <td>data</td>
      <td>Binding field containing array of e-mail objects.</td>
      <td>
      <p><code>SingleLine.Text</code></p>
      <td>
        <p style="width: 220px"><code>[
  {
    </br>
    "asyncJobInstanceId": null,
    </br>
    "buttons": [],
    </br>
    "deleteButtonProps": {
      "key": "remove",
      "showOnlyOnHover": true,
       </br>
      "iconProps": {
         </br>
        iconName: "ChromeClose"
      }
    },
    </br>
    "key": "test@hotmail.com",
    </br>
    "name": "test@hotmail.com",
    </br>sf
    "status": "unverified",
    </br>
    "verifiedOn": null
    </br>
  }
]
</code></p>
      </td>
      <td><code>[{"email":"test@hotmail.com",</br>"status":"unverified"}]</code></td>
      <td><code>bound</code></td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td>entityName</td>
      <td><p style="width: 180px">Entity name of the record the EmailPicker is on. Required if verification feature is on.</p></td>
      <td><code>SingleLine.Text</code></td>
      <td>
        <code>account</code>
      </td>
      <td>N/A</td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>recordId</td>
      <td>Primary key of the record the EmailPicker is on. Required if verification feature is on.</td>
      <td><code>SingleLine.Text</code></td>
      <td>
        <code>5b34e4fd-a937-ef11-8409-0022489d8923</code>
      </td>
      <td>N/A</td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
    <td>contactSuggestionFetchXml</td>
    <td>FetchXml that will replace default for filtering contact email suggestions.</td>
    <td><code>SingleLine.Text</code></td>
    <td>
     <p> <code>&lt;fetch&gt;
  &lt;entity name="contact"&gt;
    &lt;attribute name="firstname" /&gt;
    &lt;attribute name="lastname" /&gt;
    &lt;attribute name="emailaddress1" /&gt;
    &lt;filter&gt;
      &lt;condition attribute="emailaddress1" operator="like" value="{{text}}%" /&gt;
    &lt;/filter&gt;
    &lt;link-entity name="talxis_connection" from="talxis_record1id" to="contactid"&gt;
      &lt;attribute name="talxis_record1id" /&gt;
      &lt;filter type="and"&gt;
        &lt;condition attribute="talxis_interceptor_placeholder" operator="ne" value="$contactsInAccount$" /&gt;
      &lt;/filter&gt;
    &lt;/link-entity&gt;
  &lt;/entity&gt;
&lt;/fetch&gt;</code></p>
    </td>
    <td>N/A</td>
    <td><code>input</code></td>
    <td><code>false</code></td>
  </tr>
    <tr>
      <td>accountSuggestionFetchXml</td>
      <td>FetchXml that will replace default for filtering account email suggestions.</td>
      <td><code>SingleLine.Text</code></td>
      <td>
       <p> <code>&lt;fetch&gt;
  &lt;entity name="account"&gt;
    &lt;attribute name="emailaddress1"/&gt;
    &lt;attribute name="name"/&gt;
    &lt;filter&gt;
      &lt;condition attribute="emailaddress1" operator="like" value="{{text}}%"/&gt;
    &lt;/filter&gt;
    &lt;order attribute="emailaddress1"/&gt;
  &lt;/entity&gt;
&lt;/fetch&gt;</code></p>
      </td>
      <td>N/A</td>
      <td><code>input</code></td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td>minEmailCount</td>
      <td>Field that represents the number of required emails.</td>
      <td><code>Whole.None</code></td>
      <td>
        <p><code>2</code></p>
      </td>
      <td>N/A</td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>maxEmailCount</td>
      <td>Field that represents the maximum number of emails that can be inputted.</td>
      <td><code>Whole.None</code></td>
      <td>
       <p> <code>5</code></p>
      </td>
      <td>N/A</td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>minVerifiedCount</td>
      <td>Field that represents the number of emails required to be verified</td>
      <td><code>Whole.None</code></td>
      <td>
        <p<code>3</code></p>
      </td>
      <td>N/A</td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>verificationFeature</td>
      <td>Enable the functionality for verification email.</td>
      <td>
      <p><code>Enum</code></p></td>
      <td><p><code>0</code></p>
      <p><code>1</code></p></td>
      <td>N/A</td>
      <td><code>input</code></td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td>emailEdit</td>
      <td>Enable the email editing.</td>
      <td><code>Enum</code></td>
      <td>
       <p><code>0</code></p>
        <p<code>1</code></p>
       </td>
      <td>N/A</td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>emailSuggestions</td>
      <td>Enable suggest emails from existing accounts and contacts.</td>
      <td><code>Enum</code></td>
      <td>
       <p><code>false</code></p>
        <p<code>true</code></p>
       </td>
      <td>N/A</td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>clickToCopyEnabled</td>
      <td>Enable click to copy button.</td>
      <td><code>Enum</code></td>
      <td>
       <p><code>false</code></p>
        <p<code>true</code></p>
       </td>
      <td>N/A</td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>plainEmail</td>
      <td>Binding field returning first email from `E-mail Data Field` in plain text.</td>
      <td><p><code>SingleLine.Email</code></p>
      <p><code>SingleLine.Text</code></p>
      </td>
      <td>
       <p><code>test@hotmail.com</code></p>
       </td>
      <td><code>test@hotmail.com</code></td>
      <td><code>bound</code></td>
      <td><code>false</code></td>
    </tr>
  </tbody>
</table>

## Changelog

 <h2>2024-08-16</h2>
 <h3> Changed</h3>
<ul>
  <li>Changed PCF to use latest shared component</li>
</ul>