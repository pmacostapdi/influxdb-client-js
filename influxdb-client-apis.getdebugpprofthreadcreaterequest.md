<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@influxdata/influxdb-client-apis](./influxdb-client-apis.md) &gt; [GetDebugPprofThreadCreateRequest](./influxdb-client-apis.getdebugpprofthreadcreaterequest.md)

## GetDebugPprofThreadCreateRequest interface

<b>Signature:</b>

```typescript
export interface GetDebugPprofThreadCreateRequest 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [debug?](./influxdb-client-apis.getdebugpprofthreadcreaterequest.debug.md) | number | <i>(Optional)</i> - <code>0</code>: (Default) Return the report as a gzip-compressed protocol buffer. - <code>1</code>: Return a response body with the report formatted as human-readable text. The report contains comments that translate addresses to function names and line numbers for debugging.<code>debug=1</code> is mutually exclusive with the <code>seconds</code> query parameter. |
|  [seconds?](./influxdb-client-apis.getdebugpprofthreadcreaterequest.seconds.md) | string | <i>(Optional)</i> Number of seconds to collect statistics.<code>seconds</code> is mutually exclusive with <code>debug=1</code>. |
