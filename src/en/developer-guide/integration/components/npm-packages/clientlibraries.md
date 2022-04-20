---
title: Client Libraries
tagline: Using Client Libraries in your Project
author: Adel Šabić
---

# **Client Libraries**

# Introduction

We've came to situation where we've implemented same code logic in multiple codes and projects. So we created Client Libraries npm package in order to centralize repeated code logic in one place.

If you want to use Client Libraries in your project, copy and run this command: 

``` 
npm i @talxis/client-libraries
```



# File Attribute

File Attribute class is designed to handle upload and download of the files from CDS. There are multiple was to do it and that is why we have mutiple sets of interfaces to handle each scenario. File attribute allows you to upload and download file both from our talxis_file entity and from your entity's custom file field. 

## **File**

Regardless of approach, you will need to provide file information via IFileContent interface.

### IFileContent
|**Name**|_Type_|Description|
|---|---|---|
|**name**|_string_| Name of the file.|
|**base64**|_string_| Base64 of the file content. |
|**path** _(optional)_|_string_| File path. |


## **File Upload**

#### **TALXIS Files (default)**
If you want to upload file to TALXIS File solution, you'll need to provide [file information](#file) and _(optionally)_ provide record ID where you want to save the file. If you don't provide record ID, new talxis_file record will be created and you will be provided file record ID.

### ITalxisFileConnection
|**Name**|_Type_|Description|
|---|---|---|
|**recordId**|_string_| Record ID where file will be saved. |


#### **Custom File Location**

If you want to upload file to your custom entity record, you'll need to provide [file information](#file) and connection information where you want to save the file.

In this approach there are two connection interfaces:

### 1. IExecutionContextConnection
|**Name**|_Type_|Description|
|---|---|---|
|**executionContext**|_Xrm.Events.EventContext or Xrm.FormContext_| Form's context.  |
|**fileAttribute**|_string_| Name of the file attribute where file will be saved. |

### 2. IFileAttributeConnection
|**Name**|_Type_|Description|
|---|---|---|
|**fileAttribute**|_string_| Name of the file attribute where file will be saved. |
|**entityName**|_string_| Name of the entity where file will be saved. |
|**recordId**|_string_| Record ID of record where file will be saved. |

### Syntax
```
fileAttribute.uploadFileToAttribute(file, connection)
```
### Return value

On Success it will return **record ID** and **Entity Type Name** in manner of Xrm.CreateResponse interface.

|**Name**|_Type_|Description|
|---|---|---|
|**id**|_string_| Record ID where file is stored.|
|**entityType**|_string_| Name of the entity which is containing uploaded file |

### Example

``` typescript
import { ITalxisFileConnection, FileAttribute, IFileContent } from '@talxis/client-libraries';

let fileAttribute: FileAttribute = new FileAttribute();
const file: IFileContent = {
    name: 'fileName',
    base64: fileBase64,
    path: 'TEST/PATH'
}
const connection: ITalxisFileConnection = {
    recordId: '00000000-0000-0000-0000-000000000000'
}
const result = await fileAttribute.uploadFileToAttribute(file, connection);
if(result){
    console.log("Record ID: ",result.id);
    console.log("Entity Type:", result.entityType);
}
```

## **File Download**

#### **TALXIS Files (default)**
If you want to download file from TALXIS File solution, you'll just need to provide record ID from where you want to get the file.

### ITalxisFileConnection
|**Name**|_Type_|Description|
|---|---|---|
|**recordId**|_string_| Record ID where file is located. |

#### **Custom File Location**

f you want to download file to your custom entity record, you'll need to provide connection information in same manner as uploading file.

There are two connection interfaces:

### 1. IExecutionContextConnection
|**Name**|_Type_|Description|
|---|---|---|
|**executionContext**|_Xrm.Events.EventContext or Xrm.FormContext_| Form's context.  |
|**fileAttribute**|_string_| Name of the file attribute where file will be saved. |

### 2. IFileAttributeConnection
|**Name**|_Type_|Description|
|---|---|---|
|**fileAttribute**|_string_| Name of the file attribute where file will be saved. |
|**entityName**|_string_| Name of the entity where file will be saved. |
|**recordId**|_string_| Record ID of record where file will be saved. |


### Syntax
```
fileAttribute.DownloadFileFromAttribute(connection)
```
### Return value

On Success it will automatically download file in browser.

### Example

``` typescript
import { ITalxisFileConnection, FileAttribute } from '@talxis/client-libraries';

let fileAttribute: FileAttribute = new FileAttribute();
const connection: ITalxisFileConnection = {
    recordId: '00000000-0000-0000-0000-000000000000'
}
const result = await fileAttribute.DownloadFileFromAttribute(connection);
```