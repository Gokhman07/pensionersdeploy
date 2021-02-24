const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("pensioners", "root", "password", {
  host: "localhost",
  dialect: "mysql",
  define: {
    timestamps: false,
  },
});

module.exports = sequelize;
