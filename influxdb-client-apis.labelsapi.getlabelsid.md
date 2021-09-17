<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@influxdata/influxdb-client-apis](./influxdb-client-apis.md) &gt; [LabelsAPI](./influxdb-client-apis.labelsapi.md) &gt; [getLabelsID](./influxdb-client-apis.labelsapi.getlabelsid.md)

## LabelsAPI.getLabelsID() method

Retrieve a label. See [https://v2.docs.influxdata.com/v2.0/api/\#operation/GetLabelsID](https://v2.docs.influxdata.com/v2.0/api/#operation/GetLabelsID)

<b>Signature:</b>

```typescript
getLabelsID(request: GetLabelsIDRequest, requestOptions?: RequestOptions): Promise<LabelResponse>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  request | [GetLabelsIDRequest](./influxdb-client-apis.getlabelsidrequest.md) | request parameters and body (if supported) |
|  requestOptions | [RequestOptions](./influxdb-client-apis.requestoptions.md) | optional transport options |

<b>Returns:</b>

Promise&lt;[LabelResponse](./influxdb-client-apis.labelresponse.md)<!-- -->&gt;

promise of response
