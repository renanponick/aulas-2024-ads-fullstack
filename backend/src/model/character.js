const database = require("../config/database");

class Characters {
  constructor() {
    this.model = database.db.define("characters", {
      id: {
        type: database.db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: database.db.Sequelize.STRING,
      },
      species: {
        type: database.db.Sequelize.STRING,
      },
      image: {
        type: database.db.Sequelize.STRING,
      },
      gender: {
        type: database.db.Sequelize.ENUM('Female', 'Male', 'Genderless', 'unknown'),
        allowNull: false,
      },
      status: {
        type: database.db.Sequelize.ENUM('Alive', 'Dead', 'unknown'),
        allowNull: false,
      },
    });
  }
}

module.exports = new Characters().model;
