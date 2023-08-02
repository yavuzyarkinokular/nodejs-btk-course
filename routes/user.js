/* ---- Import ---   */

const path = require("path");
const express = require("express");
const router = express.Router();

/* ---- Import Bitiş ---   */

router.get("/", (req, res) => {
  const products = [
    {
      name: "iPhone 11",
      price: 50225,
      image: "1.jpeg",
      description: " Ekranı en büyük telefon ",
    },
    {
      name: "iPhone 12",
      price: 50225,
      image: "2.jpeg",
      description: " Ekranı en büyük telefon ",
    },
    {
      name: "iPhone 13",
      price: 50225,
      image: "3.jpeg",
      description: " Ekranı en büyük telefon ",
    },
    {
      name: "iPhone 14",
      price: 50225,
      image: "4.jpeg",
      description: " Ekranı en büyük telefon ",
    },
  ];
  res.render("index", { title: "Ana Sayfa", products: products });
});

module.exports = router;
/*
Pug dosyası kullanmayı tercih ettiğimiz için render methodu kullanıyoruz
res.sendFile(path.join(__dirname, "../", "views", "index.html"));
*/
