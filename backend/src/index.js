const express = require('express');
const cors = require('cors');
require('dotenv').config();

const sequelize = require('./config/database');
const authRoutes = require('./routes/auth');
const fieldRoutes = require('./routes/fields');
const dashboardRoutes = require('./routes/dashboard');
const errorHandler = require('./middleware/errorHandler');
const { User } = require('./models');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.CORS_ORIGIN || 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/fields', fieldRoutes);
app.use('/api/dashboard', dashboardRoutes);

app.get('/api/health', (req, res) => {
  res.json({ message: 'Backend is running', timestamp: new Date() });
});

app.use(errorHandler);

const seedIfNeeded = async () => {
  try {
    const admin = await User.findOne({ where: { username: 'admin' } });
    if (!admin) {
      console.log('🌱 Seeding demo accounts…');
      // Import the seeder and run it
      const seedDatabase = require('./seeders/seed');
      await seedDatabase();
      console.log('✅ Demo accounts ready');
    } else {
      console.log('ℹ️ Demo accounts already exist');
    }
  } catch (err) {
    console.error('❌ Seeding error:', err.message);
  }
};

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected successfully');

    // Sync models (creates tables if they don't exist)
    await sequelize.sync({ alter: true });
    console.log('✅ Database tables synchronized');

    // Auto‑seed demo accounts if they don't exist
    await seedIfNeeded();

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('❌ Unable to start server:', err);
  }
};

startServer();

module.exports = app;
