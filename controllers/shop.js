/* ---- Models ----  */
const Product = require("../models/products.js");
const Category = require("../models/category.js");
/* ---- Models Bitiş ----  */

/* ---- getIndex ----  */

exports.getIndex = (req, res) => {
  const getAllProduct = Product.getAll();
  const getAllCategory = Category.getAll();
  res.render("shop/index", {
    title: "Shopping",
    products: getAllProduct,
    categories: getAllCategory,
    path: "/",
  });
};
/* ---- getIndex Bitiş ----  */

/* ---- getProducts ----  */

exports.getProducts = (req, res) => {
  const getAllProduct = Product.getAll();
  const getAllCategory = Category.getAll();
  res.render("shop/products", {
    title: "Products",
    products: getAllProduct,
    categories: getAllCategory,
    path: "/products",
  });
};
/* ---- getProducts Bitiş ----  */
/* ---- getProductsByCategoryId ----  */

exports.getProductsByCategoryId = (req, res) => {
  const categoryid = req.params.categoryid;
  const getAllProduct = Product.getProductsByCategoryId(categoryid);
  const getAllCategory = Category.getAll();
  res.render("shop/products", {
    title: "Products",
    products: getAllProduct,
    categories: getAllCategory,
    path: "/products",
  });
};
/* ---- getProductsByCategoryId Bitiş ----  */

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
