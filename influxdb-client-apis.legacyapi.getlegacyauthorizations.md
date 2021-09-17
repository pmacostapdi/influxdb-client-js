<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@influxdata/influxdb-client-apis](./influxdb-client-apis.md) &gt; [LegacyAPI](./influxdb-client-apis.legacyapi.md) &gt; [getLegacyAuthorizations](./influxdb-client-apis.legacyapi.getlegacyauthorizations.md)

## LegacyAPI.getLegacyAuthorizations() method

List all legacy authorizations. See [https://v2.docs.influxdata.com/v2.0/api/\#operation/GetLegacyAuthorizations](https://v2.docs.influxdata.com/v2.0/api/#operation/GetLegacyAuthorizations)

<b>Signature:</b>

```typescript
getLegacyAuthorizations(request?: GetLegacyAuthorizationsRequest, requestOptions?: RequestOptions): Promise<Authorizations>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  request | [GetLegacyAuthorizationsRequest](./influxdb-client-apis.getlegacyauthorizationsrequest.md) | request parameters and body (if supported) |
|  requestOptions | [RequestOptions](./influxdb-client-apis.requestoptions.md) | optional transport options |

<b>Returns:</b>

Promise&lt;[Authorizations](./influxdb-client-apis.authorizations.md)<!-- -->&gt;

promise of response
