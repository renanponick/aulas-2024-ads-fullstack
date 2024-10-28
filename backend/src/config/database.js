const { Sequelize } = require("sequelize");
require('dotenv').config()

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.db = new Sequelize({
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      username: process.env.DB_USERNAME,
      dialect: process.env.DB_DIALECT,
      password: process.env.DB_PASSWORD,
      // dialectOptions: {
      //   ssl: {
      //     require: true,
      //     rejectUnauthorized: false
      //   }}
    });
  }
}

module.exports = new Database();
