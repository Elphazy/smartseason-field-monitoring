const { Sequelize } = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.DATABASE_URL) {
  // Render's free PostgreSQL requires SSL
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  });
} else {
  // local development fallback
  sequelize = new Sequelize(
    process.env.DB_NAME || 'smartseason',
    process.env.DB_USER || 'smartseason_user',
    process.env.DB_PASSWORD || 'smartseason123',
    {
      host: process.env.DB_HOST || 'localhost',
      dialect: 'postgres',
      logging: false
    }
  );
}

module.exports = sequelize;
