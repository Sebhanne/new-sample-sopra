const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8000;

express()
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .get("/", (req, res) => res.render("index"))
  .get("/bransjer", (req, res) => res.render("../bransjer"))
  .get("/tema", (req, res) => res.render("../tema"))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
