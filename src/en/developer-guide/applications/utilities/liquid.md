---
title: Liquid
tagline: A series of custom tags and filters for use in Liquid templates, usable throughout our components
author: Matěj Samler
---

## Description

Liquid templating language can be used to map data from source to a different format. Go to [Liquid documentation](https://shopify.github.io/liquid/) for full documentation.

Bellow, we have multiple custom tags and filters we have created for easier work with Dataverse data. You can use these across our various components, such as Record Creation Rules, Power Automate connector, etc.

## General Tags

### JSON

Use this tag to parse a string into json and work with its properties.

**Syntax:**

```liquid
{% json <source> %}
    <path>
{% endjson %}
```

**Example:**

Data:

```json
{ 
  "input": "{'name': {'first': 'John', 'last':'Smith'}}" 
}
```

Map:

```liquid
My first name is {% json input %} name.first {% endjson %}
```

Output:

```text
My first name is John
```

## CDS Tags

### CDSLookup

Use this tag to lookup a record URL based on a json of filters. The input is a logical name of the entity to search, the output is a record URL of the first found record.

**Syntax:**

```liquid
{% cdslookup <logicalName> %} 
    <filterJson> 
{% endcdslookup %}
```

**Example:**

Data:

```json
{ 
   "Surname" : "Smith" 
}
```

Map:

```liquid
URL is {% cdslookup contact %} {'lastname' : '{{ Surname }}'} {% endcdslookup %}
```

Output:

```text
URL is https://placeholder.crm4.dynamics.com/main.aspx?etn=contact&id=5caf3e4f-3737-4a88-8664-7d93d16ab2fc
```

### CDSOptionSetLocalizedLabel

Use this tag to translate a value of option set to human readable string.

**Syntax:**

```liquid
{% cdsoptionsetlocalizedlabel <entityLogicalName>,<fieldName>,<languageCode> %}
    <optionSetValue>
{% endcdsoptionsetlocalizedlabel %}
```

**Example:**

Data:

```json
{ "AccountType" : 820001 }
```

Map:

```liquid
Account type is {% cdsoptionsetlocalizedlabel account,type,1033 %}{{ AccountType }}{% endcdsoptionsetlocalizedlabel %}
```

Output:

```text
Account type is Vendor
```

### CDSGetFieldValue

Use this tag to get a value of a field (or multiple) on an record. We are using CDSTypeConverter, so it should return readable input in all cases. We are returning recordUrl if the field is a lookup.

**Syntax:**

```liquid
{% cdsgetfieldvalue <commaSeparatedFieldNames> %}
    <recordURL>
{% endcdsgetfieldvalue %}
```

**Example:**

Data:

```json
{ "RecordURL" : "https://placeholder.crm4.dynamics.com/main.aspx?etn=contact&id=5caf3e4f-3737-4a88-8664-7d93d16ab2fc"}
```

Map:

```liquid
Contact surname is {% cdsgetfieldvalue lastname %}{{ RecordURL }}{% endcdsgetfieldvalue %}
```

Output:

```text
Contact surname is Smith
```

**Note:**
This tag returns multiple values, but they are not separated in any way. It should be used to fetch a single value.

### CDSIdToRecordUrl

Transforms logical name and id into a redirectable record url.

**Syntax:**

```liquid
{% cdsidtorecordurl <logicalName> %}
    <recordId>
{% endcdsidtorecordurl %}
```

**Example:**

Data:

```json
{ "RecordId" : "5caf3e4f-3737-4a88-8664-7d93d16ab2fc"}
```

Map:

```liquid
URL is {% cdsidtorecordurl contact %}{{ RecordId }}{% endcdsidtorecordurl %}
```

Output:

```text
URL is https://placeholder.crm4.dynamics.com/main.aspx?etn=contact&id=5caf3e4f-3737-4a88-8664-7d93d16ab2fc&pagetype=entityrecord
```
