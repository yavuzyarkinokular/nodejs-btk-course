/* ---- Products ---- */
const products = [
  {
    name: "iPhone 11",
    price: "50225",
    image: "1.jpeg",
    description: " Ekranı en büyük telefon ",
  },
  {
    name: "iPhone 12",
    price: 50225,
    image: "2.jpeg",
    description: " Ekranı en büyük telefon ",
  },
  {
    name: "iPhone 13",
    price: 50225,
    image: "3.jpeg",
    description: " Ekranı en büyük telefon ",
  },
  {
    name: "iPhone 14",
    price: 50225,
    image: "4.jpeg",
    description: " Ekranı en büyük telefon ",
  },
];
/* ---- Products Bitiş ----  */

/* ---- getProducts ----  */

exports.getProducts = (req, res) => {
  res.render("index", {
    title: "Ana Sayfa",
    products: products,
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
  products.push({
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
    description: req.body.description,
  });
  console.log(req.body);
  res.redirect("/"); // işlem bitince kullanıcıyı istediğimiz dizine yönlendirmeye yarar
};
/* ---- postAddProduct Bitiş ----  */
