const fetch = require('node-fetch');
const {
  GAMESENSE_ENDPOINT, GAME_NAME
} = require('../constants');


let count = 0;

module.exports = async (req, res, next) => {
  await ping()

  setInterval(async () => {
    await ping()
  }, 13000);

  return next();
}


async function ping() {
  console.log('♥️ ', count)

  const result = await fetch(`${GAMESENSE_ENDPOINT}/game_heartbeat`, {
    method: 'post',
    body: JSON.stringify({
      game: GAME_NAME
    }),
    headers: {
      'Content-Type': 'application/json'
    },
  })
  if (!result) {
    throw new Error('Cannot perform heartbeat')
  }
  count++
}
