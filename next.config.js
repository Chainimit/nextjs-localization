const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });

module.exports = {
  publicRuntimeConfig: {
    locizeProjectId: process.env.LOCIZE_PROJECT_ID,
    locizeApiKey: process.env.LOCIZE_API_KEY,
    locizeVersion: process.env.LOCIZE_VERSION
  }
};
