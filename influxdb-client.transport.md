<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@influxdata/influxdb-client](./influxdb-client.md) &gt; [Transport](./influxdb-client.transport.md)

## Transport interface

Simpified platform-neutral transport layer for communication with InfluxDB.

<b>Signature:</b>

```typescript
export interface Transport 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [chunkCombiner](./influxdb-client.transport.chunkcombiner.md) | [ChunkCombiner](./influxdb-client.chunkcombiner.md) | Combines response chunks to create a single response object. |

## Methods

|  Method | Description |
|  --- | --- |
|  [request(path, body, options, responseStarted)](./influxdb-client.transport.request.md) | Sends data to the server and receives decoded result. The type of the result depends on response's content-type (deserialized json, text). |
|  [send(path, requestBody, options, callbacks)](./influxdb-client.transport.send.md) | Send data to the server and receive communication events via callbacks. |
