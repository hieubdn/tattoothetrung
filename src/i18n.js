import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './locales/en/translation.json';
import translationVI from './locales/vi/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      vi: { translation: translationVI },
      en: { translation: translationEN }
    },
    fallbackLng: 'vi', // Tiếng Việt là mặc định
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
