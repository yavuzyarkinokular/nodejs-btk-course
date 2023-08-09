const connection = require("../utility/database.js");

module.exports = class Category {
  constructor(name, descripton) {
    this.name = name;
    this.description = description;
  }
  saveCategory() {
    return connection.execute(
      "INSERT INTO categories (name,description) VALEUS (?,?)",
      [this.name, this.description]
    );
  }

  static getAll() {
    return connection.execute("SELECT * FROM categories");
  }
  static getById(id) {
    return connection.execute("SELECT * FROM categories WHERE id=?", [id]);
  }
  static update(category) {
    return connection.execute(
      "UPDATE categories SET categories.name=?,categories.description=?  ",
      [category.name, category.description]
    );
  }
  static delete(id) {
    return connection.execute("DELETE FROM categories WHERE id=?", [id]);
  }
};
