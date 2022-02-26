/**
 * Mongoose connection
 * @author Daniel Granados
 * @since 02/26/2022
 * @version 1.0.0
 */

const mongoose = require('mongoose');
const { config } = require('../config/index');

const HOST = config.mongoHost;
const PORT = config.mongoPort;
const DB = config.mongoDatabase;

/**
 * @param {string} HOST
 * @param {string} PORT
 * @param {string} DB
 */
const mongoConnect = async () => {
  try {
    await mongoose.connect(`mongodb://${HOST}:${PORT}/${DB}`);
    console.log('Connected to mongodb');
  } catch (err) {
    console.error('Error connecting to mongodb', err);
  }
};

module.exports = { mongoConnect };