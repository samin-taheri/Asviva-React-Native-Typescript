import i18n, {changeLanguage, use} from 'i18next';
import {initReactI18next} from 'react-i18next';

import en from './languages/en';
import de from './languages/de';

const initLocale = async (langauge = 'en') => {
  const resources = {
    de: {
      translation: de,
    },
    en: {
      translation: en,
    },
  };

  use(initReactI18next)
    .init({
      compatibilityJSON: 'v3',
      resources,
      fallbackLng: 'en',
      react: {useSuspense: false},
      initImmediate: false,
      interpolation: {
        escapeValue: false,
      },
    })
    .then(async () => {
      await changeLanguage(langauge);
    });
};

export {i18n, initLocale};
