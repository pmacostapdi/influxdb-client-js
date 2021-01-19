<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@influxdata/influxdb-client-apis](./influxdb-client-apis.md) &gt; [DashboardsAPI](./influxdb-client-apis.dashboardsapi.md) &gt; [postDashboardsIDLabels](./influxdb-client-apis.dashboardsapi.postdashboardsidlabels.md)

## DashboardsAPI.postDashboardsIDLabels() method

Add a label to a dashboard. See [https://v2.docs.influxdata.com/v2.0/api/\#operation/PostDashboardsIDLabels](https://v2.docs.influxdata.com/v2.0/api/#operation/PostDashboardsIDLabels)

<b>Signature:</b>

```typescript
postDashboardsIDLabels(request: PostDashboardsIDLabelsRequest, requestOptions?: RequestOptions): Promise<LabelResponse>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  request | [PostDashboardsIDLabelsRequest](./influxdb-client-apis.postdashboardsidlabelsrequest.md) | request parameters and body (if supported) |
|  requestOptions | [RequestOptions](./influxdb-client-apis.requestoptions.md) | optional transport options |

<b>Returns:</b>

Promise&lt;[LabelResponse](./influxdb-client-apis.labelresponse.md)<!-- -->&gt;

promise of response
