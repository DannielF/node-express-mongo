const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { uuid } = require('../utils/uuidRandom');

const createGameSchema = new Schema({
  id: {
    type: String,
    unique: true,
    default: uuid(),
  },
  type: {
    type: String,
    trim: true,
    default: '',
  },
  gamers: [{
    type: String,
    lowercase: true,
  }]
});

module.exports = CreateGame = mongoose.model('CreateGame', createGameSchema);