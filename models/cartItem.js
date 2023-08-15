const Sequelize = require("sequelize");
const sequelize = require("../utility/database.js");
const CartItem = sequelize.define("cartItem", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  quantity: Sequelize.INTEGER,
});

module.exports = CartItem;
