<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@influxdata/influxdb-client](./influxdb-client.md) &gt; [Point](./influxdb-client.point.md)

## Point class

Point defines values of a single measurement.

<b>Signature:</b>

```typescript
export declare class Point 
```

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(measurementName)](./influxdb-client.point._constructor_.md) |  | Create a new Point with specified a measurement name. |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [fields](./influxdb-client.point.fields.md) |  | { \[key: string\]: string; } | escaped field values |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [booleanField(name, value)](./influxdb-client.point.booleanfield.md) |  | Adds a boolean field. |
|  [floatField(name, value)](./influxdb-client.point.floatfield.md) |  | Adds a number field. |
|  [intField(name, value)](./influxdb-client.point.intfield.md) |  | Adds an integer field. |
|  [measurement(name)](./influxdb-client.point.measurement.md) |  | Sets point's measurement. |
|  [stringField(name, value)](./influxdb-client.point.stringfield.md) |  | Adds a string field. |
|  [tag(name, value)](./influxdb-client.point.tag.md) |  | Adds a tag. The caller has to ensure that both name and value are not empty and do not end with backslash. |
|  [timestamp(value)](./influxdb-client.point.timestamp.md) |  | Sets point timestamp. Timestamp can be specified as a Date (preferred), number, string or an undefined value. An undefined value instructs to assign a local timestamp using the client's clock. An empty string can be used to let the server assign the timestamp. A number value represents time as a count of time units since epoch, the exact time unit then depends on the [precision](./influxdb-client.influxdb.getwriteapi.md) of the API that writes the point.<!-- -->Beware that the current time in nanoseconds can't precisely fit into a JS number, which can hold at most 2^53 integer number. Nanosecond precision numbers are thus supplied as a (base-10) string. An application can also use ES2020 BigInt to represent nanoseconds, BigInt's <code>toString()</code> returns the required high-precision string.<!-- -->Note that InfluxDB requires the timestamp to fit into int64 data type. |
|  [toLineProtocol(settings)](./influxdb-client.point.tolineprotocol.md) |  | Creates an InfluxDB protocol line out of this instance. |
|  [toString()](./influxdb-client.point.tostring.md) |  |  |
|  [uintField(name, value)](./influxdb-client.point.uintfield.md) |  | Adds an unsigned integer field. |
