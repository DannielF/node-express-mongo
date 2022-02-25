const express = require('express');
const CreateGame = require('../models/createGame.model');

const router = express.Router();

router.get('/:id', (req, res, next) => {
  try {
    const { id } = req.params;
    CreateGame.findOne({id:id})
      .then((resMongo) => {res.json({
        id: resMongo.id,
        gamers: {
          'uuid-a': {
            id: resMongo.gamers[0].id,
            name: resMongo.gamers[0].name,
          },
          'uuid-b': {
            id: resMongo.gamers[1].id,
            name: resMongo.gamers[1].name,
          },
          'uuid-c': {
            id: resMongo.gamers[2].id,
            name: resMongo.gamers[2].name,
          },
          Inprogress: false,
          winner: {
            id: resMongo.gamers[0].id,
            name: resMongo.gamers[0].name,
          }
        }
      })})
      .catch((err) => {res.status(404).json({
        "error": err,
        "message": "Game not found"
      })});
    
  } catch (error) {
    next(error);
  }
});

router.get('/:id/winner', (req, res, next) => {
  try {
    const { id } = req.params;
    CreateGame.findOne({id:id})
      .then((resMongo) => {res.json({
        winner: {
          id: resMongo.gamers[0].id,
          name: resMongo.gamers[0].name,
        }
      })})
      .catch((err) => {res.status(404).json({
        "error": err,
        "message": "Winner not found"
      })});

  } catch (error) {
    next(error);
  }
});

module.exports = router;