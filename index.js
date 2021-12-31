const express = require("express");
const fs = require("fs");
const path = require("path");
const url = require("url");
const querystring = require("querystring");
const app = express();
const port = 5000;
var rawdata = fs.readFileSync(path.resolve(__dirname, "nouns.json"));
var nouns = JSON.parse(rawdata);
var rawdata1 = fs.readFileSync(path.resolve(__dirname, "adjectives.json"));
var adjectives = JSON.parse(rawdata1);
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname }); //server responds by sending the index.html file to the client's browser
});
app.get("/username", (req, res) => {
  // read file nouns.json and pick a random word
  let hy;
  hy = req.query.hyphenate;
  let cap;
  cap = req.query.capitalise;

  let randomNoun =
    nouns["words"][Math.floor(Math.random() * nouns["words"].length)];
  if (cap == "true") {
    randomNoun = randomNoun.charAt(0).toUpperCase() + randomNoun.slice(1);
  }

  let randomadj =
    adjectives["words"][Math.floor(Math.random() * adjectives["words"].length)];
  if (cap == "true") {
    randomadj = randomadj.charAt(0).toUpperCase() + randomadj.slice(1);
  }
  if (hy == "true") {
    res.send(randomadj + "-" + randomNoun);
  } else {
    res.send(randomadj + randomNoun);
  }
});
app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
