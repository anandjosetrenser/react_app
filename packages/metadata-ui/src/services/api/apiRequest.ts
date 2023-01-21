/* eslint-disable class-methods-use-this */
import BaseResponse from './baseResponse'
import CustomErrorCheck, { networkError } from './customErrorCheck'
import { StatusCodes } from './statusCodes'

export default class ApiRequest {
  // Base URL
  baseUrl: string

  // Header
  header: {} | undefined

  // POST request message body
  requestMessage: {} | undefined

  // Query params
  queryParams: Record<string, string | number | boolean> | undefined

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  performErrorCheck?: (arg0: BaseResponse) => Promise<any>

  // Used when only error check needed is HTTP status code check. In such case,
  // Just resolve the promise using API response.
  successReturn = async (arg0: BaseResponse): Promise<any> =>
    await Promise.resolve(arg0)

  constructor(
    url: string,
    customErrorCheck?: (arg0: BaseResponse) => any | undefined
  ) {
    this.baseUrl = url
    if (customErrorCheck !== undefined) {
      this.performErrorCheck = customErrorCheck
    } else {
      this.performErrorCheck = this.successReturn
    }
  }

  /**
   * HTTP header setter
   *
   * @param header header obj.s
   * @returns API req.
   */
  setHeader(header: {} | undefined): ApiRequest {
    this.header = header
    return this
  }

  /**
   * HTTP header setter
   *
   * @param key header key
   * @param value header value
   * @returns
   */
  addHeader(key: string, value: string): ApiRequest {
    this.header = { ...this.header, ...{ [key]: value } }
    return this
  }

  /**
   * Sets Post body fields
   *
   * @param key
   * @param value
   * @returns
   */
  addParam(key: string, value: string | number): ApiRequest {
    this.requestMessage = { ...this.requestMessage, ...{ [key]: value } }
    return this
  }

  /**
   * Sets Post body
   *
   * @param key
   * @param value
   * @returns
   */
  addParamObject(key: string, value: any): ApiRequest {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    this.requestMessage = { ...this.requestMessage, ...{ [key]: value } }
    return this
  }

  /**
   * Sets entire query objs
   *
   * @param param
   * @returns
   */
  setQueryParam(param: {} | undefined): ApiRequest {
    this.queryParams = param
    return this
  }

  /**
   * Adds query param
   *
   * @param key
   * @param value
   * @returns
   */
  addQueryParameter(key: string, value: string): ApiRequest {
    this.queryParams = { ...this.queryParams, ...{ [key]: value } }
    return this
  }

  /**
   * Perform HTTP code validation
   *
   * @param response
   * @returns
   */
  checkStatus = async (response: Response): Promise<Response> => {
    // this.logResponse(response);

    if (response.status >= 200 && response.status < 300) {
      return await Promise.resolve(response)
    }

    return await Promise.reject(networkError(response.status))
  }

  /**
   * Gets JSON payload
   *
   * @param response
   * @returns
   */
  getPayload = async (response: Response) => await response.json()

  /**
   * Makes GET request
   * @returns
   */
  async get(): Promise<any> {
    // this.logRequest();

    return await fetch(
      this.baseUrl + ApiRequest.jsonToQueryString(this.queryParams),
      {
        method: 'GET',
        headers: this.header
      }
    )
      .then(this.checkStatus)
      .then(this.getPayload)
      .then(this.performErrorCheck)
      .then(async any => await Promise.resolve(any))
      .catch(async (error: CustomErrorCheck) => {
        if (error.message === 'Failed to fetch') {
          const err = networkError(StatusCodes.NETWORK_FAILED)
          return await Promise.reject(err)
        }
        return await Promise.reject(error)
      })
  }

  /**
   * Makes POST request
   * @returns
   */
  async post(): Promise<any> {
    const body = this.requestMessage

    return await fetch(this.baseUrl, {
      method: 'POST',
      headers: this.header,
      body: JSON.stringify(body)
    })
      .then(this.checkStatus)
      .then(this.getPayload)
      .then(this.performErrorCheck)
      .then(async any => await Promise.resolve(any))
      .catch(async (error: CustomErrorCheck) => {
        if (error.message === 'Failed to fetch') {
          const err = networkError(StatusCodes.NETWORK_FAILED)
          return await Promise.reject(err)
        }
        return await Promise.reject(error)
      })
  }

  /**
   * JSON to query string
   * @param json
   * @returns
   */
  static jsonToQueryString(
    json: Record<string, string | number | boolean> | undefined
  ): string {
    if (json === undefined) {
      return ''
    }

    return `?${Object.keys(json)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(json[key])}`)
      .join('&')}`
  }
}
