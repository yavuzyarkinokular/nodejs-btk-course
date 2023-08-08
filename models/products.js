const connection = require("../utility/database.js");
module.exports = class Product {
  constructor(name, price, imgUrl, description) {
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
    this.description = description;
  }
  saveProduct() {}
  static getAll() {
    return connection.execute("SELECT * FROM products");
  }
  static getById(id) {
    return connection.execute("SELECT * FROM products WHERE products.id=?", [
      id,
    ]);
  }
  static getProductsByCategoryId(id) {}
  static Update(product) {}
  static deleteById(id) {}
};
