/* ---- Import ---   */

const path = require("path");
const express = require("express");
const router = express.Router();

/* ---- Import  Bitiş ---   */

/* ---- router.get ---   */

router.get("/add-product", (req, res, next) => {
  res.render("add-product", { title: "Add a New Product" });
});

/* ---- router.get bitiş ---   */

/* ---- router.post ---   */

router.post("/add-product", (req, res) => {
  console.log(req.body); // açıklaması aşağıda
  res.redirect("/"); // işlem bitince kullanıcıyı istediğimiz dizine yönlendirmeye yarar
});

/* ---- router.post bitiş ---   */

module.exports = router;

/* 
            ------- NOTLAR -------
  - Router eklediğimiz için app methodunu kullanmamıza gerek kalmıyorz. 
  - router.post yerine app.use da kullanılabilir ama router.post js diline methodumuzun ismini vermeye yarar.
  - .send işlev olarak hem yazma işlemi olan .write 'ı yapar hemde .end işlemini yapar.Tek seferde 2 işlem birden yapılmış olur. 
  - router.post ile yukarıda yaptığımız işlem aslında kullanıcıyı işlem tamamlandıktan sonra ana sayfaya yönlendirme işlemidir.
  - req.body diyerek formda kullanıcının girdiği değeri yakalayıp log ile console 'a yazdırmış oluyoruz.
            ------- NOTLAR -------

*/
