/**
 * @author Daniel Granados
 * @since 02/26/2022
 * @version 1.0.0
 */
const { v4: uuidv4 } = require('uuid');

/**
 * Create a random uuid
 * @returns {string} uuid
 */
const uuid = () => {
  return uuidv4();
}

module.exports = { uuid };