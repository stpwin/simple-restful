const Sequelize = require("sequelize");
const dbConfig = require("../config/db");

const sequelize = new Sequelize(dbConfig.connectionUrl);

const models = [
  require("./models/teacher.model"),
  require("./models/course.model")
];

for (const model of models) {
  model(sequelize);
}

module.exports = sequelize;
