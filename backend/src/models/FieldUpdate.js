const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const FieldUpdate = sequelize.define('FieldUpdate', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  field_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  notes: {
    type: DataTypes.TEXT,
  },
  measurements: {
    type: DataTypes.JSON,
  },
}, {
  tableName: 'field_updates',
  timestamps: true,
  underscored: true,
});

module.exports = FieldUpdate;
