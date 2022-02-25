const express = require('express');
const CreateGame = require('../models/createGame.model');


const router = express.Router();

router.get('/:id', (req, res, next) => {
  try {
    const { id } = req.params;
    CreateGame.findOne({id:id})
      .then((resMongo) => {res.json(resMongo)})
      .catch((err) => {console.log(err)});
    
  } catch (error) {
    next(error);
  }
});

router.get('/:id/winner', (req, res, next) => {
  try {
    const { id } = req.params;
    const game = gameStore.find(game => game.id === id);
    res.status(200).json(game.winner);

  } catch (error) {
    next(error);
  }
});

module.exports = router;