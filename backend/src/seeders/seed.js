const bcrypt = require('bcryptjs');
const { User, Field } = require('../models');

const seedDatabase = async () => {
  try {
    console.log('🌱 Starting database seeding...');

    // Check if admin already exists
    const adminExists = await User.findOne({ where: { username: 'admin' } });
    if (!adminExists) {
      await User.create({
        username: 'admin',
        email: 'admin@smartseason.com',
        password_hash: 'admin123',
        role: 'admin',
      });
      console.log('✅ Admin user created: admin / admin123');
    } else {
      console.log('ℹ️ Admin user already exists');
    }

    // Check if agent already exists
    const agentExists = await User.findOne({ where: { username: 'agent1' } });
    if (!agentExists) {
      const agent = await User.create({
        username: 'agent1',
        email: 'agent1@smartseason.com',
        password_hash: 'agent123',
        role: 'farmer',
      });

      // Create sample fields with accurate Kenyan planting seasons
      await Field.bulkCreate([
        {
          name: 'Shamba la Mahindi',
          location: 'Kitale, Trans-Nzoia County',
          area: 12.5,
          crop_type: 'Mahindi (Maize)',
          planting_date: new Date('2026-03-15'), // Long rains season (March-May)
          status: 'active',
          user_id: agent.id,
          assigned_to: agent.id,
        },
        {
          name: 'Shamba la Maharagwe',
          location: 'Njoro, Nakuru County',
          area: 8.0,
          crop_type: 'Maharagwe (Beans)',
          planting_date: new Date('2026-03-01'), // Long rains season (March-May)
          status: 'at_risk',
          user_id: agent.id,
          assigned_to: agent.id,
        },
        {
          name: 'Shamba la Viazi',
          location: 'Limuru, Kiambu County',
          area: 15.0,
          crop_type: 'Viazi (Potatoes)',
          planting_date: new Date('2025-12-10'), // Short rains season (Oct-Dec)
          status: 'completed',
          user_id: agent.id,
          assigned_to: agent.id,
        },
      ]);
      console.log('✅ Agent user created: agent1 / agent123');
      console.log('✅ Sample Kenyan fields created with accurate planting seasons');
    } else {
      console.log('ℹ️ Agent user already exists');
    }

    console.log('✅ Database seeding completed!');
  } catch (error) {
    console.error('❌ Seeding error:', error.message);
  }
};

module.exports = seedDatabase;
