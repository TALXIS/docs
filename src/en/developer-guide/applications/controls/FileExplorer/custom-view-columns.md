---
Author: Jan Kostejn
---

# Custom View Columns
First of all, there are some default columns that can't be hidden at the moment. Those are
* File Type - icon of the file
* Name - name of the file

That being cleared out, _File Explorer_ control can show custom view columns right in the control. This can be a status of a file going through review for example.

::: danger BREAKING CHANGE
Previously, there were _Columns to be Shown_ in [File Explorer Settings](/en/developer-guide/applications/controls/FileExplorer/collaborationworkspaces/#file-explorer-settings). All the optional columns were removed and this attribute will be deprecated. If you need to perform an upgrade path for an existing configuration, please follow the [upgrade path](#upgrade-path)
:::

## Configuration
These view columns can be added through configuration. First of all, make sure that you have a [collaboration workspace template record](/en/developer-guide/applications/controls/FileExplorer/collaborationworkspaces/#collaboration-workspace-template) created. This record is defining the features of an individual _File Explorer_ control instance. Once that is sorted out, you can start adding custom view columns in the **👁️ Custom View Columns** tab.

![Custom View Columns tab on the Collaboration Workspace Template form](/.attachments/en/developer-guide/applications/controls/FileExplorer/custom-view-columns-tab-on-collaboration-workspace-template-form.png)

Here you add a new view column (record) to the existing _File Explorer_ control instance. These records can be then exported and versioned in the data package through `pac tool cmt` cli command, which opens _Configuration Migration Tool_ on your local machine.

### _Collaboration Workspace Custom View Column_ Record
![Custom View Columns main form](/.attachments/en/developer-guide/applications/controls/FileExplorer/custom-view-columns-main-form.png)

#### IDENTIFICATION Section
| Attribute                      | Description                                    |
|--------------------------------|------------------------------------------------|
| Name                           | Logical name of the view column                |
| Collaboration Workspace Header | Associated _Collaboration Workspace Template_. |
| Status Reason                  | Only _Active_ records are retrieved and valid. |

#### BEHAVIOR Section
| Attribute  | Description                                                           |
|------------|-----------------------------------------------------------------------|
| Liquid Map | This attribute takes a liquid map and renders its result to the cell. |

#### LOOK Section
| Attribute              | Description                                                                |
|------------------------|----------------------------------------------------------------------------|
| Order                  | Sets the column rendering order.                                           |
| Is Padded              | If true, add additional LTR padding-right to column and cells (Fluent UI). |
| Minimal Column Width   | Sets the minimal column width.                                             |
| Maximal Column Width   | Sets the maximal column width.                                             |
| Is Resizable           | Can be the column resized?                                                 |
| Is Sorting Enabled     | Is sorting on the column enabled?                                          |
| Sorting Column Type \* | Type of sorting.                                                           |
| Display Name \*\*      | Display name of the button. This text is shown in the UI to the end user.  |

\* : Applies only if sorting is enabled.  
\*\* : Localized JSON objects can be used. These values are not known at design time and due to the localization requirement, this was the best value / effort solution. The object has string _lcid_ (language codes) for properties with translated values. Example: `{ "1033": "This is the english localized value.", "1029": "Tohle je český překlad." }`.

::: warning DIFFERENT FILE SYSTEM PROVIDERS
This feature was implemented primarily for _Environment File System_ file system provider. Even though it should work for _SharePoint_ file system provider as well, don't expect the feature to support all the scenarios from EFS. Some simple implementation changes might be required for that.   
:::

## Advanced
Here are some possible advanced configurations.

### Displaying Related File Data
_Environment File System_ file system provider automatically relates newly added files with the source record (a record on which the _File Explorer_ control instance is added to) if there's an existing relationship between file entity and the source entity. There's a polymorphic lookup `talxis_regardingobjectid` on `talxis_file` entity to which you can add new relationship to your required source entity. If that's not an option for any reason or you need to stay backwards compatible, you can use existing lookup or add a new one. The relationships are fetched and the first available is used. `talxis_regardingobjectid` is always prioritized.

Once you have the file record related to your source record, you can use _File Record Expand Query_ in [File Explorer Settings](/en/developer-guide/applications/controls/FileExplorer/collaborationworkspaces/#file-explorer-settings). To retrieve related information with each file record. These properties can be accessed from `expandedProperties` in the [liquid map](#behavior-section).

#### Example
Let's say that our control is on a `talxis_contract` record. Since there's already a relationship in the `talxis_regardingobjectid` polymorphic lookup for `talxis_contract`, every uploaded file is associated with the source record.

If you'll set the _File Record Expand Query_ in [File Explorer Settings](/en/developer-guide/applications/controls/FileExplorer/collaborationworkspaces/#file-explorer-settings) to
```text
talxis_regardingobjectid_talxis_contract(
    $select=statuscode,talxis_contractclosereason;
    $expand=talxis_counterpartyid(
        $select=name
    )
)
```
you can then access the status of the contract or even the name of the contract's counter-party.

The [liquid map](#behavior-section) of a view column displaying the status reason of the contract would look like this
```text
{{ expandedProperties.talxis_regardingobjectid_talxis_contract.statuscode_OData_Community_Display_V1_FormattedValue }}
```
All occurrences of `@` symbol in the keys (property names) are replaced by `_` as you can see in the sample above.

::: tip NOTE
It should be quite simple to enable this for _SharePoint_ file system provider when there are file records created to each _SharePoint_ file in the database.
:::

## Upgrade Path
These are the steps to upgrade an existing deployment of the _File Explorer_ control. The assumption is that you were using at least one of the optional _Columns to be Shown_ in [File Explorer Settings](/en/developer-guide/applications/controls/FileExplorer/collaborationworkspaces/#file-explorer-settings). Let's take a look at individual columns and how to replace them. This upgrade path works for both file system providers.

### Optional Columns
#### author
Author can be either an application (migration for example) or a user. Liquid map would look like this
```text
{%- if createdBy.user.displayName.size > 0 -%}
    {{ createdBy.user.displayName }}
{%- elsif createdBy.application.displayName.size > 0 -%}
    {{ createdBy.application.displayName }}
{%- endif -%}      
```

#### datemodified
The last modification date can be shown with the following liquid map
```text
{{ lastModifiedDateTime }}
```

#### filesize
File size should behave similar to how it does in Windows since that's what most users are used to. Liquid map would look like this
```text
{%- assign terabyte = 1099511627776 -%}
{%- assign gigabyte = 1073741824 -%}
{%- assign megabyte = 1048576 -%}
{%- assign kilobyte = 1024 -%}
{%- if size >= terabyte -%}
    {{ size | divided_by: terabyte | floor }} TB
{%- elsif size >= gigabyte -%}
    {{ size | divided_by: gigabyte | floor }} GB
{%- elsif size >= megabyte -%}
    {{ size | divided_by: megabyte | floor }} MB
{%- elsif size >= kilobyte -%}
    {{ size | divided_by: kilobyte | floor }} KB
{%- elsif size -%}
    {{ size }} B
{%- else -%} 
{%- endif -%}
```

You can also enable sorting on this column with sort type set to number.

#### version
This one wasn't use in production deployment and is not currently implemented. If you need it, contact the author of this page for more details.

### Configuration Migration Tool (Data Package)
Here are `data_schema.xml` and `data.xml` attached so it's easier to perform the upgrade path.

#### `data_schema.xml`
Add this entity to your schema file.
```xml
<entity name="talxis_configuration_collabworkspacecustomviewcolumn" displayname="TALXIS Configuration - Collaboration Workspace Custom Command Bar Button" primaryidfield="talxis_configuration_collabworkspacecustomviewcolumnid" primarynamefield="talxis_name" disableplugins="true" skipupdate="false">
    <fields>
        <field displayname="Collaboration Workspace Header" name="talxis_configuration_collabworkspaceheaderid" type="entityreference" lookupType="talxis_configuration_collabworkspaceheader" customfield="true" />
        <field displayname="Custom View Column" name="talxis_configuration_collabworkspacecustomviewcolumnid" type="guid" primaryKey="true" />
        <field displayname="Display Name" name="talxis_displayname" type="string" customfield="true" />
        <field displayname="Is Padded" name="talxis_ispaddedtypecode" type="bool" customfield="true" />
        <field displayname="Is Resizable" name="talxis_isresizabletypecode" type="bool" customfield="true" />
        <field displayname="Is Sorting Enabled" name="talxis_issortingenabledtypecode" type="bool" customfield="true" />
        <field displayname="Liquid Map" name="talxis_liquidmap" type="string" customfield="true" />
        <field displayname="Max Column Width" name="talxis_maxwidth" type="number" customfield="true" />
        <field displayname="Min Column Width" name="talxis_minwidth" type="number" customfield="true" />
        <field displayname="Name" name="talxis_name" type="string" customfield="true" />
        <field displayname="Order" name="talxis_order" type="number" customfield="true" />
        <field displayname="Sorting Column Type" name="talxis_sortingcolumntypetypecode" type="optionsetvalue" customfield="true" />
        <field displayname="Status" name="statecode" type="state" />
        <field displayname="Status Reason" name="statuscode" type="status" />
    </fields>
</entity>
```

#### `data.xml`
Add these records to your data file. Don't forget to replace record GUIDs, so this matches your existing setup.
```xml
<entity name="talxis_configuration_collabworkspacecustomviewcolumn" displayname="TALXIS Configuration - Collaboration Workspace Custom View Column">
    <records>
        <record id="{ REPLACE WITH A NEW RECORD ID - GUID }">
            <field name="talxis_configuration_collabworkspaceheaderid" value="{ REPLACE WITH AN EXISTING TEMPLATE RECORD - GUID }" lookupentity="talxis_configuration_collabworkspaceheader" lookupentityname="{ REPLACE WITH THE RECORDS PRIMARY NAME ATTRIBUTE VALUE - string }" />
            <field name="talxis_configuration_collabworkspacecustomviewcolumnid" value="{ REPLACE WITH A NEW RECORD ID - GUID }" />
            <field name="talxis_displayname" value="{&amp;quot;1029&amp;quot;:&amp;quot;Upraveno&amp;quot;, &amp;quot;1033&amp;quot;:&amp;quot;Date Modified&amp;quot;}" />
            <field name="talxis_ispaddedtypecode" value="True" />
            <field name="talxis_isresizabletypecode" value="True" />
            <field name="talxis_issortingenabledtypecode" value="True" />
            <field name="talxis_liquidmap" value="{{ lastModifiedDateTime }}" />
            <field name="talxis_maxwidth" value="90" />
            <field name="talxis_minwidth" value="70" />
            <field name="talxis_name" value="dateModified" />
            <field name="talxis_order" value="10" />
            <field name="talxis_sortingcolumntypetypecode" value="742070007" />
            <field name="statecode" value="0" />
            <field name="statuscode" value="1" />
        </record>
        <record id="{ REPLACE WITH A NEW RECORD ID - GUID }">
            <field name="talxis_configuration_collabworkspaceheaderid" value="{ REPLACE WITH AN EXISTING TEMPLATE RECORD - GUID }" lookupentity="talxis_configuration_collabworkspaceheader" lookupentityname="{ REPLACE WITH THE RECORDS PRIMARY NAME ATTRIBUTE VALUE - string }" />
            <field name="talxis_configuration_collabworkspacecustomviewcolumnid" value="{ REPLACE WITH A NEW RECORD ID - GUID }" />
            <field name="talxis_displayname" value="{ &amp;quot;1029&amp;quot;: &amp;quot;Autor&amp;quot;, &amp;quot;1033&amp;quot;: &amp;quot;Author&amp;quot; }" />
            <field name="talxis_ispaddedtypecode" value="False" />
            <field name="talxis_isresizabletypecode" value="True" />
            <field name="talxis_issortingenabledtypecode" value="True" />
            <field name="talxis_liquidmap" value="
                {%- if createdBy.user.displayName.size > 0 -%}
                    {{ createdBy.user.displayName }}
                {%- elsif createdBy.application.displayName.size > 0 -%}
                    {{ createdBy.application.displayName }}
                {%- endif -%}
                " />
            <field name="talxis_maxwidth" value="100" />
            <field name="talxis_minwidth" value="80" />
            <field name="talxis_name" value="author" />
            <field name="talxis_order" value="20" />
            <field name="talxis_sortingcolumntypetypecode" value="742070004" />
            <field name="statecode" value="0" />
            <field name="statuscode" value="1" />
        </record>
        <record id="{ REPLACE WITH A NEW RECORD ID - GUID }">
            <field name="talxis_configuration_collabworkspaceheaderid" value="{ REPLACE WITH AN EXISTING TEMPLATE RECORD - GUID }" lookupentity="talxis_configuration_collabworkspaceheader" lookupentityname="{ REPLACE WITH THE RECORDS PRIMARY NAME ATTRIBUTE VALUE - string }" />
            <field name="talxis_configuration_collabworkspacecustomviewcolumnid" value="{ REPLACE WITH A NEW RECORD ID - GUID }" />
            <field name="talxis_displayname" value="{ &amp;quot;1029&amp;quot;: &amp;quot;Velikost&amp;quot;, &amp;quot;1033&amp;quot;: &amp;quot;File Size&amp;quot; }" />
            <field name="talxis_ispaddedtypecode" value="False" />
            <field name="talxis_isresizabletypecode" value="True" />
            <field name="talxis_issortingenabledtypecode" value="True" />
            <field name="talxis_liquidmap" value="
                {%- assign terabyte = 1099511627776 -%}
                {%- assign gigabyte = 1073741824 -%}
                {%- assign megabyte = 1048576 -%}
                {%- assign kilobyte = 1024 -%}
                {%- if size >= terabyte -%}
                    {{ size | divided_by: terabyte | floor }} TB
                {%- elsif size >= gigabyte -%}
                    {{ size | divided_by: gigabyte | floor }} GB
                {%- elsif size >= megabyte -%}
                    {{ size | divided_by: megabyte | floor }} MB
                {%- elsif size >= kilobyte -%}
                    {{ size | divided_by: kilobyte | floor }} KB
                {%- elsif size -%}
                    {{ size }} B
                {%- else -%}
                {%- endif -%}
                " />
            <field name="talxis_maxwidth" value="90" />
            <field name="talxis_minwidth" value="90" />
            <field name="talxis_name" value="fileSize" />
            <field name="talxis_order" value="30" />
            <field name="talxis_sortingcolumntypetypecode" value="742070002" />
            <field name="statecode" value="0" />
            <field name="statuscode" value="1" />
        </record>
    </records>
    <m2mrelationships />
</entity>
```