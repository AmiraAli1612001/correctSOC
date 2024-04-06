import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ar from "./languages/ar.json";
import en from "./languages/en.json";
import LanguageDetector from "i18next-browser-languagedetector";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    detection: {
      order: ["htmlTag", "localStorage"],
      caches: ["localStorage"],
    },

    lng: window.localStorage.getItem("i18nextLng"),
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
