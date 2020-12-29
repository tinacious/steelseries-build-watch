module.exports = (req, res) => {
  console.log('webhook endpoint')

  return res.json({ success: true })
}
