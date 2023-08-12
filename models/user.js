const Sequelize = require("sequelize");
const sequelize = require("../utility/database.js");

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false, //boş bir değer döndürcek olursa hata versin mi
    primaryKey: true,
  },
  name: Sequelize.STRING,
  mail: Sequelize.STRING,
});

module.exports = User;
