<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@influxdata/influxdb-client-apis](./influxdb-client-apis.md) &gt; [StacksAPI](./influxdb-client-apis.stacksapi.md) &gt; [listStacks](./influxdb-client-apis.stacksapi.liststacks.md)

## StacksAPI.listStacks() method

List installed templates. See [https://docs.influxdata.com/influxdb/v2.1/api/\#operation/ListStacks](https://docs.influxdata.com/influxdb/v2.1/api/#operation/ListStacks)

<b>Signature:</b>

```typescript
listStacks(request: ListStacksRequest, requestOptions?: RequestOptions): Promise<{
        stacks?: Stack[];
    }>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  request | [ListStacksRequest](./influxdb-client-apis.liststacksrequest.md) | request parameters and body (if supported) |
|  requestOptions | [RequestOptions](./influxdb-client-apis.requestoptions.md) | <i>(Optional)</i> optional transport options |

<b>Returns:</b>

Promise&lt;{ stacks?: [Stack](./influxdb-client-apis.stack.md)<!-- -->\[\]; }&gt;

promise of response
