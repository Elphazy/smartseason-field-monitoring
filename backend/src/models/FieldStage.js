const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const FieldStage = sequelize.define('FieldStage', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  field_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  stage: {
    type: DataTypes.ENUM('planted', 'growing', 'ready', 'harvested'),
    allowNull: false,
  },
  start_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  end_date: {
    type: DataTypes.DATE,
  },
  notes: {
    type: DataTypes.TEXT,
  },
}, {
  tableName: 'field_stages',
  timestamps: true,
  underscored: true,
});

module.exports = FieldStage;
