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