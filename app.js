const express = require("express");
const morgan = require("morgan");

const loaders = require("./loaders");

const { port, rapidAPIKey } = require("./config");

const app = express();

app.use(morgan("dev"));

loaders(app);

app.use(express.json());

const axios = require("axios").default;
const qs = require("qs");

const options = {
  method: "POST",
  url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "accept-encoding": "application/gzip",
    "x-rapidapi-host": "google-translate1.p.rapidapi.com",
    "x-rapidapi-key": rapidAPIKey,
  },
};

const TARGET = "ar";
const SOURCE = "en";

const History = require("./models/history");

app.get("/", async (req, res) => {
  const text = req.query.text || "";
  let textTo = "";

  if (text) {
    options.data = qs.stringify({ q: text, target: TARGET, source: SOURCE });
    const { data } = await axios.request(options);
    textTo = data.data.translations[0].translatedText;

    const newEntry = await new History({
      languageFrom: SOURCE,
      languageTo: TARGET,
      textFrom: text,
      textTo,
    });
    await newEntry.save();
  }

  const history = await History.find().sort({ date: -1 });
  res.render("index", { from: text, to: textTo, history });
});

app.use("/history", require("./api/history/history.routes"));

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
