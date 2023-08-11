const Sequelize = require("sequelize");
const sequelize = require("../utility/database.js");

const Category = sequelize.define("category", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false, //boş bir değer döndürcek olursa hata versin mi
    primaryKey: true,
  },
  name: Sequelize.STRING,
  description: {
    type: ,
    allowNull: true,
  },
});

module.exports = Category;
