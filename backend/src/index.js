const express = require('express');
const cors = require('cors');
require('dotenv').config();

const sequelize = require('./config/database');
const authRoutes = require('./routes/auth');
const fieldRoutes = require('./routes/fields');
const dashboardRoutes = require('./routes/dashboard');
const errorHandler = require('./middleware/errorHandler');
const seedDatabase = require('./seeders/seed');

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

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected successfully');
    
    // Sync database - creates tables if they don't exist
    await sequelize.sync({ alter: true });
    console.log('✅ Database tables synchronized');
    
    // Run seeder (only in development)
    if (process.env.NODE_ENV === 'development') {
      await seedDatabase();
    }
    
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`📡 API available at http://localhost:${PORT}/api`);
      console.log(`\n📋 Demo Credentials:`);
      console.log(`   Admin:  admin / admin123`);
      console.log(`   Agent:  agent1 / agent123`);
    });
  } catch (err) {
    console.error('❌ Unable to start server:', err);
  }
};

startServer();

module.exports = app;
