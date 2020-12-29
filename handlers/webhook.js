const { EVENT } = require("../constants")
const GameService = require("../services/game.service")

module.exports = async (req, res) => {
  const { type } = req.body

  let response;
  switch (type) {
    case EVENT.BUILD_SUCCESS:
      response = await GameService.sendSuccessEvent()
      break;

    case EVENT.BUILD_FAIL:
      response = await GameService.sendFailureEvent()
      break;
  }

  console.log(response)

  return res.json({ success: true, eventType: type })
}
