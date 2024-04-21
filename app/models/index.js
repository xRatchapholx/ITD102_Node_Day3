const config = require('../config/db');

const dataType = require("sequelize");
const sequelize = new dataType(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
    }
);

const db = {};

db.dataType = dataType;
db.sequelize = sequelize;

//(dataType, sequelize)
db.employee = require("../models/employee.model.js")(sequelize, dataType);
db.setting = require("../models/setting.model.js")(sequelize, dataType);

//1:1
db.employee.hasOne(db.setting, {
    onDelete: 'CASCADE'
});
db.setting.belongsTo(db.employee)

module.exports = db;