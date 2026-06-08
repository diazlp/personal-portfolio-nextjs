import enTranslation from './locales/en/en_US.json'
import idTranslation from './locales/id/id_ID.json'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: enTranslation,
  },
  id: {
    translation: idTranslation,
  },
}

export const availableLanguages = Object.keys(resources)

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  supportedLngs: ['en', 'id'],
  interpolation: {
    escapeValue: false,
  },
  debug: false,
})

export default i18n
