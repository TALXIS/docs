---
title: Api Request Rate Limit
tagline: The ApiRequestRateLimit plugin restricts the number of requests a user or process can execute within a defined time window.
author: Safija Hubljar
---

## Introduction

The **ApiRequestRateLimit** plugin is designed to enforce request throttling in Dataverse by controlling how many operations can be performed within a specified sliding time window.  
This helps to prevent abuse, protect overall system performance, and ensure reliable operation of both **Power Apps** and **Portal** scenarios.

Instead of allowing unlimited requests, the plugin logs each attempt and validates whether the number of requests exceeds the configured threshold. If the limit is reached, an exception is thrown.

#### Basic Concepts
- **Request Threshold** – maximum number of allowed requests within a defined time window.  
- **Sliding Window** – duration in seconds used to count requests.  
- **Partition Key** – combination of User, SDK Message, and Entity used to group requests.  
- **Execution Log** – record stored in `talxis_executionlog` entity representing a single request.  
- **Compatibility** – works with both **Power Apps** and **Portal**.  

## Entities
### Execution Log (talxis_executionlog)

The plugin creates a log entry for each request to track request frequency.

| Display Name    | Logical Name         | Description                                                                 |
|-----------------|----------------------|-----------------------------------------------------------------------------|
| Execution Log   | talxis_executionlog  | Represents a single request execution recorded for rate limit evaluation.   |
| Partition Id    | partitionid          | A unique identifier.                    |
| TTL in Seconds  | ttlinseconds         | Defines how long the log entry remains valid (default: 86400 seconds).      |
| Created On      | createdon            | Timestamp of when the log entry was created.                                |

## Technical Specifications

- **Class name**: `ApiRequestRateLimit`  
- **Base class**: `PluginBase`  
- **Configuration**: JSON passed as unsecure configuration string  

```json
  {
    "requestTreshold": 100,
    "slidingWindow": 3600
  }
```

* `requestTreshold`: Maximum number of allowed requests.

* `slidingWindow`: Duration of time window in seconds.

* **Default log TTL**: 86,400 seconds (24 hours).

* **Supported Scenarios**: Power Apps, Portal.

#### How it works

1. Identifies the current user or record owner.
2.  Build a unique partition key: `accessPrincipalId/userId;sdkMessageName;boundEntityLogicalName` 
3. Queries `talxis_executionlog` for records within the sliding window.
4. If the request count >= threshold, a new log is created and an exception is thrown.
5. Otherwise, a new log entry is created and execution continues.

### Example Exception

If the threshold is exceeded, the following error is raised:

```json
Too many requests
```

## Warning

Improper setup may result in blocking valid operations. For example, bulk data imports or automated workflows may be unintentionally restricted if the limits are too low. Always validate the configuration in a sandbox environment before enabling the plugin in production.

## Setup Guide

To enable this plugin:

1. Deploy the plugin assembly to your Dataverse environment.
2. Register the `ApiRequestRateLimit` step on the relevant SDK messages (`Create`, `Update`, `Delete`, or custom actions).
3. Provide an **unsecure configuration** string in JSON format defining threshold and sliding window.

Example configuration string:

```json
{
  "requestTreshold": 3,
  "slidingWindow": 60
}
```

This configuration allows up to 3 requests per user/message/entity within a 1-minute window.

## Planned Improvements (v2)

The following improvements are planned for version 2:

1. **Metadata caching in static variable**
   Store request metadata in memory on the plugin execution node to reduce database calls. Requires reliability testing.

2. **Split logging into a separate plugin**
   Move the execution log creation into an asynchronous post-operation plugin, reducing user wait time. Some inaccuracy in request counting may occur.

3. **Portal backend integration**
   Shift request limiting logic into the portal backend layer, preventing excessive requests before they reach Dataverse.
