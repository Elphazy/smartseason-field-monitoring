const User = require('./User');
const Field = require('./Field');
const FieldUpdate = require('./FieldUpdate');
const FieldStage = require('./FieldStage');

User.hasMany(Field, { foreignKey: 'user_id' });
Field.belongsTo(User, { foreignKey: 'user_id' });

Field.hasMany(FieldUpdate, { foreignKey: 'field_id' });
FieldUpdate.belongsTo(Field, { foreignKey: 'field_id' });

Field.hasMany(FieldStage, { foreignKey: 'field_id' });
FieldStage.belongsTo(Field, { foreignKey: 'field_id' });

module.exports = { User, Field, FieldUpdate, FieldStage };
