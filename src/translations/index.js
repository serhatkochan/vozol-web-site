import i18n from 'i18next';

import {trMessages} from './tr.js';
import {enMessages} from './en.js';

import {getLanguage} from "src/helpers/systemConfigHelper.js";

const language = getLanguage();

i18n.init({
  resources: {
    en: {translations: {...enMessages}},
    tr: {translations: {...trMessages}}
  },
  lng: language,
  fallbackLng: language,
  debug: false,
  ns: ['translations'],
  defaultNS: 'translations',
  keySeparator: false,
  interpolation: {
    escapeValue: false
  },
  react: {
    wait: true
  }
});

export default i18n;
