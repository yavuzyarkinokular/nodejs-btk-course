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

/* ---- getProduct ----  */
// Id bilgisi alarak kullanıcıyı seçtiği ürüne yönlendirme

exports.getProduct = (req, res) => {
  const product = Product.getById(req.params.productid);
  res.render("shop/product-detail", {
    title: product.name,
    product: product,
    path: "/products",
  });
  res.redirect("/");
};
/* ---- getProduct Bitiş ----  */

/* ---- getProductDetails ----  */

exports.getProductDetails = (req, res) => {
  res.render("shop/details", {
    title: "Details",
    products: Product.getAll(),
    path: "/details",
  });
};
/* ---- getProductDetails Bitiş ----  */

/* ---- getCart ----  */

exports.getCart = (req, res) => {
  const getAllProduct = Product.getAll();

  res.render("shop/cart", {
    title: "Cart",
    products: getAllProduct,
    path: "/cart",
  });
};
/* ---- getCart Bitiş ----  */

/* ---- getOrders ----  */

exports.getOrders = (req, res) => {
  const getAllProduct = Product.getAll();

  res.render("shop/orders", {
    title: "Orders",
    products: getAllProduct,
    path: "/orders",
  });
};
/* ---- getOrders Bitiş ----  */
