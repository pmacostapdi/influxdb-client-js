<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@influxdata/influxdb-client-apis](./influxdb-client-apis.md) &gt; [GeoCircleViewLayer](./influxdb-client-apis.geocircleviewlayer.md)

## GeoCircleViewLayer type

<b>Signature:</b>

```typescript
type GeoCircleViewLayer = GeoViewLayerProperties & {
    radiusField: string;
    radiusDimension: Axis;
    colorField: string;
    colorDimension: Axis;
    colors: DashboardColor[];
    radius?: number;
    interpolateColors?: boolean;
};
```
<b>References:</b> [GeoViewLayerProperties](./influxdb-client-apis.geoviewlayerproperties.md)<!-- -->, [Axis](./influxdb-client-apis.axis.md)<!-- -->, [DashboardColor](./influxdb-client-apis.dashboardcolor.md)
