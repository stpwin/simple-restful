const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("teacher", {
    first_name: {
      type: DataTypes.STRING,

      allowNull: false,
      allowEmpty: false
    },
    last_name: {
      type: DataTypes.STRING
    },
    date_of_birth: {
      type: DataTypes.DATE,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};
