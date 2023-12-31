import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import zh from './zh.json';
import hi from './hi.json';

const resources = {
  en: {
    translation: en,
  },
  zh: {
    translation: zh,
  },
  hi: {
    translation: hi,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'hi',
  fallbackLng: 'en',
  compatibilityJSON: 'v3',
  interpolation: {
    escapeValue: false,
  },
});
