---
title: TALXIS Configuration - Landing Page
tagline: Landing Pages for application users
author: Adel Šabić
---

# **TALXIS Landing Page**

With our landing page, you'll be presented with cards tailored to your account or contact, providing key insights at a glance. You can view graphs that display important business metrics, helping you track performance trends. Additionally, the landing page allows you to seamlessly navigate to various application modules, making it easy to access the tools and information you need for effective decision-making. 

![Landing Page](/.attachments/LandingPage/landingpage.png)

## **TALXIS Configuration - Landing Page**
TALXIS Configuration - Landing Page allows you to fully customize your landing page layout according to your preferences. It offers a user-friendly interface with a live preview of your design, enabling you to see exactly how your changes will appear before finalizing them. This flexibility ensures that you can create a landing page that aligns perfectly with your business needs and goals.

![Landing Page Config](/.attachments/LandingPage/landingpage-config.png)

<table>
  <thead>
    <tr>
      <th>Attribute</th>
      <th>Of Type</th>
      <th>Description</th>
      <th>Required</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Name</td>
      <td><code>String</code></td>
      <td>Descriptive name for the landing page</td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td>Application Unique Name</td>
      <td><code>String</code></td>
      <td>Unique name of application where landing page will be presented</td>
      <td><code>true</code></td>
    </tr>
  </tbody>
</table>

### **User Groups**
In the landing page configuration, there is a list of user groups that defines which groups of users have visibility of the landing page. This allows you to control and customize the content displayed to different audiences based on their roles, permissions, or specific needs, ensuring that relevant information is presented to the appropriate users.

![Landing Page User Groups](/.attachments/LandingPage/landingpage-usergroups.png)

### **Cards**
In the landing page configuration, there is a list of cards that specifies which cards will be visible on the landing page. This list allows you to select and arrange the cards that best suit the needs of your users, ensuring that only relevant information is displayed, while keeping the landing page organized and purposeful.

![Landing Page Cards](/.attachments/LandingPage/landingpage-cards.png)

## **TALXIS Configuration - Landing Page Card**

TALXIS Configuration - Landing Page Card is closely linked to the landing page configuration and stores the definition for each card that will be displayed on the landing page. Each record in this table contains the parameters that dictate how individual cards are rendered, including details like the data source and visual elements. These cards are designed to provide targeted information, insights, or actions, making them essential building blocks for customizing your landing page experience.

![Landing Page Card](/.attachments/LandingPage/landingpagecard-config.png)

<table>
  <thead>
    <tr>
      <th>Attribute</th>
      <th>Of Type</th>
      <th>Description</th>
      <th>Required</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Landing Page</td>
      <td><code>Lookup</code></td>
      <td>Landing page where this card will be shown</td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td>Name</td>
      <td><code>String</code></td>
      <td>Descriptive name of the landing page card</td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td>Order</td>
      <td><code>Integer</code></td>
      <td>Determines the sequence in which the cards are displayed on the landing page</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>Component name</td>
      <td><code>String</code></td>
      <td>Name of the Card PCF component that will be rendered</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>Unique name</td>
      <td><code>String</code></td>
      <td>Unique name of the card</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>Parent card</td>
      <td><code>Lookup</code></td>
      <td>Parent blank card where card will be rendered</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>Parameters</td>
      <td><code>String</code></td>
      <td>JSON of parameters required by Card PCF</td>
      <td><code>false</code></td>
    </tr>
  </tbody>
</table>

 **Order attribute is unique.** This ensures that each card within a specific landing page has a unique order number, preventing duplicates and maintaining the intended sequence of cards on the page. This structure helps organize the display of content precisely as configured.

 **You can create blank card.** If you want to render blank card just leave parameters attribute empty.

![Landing Page Card Blank Card Config](/.attachments/LandingPage/landingpagecard-blankcard-config.png)

![Landing Page Card Blank Card](/.attachments/LandingPage/landingpagecard-blankcard.png)
 
 **You can create parent card.** If you want to render parent card which will render multiple cards in itself, same as blank card, just leave parameters attribute empty.

![Landing Page Card Parent Card Config](/.attachments/LandingPage/landingpagecard-parentcard-config.png)

Later you can reference this parent card in child card configuration so it would be visible inside of it.
 
![Landing Page Card Parent Card](/.attachments/LandingPage/landingpagecard-childcard-config.png)

![Landing Page Card Parent Card](/.attachments/LandingPage/landingpagecard-parentcard.png)


 List of the cards that can be used with TALXIS Configuration - Landing Page:
 - [Info Card](/en/developer-guide/applications/controls/infocard.md)
 - [Announcement Card](/en/developer-guide/applications/controls/announcementcard.md)
 - [Key Figures Card](/en/developer-guide/applications/controls/keyfigures)
 - [Key Performance Card](/en/developer-guide/applications/controls/keyperformance.md)
 - [Donut Chart Card](/en/developer-guide/applications/controls/donutchart.md)
 - [Chart Card](/en/developer-guide/applications/controls/chart.md)