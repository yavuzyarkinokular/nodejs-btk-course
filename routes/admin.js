/* ---- Import ---   */

const express = require("express");
const router = express.Router();

/* ---- Import  Bitiş ---   */

/* ---- Controllers ---- */
const adminController = require("../controllers/admin");
/* ---- Controllers Bitiş ---- */

/* ---- Router Get ve Post ---   */
router.get("/add-product", adminController.getAddProduct);
router.post("/add-product", adminController.postAddProduct);
router.get("/edit-product", adminController.getEditProduct);
router.post("/edit-product", adminController.postEditProduct);
router.get("/products", adminController.getProducts);

/* ---- Router Get ve Post bitiş ---   */
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
