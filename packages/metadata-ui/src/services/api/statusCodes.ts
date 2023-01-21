import getDisplayMessage from '../../i18n/displayMessage'

export enum StatusCodes {
  SUCCESS = 0,
  NETWORK_FAILED = 12001
}

/**
 * Returns platform specific error message.
 *
 * @param code Custom error code
 * @returns error message
 */
export function mapErrorCodeToErrorMessage(code: number): string {
  switch (code) {
    case StatusCodes.SUCCESS:
      return getDisplayMessage('errors.noErrors')
    default:
      break
  }
  return getDisplayMessage('errors.unknownError')
}

export default StatusCodes
