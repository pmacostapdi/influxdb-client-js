<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@influxdata/influxdb-client-apis](./influxdb-client-apis.md) &gt; [BackupAPI](./influxdb-client-apis.backupapi.md) &gt; [getBackupMetadata](./influxdb-client-apis.backupapi.getbackupmetadata.md)

## BackupAPI.getBackupMetadata() method

Download snapshot of all metadata in the server. See [https://docs.influxdata.com/influxdb/v2.3/api/\#operation/GetBackupMetadata](https://docs.influxdata.com/influxdb/v2.3/api/#operation/GetBackupMetadata)

<b>Signature:</b>

```typescript
getBackupMetadata(request?: GetBackupMetadataRequest, requestOptions?: RequestOptions): Promise<MetadataBackup>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  request | GetBackupMetadataRequest | <i>(Optional)</i> request parameters and body (if supported) |
|  requestOptions | RequestOptions | <i>(Optional)</i> optional transport options |

<b>Returns:</b>

Promise&lt;MetadataBackup&gt;

promise of response
