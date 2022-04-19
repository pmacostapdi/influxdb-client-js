<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@influxdata/influxdb-client](./influxdb-client.md) &gt; [Point](./influxdb-client.point.md) &gt; [tag](./influxdb-client.point.tag.md)

## Point.tag() method

Adds a tag. The caller has to ensure that both name and value are not empty and do not end with backslash.

<b>Signature:</b>

```typescript
tag(name: string, value: string): Point;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  name | string | tag name |
|  value | string | tag value |

<b>Returns:</b>

[Point](./influxdb-client.point.md)

this
