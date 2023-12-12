//table name and structure(col. types) 
const { DataTypes } = require('sequelize');
const sequelize = require('./../config/sequelize');

const CompoundInfo = sequelize.define('compound_info', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(50),
  },
  description: {
    type: DataTypes.TEXT,
  },
  image_source: {
    type: DataTypes.STRING(250),
  },
  info_source: {
    type: DataTypes.STRING(250),
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
});

module.exports = CompoundInfo;
