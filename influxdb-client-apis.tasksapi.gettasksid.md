<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@influxdata/influxdb-client-apis](./influxdb-client-apis.md) &gt; [TasksAPI](./influxdb-client-apis.tasksapi.md) &gt; [getTasksID](./influxdb-client-apis.tasksapi.gettasksid.md)

## TasksAPI.getTasksID() method

Retrieve a task. See [https://docs.influxdata.com/influxdb/v2.1/api/\#operation/GetTasksID](https://docs.influxdata.com/influxdb/v2.1/api/#operation/GetTasksID)

<b>Signature:</b>

```typescript
getTasksID(request: GetTasksIDRequest, requestOptions?: RequestOptions): Promise<Task>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  request | [GetTasksIDRequest](./influxdb-client-apis.gettasksidrequest.md) | request parameters and body (if supported) |
|  requestOptions | [RequestOptions](./influxdb-client-apis.requestoptions.md) | <i>(Optional)</i> optional transport options |

<b>Returns:</b>

Promise&lt;[Task](./influxdb-client-apis.task.md)<!-- -->&gt;

promise of response
