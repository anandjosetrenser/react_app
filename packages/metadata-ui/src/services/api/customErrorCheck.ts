import { mapErrorCodeToErrorMessage } from './statusCodes'
import getDisplayMessage from '../../i18n/displayMessage'

/**
 *  Error class to handle errors based on backend response.
 */
class CustomErrorCheck {
  errorCode: number

  message: string

  constructor(errorCode: number, msg: string = '') {
    this.errorCode = errorCode
    this.message = msg
  }
}

/**
 * Generates custom error.
 *
 * @param code error code
 * @param errorMessage backend specific error message.
 * @returns
 */
export function generateError(
  code: number,
  errorMessage?: string
): CustomErrorCheck {
  return new CustomErrorCheck(
    code,
    errorMessage == null ? mapErrorCodeToErrorMessage(code) : errorMessage
  )
}

/**
 * Generate generic error  in case HTTP error.
 *
 * @param code error code
 * @returns
 */
export function networkError(code: number): CustomErrorCheck {
  return new CustomErrorCheck(
    code,
    `${getDisplayMessage('errors.unknownError')}`
  )
}

export default CustomErrorCheck
