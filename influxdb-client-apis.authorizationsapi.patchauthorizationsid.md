<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@influxdata/influxdb-client-apis](./influxdb-client-apis.md) &gt; [AuthorizationsAPI](./influxdb-client-apis.authorizationsapi.md) &gt; [patchAuthorizationsID](./influxdb-client-apis.authorizationsapi.patchauthorizationsid.md)

## AuthorizationsAPI.patchAuthorizationsID() method

Update an authorization to be active or inactive. See [https://v2.docs.influxdata.com/v2.0/api/\#operation/PatchAuthorizationsID](https://v2.docs.influxdata.com/v2.0/api/#operation/PatchAuthorizationsID)

<b>Signature:</b>

```typescript
patchAuthorizationsID(request: PatchAuthorizationsIDRequest, requestOptions?: RequestOptions): Promise<Authorization>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  request | [PatchAuthorizationsIDRequest](./influxdb-client-apis.patchauthorizationsidrequest.md) | request parameters and body (if supported) |
|  requestOptions | [RequestOptions](./influxdb-client-apis.requestoptions.md) | optional transport options |

<b>Returns:</b>

Promise&lt;[Authorization](./influxdb-client-apis.authorization.md)<!-- -->&gt;

promise of response
