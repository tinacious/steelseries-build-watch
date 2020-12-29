const { EVENT } = require("../constants")
const GameService = require("../services/game.service")

module.exports = async (req, res) => {
  const { type } = req.body

  let eventType;
  switch (type) {
    case EVENT.BUILD_SUCCESS:
      eventType = await GameService.sendSuccessEvent()
      break;

    case EVENT.BUILD_FAIL:
      eventType = await GameService.sendFailureEvent()
      break;
  }


  return res.json({ success: true, eventType })
}
