/* ---- Models ----  */
const Product = require("../models/products.js");
const Category = require("../models/category.js");
/* ---- Models Bitiş ----  */

/* ---- getProducts ----  */

exports.getProducts = (req, res) => {
  Product.getAll()
    .then((products) => {
      res.render("admin/products", {
        title: "Admin Products",
        products: products[0],
        action: req.query.action,
        path: "/admin/products",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
/* ---- getProducts Bitiş ----  */

/* ---- getAddProduct ----  */

exports.getAddProduct = (req, res, next) => {
  const categoryGetAll = Category.getAll();
  console.log(categoryGetAll);
  res.render("admin/add-product", {
    title: " New Product",
    categories: categoryGetAll,
    path: "/admin/add-product",
  });
};
/* ---- getAddProduct Bitiş ----  */

/* ---- postAddProduct ----  */

exports.postAddProduct = (req, res) => {
  const product = new Product();
  product.name = req.body.name;
  product.price = req.body.price;
  product.imageUrl = req.body.imageUrl;
  product.categoryid = req.body.categoryid;
  product.description = req.body.description;

  product
    .saveProduct()
    .then(() => {
      res.redirect("/"); // İşlem tamamlandığında kullanıcıyı istediğiniz sayfaya yönlendirin
    })
    .catch((err) => {
      console.error("Hata:", err);
    });
};
/* ---- postAddProduct Bitiş ----  */

/* ---- getEditProduct ----  */

exports.getEditProduct = (req, res, next) => {
  Product.getById(req.params.productid)
    .then((products) => {
      res.render("admin/edit-product", {
        title: products[0][0].name, //0 ıncı indeksin 0 ıncı indeksindeki elemanını al anlmaına gelir
        product: products[0][0],
        path: "/products",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
/* ---- getEditProduct Bitiş ----  */

/* ---- postEditProduct ----  */
// Veri tabanından gelen bilgiyi güncelleyeceğimiz için req.body.productid dedik

exports.postEditProduct = (req, res) => {
  const product = new Product();
  product.name = req.body.name;
  product.price = req.body.price;
  product.imageUrl = req.body.imageUrl;
  product.description = req.body.description;
  product.id = req.body.id;

  Product.Update(product)
    .then(() => {
      res.redirect("/admin/products?action=edit"); // işlem bitince kullanıcıyı istediğimiz dizine yönlendirmeye yarar
    })
    .catch((err) => {
      console.log("Hata:", err);
    });
};
/* ---- postEditProduct Bitiş ----  */

/* ---- postDeleteProduct  ----  */
exports.postDeleteProduct = (req, res) => {
  const product = Product.deleteById(req.body.productid)
    .then(() => {
      res.redirect("/admin/products?action=deleted");
    })
    .catch((err) => {
      console.log("Hata:", err);
    });
};
/* ---- postDeleteProduct  Bitiş----  */
