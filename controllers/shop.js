/* ---- Models ----  */
const Product = require("../models/products.js");
/* ---- Models Bitiş ----  */

/* ---- getIndex ----  */

exports.getIndex = (req, res) => {
  const getAllProduct = Product.getAll();
  res.render("shop/index", {
    title: "Shopping",
    products: getAllProduct,
    path: "/",
  });
};
/* ---- getIndex Bitiş ----  */

/* ---- getProducts ----  */

exports.getProducts = (req, res) => {
  const getAllProduct = Product.getAll();
  res.render("shop/products", {
    title: "Products",
    products: getAllProduct,
    path: "/products",
  });
};
/* ---- getProducts Bitiş ----  */

/* ---- getProductDetails ----  */

exports.getProductDetails = (req, res) => {
  res.render("shop/details", {
    title: "Details",
    products: getAllProduct,
    path: "/details",
  });
};
/* ---- getProductDetails Bitiş ----  */

/* ---- getCart ----  */

exports.getCart = (req, res) => {
  res.render("shop/cart", {
    title: "Cart",
    products: getAllProduct,
    path: "/cart",
  });
};
/* ---- getCart Bitiş ----  */

/* ---- getOrders ----  */

exports.getOrders = (req, res) => {
  res.render("shop/orders", {
    title: "Orders",
    products: getAllProduct,
    path: "/orders",
  });
};
/* ---- getOrders Bitiş ----  */
