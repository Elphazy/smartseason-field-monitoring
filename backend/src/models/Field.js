const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Field = sequelize.define('Field', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  area: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  crop_type: {
    type: DataTypes.STRING(50),
  },
  planting_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  latitude: {
    type: DataTypes.FLOAT,
  },
  longitude: {
    type: DataTypes.FLOAT,
  },
  status: {
    type: DataTypes.ENUM('active', 'at_risk', 'completed'),
    defaultValue: 'active',
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  assigned_to: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'Field Agent ID assigned by Admin',
  },
}, {
  tableName: 'fields',
  timestamps: true,
  underscored: true,
});

module.exports = Field;
