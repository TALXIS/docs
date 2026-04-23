---
Author: Mirza Kobasevic
---
# Announcement Card

## Visual example

<img src='/.attachments/applications/Controls/announcementcard.png'  />

## Description

This control serves to display basic information in the form of a card.

## Bindings

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
      <td><code>SingleLine.Text</code></td>
      <td></td>
      <td><code>bound</code></td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td>heading</td>
      <td>Card Heading.</td>
      <td><code>SingleLine.Text</code></td>
      <td><code>Order</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>iconName</td>
      <td>JSON object that contains Webresource name or icon name from FluentUI.</td>
      <td><code>SingleLine.Text</code></td>
      <td>
        <p><code>{ "fluentUiIconName": "LineChart" }</code></p>
        <p><code>{ "webResourceName": "talxis_infoicon.svg" }</code></p>
      </td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>description</td>
      <td>Card Description.</td>
      <td><code>SingleLine.Text</code></td>
      <td></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>actionLink</td>
      <td>Action link at the bottom of the card. Url without the domain.</td>
      <td><code>SingleLine.Text</code></td>
      <td>
        <p><code>talxis_start/control/view?data={"entityName":"account","viewId":"{d71d546b-bc42-405b-9238-18792757aab1}"}</code></p>
        <p><code>main.aspx?appid=07bc5f7b-b043-ef11-bfe2-6045bd9fcae8&pagetype=entitylist&viewid={d71d546b-bc42-405b-9238-18792757aab1}&etn=account</code></p>
      </td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>actionLinkText</td>
      <td>Label for Action Link.</td>
      <td><code>SingleLine.Text</code></td>
      <td><code>LINK</code></td>
      <td><code>input</code></td>
      <td><code>false</code></td>
    </tr>
  </tbody>
</table>


