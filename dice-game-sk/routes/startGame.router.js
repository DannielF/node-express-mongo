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
    const { id, type, gamerBet } = req.body;
    res.status(201).json({id, type, gamerBet});
    
  } catch (error) {
    next(error);
  }
});

module.exports = router;