require('dotenv').config();

const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 3000,
  mongoDatabase: process.env.MONGO_INITDB_DATABASE,
  mongoHost: process.env.MONGO_HOST,
  mongoPort: process.env.MONGO_PORT,
}

module.exports = { config };