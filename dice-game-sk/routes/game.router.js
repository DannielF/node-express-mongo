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
      gamers: [{
        id: uuid(),
        name: gamer[0],
      },{
        id: uuid(),
        name: gamer[1],
      },{
        id: uuid(),
        name: gamer[2],
      }],
      Inprogress: true,
      winner: {
        id: "",
        name: "",
      }
    });
    game.save()
      .then((resDb) => {res.status(201).json(
        {
          id: resDb.id,
          type: resDb.type,
          gamers: gamer
        }
      )})
      .catch((err) => {res.status(404).json({
        error: err.message,
        message: "Game creation failed"
      })});
      
    // CreateGame.deleteMany({})
    //   .then((resMongo) => {console.log(resMongo)})
    //   .catch((err) => {console.log(err)});  
  } catch (error) {
    next(error);
  }
});

module.exports = router;