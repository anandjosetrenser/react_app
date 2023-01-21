import { I18n } from 'i18n-js'

import displayMessages from '../constants/displayMessages.json'

const i18n = new I18n()

i18n.translations = {
  en: displayMessages
}
/**
 * getDisplayMessage
 * @param key The i18n key.
 */
export default function getDisplayMessage(key: string) {
  const message: string = i18n.t(key)
  return message
}
