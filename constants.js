const EVENT = {
  BUILD_SUCCESS: 'BUILD_SUCCESS',
  BUILD_FAIL: 'BUILD_FAIL',
}

module.exports = {
  APP_ENV: process.env.NODE_ENV || 'development',
  GAME_NAME: process.env.GAME_NAME,
  GAMESENSE_ENDPOINT: process.env.GAMESENSE_ENDPOINT,
  GAME_DEVELOPER: process.env.GAME_DEVELOPER,
  GAME_DISPLAY_NAME: process.env.GAME_DISPLAY_NAME,
  EVENT,
  FLASH_RATE: {
    frequency: 10,
    repeat_limit: 20,
  }
}
