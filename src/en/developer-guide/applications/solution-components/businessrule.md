---
author: David Wasserbauer
---

# Business Rules

Business Rule is type of process. This process applies on Forms so because of that you have to put the definition in presentation layer.

MS Docs: [Create a Business Rule](https://docs.microsoft.com/en-us/powerapps/maker/data-platform/data-platform-create-business-rule)

## Conventions

### **Code placement**
There are 2 files where the definition of a business rule is stored. One with **.xaml** file type and second with **.xaml.data.xml** file type. 

Both of them have to be stored in same folder:

…\CDS\Workflows\
___

### **.xaml file** 
.xaml file contains logic of the business rule. You should never edit it unless you are complete sure what you are doing. Edits there can cause some serious damage of the process and it probably will not work.

___

### **.xaml.data.xml file**
This file defines the behavior of the business rule such as if it is turn on or which forms, entities it affects.

#### **Business Rule Definition Reference**

`<XamlFileName>` parameter references the defition of the business rule so it has to match with file name. Make sure that the folder above (Workflows) is mentioned too.


**Example:** 

```xml
<XamlFileName>/Workflows/talxis_setdefaultbuildingtype-55FCF017-0983-EA11-A813-000D3AB54878.xaml</XamlFileName>
```
---

#### **StateCode and StatusCode**
`StateCode` and `StatusCode` are parameters that define if the business rule is Turn On or Off.

**ON:**
```xml
<StateCode>1</StateCode>
<StatusCode>2</StatusCode>
```

**OFF:**
```xml
<StateCode>0</StateCode>
<StatusCode>1</StatusCode>
```

*You should use first option if you specifically do not want to switch some Business Rule Off.
___
