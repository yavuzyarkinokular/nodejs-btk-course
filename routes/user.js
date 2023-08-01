/* ---- Import ---   */

const path = require("path");
const express = require("express");
const router = express.Router();

/* ---- Import Bitiş ---   */

router.get("/", (req, res) => {
  res.render("index");
});

module.exports = router;
/*
Pug dosyası kullanmayı tercih ettiğimiz için render methodu kullanıyoruz
res.sendFile(path.join(__dirname, "../", "views", "index.html"));
*/
