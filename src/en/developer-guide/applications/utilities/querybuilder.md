---
title: Query Builder
tagline: How to use TALXIS Query Builder
author: Zdeněk Šrejber
---

# What is TALXIS Query Builder
TALXIS Query Builder allow to create, store and generate FetchXML filter query.

## Why
TALXIS Query Builder was develop for use with FetchXML interceptors in TALXIS Portal solution. Interceptor is a tool which alows us to intercept and modify requests containing FetchXML query. However, possible applications might be far bigger. Historically, we already had other cases where we needed to build filter query for FetchXML, such as generating excel document based on critieria provided by attributes set inside of dialog.

## Where to find it
TALXIS Query Builder can be found in the namespace
```TypeScript
TALXIS.Utility.Apps.Start.QueryBuilder
```

## Capabilities
As you might not be able to reference Query builder from PCT project and other repositories, let take a look at interfaces and enums, which should help you undersatnd what can you do and how to use it. The interface was created with .NET implementation in mind and we tried to make it as similar as possible.

### Interfaces 
These should help you build up Filter and conditions according to the need. You always start by initializing Filter object, in the constructor you can define conditiona and link entity conditions, or you can add them later on. In case you want to do nested filter, you need to definite it in constructor, adding them later on is not supported as of now.

``` TypeScript
  export interface IFilter {
    filterOperator : LogicalOperator;
    conditionArray?: ICondition[];
    linkEntityConditionArray?: ILinkEntityCondition[];
    childFilters?: IFilter[];
    getFilter(filterStyle: "OData" | "FetchXML"); //Odata is not yet supported
    addCondition(attribute: string, filterOperator: ConditionOperator, value?: number | string | string[]);
    addLinkEntityCondition(entityName: string, from: string, to: string, joinOperator: JoinOperator, filter: IFilter)
  }
  export interface ICondition {
    attribute: string;
    conditionOperator: ConditionOperator;
    value: number | string | string[] | null;
  }
  export interface ILinkEntityCondition {
    entityName: string;
    from: string;
    to: string;
    joinOperator: JoinOperator;
    filter: IFilter;
  }
```

### Operators, there are three operator which you will use. 
You can either use numerical values or `enum.stringvalue`. Enum are used to define filter-type, link-type and condition in the fetchXML

``` TypeScript
  export enum LogicalOperator {
    "and" = 0,
    "or" = 1
  }

  export enum JoinOperator {
    "inner" = 0,
    "leftOuter" = 1,
    "natural" = 2,
    "matchFirstRowUsingCrossApply" = 3,
    "in" = 4,
    "exists" = 5,
    "any" = 6,
    "notAny" = 7,
    "all" = 8,
    "notAll" = 9
  }

   export enum ConditionOperator {
    "eq" = 0,
    "ne" = 1,
    "neq", //does not have matching counterpart
    "gt" = 2,
    "lt" = 3,
    "ge" = 4,
    "le" = 5,
    "null" = 12,
    "not-null" = 13,
    "in" = 8,
    "not-in" = 9,
    "between" = 10,
    "not-between" = 11,
    "like" = 6,
    "not-like" = 7,
    "yesterday" = 14,
    "today" = 15,
    "tomorrow" = 16,
    "next-seven-days" = 18,
    "last-seven-days" = 17,
    "next-week" = 21,
    "this-week" = 43,
    "last-week" = 19,
    "this-month" = 23,
    "last-month" = 22,
    "next-month" = 24,
    "on" = 25,
    "on-or-before" = 26,
    "on-or-after" = 27,
    "this-year" = 29,
    "last-year" = 28,
    "next-year" = 30,
    "eq-userid" = 41,
    "ne-userid" = 42,
    "eq-businessid" = 43,
    "ne-businessid" = 44,
    "last-x-days" = 33,
    "next-x-days" = 34,
    "last-x-weeks" = 35,
    "next-x-weeks" = 36,
    "last-x-months" = 37,
    "next-x-months" = 38,
    "last-x-years" = 40,
    "next-x-years" = 39,
    "eq-userlanguage" = 51,
    "eq-userteams" = 73,
    "in-fiscal-year" = 68,
    "in-fiscal-period" = 63,
    "in-fiscal-period-and-year" = 70,
    "in-or-after-fiscal-period-and-year" = 72,
    "in-or-before-fiscal-period-and-year" = 71,
    "last-fiscal-year" = 62,
    "this-fiscal-year" = 58,
    "next-fiscal-year" = 60,
    "last-x-fiscal-years" = 64,
    "next-x-fiscal-years" = 66,
    "last-fiscal-period" = 61,
    "this-fiscal-period" = 58,
    "next-fiscal-period" = 60,
    "last-x-fiscal-periods" = 65,
    "next-x-fiscal-periods" = 67
  }
```

## Sample use
Unless you work in INT0006 you will be forced to use ts-ignore. So, lets get it over with in first few rows and get all the stuff we need from TALXIS.
```TypeScript
    //importing QueryBuilder from TALXIS
    //@ts-ignore - INTOOO6 TALXIS 
    var filter = TALXIS.Utility.Apps.Start.QueryBuilder.Filter;
    //@ts-ignore - INTOOO6 TALXIS
    var logicalOperator = TALXIS.Utility.Apps.Start.QueryBuilder.LogicalOperator;
    //@ts-ignore - INTOOO6 TALXIS
    var conditionOperator = TALXIS.Utility.Apps.Start.QueryBuilder.ConditionOperator;
    //@ts-ignore - INTOOO6 TALXIS 
    var joinOperator = TALXIS.Utility.Apps.Start.QueryBuilder.JoinOperator;
```
With that done we can initializou our Filter with a condition.
```TypeScript
let sampleEntityFilterQuery = new filter(logicalOperator.and, [{
        attribute: "prefix_attibutename",
        conditionOperator: conditionOperator.eq,
        value: "123"
     }])
```
Now, lets add link entity condition.
```TypeScript
if (321 > 123) {
        sampleEntityFilterQuery.addLinkEntityCondition(
            "prefix_entity", //entity name
            "prefix_attributeid", //from attribute
            "prefix_attributeid", //to attribute
            joinOperator.inner, // link type
            //filter
            new filter(logicalOperator.and, [{ attribute: "prefix_attibutename2", conditionOperator: conditionOperator.eq, value: "321" }]));
      }
```
And lastly, lets get the fetchXML filter string.
```Typescript
const result: string = sampleEntityFilterQuery.getFilter("FetchXML")
```
Which will produce following string without the formatting.
```XML
    <filter type="and">
        <condition attribute="prefix_attibutename" operator="eq" value="123" />
    </filter>
    <link-entity name="prefix_entity" from="prefix_attributeid" to="prefix_attributeid" link-type="inner">
        <attribute name="accountid" />
        <filter type="or" >
              <condition attribute="prefix_attibutename2" operator="eq" value="321" />
        </filter>
    </link-entity>
```
Afterwards you can insert this into existing fetchXML using comment `<!--$sample$-->` in the fetch defintion and replace function, or you can wrap produced query inside of a new fetchXML.

## TODO/Suggestions
- Implement method to add nested filter to already existing Filters
- Implement translation to OData
- Implemented creation of complete FetchXML definiton, not just filter
