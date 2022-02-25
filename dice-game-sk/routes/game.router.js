const express = require('express');
const CreateGame = require('../models/createGame.model');
const { uuid } = require('../utils/uuidRandom');

const router = express.Router();

router.get('/', (req, res, next) => {
  try {
    res.status(200).render('createGame', {});
  } catch (error) {
    next(error);
  }
});

router.post('/', (req, res, next) => {
  try {
    const { gamer } = req.body;
    const game = new CreateGame({
      id: uuid(),
      type: "",
      gamers: gamer
      
    });
    game.save()
      .then((resDb) => {res.json(resDb)})
      .catch((err) => {err});
      
    // CreateGame.deleteMany({})
    //   .then((resMongo) => {console.log(resMongo)})
    //   .catch((err) => {console.log(err)});  
  } catch (error) {
    next(error);
  }
});

module.exports = router;