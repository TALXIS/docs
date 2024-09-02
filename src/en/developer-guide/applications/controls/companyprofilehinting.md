---
Author: Safija Hubljar
---

# Company Profile Hinting

This control will hint companies based on the selected country. When the user selects one of the hinted companies, all other fields will be pre-filled. Additionally, the control allows the user to manually create a company if manual input is enabled.

![Company Profile Hinting Displayed On Form](/.attachments/applications/Controls/companyprofilehintingcontrolshared.png)

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
      <td>name</td>
      <td>Binding field containing company name.</td>
      <td>
      <p><code>SingleLine.Text</code></p>
      <td><p style="width: 180px"><code>NETWORG CZ s.r.o.</code></p>
      <p><code>''</code></p>      </td>
      <td><p style="width: 180px"><code>NETWORG CZ s.r.o.</code></p></td>
      <td><code>bound</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>historicalNames</td>
      <td>Binding field containing historical company names.</td>
      <td><code>Multiple</code></td>
      <td>
      </td>
      <td><p><code>NETWORG CZ s.r.o., TheNetw.org s.r.o.</code></p></td>
      <td><code>bound</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>companyNumber</td>
      <td>Binding field containing company number.</td>
      <td><code>SingleLine.Text</code></td>
      <td> <p> <code>03412687</code></p>
     <p> <code>''</code>  </p>  </td>
      <td><code>03412687</code></td>
      <td><code>bound</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
    <td>vatNumber</td>
    <td>VAT number of the company.</td>
    <td><code>SingleLine.Text</code></td>
    <td>
    </td>
    <td><p><code>CZ03412687</code></p></td>
    <td><code>bound</code></td>
    <td><code>false</code></td>
  </tr>
   <tr>
    <td>reliableVATPayer</td>
    <td>Reliable VAT Payer of the company.</td>
    <td><code>OptionSet</code></td>
    <td>
    </td>
    <td><p><code>742070000</code></p></td>
    <td><code>bound</code></td>
    <td><code>false</code></td>
  </tr>
    <tr>
      <td>insolvency</td>
      <td>Insolvency of the company.</td>
      <td><code>OptionSet</code></td>
      <td>
      </td>
      <td>
      <p><code>742070001</code></p>
      </td>
      <td><code>bound</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>jurisdictionCode</td>
      <td>Jurisdiction code of the company.</td>
      <td><code>SingleLine.Text</code></td>
      <td>
      <p><code>CZ</code></p>
      </td>
      <td>
      <p><code>CZ</code></p>
      </td>
      <td><code>bound</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>locality</td>
      <td>Locality of the company.</td>
      <td><code>SingleLine.Text</code></td>
      <td>
      </td>
      <td>
      <p><code>Hlavní město Praha</code></p>
      <p><code>''</code></p>
      </td>
      <td><code>bound</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>sublocality</td>
      <td>Sublocality of the company.</td>
      <td><code>SingleLine.Text</code></td>
      <td>
      </td>
      <td><p><code>Praha 9</code></p>
      <p><code>''</code></p></td>
      <td><code>bound</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>region</td>
      <td>Region of the company.</td>
      <td><code>SingleLine.Text</code></td>
      <td></td>
      <td><p><code>Hlavní město Praha</code></p>
      <p><code>''</code></p></td>
      <td><code>bound</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>postalCode</td>
      <td>Postal code of the company.</td>
      <td><code>SingleLine.Text</code></td>
      <td>
       </td>
      <td><p><code>19000</code></p>
      <p><code>''</code></p></td>
      <td><code>bound</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>formattedPostalCode</td>
      <td>Formatted postal code of the company.</td>
      <td><code>SingleLine.Text</code></td>
      <td></td>
      <td><p><code>190 00</code></p>
      <p><code>''</code></p></td>
      <td><code>bound</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>country</td>
      <td>Country of the company.</td>
      <td><code>SingleLine.Text</code></td>
      <td></td>
      <td><p><code>Česká republika</code></p>
      <p><code>''</code></p></td>
      <td><code>bound</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>administrativeArea</td>
      <td>Administrative area of the company.</td>
      <td><p><code>SingleLine.Text</code></p>
      </td>
      <td>
       </td>
      <td><p><code>Hlavní město Praha</code></p>
      <p><code>''</code></p></td>
      <td><code>bound</code></td>
      <td><code>false</code></td>
    </tr>
  <tr>
      <td>streetName</td>
      <td>Street name of the company.</td>
      <td><p><code>SingleLine.Text</code></p>
      </td>
      <td>
       </td>
      <td><p><code>Sokolovská</code></p>
      <p><code>''</code></p></td>
      <td><code>bound</code></td>
      <td><code>false</code></td>
   </tr>
  <tr>
      <td>streetNumber</td>
      <td>Street number of the company.</td>
      <td><p><code>SingleLine.Text</code></p>
      </td>
      <td>
       </td>
      <td><p><code>352/215</code></p>
      <p><code>''</code></p></td>
      <td><code>bound</code></td>
      <td><code>false</code></td>
   </tr>
     <tr>
      <td>fullAddress</td>
      <td>Full address of the company.</td>
      <td><p><code>SingleLine.Text</code></p>
      </td>
      <td>
       </td>
      <td><p><code>Sokolovská 352/215, Vysočany, 19000 Praha 9</code></p>
      <p><code>''</code></p></td>
      <td><code>bound</code></td>
      <td><code>false</code></td>
   </tr>
   <tr>
      <td>latitude</td>
      <td>Latitude of the company.</td>
      <td><p><code>Decimal</code></p>
      </td>
      <td>
       </td>
      <td>
      <p><code>50.11017051192877</code></p>
      <p><code>undefiend</code></p>
      </td>
      <td><code>bound</code></td>
      <td><code>false</code></td>
   </tr>
    <tr>
      <td>longitude</td>
      <td>Longitude of the company.</td>
      <td><p><code>Decimal</code></p>
      </td>
      <td>
       </td>
      <td><p><code>14.49801248105505</code></p>
      <p><code>undefiend</code></p>
      </td>
      <td><code>bound</code></td>
      <td><code>false</code></td>
   </tr>
     <tr>
      <td>manualInput</td>
      <td>Binding field containing is manual input enabled.</td>
      <td><p><code>TwoOptions</code></p>
      </td>
      <td>
      <p><code>false</code></p>
      <p><code>true</code></p>
       </td>
      <td><p><code>false</code></p>
      <p><code>true</code></p></td>
      <td><code>bound</code></td>
      <td><code>false</code></td>
   </tr>
  </tbody>
</table>

## Changelog

 <h2>2024-08-23</h2>
 <h3> Changed</h3>
<ul>
  <li>Changed PCF to use latest shared component</li>
</ul>