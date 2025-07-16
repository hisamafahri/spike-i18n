import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-locize-backend";

const locizeOptions = {
  referenceLng: "en",
  version: "latest",
  projectId: "48779521-78db-4602-9700-90b3be67f87b",
};

i18next
  .use(Backend)
  .use(initReactI18next)
  .init({
    ns: "index",
    lng: "en",
    debug: true,
    fallbackLng: "en",
    supportedLngs: ["en", "ja"],
    backend: locizeOptions,
  });

export default i18next;
