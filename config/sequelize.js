//db cred basic info connection (inbuilt)
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('chemical_compound', 'root', 'Password@123', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
