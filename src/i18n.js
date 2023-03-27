import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import Backend from 'i18next-xhr-backend'
import LanguageDetector from "i18next-browser-languagedetector";
import { DateTime } from "luxon";

const yearsExpJs = DateTime.local().minus({ years: 2016 }).toFormat("y");

// the translations
// 🚧🚧🚧  -- move them in a JSON file and import them)
const resources = {
  en: {
    branding: {
      title: "JAINI GUEVARA",
      title2: "USING",
      "single-page": "Front-End Developer",
      intro: `He is Jaini, a developer since 2007. He's been developing applications in Javascript for the last ${yearsExpJs} years.`,
      contact: "Talk to me in the following channels below:"
    },
    contact: {
      upwork: "Hire in UpWork"
    },
    skills: {
      frontend: "FRONT-END",
      frontendInfo:
        "I use the following technologies to develop single-page applications with responsive UI/UX:",
      backend: "BACK-END & DB",
      backendInfo: "I use these technologies for DB and back-end development:"
    },
    timeline: {
      1987: "I am Jaini Guevara, In 1987, I was born and raised in Tondo, Manila, Philippines. 🇵🇭 I`m a full stack developer.",
      2007: "I started developing my very first dynamic web site for our college thesis; I was a IT networking major. NOT programming.😎",
      2008: "It was around March that our web site was categorized as best thesis! 🥇 Earned my BS-Information Technology diploma few weeks later.👨🏽‍🎓 I became a web developer a few months after graduation.",
      2009: "I got my second job as a Jr. Engineer in Resorts World Manila; Doing both functional support and developer.👷🏽‍👨🏽‍💻",
      2011: "Two years later, I got my first ever promotion! 🏆 From a Jr. Engineer to Supervisor. I am now a team lead, support and developer.👨🏽‍💼👷🏽‍👨🏽‍💻",
      2013: "Again, Two years later, I got promoted from Supervisor to Assistant Manager. Leading a team of seven developers.🏆🏆",
      2014: "I got my new job as a Manager in City of Dreams Manila. Leading a team of six developers. We are one of the pioneers during property setup.👨🏽‍💼👷🏽‍👨🏽‍💻",
      2015: "My third promotion! I was up by one rank from Manager to Sr. Manager.🏆🏆🏆",
      2017: "I became Assistant Vice President for Casino Portfolio in Star Cruises. 😱🛳",
      2018: "One of my biggest career challenge; I risked & quit working as a corporate employee and decided to work remotely. 😵",
      2019: "I bravely decided to quit working as corporate employee and start on my own as a full stack developer. 👨🏽‍💻",
      2020: "Due to unforseen circumstances, I went back to the corporate world to continue my career as a full stack developer. 🙂",
      Goal:
        "To be one of the best full stack developer while doing what I love; Surfing. 👑🥇🏆👨🏽‍💻🏄🏽‍"
    }
  },
  ph: {
    general: {
      welcome: "Nandito kayo sa React and react-i18next"
    }
  }
};

const defaultOptions = {
  resources,
  lng: "en",
  fallbackLng: "en",
  ns: ["general"],
  defaultNS: "general",
  fallbackNS: "general",
  nsSeparator: "::",
  keySeparator: "::"
};

i18n
  // .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init(defaultOptions);

export default i18n;
