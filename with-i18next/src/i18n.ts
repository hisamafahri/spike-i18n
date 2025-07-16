import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/config";
import ja from "./locales/ja/config";

i18next.use(initReactI18next).init({
  lng: "en",
  debug: true,
  resources: {
    en: {
      translation: en,
    },
    ja: {
      translation: ja,
    },
  },
});

const resources = {
  translation: en,
} as const;

export default resources;
