<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@influxdata/influxdb-client-apis](./influxdb-client-apis.md) &gt; [RemotesAPI](./influxdb-client-apis.remotesapi.md) &gt; [patchRemoteConnectionByID](./influxdb-client-apis.remotesapi.patchremoteconnectionbyid.md)

## RemotesAPI.patchRemoteConnectionByID() method

Update a remote connection. See [https://docs.influxdata.com/influxdb/v2.1/api/\#operation/PatchRemoteConnectionByID](https://docs.influxdata.com/influxdb/v2.1/api/#operation/PatchRemoteConnectionByID)

<b>Signature:</b>

```typescript
patchRemoteConnectionByID(request: PatchRemoteConnectionByIDRequest, requestOptions?: RequestOptions): Promise<RemoteConnection>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  request | [PatchRemoteConnectionByIDRequest](./influxdb-client-apis.patchremoteconnectionbyidrequest.md) | request parameters and body (if supported) |
|  requestOptions | [RequestOptions](./influxdb-client-apis.requestoptions.md) | <i>(Optional)</i> optional transport options |

<b>Returns:</b>

Promise&lt;[RemoteConnection](./influxdb-client-apis.remoteconnection.md)<!-- -->&gt;

promise of response
