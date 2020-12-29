const GAMESENSE_ENDPOINT = process.env.GAMESENSE_ENDPOINT
const GAME_NAME = process.env.GAME_NAME
const EVENT = {
  BUILD_SUCCESS: 'BUILD_SUCCESS',
  BUILD_FAIL: 'BUILD_FAIL',
}

module.exports = {
  APP_ENV: process.env.NODE_ENV || 'development',
  GAMESENSE_ENDPOINT,
  GAME_NAME,
  EVENT
}
