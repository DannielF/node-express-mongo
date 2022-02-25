const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  try {
    res.status(200).render('startGame', {});
  } catch (error) {
    next(error);
  }
});

router.post('/', (req, res, next) => {
  try {
    const { id, gamerBet } = req.body;
    CreateGame.findOne({id:id})
      .then((resMongo) => {res.status(201).json({
        "id": resMongo.id,
        "type": "",
        "gamerBet": {
          "1": {
            "id":resMongo.gamers[0].id,
            "bet":gamerBet[0],
          },
          "2": {
            "id":resMongo.gamers[1].id,
            "bet":gamerBet[1],
          },
          "3": {
            "id":resMongo.gamers[2].id,
            "bet":gamerBet[2],
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

module.exports = router;