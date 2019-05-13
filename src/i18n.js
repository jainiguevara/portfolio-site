import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
// import Backend from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { DateTime } from 'luxon'

const yearsExpJs = DateTime.local().minus({ years: 2016 }).toFormat('y')

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    branding: {
      'title': 'I DEVELOP FULL STACK',
      'title2': 'USING',
      'single-page': 'Single-Page Applications',
      'intro': `Hello! I'm Jaini Guevara, I have been a full stack developer since 2007. For the last ${yearsExpJs} years I have been using React.js for front-end and Node.js as back-end.`,
      'contact': 'Talk to me in the following channels below:'
    },
    contact: {
      'upwork': 'Hire me on UpWork',
    },
    skills: {
      frontend: 'FRONT-END',
      frontendInfo: 'I use the following technologies to develop single-page applications with responsive UI/UX:',
      backend: 'BACK-END',
      backendInfo: 'I use the following technologies to develop single-page applications with responsive UI/UX:',
    }
  },
  ph: {
    general: {
      'welcome': 'Nandito kayo sa React and react-i18next'
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
