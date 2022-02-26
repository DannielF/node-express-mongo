/**
 * Dependencies
 */
const express = require('express');

/**
 * @description routes-router
 */
const createGame = require('./game.router');
const winnerGame = require('./winner.router');
const startGame = require('./startGame.router');

/**
 * Serve the routes
 * @param {application} app 
 * @author Daniel Granados
 * @since 02/26/2022
 * @version 1.0.0
 */
function routerApi(app) {
  const router = express.Router();
  app.use('/', router);
  router.use('/createGame', createGame);
  router.use('/game', winnerGame);
  router.use('/startGame', startGame);
}

module.exports = routerApi;