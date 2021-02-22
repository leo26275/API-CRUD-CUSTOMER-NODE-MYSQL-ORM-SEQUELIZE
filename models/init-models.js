var DataTypes = require("sequelize").DataTypes;
var _Customer = require("./customer");

function initModels(sequelize) {
  var Customer = _Customer(sequelize, DataTypes);


  return {
    Customer,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
