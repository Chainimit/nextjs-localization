const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const express = require("express");
const next = require("next");
const nextI18NextMiddleware = require("next-i18next/middleware").default;
const i18next = require("../i18n/server");

const nextApp = next({ dev: true });
const handle = nextApp.getRequestHandler();

nextApp
  .prepare()
  .then(async () => {
    const app = express();

    await i18next.initPromise;
    app.use(nextI18NextMiddleware(i18next));

    app.get("/", (req, res) => {
      const backendSentence = req.i18n.t(
        "This sentence is translated on the backend. Refresh to see me change."
      );
      nextApp.render(req, res, "/index", { backendSentence });
    });

    app.get("*", (req, res) => {
      handle(req, res);
    });

    app.listen(8080, () => {
      console.log("Server listening on port 8080.");
    });
  })
  .catch(err => {
    console.error("Server crashed:");
    console.error(err);
  });

module.exports = nextApp;
