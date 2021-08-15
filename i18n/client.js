import LanguageDetector from "i18next-browser-languagedetector";
import LocizeBackend from "i18next-locize-backend";
import NextI18Next from "next-i18next";
import getConfig from "next/config";
import { initReactI18next } from "react-i18next";

const { publicRuntimeConfig } = getConfig();
const { locizeProjectId, locizeApiKey, locizeVersion } = publicRuntimeConfig;

export default new NextI18Next({
  use: [LocizeBackend, LanguageDetector, initReactI18next],
  defaultLanguage: "en",
  fallbackLng: "en",
  otherLanguages: ["fr"],
  saveMissing: true,
  keySeparator: "####",
  backend: {
    projectId: locizeProjectId,
    apiKey: locizeApiKey,
    version: locizeVersion || "latest",
    referenceLng: "en",
    allowedAddOrUpdateHosts: ["localhost", "49qfr.sse.codesandbox.io"]
  },
  detection: {
    order: ["cookie", "localStorage"],
    lookupCookie: "next-i18next",
    lookupLocalStorage: "i18nextLng",
    caches: ["cookie", "localStorage"]
  },
  react: {
    bindI18n: "languageChanged editorSaved",
    useSuspense: false
  }
});
