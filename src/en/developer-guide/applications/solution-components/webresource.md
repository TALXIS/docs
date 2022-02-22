---
author: David Wasserbauer
---

# Web Resource


## Including dependencies 
This is not very complicated thing, but it is really easy to forget one of the pieces so it can give you some "hard to debug" problems.

These are the steps that need to be taken:
### **Setting up CodeToBeCalled**

**tsconfig.json**
Add `"declaration": true` so prefix_codetobecalled.d.ts can be generated which you will reference later

```json
{
  "compileOnSave": true,
  "compilerOptions": {
    "outDir": "build",
    "outFile": "build/prefix_codetobecalled.js",
    "target": "es6",
    "sourceMap": true,
    "moduleResolution": "Node",
    "module": "AMD",
    "declaration": true
  }
}
```

### **Setting up CallingCode**
IMPORTANT !
Be carefull with backing operators `..\..\`

- Include project reference to .csproj file of your project that contains your script
```xml
 <ItemGroup>
  	<ProjectReference Include="..\..\Bootstrap\Features.CodeToBeReferenced\Bootstrap.Features.CodeToBeReferenced.csproj" />
  </ItemGroup>
```

- Add reference on top of your script
```xml
/// <reference path="../../../../../Environment/Bootstrap/Features.CodeToBeReferenced/TS/build/prefix_codetobereferenced.d.ts" />
```

- Type in full namespace and name of the method you want to call
```typescript
TALXIS.Environment.Bootstrap.Features.CodeToBeReferenced.Main.methodToBeCalled()
```



### 
___

### 
___

### 
___


### 
___

 
### 
___