<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@influxdata/influxdb-client](./influxdb-client.md) &gt; [AnnotatedCSVResponse](./influxdb-client.annotatedcsvresponse.md) &gt; [iterateRows](./influxdb-client.annotatedcsvresponse.iteraterows.md)

## AnnotatedCSVResponse.iterateRows() method

IterateRows returns iterable of response table rows suitable for `for-await` loop consumption.

<b>Signature:</b>

```typescript
iterateRows(): AsyncIterable<Row>;
```
<b>Returns:</b>

AsyncIterable&lt;[Row](./influxdb-client.row.md)<!-- -->&gt;

iterable of rows
