const GameService = require("../services/game.service")

/**
 * This endpoint will be hit when the server starts in order to kickstart everything.
 * Do all of the setup here.
 */
module.exports = async (req, res) => {
  await GameService.ping();
  await GameService.registerGame()
  await GameService.registerEvents()

  return res.json(true)
}
