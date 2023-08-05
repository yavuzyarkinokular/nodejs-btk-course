/* ---- Models ----  */
const Product = require("../models/products.js");
/* ---- Models Bitiş ----  */

/* ---- getProducts ----  */

exports.getProducts = (req, res) => {
  const getAllProduct = Product.getAll();
  res.render("admin/products.pug", {
    title: "Admin Products",
    products: getAllProduct,
    path: "/admin/products",
  });
};
/* ---- getProducts Bitiş ----  */

/* ---- getAddProduct ----  */

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    title: " New Product",
    path: "/admin/add-product",
  });
};
/* ---- getAddProduct Bitiş ----  */

/* ---- postAddProduct ----  */

exports.postAddProduct = (req, res) => {
  const product = new Product(
    req.body.name,
    req.body.price,
    req.body.imageUrl,
    req.body.description
  );
  product.saveProduct();
  res.redirect("/"); // işlem bitince kullanıcıyı istediğimiz dizine yönlendirmeye yarar
};
/* ---- postAddProduct Bitiş ----  */

/* ---- getEditProduct ----  */

exports.getEditProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    title: "Edit Product",
    path: "/admin/edit-product",
  });
};
/* ---- getEditProduct Bitiş ----  */

/* ---- postEditProduct ----  */

exports.postEditProduct = (req, res) => {
  product.saveProduct();
  res.redirect("/"); // işlem bitince kullanıcıyı istediğimiz dizine yönlendirmeye yarar
};
/* ---- postEditProduct Bitiş ----  */
