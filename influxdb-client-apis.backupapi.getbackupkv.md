<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@influxdata/influxdb-client-apis](./influxdb-client-apis.md) &gt; [BackupAPI](./influxdb-client-apis.backupapi.md) &gt; [getBackupKV](./influxdb-client-apis.backupapi.getbackupkv.md)

## BackupAPI.getBackupKV() method

Download snapshot of metadata stored in the server's embedded KV store. Should not be used in versions greater than 2.1.x, as it doesn't include metadata stored in embedded SQL. See [https://docs.influxdata.com/influxdb/v2.3/api/\#operation/GetBackupKV](https://docs.influxdata.com/influxdb/v2.3/api/#operation/GetBackupKV)

<b>Signature:</b>

```typescript
getBackupKV(request?: GetBackupKVRequest, requestOptions?: RequestOptions): Promise<string>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  request | GetBackupKVRequest | <i>(Optional)</i> request parameters and body (if supported) |
|  requestOptions | RequestOptions | <i>(Optional)</i> optional transport options |

<b>Returns:</b>

Promise&lt;string&gt;

promise of response
