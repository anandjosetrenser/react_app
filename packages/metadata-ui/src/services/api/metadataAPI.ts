import ApiRequest from './apiRequest'
import BaseAPI from './baseAPI'
import BaseResponse from './baseResponse'
import { generateError } from './customErrorCheck'
import getUrl from './helper'

/**
 *  This API implements Metadata specific API handling logic
 */
class MetadataAPI extends BaseAPI {
  /**
   * This function will perform MetadataAPI specific custom error checks.
   *
   * @param response - MetadataAPI response
   * @returns
   */

  // eslint-disable-next-line class-methods-use-this
  statusCheck = async (response: BaseResponse): Promise<any> => {
    // TODO: Fix this dummy code
    if (response === undefined || response.StatusCode === undefined) {
      return await Promise.resolve(response)
    }

    return await Promise.reject(generateError(response.StatusCode))
  }

  /**
   * Generates a single API request
   *
   * @param endPoint API end point
   * @returns
   */
  request(endPoint: string): ApiRequest {
    return new ApiRequest(
      this.host.concat(endPoint),
      this.statusCheck
    ).setHeader(this.headers)
  }
}

const metadataAPI: MetadataAPI = new MetadataAPI(getUrl('dev'))

export default metadataAPI
