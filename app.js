/* ---- Import ---   */

const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user.js"); // Ana dizin olan index.html yönlendirmesini burada yapıyoruz
const admin = require("./routes/admin.js"); // add-product olan kısım
/* ---- Pug Dosyalar ---- */
app.set("view engine", "pug");
app.set("views", "./views");
/* ---- Pug Dosyalar Bitiş ---- */

/* ---- Import Bitiş ---   */

/* ---- MiddlWare ----  */
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false })); // !!! Açıklaması detaylıca en aşağıda !!!
app.use("/admin", admin.routes); // url 'e /admin eklentisini bu şekilde yapıyoruz
app.use(userRoutes);
app.use((req, res) => {
  res.status(404).render("404", { title: "404 Error" }); // 404 'hatasında sayfa yönlendirmesi
});

/* ---- MiddlWare Bitiş ----  */

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




Render ile dosya yolladığımız için artık bunu kullanmıyoruz.
sendFile(path.join(__dirname, "./", "views", "404.html"));
- - option virgül backtick
            ------- NOTLAR -------
*/
