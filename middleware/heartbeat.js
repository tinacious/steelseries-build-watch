const GameService = require('../services/game.service');


let count = 0;

module.exports = async (req, res, next) => {
  setInterval(async () => {
    console.log('♥️ ', count)
    await GameService.ping();
    count++
  }, 13000);

  return next();
}
