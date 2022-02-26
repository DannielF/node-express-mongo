const mongoose = require('mongoose');
const { config } = require('../config/index');

const HOST = config.mongoHost;
const PORT = config.mongoPort;
const DB = config.mongoDatabase;

const mongoConnect = async () => {
  try {
    await mongoose.connect(`mongodb://${HOST}:${PORT}/${DB}`);
    console.log('Connected to mongodb');
  } catch (err) {
    console.error('Error connecting to mongodb', err);
  }
};

module.exports = { mongoConnect };