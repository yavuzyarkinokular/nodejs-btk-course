/* ---- Import ---   */
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const shopRoutes = require("./routes/shop.js"); // Ana dizin olan index.html yönlendirmesini burada yapıyoruz
const adminRoutes = require("./routes/admin.js"); // add-product olan kısım
const sequelize = require("./utility/database.js"); //database
const errorController = require("./controllers/errors.js");

const Category = require("./models/category");
const Product = require("./models/products");
const User = require("./models/user");
const Cart = require("./models/cart");
const CartItem = require("./models/cartItem");
/* ---- Import Bitiş ---   */

/* ---- Pug Dosyalar ---- */
app.set("view engine", "pug");
app.set("views", "./views");
/* ---- Pug Dosyalar Bitiş ---- */

/* ---- MiddlWare ----  */
app.use((req, res, next) => {
  User.findByPk(1)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => {
      console.log(err);
    });
});
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false })); // !!! Açıklama aşağıda!!!
app.use("/admin", adminRoutes); // url 'e /admin eklentisini bu şekilde yapıyoruz
app.use(shopRoutes);
app.use(errorController.get404Page); // 404 Hata Sayfasına Yönlendirme
/* ---- MiddlWare Bitiş ----  */

/* ---- Bire Çok İlişki Kurma  açıklaması aşağıda ----  */
Product.belongsTo(Category, {
  foreignKey: {
    //null değer dönmemesi için
    allowNull: false,
  },
});
Category.hasMany(Product);
Product.belongsTo(User);
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);

Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });
/* ---- Bire Çok İlişki Kurma Bitiş ----  */

/* ---- Sequelize ----   */
let _user;
sequelize
  .sync()
  .then(() => {
    User.findByPk(1)
      .then((user) => {
        if (!user) {
          return User.create({ name: "sadikturan", email: "email@gmail.com" });
        }
        return user;
      })
      .then((user) => {
        _user = user;
        return user.getCart();
      })
      .then((cart) => {
        if (!cart) {
          return _user.createCart();
        }
        return cart;
      })
      .then(() => {
        Category.count().then((count) => {
          if (count === 0) {
            Category.bulkCreate([
              { name: "Telefon", description: "telefon kategorisi" },
              { name: "Bilgisayar", description: "bilgisayar kategorisi" },
              { name: "Elektronik", description: "elektronik kategorisi" },
            ]);
          }
        });
      });
  })
  .catch((err) => {
    console.log(err);
  });

/* ---- Sequelize Bitiş ----   */

/* ---- Port Numarası Belirleme ---- */
app.listen(3000, () => {
  console.log("listening port number is 3000");
});
/* ---- Port Numarası Belirleme Bitiş ---- */

/*
            ------- NOTLAR -------
            _bodyParser.urlencoded({extended:false})_
_ urlEncoded ile JSON benzeri dosya oluşturulur. _
_ Varsayılan extended değeri true 'dur. JSON benzeri dosya elde etmek istiyorsak bunu false yapmalıyız. Aksi takdirde querystring değeri oluşturamayız. _
_ Yukarıda ki methodoloji querystring ile bufferdan nesne oluşturmaya yarar aslında. Chunk bir buffer code oluşturur ve biz buffer code u daha anlaşılır olması  için string değere çevirip obje türetiriz. _ 
- Bire çok ilişki kurmanın amacı bir tablo içerisinde başka bir tablodaki veriyi kuruyorsak bunu sequelize 'a bildirmemiz gerekir. Bunun içinde sequelize içerisinde ki birkaç methoda ihtiyaç duyuyoruz




Render ile dosya yolladığımız için artık bunu kullanmıyoruz.
sendFile(path.join(__dirname, "./", "views", "404.html"));
- - option virgül backtick
            ------- NOTLAR -------
*/
