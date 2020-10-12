const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("course", {
    course_name: {
      type: DataTypes.STRING,

      allowNull: false
    },
    course_description: {
      type: DataTypes.STRING
    },
    course_length: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    language: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};
