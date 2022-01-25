---
title: UCI Extensions
tagline: Common UCI client script extensions, that can be used accross client.
author: Jan Kostejn <jan.kostejn@thenetw.org>
---

> **_NOTE:_** You can read more about [UCI (Unified Client Interface) here](https://docs.microsoft.com/en-us/power-platform/admin/about-unified-interface).

# GetLocalizedString
Gets localized string that can be used on the client.
- `sourcePhrase` can be just a string or a string with placeholders for values from a specific resx file. Placeholders required format: '\{ $Resources(\<webresources_logicalname\>):\<key\> \}'.
  - \<webresources_logicalname\> usually ends by `*.<LCID>.resx`. Leave this part out. So for example, when our resource file has logical name `localization/talxis_asyncjobs.1033.resx`, we will use `localization/talxis_asyncjobs`. More on this can be found [here](https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-utility/getresourcestring#remarks).
- Returns localized `sourcePhase` _(string)_.

## Usage
```typescript
var dialogStrings: Xrm.Navigation.ConfirmStrings = {
    title: localizedTitle != "" ? localizedTitle : TALXIS.Utility.Apps.Start.UCIClientExtensions.GetLocalizedString("{ $Resources(localization/talxis_asyncjobs):title }"),
    subtitle: localizedSubtitle != "" ? localizedSubtitle : TALXIS.Utility.Apps.Start.UCIClientExtensions.GetLocalizedString("{ $Resources(localization/talxis_asyncjobs):subtitle }"),
    text: localizedText != "" ? localizedText : TALXIS.Utility.Apps.Start.UCIClientExtensions.GetLocalizedString("{ $Resources(localization/talxis_asyncjobs):text }"),
    confirmButtonLabel: localizedConfirmButtonLabel != "" ? localizedConfirmButtonLabel : TALXIS.Utility.Apps.Start.UCIClientExtensions.GetLocalizedString("{ $Resources(localization/talxis_asyncjobs):confirmButtonLabel }"),
    cancelButtonLabel: localizedCancelButtonLabel != "" ? localizedCancelButtonLabel : TALXIS.Utility.Apps.Start.UCIClientExtensions.GetLocalizedString("{ $Resources(localization/talxis_asyncjobs):cancelButtonLabel }")
};
```

> :warning: Do not forget that your script has to have a dependency on the UCIClientExtensions script _(`talxis_utilityappsstart.js`)_. If it will not be loaded on the client, it will not work.
> <br/><br/>
> :warning: Another important thing to keep in mind is that you also have to add a dependency on the resource file you intend to use. Otherwise the key will not be found. Since you can not add resource file as a library on the form, use either existing script already required by the form or create a new empty one where you can set the resource file as a dependency.

# DeactivateRecord

Deactivates a record.

## Inputs

Required
- executionContext - Xrm.FormContext

Not required
- entityLogicalName - string
- recordId - string
- statecode - number
- statuscode - number

## Notes
If statecode and statuscode are not specified in inputs, tries to find a option with name "Inactive", if not found open a error dialog.
If entity and record Id are not specified in inputs, gets these information from formContext.

# CalculateRollupField

Calculate fields in rollup.

## Inputs

Required
- executionContext - Xrm.FormContext
- fieldNames - array of strings

## Usage
```xml
<event name="tabstatechange" application="false" active="false">
  <Handlers>
    <Handler functionName="TALXIS.Utility.Apps.Start.UCIClientExtensions.CalculateRollupField" libraryName="talxis_utilityappsstart.js" handlerUniqueId="{0cc4e8e2-9390-c975-57e2-a9ebd7e5c84c}" enabled="true" parameters="[&quot;talxis_totalamount&quot;,&quot;talxis_totalamountwithvat&quot;]" passExecutionContext="true" />
  </Handlers>
</event>
```

# NormalizeDateTimeInput

Returns date converted to UTC.

## Inputs

Required
- executionContext - Xrm.FormContext
- fieldName - string

## Usage

```typescript
try {
    await TALXIS.Contract.Apps.Default.talxis_contract.Main.SignContract(formContext, await TALXIS.Utility.Apps.Start.UCIClientExtensions.NormalizeDateTimeInput(formContext, "signedondate"), await TALXIS.Utility.Apps.Start.UCIClientExtensions.NormalizeDateTimeInput(formContext, "validfromdate"));
}
```

# SetFormReadOnly

Disable all controls on a form.

## Inputs

Required
- executionContext - Xmr.FormContext

## Usage

```typescript
if (stateCode === 0) { //Active
    switch (statusCode) {
        // Valid
        case 742070001:
            //@ts-ignore
            await TALXIS.Utility.Apps.Start.UCIClientExtensions.SetFormReadOnly(executionContext);
            break;
        default:
            break;
    }
}
```

# SetLookupDisplayNameToFirstViewAttribute

Sets a lookup display name to first view attribute.

## Inputs

Required
- executionContext - Xrm.FormContext
- controlName - string

## Usage

```xml
<event name="onchange" application="true" active="true" attribute="talxis_finalcontractid">
    <Handlers>
        <Handler functionName="TALXIS.Utility.Apps.Start.UCIClientExtensions.SetLookupDisplayNameToFirstViewAttribute" libraryName="talxis_utilityappsstart.js" handlerUniqueId="{c3b3ad72-8bf4-48ce-a97d-4e5bc1ec53b4}" enabled="true" parameters="&quot;header_process_talxis_finalcontractid&quot;" passExecutionContext="true" />
    </Handlers>
</event>
```


# SetControlVisibility

Sets control visibility on form.

## Inputs

Required
- executionContext - Xrm.FormContext
- controlName - string
- visibility - boolean (true/false)

## Usage

```typescript
switch (formContext.getAttribute('talxis_introductionscenariotypecode')?.getValue()) {
    case 742070000: // application
        TALXIS.Utility.Apps.Start.UCIClientExtensions.SetControlVisibility(executionContext, 'talxis_entityname', false);
        TALXIS.Utility.Apps.Start.UCIClientExtensions.SetControlVisibility(executionContext, 'talxis_formid', false);
        break;
    case 742070001: // form
        TALXIS.Utility.Apps.Start.UCIClientExtensions.SetControlVisibility(executionContext, 'talxis_entityname', true);
        TALXIS.Utility.Apps.Start.UCIClientExtensions.SetControlVisibility(executionContext, 'talxis_formid', true);
        break;
    case 742070002: // dialog
        TALXIS.Utility.Apps.Start.UCIClientExtensions.SetControlVisibility(executionContext, 'talxis_entityname', false);
        TALXIS.Utility.Apps.Start.UCIClientExtensions.SetControlVisibility(executionContext, 'talxis_formid', true);
        break;
    default: // type is empty
        TALXIS.Utility.Apps.Start.UCIClientExtensions.SetControlVisibility(executionContext, 'talxis_entityname', true);
        TALXIS.Utility.Apps.Start.UCIClientExtensions.SetControlVisibility(executionContext, 'talxis_formid', true);
        break;
}
```

# SetSectionVisibility

Set section visibility on a form.

## Inputs

Required
- executionContext - Xrm.FormContext
- tabName - string - In which tab section exists.
- sectionName - string - Section you want to set visiblity.
- visible - boolean (true/false)

## Usage

```typescript
// hide/show sections based on status
TALXIS.Utility.Apps.Start.UCIClientExtensions.SetSectionVisibility(formContext, "informationtab", "resultsection", formContext.getAttribute("statuscode")?.getValue() === 7);
TALXIS.Utility.Apps.Start.UCIClientExtensions.SetSectionVisibility(formContext, "informationtab", "scheduledfollowupsection", formContext.getAttribute("statecode")?.getValue() === 0);
```

# DownloadFileFromAttribute

Downloads a file from a file attribute.

## Inputs

Required
- attributeName - string

Not required
- entityName - string
- recordId - string
- executionContext - Xrm.FormContext

## Usage

```typescript
// iterate and download all available files
for (const fileRecord of fileRecords) {
    await TALXIS.Utility.Apps.Start.UCIClientExtensions.DownloadFileFromAttribute("talxis_file", "talxis_file", fileRecord.talxis_fileid);
}
```

## Notes

It is important to use InitializeFileBlocksDownload and DownloadBlock actions instead of direct HTTP call to $value endpoint or getting a SAS URL from GetFileSasUrl since TALXIS Portal & EDS don't support cookies-based auth & SAS blob URLs. This way we are compatible with both runtimes.

# Uint8ToString

Return a uint8 converted to string.

> What is Uint8? You can find it here: https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-dtyp/a88ed362-a905-4ed2-85f5-cfc8692c9842

## Inputs

Required
- u8a - Uint8Array

# UploadFileToAttribute

Uploads a file to a file attribute.

## Inputs

Required
- fileContentBase64 - string
- fileName - string
- attributeName - string

Not required
- entityName - string
- recordId - string
- executionContext - Xrm.FormContext

## Usage

```typescript
let fileRecord: object = await Xrm.WebApi.createRecord('talxis_file', data)
//@ts-ignore - Reaching for method in another project
await TALXIS.Utility.Apps.Start.UCIClientExtensions.UploadFileToAttribute(base64, fileList[0].name, 'talxis_file', 'talxis_file', fileRecord.id, executionContext)
```

# TryGetFormContext

If execution context is EventContext, returns executionContext.getFormContext(), if not returns execution context as Xrm.FormContext.

## Inputs

Required
- executionContext - Xrm.FormContext

## Usage

```typescript
//@ts-ignore
const formContext: Xrm.FormContext = TALXIS.Utility.Apps.Start.UCIClientExtensions.TryGetFormContext(executionContext);
```

# UpdateRecord

Updates a record.

## Inputs

Required
- formcontext - Xrm.FormContext
- data - string (json)


# Functions in class Typeguard

## Inputs (same for all functions)

Required
- toBeDetermined - any

## DetermineIfContextIsEntityForm

Check if the object contains entity property, returns true/false.

# Usage

```typescript
if (TALXIS.Utility.Apps.Start.UCIClientExtensions.TypeGuards.DetermineIfContextIsEntityForm(formContext)) {
    contractId = formContext.data.entity.getId();
}
```

## DetermineIfContextIsDialog

Check if the object is dialog, returns true/false.

# Usage

```xml
<EnableRule Id="talxis.talxis_salesorderheader.isNotOnDialog">
    <CustomRule FunctionName="TALXIS.Utility.Apps.Start.UCIClientExtensions.TypeGuards.DetermineIfContextIsDialog" Library="$webresource:talxis_utilityappsstart.js" InvertResult="true">
        <CrmParameter Value="PrimaryControl" />
    </CustomRule>
</EnableRule>
```

## DetermineIfContextIsEventContext

Check if the object is EventContext, returns true/false.

# Usage

```typescript
public static TryGetFormContext(executionContext: Xrm.Events.EventContext | Xrm.FormContext): Xrm.FormContext {
    if (this.TypeGuards.DetermineIfContextIsEventContext(executionContext)) {
        return executionContext.getFormContext();
    }
    else {
        return (executionContext as Xrm.FormContext);
    }
}
```
