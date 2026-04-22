require('dotenv').config({ path: '../../.env' });
const sequelize = require('../config/database');
const seedDatabase = require('./seed');

const run = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected');
    
    await sequelize.sync({ alter: true });
    await seedDatabase();
    
    console.log('✨ Seeding complete!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
};

run();
