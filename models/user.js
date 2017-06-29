'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    item: DataTypes.STRING,
    desc: DataTypes.TEXT,
    value: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};