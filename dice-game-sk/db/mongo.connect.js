const mongoose = require('mongoose');

const mongoConnect = async () => {
  try {
    await mongoose.connect(`mongodb://localhost/test`);
    console.log('Connected to mongodb');
  } catch (err) {
    console.log('Error connecting to mongodb', err);
  }
};

module.exports = { mongoConnect };

// await mongoose.connect(`mongodb://${USER}:${PASSWORD}@${HOST}:${PORT}/test`);