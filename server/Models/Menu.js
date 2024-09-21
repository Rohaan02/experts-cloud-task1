const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Menu = sequelize.define(
  "Menu",
  {
    itemNumber: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    itemName: {
      type: DataTypes.STRING(35),
      allowNull: false,
      unique: true,
    },
    itemDescription: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    itemPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    tableName: "menu",
    timestamps: false,
  }
);

module.exports = Menu;
