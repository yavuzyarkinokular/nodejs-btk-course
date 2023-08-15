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
  req.user
    .getCart()
    .then((cart) => {
      return cart
        .getProducts()
        .then((products) => {
          console.log(products);
          res.render("shop/cart", {
            title: "Cart",
            path: "/cart",
            products: products,
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

/* ---- postCart ----  */

exports.postCart = (req, res, next) => {
  const productId = req.body.productId;
  let quantity = 1;
  let userCart;

  req.user
    .getCart()
    .then((cart) => {
      userCart = cart;
      return cart.getProducts({ where: { id: productId } });
    })
    .then((products) => {
      let product;

      if (products.length > 0) {
        product = products[0];
      }

      if (product) {
        quantity += product.cartItem.quantity;
        return product;
      }
      return Product.findByPk(productId);
    })
    .then((product) => {
      userCart.addProduct(product, {
        through: {
          quantity: quantity,
        },
      });
    })
    .then(() => {
      res.redirect("/cart");
    })
    .catch((err) => {
      console.log(err);
    });
};
/* ---- postCart Bitiş ----  */
/* ---- postCartItemDelete  ----  */

exports.postCartItemDelete = (req, res) => {
  const productid = req.body.productid;

  req.user
    .getCart()
    .then((cart) => {
      return cart.getProducts({ where: { id: productid } });
    })
    .then((products) => {
      const product = products[0];
      return product.cartItem.destroy();
    })
    .then((result) => {
      res.redirect("/cart");
    });
};
/* ---- postCartItemDelete Bitiş ----  */
