/* ---- Import ---   */

const express = require("express");
const router = express.Router();

/* ---- Import  Bitiş ---   */

/* ---- Controllers ---- */
const adminController = require("../controllers/admin");
/* ---- Controllers Bitiş ---- */

/* ---- Router Get ve Post ---   */
router.get("/products", adminController.getProducts);
router.get("/add-product", adminController.getAddProduct);
router.post("/add-product", adminController.postAddProduct);
router.get("/products/:productid", adminController.getEditProduct); //edit-get
router.post("/products", adminController.postEditProduct); //edit-post
router.post("/delete-product", adminController.postDeleteProduct);

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
