const {
  EVENT
} = require("../constants")
const GameService = require("../services/game.service")

module.exports = async (req, res) => {
  switch (payload.build.status) {
    case 'success':
      await GameService.sendSuccessEvent()
      break;

    case 'error':
      await GameService.sendFailureEvent()
      break;
  }

  return res.json({
    success: true,
    build_status: status
  })
}
