const {
  EVENT
} = require("../constants")
const GameService = require("../services/game.service")
const { getBuildStatusFromCodeship } = require("./webhook-handlers/codeship")

module.exports = async (req, res) => {
  const status = getBuildStatusFromCodeship(req.body);

  switch (status) {
    case EVENT.BUILD_SUCCESS:
      await GameService.sendSuccessEvent()
      break;

    case EVENT.BUILD_FAIL:
      await GameService.sendFailureEvent()
      break;
  }

  return res.json({
    success: true,
    status
  })
}
