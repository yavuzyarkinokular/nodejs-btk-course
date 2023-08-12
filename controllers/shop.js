/* ---- Models ----  */
const Product = require("../models/products.js");
const Category = require("../models/category.js");
/* ---- Models Bitiş ----  */

/* ---- getIndex ----  */
exports.getIndex = (req, res) => {
  Product.findAll({
    attributes: ["id", "name", "price", "imageUrl"],
  })
    .then((products) => {
      Category.findAll()
        .then((categories) => {
          res.render("shop/index", {
            title: "Shopping",
            products: products,
            categories: categories,
            path: "/",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};
/* ---- getIndex Bitiş ----  */

/* ---- getProducts ----  */

exports.getProducts = (req, res) => {
  Product.findAll({
    attributes: ["id", "name", "price", "imageUrl"],
  })
    .then((products) => {
      Category.findAll()
        .then((categories) => {
          res.render("shop/products", {
            title: "Products",
            products: products,
            categories: categories,
            path: "/",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};
/* ---- getProducts Bitiş ----  */
/* ---- getProductsByCategoryId ----  */

exports.getProductsByCategoryId = (req, res) => {
  const categoryid = req.params.categoryid;
  const model = [];

  Category.findAll()
    .then((categories) => {
      model.categories = categories;
      const category = categories.find((i) => i.id == categoryid);
      return category.getProducts();
    })
    .then((products) => {
      res.render("shop/products", {
        title: "Products",
        products: products,
        categories: model.categories,
        selectedCategory: categoryid,
        path: "/products",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
/* ---- getProductsByCategoryId Bitiş ----  */

/* ---- getProductDetails ----  */

exports.getProductDetails = (req, res) => {
  res.render("shop/details", {
    title: "Details",
    products: Product.getAll(),
    path: "/details",
  });
};
/* ---- getProductDetails Bitiş ----  */

/* ---- getProduct // Detail ----  */
// Id bilgisi alarak kullanıcıyı seçtiği ürüne yönlendirme

exports.getProduct = (req, res) => {
  Product.findAll({
    attributes: ["id", "name", "price", "imageUrl", "description"],
    where: { id: req.params.productid },
  })
    .then((product) => {
      Category.findAll()
        .then((categories) => {
          res.render("shop/product-detail", {
            title: product[0].name, //0 ıncı indeksin 0 ıncı indeksindeki elemanını al anlmaına gelir
            product: product[0],
            categories: categories,
            path: "/products",
          });
        })
        .catch((err) => {
          console.log("90 ncı satırda hata var  ");
        });
    })
    .catch((err) => {});
  // Product.findByPk(req.params.productid)
  //   .then((product) => {
  //     res.render("shop/product-detail", {
  //       title: product.name, //0 ıncı indeksin 0 ıncı indeksindeki elemanını al anlmaına gelir
  //       product: product,
  //       path: "/products",
  //     });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
};
/* ---- getProduct Bitiş // Detail ----  */

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
