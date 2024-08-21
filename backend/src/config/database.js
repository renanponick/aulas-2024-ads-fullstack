const { Sequelize } = require("sequelize");

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.db = new Sequelize({
      database: "exemplo",
      host: "localhost",
      username: "root",
      dialect: "mysql",
      password: "123456",
    });
  }
}

module.exports = new Database();
