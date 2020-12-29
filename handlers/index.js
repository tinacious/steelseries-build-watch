/**
 * Health check endpoint so you know you're online
 */
module.exports = async (req, res) => {
  return res.json(true)
}
