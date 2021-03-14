---
author: David Wasserbauer
---

# Business Rules

Business Rule is type of process. This process applies on Forms so because of that you have to put the definition in presentation layer. 

## CONVENTIONS:

### **Code placement**
There are 2 files. One with .xaml file type and second with .xaml.data.xml file type. 
Both of them have to be stored in same folder:

…\CDS\Workflows\
___

### **.xaml file** 
.xaml file contains definition of the Business Rule. You should never edit it unless you are complete sure what you are doing. Edits there can cause some serious damage of the process and it probably won´t work.

___

### **.xaml.data.xml file**

#### **Business Rule definition reference**

`<XamlFileName>` parameter references the defition of the Business Rule so it has to match with file name. Make sure that the folder above is mentioned too.


**Example:** 

```xml
<XamlFileName>/Workflows/talxis_setdefaultbuildingtype-55FCF017-0983-EA11-A813-000D3AB54878.xaml</XamlFileName>
```
---

#### **StateCode and StatusCode**
StateCode and StatusCode are parameters that define if the Business Rule is Turn On or Off.

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
