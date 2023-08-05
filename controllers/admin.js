/* ---- Models ----  */
const Product = require("../models/products.js");
/* ---- Models Bitiş ----  */

/* ---- getProducts ----  */

exports.getProducts = (req, res) => {
  const getAllProduct = Product.getAll();
  res.render("index", {
    title: "Ana Sayfa",
    products: getAllProduct,
    path: "/",
  });
};
/* ---- getProducts Bitiş ----  */

/* ---- getAddProduct ----  */

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    title: "Add a New Product",
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

/* ---- getAddProduct ----  */

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    title: "Add a New Product",
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
