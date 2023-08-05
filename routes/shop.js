/* ---- Import ---   */

const path = require("path");
const express = require("express");
const router = express.Router();
/* ---- Controllers ---- */
const shopController = require("../controllers/shop");
/* ---- Controllers Bitiş --- */

/* ---- Import Bitiş ---   */

router.get("/", shopController.getIndex);
router.get("/products", shopController.getProduct);
router.get("/details", shopController.getProductDetails);
router.get("/cart", shopController.getCart);
router.get("/orders", shopController.getOrders);

module.exports = router;
/*
Pug dosyası kullanmayı tercih ettiğimiz için render methodu kullanıyoruz
res.sendFile(path.join(__dirname, "../", "views", "index.html"));
*/
