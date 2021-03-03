const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");


const Empl_stats = sequelize.define("empl_stats", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
    title: {
    type: DataTypes.STRING,
  },
  
});

module.exports = Empl_stats;
