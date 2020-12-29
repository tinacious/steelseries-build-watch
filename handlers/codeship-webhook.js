const GameService = require("../services/game.service")

module.exports = async (req, res) => {
  const status = req.body.build.status;

  switch (status) {
    case 'success':
      await GameService.sendSuccessEvent()
      break;

    case 'error':
      await GameService.sendFailureEvent()
      break;

    default:
      // Log the error but return OK so webhooks don't keep retrying
      console.error('Unsupported build status', req.body)
      return res.json({ success: false })
  }

  return res.json({
    success: true,
    build_status: status
  })
}
