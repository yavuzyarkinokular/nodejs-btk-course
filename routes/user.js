/* ---- Import ---   */

const path = require("path");
const express = require("express");
const router = express.Router();
const admin = require("./admin.js");
/* ---- Controllers ---- */
const productsController = require("../controllers/products");
/* ---- Controllers Bitiş --- */

/* ---- Import Bitiş ---   */

router.get("/", productsController.getProducts);

module.exports = router;
/*
Pug dosyası kullanmayı tercih ettiğimiz için render methodu kullanıyoruz
res.sendFile(path.join(__dirname, "../", "views", "index.html"));
*/
