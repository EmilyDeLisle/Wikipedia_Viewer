const express = require("express");
const app = express();
const fs = require("fs");
const { JSDOM } = require('jsdom');
const PORT = process.env.PORT || 5000

app.use("/assets", express.static("assets"));

app.get("/", function (req, res) {
  let doc = fs.readFileSync("index.html");
  let dom = new JSDOM(doc);
  res.send(dom.serialize());
});

app.listen(PORT, function() {
  console.log("App listening on port " + PORT);
});