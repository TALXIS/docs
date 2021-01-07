---
author: Tomas Prokop
---

# Record Operations
Usually when you work with Flows, Workflows and Activities you need to do few extra things when manipulating records because some actions are not natively supported by the platform. This is a reason why we created the Record Operations utility feature.

## Exposed APIs
You can consume this feature using:

### Code Activities in the workflow engine - workflows and actions

#### Create a record from relationship mapping
This activity can be used to create new records using attribute maps from EntityMap.xml definitions where you can define which values should be copied over from the original record.
![List of Record Operations Code Activities](/.attachments/Screen%20Shot%202021-01-07%20at%2010.43.23%20PM.png)

![List of Record Operations Code Activities](/.attachments/Screen%20Shot%202021-01-07%20at%2010.31.16%20PM.png)

![Example of Create Record From Mapping Code Activity](/.attachments/Screen%20Shot%202021-01-07%20at%2010.38.48%20PM.png)

It implements [InitializeFromRequest](https://docs.microsoft.com/en-us/dotnet/api/microsoft.crm.sdk.messages.initializefromrequest)


### Some of the Code Activities are exposed as Unbound Actions
These can be accessed via the Organization OData API endpoint (integration/JavaScript extensions), executed by plugin or called by Dataverse (current environment connector).




