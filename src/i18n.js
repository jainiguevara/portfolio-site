import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
// import Backend from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    general: {
      'welcome': 'Welcome to React and react-i18next'
    }
  }
}

const defaultOptions = {
  resources,
  lng: 'en',
  fallbackLng: 'en',
  ns: ['general'],
  defaultNS: 'general',
  fallbackNS: 'general',
  nsSeparator: '::',
  keySeparator: '::',
}

i18n
  // .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init(defaultOptions)

export default i18n
