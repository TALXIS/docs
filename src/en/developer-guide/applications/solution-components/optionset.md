---
author: David Wasserbauer
---

# Option Set
Option Sets or by new MS naming "Choices" are sets of options used in specific fields.

## CONVENTIONS:

### **Code placement**
Option sets are used by Option set fields so they have to be in MODEL layer. The are stored in **OptionSets** folder:

…\CDS\OptionSets\
___

### **Naming**
There is a naming convention we use to make it clear on the first sight that this component is option set. 

Pattern: {publisher prefix}_{name}{typecode}

**Examples:**

TALXIS: `talxis_contracttypecode`

PCT (HBR): `hbr_desktypecode`
___

### **Option value**
Options are represented as Option values with label descriptions. This option has to be unique but just in that option set.

We use values of 9 numbers and first 5 number are publisher same as publisher prefix. 

**Examples:**
TALXIS: (publisher prefix = 74207)
```xml
<optionset Name="talxis_documenttypecode" localizedName="Document Type" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<OptionSetType>picklist</OptionSetType>
	<IsGlobal>1</IsGlobal>
	<IntroducedVersion>1.0.0.0</IntroducedVersion>
	<IsCustomizable>1</IsCustomizable>
	<displaynames>
		<displayname description="Typ dokumentu" languagecode="1029" />
		<displayname description="Document Type" languagecode="1033" />
	</displaynames>
	<Descriptions>
		<Description description="" languagecode="1029" />
		<Description description="" languagecode="1033" />
	</Descriptions>
	<options>
		<option value="742070000">
			<labels>
				<label description="Originální smlouva" languagecode="1029" />
				<label description="Original Contract" languagecode="1033" />
			</labels>
		</option>
		<option value="742070001">
			<labels>
				<label description="Dodatek" languagecode="1029" />
				<label description="Amendment" languagecode="1033" />
			</labels>
		</option>
		<option value="742070002">
			<labels>
				<label description="Příloha" languagecode="1029" />
				<label description="Annex" languagecode="1033" />
			</labels>
		</option>
	</options>
</optionset>
```

PCT (PLC): (publisher prefix = 86142)
```xml
<optionset Name="plc_opportunitytypecode" localizedName="Opportunity Type" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <OptionSetType>picklist</OptionSetType>
  <IsGlobal>1</IsGlobal>
  <IntroducedVersion>1.0.0.0</IntroducedVersion>
  <IsCustomizable>1</IsCustomizable>
  <displaynames>
    <displayname description="Opportunity Type" languagecode="1033" />
  </displaynames>
  <Descriptions>
    <Description description="" languagecode="1033" />
  </Descriptions>
  <options>
    <option value="861420000">
      <labels>
        <label description="Office Leasing" languagecode="1033" />
      </labels>
    </option>
    <option value="861420001">
      <labels>
        <label description="HubHub" languagecode="1033" />
      </labels>
    </option>
    <option value="861420002">
      <labels>
        <label description="Qubes" languagecode="1033" />
      </labels>
    </option>
  </options>
</optionset>
```

___

