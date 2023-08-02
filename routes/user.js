/* ---- Import ---   */

const path = require("path");
const express = require("express");
const router = express.Router();
const admin = require("./admin.js");

/* ---- Import Bitiş ---   */

router.get("/", (req, res) => {
  res.render("index", { title: "Ana Sayfa", products: admin.products });
});

module.exports = router;
/*
Pug dosyası kullanmayı tercih ettiğimiz için render methodu kullanıyoruz
res.sendFile(path.join(__dirname, "../", "views", "index.html"));
*/
