/**
 * Load environment variables from .env file contents
 * into process.env
 * @see [dotenv]("https://www.npmjs.com/package/dotenv")
 * @author Daniel Granados
 * @since 02/26/2022
 * @version 1.0.0
 */
require('dotenv').config();

const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 3000,
  mongoDatabase: process.env.MONGO_INITDB_DATABASE,
  mongoHost: process.env.MONGO_HOST,
  mongoPort: process.env.MONGO_PORT,
}

module.exports = { config };