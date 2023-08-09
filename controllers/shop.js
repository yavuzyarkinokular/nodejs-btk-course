/* ---- Models ----  */
const Product = require("../models/products.js");
const Category = require("../models/category.js");
/* ---- Models Bitiş ----  */

/* ---- getIndex ----  */
exports.getIndex = (req, res) => {
  Product.getAll()
    .then((products) => {
      Category.getAll()
        .then((categories) => {
          res.render("shop/index", {
            title: "Shopping",
            products: products[0],
            categories: categories[0],
            path: "/",
          });
        })
        .catch((err) => {});
    })
    .catch((err) => {
      console.log(err);
    });
};
/* ---- getIndex Bitiş ----  */

/* ---- getProducts ----  */

exports.getProducts = (req, res) => {
  Product.getAll()
    .then((products) => {
      Category.getAll()
        .then((categories) => {
          res.render("shop/products", {
            title: "Products",
            products: products[0],
            categories: categories[0],
            path: "/products",
          });
        })
        .catch((err) => {});
    })
    .catch((err) => {
      console.log(err);
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
    selectedCategory: categoryid,
    path: "/products",
  });
};
/* ---- getProductsByCategoryId Bitiş ----  */

/* ---- getProduct ----  */
// Id bilgisi alarak kullanıcıyı seçtiği ürüne yönlendirme

exports.getProduct = (req, res) => {
  Product.getById(req.params.productid)
    .then((products) => {
      res.render("shop/product-detail", {
        title: products[0][0].name, //0 ıncı indeksin 0 ıncı indeksindeki elemanını al anlmaına gelir
        product: products[0][0],
        path: "/products",
      });
    })
    .catch((err) => {
      console.log(err);
    });
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
