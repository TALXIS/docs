---
title: TALXIS Configuration - Announcements
tagline: Global announcements for application users
author: Adel Šabić
---

# **TALXIS Announcements**

With TALXIS Announcements you can make global notifications for all or for certain group of users.

## **TALXIS Configuration - Announcement**
| Field name 	| Description 	|
|-	|-	|
| talxis_configuration_announcementid 	| ID of the record 	|
| talxis_actionlabel 	| The label for the action in the message.	|
| talxis_contactfilterquery | Advanced filter query options to scope down user group to whome announcement will be shown. |
| talxis_eventhandler 	| The function to execute when the action label is clicked.	|
| talxis_finishon 	| **(Recommended)** Defines date and time of announcement end. If not provided, announcement will be shown forever |
| talxis_level 	| **(Required)** Defines the level of notification. Valid values are:<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;○ 1: Success<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;○ 2: Error<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;○ 3: Warning<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;○ 4: Information   |
| talxis_message 	| **(Required)** The message to display in the notification. 	|
| talxis_name 	| Name of the announcement record. 	|
| talxis_showclosebutton 	| Indicates whether or not the user can close or dismiss the notification. If you don't specify this parameter, users can't close or dismiss the notification by default. 	|
| talxis_starton 	| **(Required)** Defines date and time of announcement start.	|
| talxis_type 	|  Defines the type of notification. Currently, only a value of 2 is supported, which displays a message bar at the top of the app.	|


**Sample record**:

![TALXIS Configuration - Announcement Record](/.attachments/Announcements/AnnouncementsRecordSample.png)

**More info**:
If you need more info on this topic you can visit official [Microsoft documentation](https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-app/addglobalnotification) for global notifications in PowerApps