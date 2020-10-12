const app = require("./express/app");
const sequelize = require("./sequelize");
const config = require("./config/config");

async function check_db_connection() {
  console.log(`Checking database connection...`);
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1);
  }
}

async function init() {
  await check_db_connection();
  app.listen(config.port, () =>
    console.log(`Listening on port ${config.port}`)
  );
}

init();
