/**
 * Show the error message in the console
 * @param {*} err 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next
 * @author Daniel Granados
 * @since 02/26/2022
 * @version 1.0.0
 */
function logErrors(err, req, res, next) {
  console.error(err);
  next(err);
}

/**
 * Handle the error instead of crashing the server
 * @param {*} err 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next
 * @author Daniel Granados
 * @since 02/26/2022
 * @version 1.0.0
 */
function errorHandler(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

module.exports = { logErrors, errorHandler };