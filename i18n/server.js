const NodeLocizeBackend = require("i18next-node-locize-backend");
const NextI18Next = require("next-i18next").default;

const {
  LOCIZE_PROJECT_ID: locizeProjectId,
  LOCIZE_API_KEY: locizeApiKey,
  LOCIZE_VERSION: locizeVersion
} = process.env;

module.exports = new NextI18Next({
  use: [NodeLocizeBackend],
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
  }
});
