<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@influxdata/influxdb-client-apis](./influxdb-client-apis.md) &gt; [FlagsAPI](./influxdb-client-apis.flagsapi.md) &gt; [getFlags](./influxdb-client-apis.flagsapi.getflags.md)

## FlagsAPI.getFlags() method

Return the feature flags for the currently authenticated user. See [https://docs.influxdata.com/influxdb/v2.1/api/\#operation/GetFlags](https://docs.influxdata.com/influxdb/v2.1/api/#operation/GetFlags)

<b>Signature:</b>

```typescript
getFlags(request?: GetFlagsRequest, requestOptions?: RequestOptions): Promise<Flags>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  request | [GetFlagsRequest](./influxdb-client-apis.getflagsrequest.md) | <i>(Optional)</i> request parameters and body (if supported) |
|  requestOptions | [RequestOptions](./influxdb-client-apis.requestoptions.md) | <i>(Optional)</i> optional transport options |

<b>Returns:</b>

Promise&lt;[Flags](./influxdb-client-apis.flags.md)<!-- -->&gt;

promise of response
