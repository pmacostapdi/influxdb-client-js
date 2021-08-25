import {InfluxDB} from '@influxdata/influxdb-client'
import {APIBase, RequestOptions} from '../APIBase'

export interface GetPingRequest {}
/**
 * Ping API
 */
export class PingAPI {
  // internal
  private base: APIBase

  /**
   * Creates PingAPI
   * @param influxDB - an instance that knows how to communicate with InfluxDB server
   */
  constructor(influxDB: InfluxDB) {
    this.base = new APIBase(influxDB)
  }
  /**
   * Checks the status of InfluxDB instance and version of InfluxDB.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/GetPing }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getPing(
    request?: GetPingRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request('GET', `/ping`, request, requestOptions)
  }
}
