---
Author: Zdenek Srejber
---
# Form Validation In Model-Driven Forms

## Problem

When the Form PCF is embedded inside a Power Apps model-driven form, there are effectively two validation surfaces:

- the main model-driven form
- the embedded Form PCF

The standard ribbon Save button already knows how to validate the main form. It does not automatically know whether your embedded Form PCF is valid, whether it has blocking errors, or whether it should stop the save.

Without an explicit bridge between those two layers, users can click Save on the main form while the PCF still contains invalid data. That usually leads to invalid state.

The practical goal is simple:

1. User clicks Save in the main form ribbon.
2. Main form save handler asks the embedded Form PCF to validate itself.
3. If the PCF is invalid, the handler cancels the host save.
4. If both the host form and the PCF are valid, save continues.

## Simplified guide

1. Configure the Form PCF with `ClientApiFormContextFunctionName` so your web resource receives the embedded Form PCF `formContext`.
2. Store that Form PCF `formContext` where the host form script can access it during save.
3. Register a main model-driven form `OnSave` handler that validates both the host form and the embedded Form PCF.
4. Call `preventDefault()` when validation fails, show a clear message, and continue with save only when both layers are valid.

### Used pattern

Use this split of responsibilities:

- the main model-driven form decides whether the overall save is allowed
- the embedded Form PCF decides whether its own data is valid
- the host script bridges those two decisions in the main form `OnSave` handler

This keeps the validation logic understandable and avoids duplicating business rules in multiple places.

## Sample

### Step 1: Form XML definition within a model-driven app

This example shows the binding of the Form PCF in a model-driven form.

```xml
<controlDescription forControl="{8f94f881-e78c-4171-9d0e-d3f2bf7fff20}">
  <customControl id="{E0DECE4B-6FC8-4A8F-A065-082708572369}">
    <parameters>
      <datafieldname>talxis_multiline</datafieldname>
    </parameters>
  </customControl>
  <customControl formFactor="0" name="talxis_TALXIS.PCF.Form">
    <parameters>
      <bindingField type="Multiple">talxis_multiline</bindingField>
      <ClientApiWebResourceName type="SingleLine.Text" static="true">myscripts.js</ClientApiWebResourceName>
      <ClientApiConfigFunctionName type="SingleLine.Text" static="true">onLoadPCFConfig</ClientApiConfigFunctionName>
      <ClientApiFormContextFunctionName type="SingleLine.Text" static="true">onLoadPCFFormContext</ClientApiFormContextFunctionName>
    </parameters>
  </customControl>
  <customControl formFactor="2" name="talxis_TALXIS.PCF.Form">
    <parameters>
      <bindingField type="Multiple">talxis_multiline</bindingField>
      <ClientApiWebResourceName type="SingleLine.Text" static="true">myscripts.js</ClientApiWebResourceName>
      <ClientApiConfigFunctionName type="SingleLine.Text" static="true">onLoadPCFConfig</ClientApiConfigFunctionName>
      <ClientApiFormContextFunctionName type="SingleLine.Text" static="true">onLoadPCFFormContext</ClientApiFormContextFunctionName>
    </parameters>
  </customControl>
  <customControl formFactor="1" name="talxis_TALXIS.PCF.Form">
    <parameters>
      <bindingField type="Multiple">talxis_multiline</bindingField>
      <ClientApiWebResourceName type="SingleLine.Text" static="true">myscripts.js</ClientApiWebResourceName>
      <ClientApiConfigFunctionName type="SingleLine.Text" static="true">onLoadPCFConfig</ClientApiConfigFunctionName>
      <ClientApiFormContextFunctionName type="SingleLine.Text" static="true">onLoadPCFFormContext</ClientApiFormContextFunctionName>
    </parameters>
  </customControl>
</controlDescription>
```

Then you need to register the `onload` handler in the form XML. That is what allows the form script to attach the save validation bridge.

```xml
<formLibraries>
  <Library name="myscripts.js" libraryUniqueId="{f2584005-b4b1-411c-bd7c-ca6b0b8ff196}" />
</formLibraries>
<events>
  <event name="onload" application="false" active="false">
    <Handlers>
      <Handler
        functionName="onLoadModelDrivenForm"
        libraryName="myscripts.js"
        handlerUniqueId="{de72ece7-0b87-493e-a90f-b2d74d908475}"
        enabled="true"
        parameters=""
        passExecutionContext="true" />
    </Handlers>
  </event>
</events>
```

This is the full wiring chain:

1. Form XML binds the Form PCF.
2. Form XML points the PCF to `onLoadPCFConfig` and `onLoadPCFFormContext`.
3. Form XML also registers `onLoadModelDrivenForm` on the form.
4. `onLoadModelDrivenForm` attaches the save interception logic.

### Step 2: Store the PCF Form Context

The PCF setup and inner workings are already covered by:

- [Form Control Overview](https://talxis.github.io/base-controls/?path=/docs/form-get-started--overview)

For the context bridge solution, the only part that matters here is exposing the embedded Form PCF `formContext` to the host form save handler.

```ts
public static PCFFormContext: Xrm.FormContext;
public static onLoadPCFFormContext(params: GetFormContextParams): void {
  // save PCF context to a place where it can be accessed from the main form's onsave script
  Main.PCFFormContext = params.formContext;
}
```

### Step 3: On main form load, register the `OnSave` handler and access the PCF form context

This is the context bridge itself. The main form `OnSave` handler prevents the default save, validates both the host form and the bound Form PCF, and only then continues with `formContext.data.save()`.

```ts
public static onLoadModelDrivenForm(executionContext: Xrm.Events.EventContext): void {
  const formContext: Xrm.FormContext = executionContext.getFormContext(); 
  formContext.data.entity.addOnSave(async (executionContext: Xrm.Events.SaveEventContext) => {
    executionContext.getEventArgs().preventDefault();
    const isPCFFormValid: boolean = Main.isPcfFormContextValid();
    const isValid: boolean = formContext.data.isValid();
    if (!isValid || !isPCFFormValid) {
      alert('Form is not valid. Save operation will be canceled.');
    }
    else {
      await formContext.data.save();
      await Main.savePCFData();
    }
  });
}

private static isPcfFormContextValid(): boolean {
  const PCFFormContext: Xrm.FormContext = Main.PCFFormContext;
  const textAttribute: Xrm.Attributes.Attribute = PCFFormContext.getAttribute('text');
  //replace setIsValid to always false with custom business logic
  textAttribute.setIsValid(false, 'NOT VALID');
  return PCFFormContext.data.isValid();
}

private static savePCFData(): boolean {
  const PCFFormContext: Xrm.FormContext = Main.PCFFormContext;
  //custom logic to save data from the PCF Form PCF
}
```

The important behavior here is:

- `executionContext.getEventArgs().preventDefault()` stops the original ribbon save
- `formContext.data.isValid()` checks the host model-driven form
- `isPcfFormContextValid()` checks the embedded Form PCF
- `formContext.data.save()` resumes save only after both validations pass

## When to use this approach

Use this pattern when:

- the Form PCF is embedded on a model-driven form
- users save through the standard ribbon Save button
- the embedded Form PCF contains required fields or business validation that must block the overall record save