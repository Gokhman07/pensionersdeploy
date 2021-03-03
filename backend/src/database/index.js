const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("pensioners_4", "root", "password", {
  host: "localhost",
  dialect: "mysql",
  define: {
    timestamps: false,
  },
});

module.exports = sequelize;
