app.use((req, res, next) => {
  console.log("middleware 2 çalıştırıldı ");
  res.send("yarramı yiyin");
});

/* 
  app.get("/", (req, res) => {
    res.send("hello world");
  });
  app.get("/api/products", (req, res) => {
    res.send("Ürünler mevcuttur");
  });
  */
// app.use("/", (req, res, next) => {
//   res.send("<h1>Uygulamamız çalışıyor</h1>");
//   next();
// });

app.use("/", (req, res, next) => {
  console.log("Loglama yapıldı");
  next();
});
