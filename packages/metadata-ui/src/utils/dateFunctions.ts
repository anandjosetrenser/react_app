import Moment from 'moment'
import { extendMoment } from 'moment-range'

const moment = extendMoment(Moment as any)

export const convertStringToDateTime = (
  dateTime: string,
  format = 'MMM-DD-YYYY - HH:mm'
) => {
  if (dateTime === '') {
    return ''
  }
  const subString = new Date(
    `${dateTime.substring(0, 4)}-${dateTime.substring(
      4,
      6
    )}-${dateTime.substring(6, 8)} ${dateTime.substring(
      9,
      11
    )}:${dateTime.substring(11, 13)}:${dateTime.substring(13, 15)}`
  )
  let formatDate: string = ''
  formatDate = moment(subString).format(format)
  return formatDate
}

export const convertStringToDate = (date: string) => {
  if (date === '') {
    return null
  }
  const dDate = new Date(
    `${date.substring(0, 4)}-${date.substring(4, 6)}-${date.substring(6, 8)}`
  )
  return dDate
}

export const convertDateToString = (date: Date) => {
  return moment(date).format('YYYYMMDD')
}
