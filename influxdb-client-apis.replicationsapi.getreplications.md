<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@influxdata/influxdb-client-apis](./influxdb-client-apis.md) &gt; [ReplicationsAPI](./influxdb-client-apis.replicationsapi.md) &gt; [getReplications](./influxdb-client-apis.replicationsapi.getreplications.md)

## ReplicationsAPI.getReplications() method

List all replications. See [https://docs.influxdata.com/influxdb/v2.1/api/\#operation/GetReplications](https://docs.influxdata.com/influxdb/v2.1/api/#operation/GetReplications)

<b>Signature:</b>

```typescript
getReplications(request: GetReplicationsRequest, requestOptions?: RequestOptions): Promise<Replications>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  request | [GetReplicationsRequest](./influxdb-client-apis.getreplicationsrequest.md) | request parameters and body (if supported) |
|  requestOptions | [RequestOptions](./influxdb-client-apis.requestoptions.md) | <i>(Optional)</i> optional transport options |

<b>Returns:</b>

Promise&lt;[Replications](./influxdb-client-apis.replications.md)<!-- -->&gt;

promise of response
