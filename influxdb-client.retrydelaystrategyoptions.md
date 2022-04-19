<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@influxdata/influxdb-client](./influxdb-client.md) &gt; [RetryDelayStrategyOptions](./influxdb-client.retrydelaystrategyoptions.md)

## RetryDelayStrategyOptions interface

Options that configure strategy for retrying failed requests.

<b>Signature:</b>

```typescript
export interface RetryDelayStrategyOptions 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [exponentialBase](./influxdb-client.retrydelaystrategyoptions.exponentialbase.md) | number | base for the exponential retry delay |
|  [maxRetryDelay](./influxdb-client.retrydelaystrategyoptions.maxretrydelay.md) | number | maximum delay when retrying write (milliseconds) |
|  [minRetryDelay](./influxdb-client.retrydelaystrategyoptions.minretrydelay.md) | number | minimum delay when retrying write (milliseconds) |
|  [randomRetry](./influxdb-client.retrydelaystrategyoptions.randomretry.md) | boolean | randomRetry indicates whether the next retry delay is deterministic (false) or random (true). The deterministic delay starts with <code>minRetryDelay * exponentialBase</code> and it is multiplied by <code>exponentialBase</code> until it exceeds <code>maxRetryDelay</code>. When random is <code>true</code>, the next delay is computed as a random number between next retry attempt (upper) and the lower number in the deterministic sequence. <code>random(retryJitter)</code> is added to every returned value. |
|  [retryJitter](./influxdb-client.retrydelaystrategyoptions.retryjitter.md) | number | add <code>random(retryJitter)</code> milliseconds delay when retrying HTTP calls |
