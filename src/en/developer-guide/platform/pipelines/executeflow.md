---
title: Automated Cloud Flow Execution
tagline: Setting up a pipeline to trigger Power Automate Cloud Flow
author: Zdeněk Šrejber
---

# **The set up**
## The goal
Upon pipeline step we want to execute Power Automate Cloud Flow. In the originating task, the flow is executed after import of solutions is completed and calls our custom connectors, then it notifies selected person whether the connectors work or need attention.

## The problem 
There is no official support, but we are able to use http call to trigger workflow execution. Since the Power Automate Cloud Flow are using the same entity it can be done. The difference between workflows and modern flows is that older workflow need to have an entity and record. We do not need it for modern flows, but it needs to be accounted for when triggering modern flow.

## The solution
Solution is to have the http call to a Power Automate Cloud Flow which uses Dataverse connector and dummy record. Flow will be triggered by a function in INT0014-Platform
```C#
HttpResponseMessage ExecuteWorkflow(CrmServiceClient crmServiceClient, Guid WorkflowId, Guid RecordId)
```
- crmServiceClient is a client to connect to.
- WorkflowId is a guid of workflow.
- RecordId is a guid of dummy record.

## The sample use in project
First, we need to create a dummy record in datapackage, such as example below. We use 'talxis_asyncjobprocessingstep' entity, but feel free to use any you deem appropriate.
``` XML
<entity name="talxis_asyncjobprocessingstep" displayname="Async Job Processing Step">
    <records>
      <record id="926d86ab-1dc1-4cde-98a5-0492acaedfaf">
        <field name="talxis_asyncjobprocessingstepid" value="926d86ab-1dc1-4cde-98a5-0492acaedfaf" />
        <field name="talxis_name" value="mpg_executeworkflow" />
        <field name="talxis_handlertype" value="742070000" />
        <field name="talxis_handlerid" value="1a5d6e08-18fe-4332-abc5-de8680f065c4" />
      </record>
    </records>
    <m2mrelationships />
  </entity>
```
Now, to the flow, you will need to use 'When a row is added, modified or deleted' trigger, select entity of your record and filter it by name of your record, so it is not triggered when not required.
![image.png](/.attachments/Flow_Trigger.png)

We are using HTTP request to execute workflow in provided Environment.
``` C#
private static void ExecuteWorkflowAfterImport(CrmServiceClient crmServiceClient)
    {
      Guid WorkflowId = Guid.Parse("0b7d85b4-3697-45b6-8c97-1a89904da78f");
      Guid RecordId = Guid.Parse("3a1e4f74-96ec-454b-b1c9-94c97d0e4708");
      HttpResponseMessage response = Configuration.ExecuteWorkflow(crmServiceClient, WorkflowId, RecordId);
    }
```

## Limitations
Currently, we have observed that any provided flow is executed multiple times on some environments. This seems not to affect all environment and we were unable to find the difference and find the root cause.

## Alternative 
Based on the use of dummy record you could use update record action instead of http request, however it is likely you will observe similar limitation as mentioned above.