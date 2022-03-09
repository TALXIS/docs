---
Author: Matěj Samler
---

# Mock Api

When trying to develop PCFs, you can use the very usefull developer environment to test your controls locally. This will enable you to see how your control renders based on different input values. 

This works quite well until your control needs to get or send data to Dataverse, because you will be hit with the following messages:  
![Not yet supported alert](/.attachments/applications/Controls/notyetsupported.jpg)

![Not yet supported console error](/.attachments/applications/Controls/notyetsupportedconsole.jpg)

Luckily, you can use our very own Mock Web api that can redirect your webapi requests to a real environment.

## Usage
- Include the reference to mock api files, like this:
```ts
import { MockWebApi } from "../../shared/MockApi";
```
The framework is part of the shared folder and shoudl be available to every PCF in INT00015   

- Create an instance of mockapi in the class, similarly as you would create the local copy of ```_context```
```ts
private _mockApi: MockWebApi;
```

- Initialize the MockWebApi in the constructor of the control, like this:
```ts
this._mockApi = new MockWebApi("https://xxxx.crm4.dynamics.com","GUID");
```
The first parameter is for the url of the environment you want to connect to. The GUID parameter is the client id of the app you will use to authenticate against the environment. 

This app needs to have the ```user_impersonation``` permission against Dataverse. You can use my own personal app with the id of ```4880a9e8-fd3c-4b89-9966-dc59b1e09984``` which was created for this purpose.  
**Remember to add it to your environment as an app user!**

- Overwrite the webapi in the context received in both init and updateView methods, so that it looks something like this: 
```ts
		this._context = context;
		this._context.webAPI = this._mockApi;
```

**REMEMBER - DO IT IN updateView AS WELL**

On update, new context is received, so we need to overwrite it again.

- Lastly, when you start the developer environment with ```npm start```, don't use the URL http://127.0.0.1:8181/, but go to http://localhost:8181/

This is because the app has a localhost redirect URL. In here, you should log in with your account, consent the app and it should make the requests on your behalf.

Mock api can also be used without parameters. This will create an in memory Dataverse like database, that you can send CRUD operations into. It also supports odata filter against that database to test if it works. For development purposes however, it is better to connect to an existing environment.

## Limitations
So far, the webapi can Create, Delete, Update, retrieve and retrieve multiple. As of now, we don't support execute of actions or functions. It's also only replacement for the webapi, so you still cannot use Utilities, such as 
```ts
this._context.utils.getEntityMetadata(this._context.page.entityTypeName)).EntitySetName
``` 
but the webapi supports a ```getMetadata()``` call, which could return setname if you realy need it.