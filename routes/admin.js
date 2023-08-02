/* ---- Import ---   */

const path = require("path");
const express = require("express");
const router = express.Router();

/* ---- Products ---- */
const products = [
  {
    name: "iPhone 11",
    price: "50225",
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
/* ---- Products Bitiş ----  */

/* ---- Import  Bitiş ---   */

/* ---- router.get ---   */

router.get("/add-product", (req, res, next) => {
  res.render("add-product", { title: "Add a New Product" });
});

/* ---- router.get bitiş ---   */

/* ---- router.post ---   */

router.post("/add-product", (req, res) => {
  products.push({
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
    description: req.body.description,
  });
  res.redirect("/"); // işlem bitince kullanıcıyı istediğimiz dizine yönlendirmeye yarar
});

/* ---- router.post bitiş ---   */
exports.routes = router;
exports.products = products;

/* 
            ------- NOTLAR -------
  - Router eklediğimiz için app methodunu kullanmamıza gerek kalmıyorz. 
  - router.post yerine app.use da kullanılabilir ama router.post js diline methodumuzun ismini vermeye yarar.
  - .send işlev olarak hem yazma işlemi olan .write 'ı yapar hemde .end işlemini yapar.Tek seferde 2 işlem birden yapılmış olur. 
  - router.post ile yukarıda yaptığımız işlem aslında kullanıcıyı işlem tamamlandıktan sonra ana sayfaya yönlendirme işlemidir.
  - req.body diyerek formda kullanıcının girdiği değeri yakalayıp log ile console 'a yazdırmış oluyoruz.
            ------- NOTLAR -------

*/
