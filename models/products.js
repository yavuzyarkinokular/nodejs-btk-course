const connection = require("../utility/database.js");
module.exports = class Product {
  constructor(name, price, imageUrl, description) {
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
    this.description = description;
  }
  saveProduct() {
    return connection.execute(
      "INSERT INTO products (name, price, imageUrl, description) VALUES (?, ?, ?, ?)",
      [this.name, this.price, this.imageUrl, this.description]
    );
  }

  static getAll() {
    return connection.execute("SELECT * FROM products");
  }
  static getById(id) {
    return connection.execute("SELECT * FROM products WHERE products.id=?", [
      id,
    ]);
  }
  static getProductsByCategoryId(id) {}
  static Update(product) {
    return connection.execute(
      "UPDATE products SET products.name=?,products.price=?,products.imageUrl=?,products.description=? WHERE products.id=?",
      [
        product.name,
        product.price,
        product.imageUrl,
        product.description,
        product.id,
      ]
    );
  }
  static deleteById(id) {
    return connection.execute("DELETE FROM products WHERE id=?", [id]);
  }
};
