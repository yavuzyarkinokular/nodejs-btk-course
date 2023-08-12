/* ---- Models ----  */
const Product = require("../models/products.js");
const Category = require("../models/category.js");
/* ---- Models Bitiş ----  */

/* ---- getProducts ----  */

exports.getProducts = (req, res) => {
  Product.findAll()
    .then((products) => {
      res.render("admin/products", {
        title: "Admin Products",
        products: products,
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
  res.render("admin/add-product", {
    title: " New Product",
    path: "/admin/add-product",
  });
};
/* ---- getAddProduct Bitiş ----  */

/* ---- getEditProduct ----  */

exports.getEditProduct = (req, res) => {
  Product.findAll({
    attributes: ["id", "name", "price", "imageUrl"],
    where: { id: req.params.productid },
  })
    .then((product) => {
      if (!product) {
        return res.redirect("/");
      }
      Category.findAll()
        .then((categories) => {
          res.render("admin/edit-product", {
            title: product[0].name, //0 ıncı indeksin 0 ıncı indeksindeki elemanını al anlmaına gelir
            product: product[0],
            categories: categories,
            path: "/products",
          });
        })
        .catch((err) => {
          console.log("Hata:", err);
        });
    })
    .catch((err) => {
      console.log("Product üzerinden gelen hata");
    });

  // Product.findByPk(req.params.productid)
  //   .then((product) => {
  //     Category.findAll()
  //       .then((categories) => {
  //         res.render("admin/edit-product", {
  //           title: product.name, //0 ıncı indeksin 0 ıncı indeksindeki elemanını al anlmaına gelir
  //           product: product,
  //           categories: categories,
  //           path: "/products",
  //         });
  //       })
  //       .catch((err) => {
  //         console.log("Hata:", err);
  //       });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
};
/* ---- getEditProduct Bitiş ----  */

/* ---- postAddProduct ----  */

exports.postAddProduct = (req, res) => {
  const product = new Product();
  const name = req.body.name;
  const price = req.body.price;
  const imageUrl = req.body.imageUrl;
  const description = req.body.description;
  // Product.create({
  //   name: name,
  //   price: price,
  //   imageUrl: imageUrl,
  //   description: description,
  // })
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  const prd = Product.build({
    name: name,
    price: price,
    imageUrl: imageUrl,
    description: description,
  });
  prd
    .save()
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
/* ---- postAddProduct Bitiş ----  */

/* ---- postEditProduct ----  */
// Veri tabanından gelen bilgiyi güncelleyeceğimiz için req.body.productid dedik

exports.postEditProduct = (req, res) => {
  const name = req.body.name;
  const price = req.body.price;
  const imageUrl = req.body.imageUrl;
  const description = req.body.description;
  const categoryid = req.body.categoryid;
  const id = req.body.id;

  Product.findByPk(id)
    .then((product) => {
      product.name = name;
      product.description = description;
      product.price = price;
      product.imageUrl = imageUrl;
      return product.save();
    })
    .then((result) => {
      console.log("Log updated");
      res.redirect("/admin/products?action=edit"); // işlem bitince kullanıcıyı istediğimiz dizine yönlendirmeye yarar
    })
    .catch((err) => {
      console.log("Hata postEditProduct içerisinde dikkatli bak");
    });
};
/* ---- postEditProduct Bitiş ----  */

/* ---- postDeleteProduct  ----  */
exports.postDeleteProduct = (req, res) => {
  const id = req.body.productid;
  Product.findByPk(id)
    .then((product) => {
      return product.destroy();
    })
    .then((result) => {
      res.redirect("/admin/products?action=delete");
    })
    .catch((err) => {
      console.log("Hata postDeleteProducts içerisinde dikkatli bak");
    });
};

/* ---- postDeleteProduct  Bitiş----  */
