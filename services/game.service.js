const fetch = require('node-fetch');
const constants = require('../constants');
const {
  GAMESENSE_ENDPOINT,
  GAME_NAME,
  EVENT
} = require('../constants');

const GameService = {
  /**
   * Register the game
   */
  async registerGame() {
    const payload = {
      "game": GAME_NAME,
      "game_display_name": "Tinacious Build Watch",
      "developer": "Tinacious Game Studios"
    };

    return await fetch(`${GAMESENSE_ENDPOINT}/game_metadata`, {
      method: 'post',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      },
    })
  },

  /**
   * Register events
   */
  async registerEvents() {
    // let success = await fetch(`${GAMESENSE_ENDPOINT}/register_game_event`, {
    //   method: 'post',
    //   body: JSON.stringify({
    //     game: GAME_NAME,
    //     event: EVENT.BUILD_SUCCESS,
    //     icon_id: 38,
    //     value_optional: true,
    //     data: {
    //       value: 1
    //     },
    //   }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    // })
    // if (success) {
    //   const json = await success.json();
    //   console.log('Successfully registered BUILD_SUCCESS', JSON.stringify(json, null, 2))
    // }
    let success = await fetch(`${GAMESENSE_ENDPOINT}/bind_game_event`, {
      method: 'post',
      body: JSON.stringify({
        game: GAME_NAME,
        event: EVENT.BUILD_SUCCESS,
        icon_id: 38,
        value_optional: true,
        handlers: [
          {
            "device-type": "keyboard",
            "zone": "function-keys",
            "color": {"gradient": {"zero": {"red": 255, "green": 0, "blue": 0},
                                   "hundred": {"red": 0, "green": 255, "blue": 0}}},
            "mode": "percent"
          }
        ],
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    if (success) {
      const json = await success.json();
      console.log('Successfully registered BUILD_SUCCESS', JSON.stringify(json, null, 2))
    }

    // success = await fetch(`${GAMESENSE_ENDPOINT}/register_game_event`, {
    //   method: 'post',
    //   body: JSON.stringify({
    //     game: GAME_NAME,
    //     event: EVENT.BUILD_FAIL,
    //     icon_id: 39,
    //     value_optional: true,
    //     data: {
    //       value: 0
    //     },
    //   }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    // })
    // if (success) {
    //   const json = await success.json();
    //   console.log('Successfully registered BUILD_FAIL', JSON.stringify(json, null, 2))
    // }
  },

  /**
   * Successful build
   */
  async sendSuccessEvent() {
    const success = await fetch(`${GAMESENSE_ENDPOINT}/game_event`, {
      method: 'post',
      body: JSON.stringify({
        game: GAME_NAME,
        event: EVENT.BUILD_SUCCESS,


        data: {
          value: 100,
          // frame: {
          //   "zone-one-color": {
          //     red: 0,
          //     green: 255,
          //     blue: 0
          //   }
          // }
        }
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    })

    const json = await success.json();
    console.log(json)
  },

  /**
   * Failed build
   */
  async sendFailureEvent() {
  },

  /**
   * Tell GameSense you're alive
   */
  async ping() {
    const payload = {
      game: GAME_NAME
    };
    return await fetch(`${GAMESENSE_ENDPOINT}/game_heartbeat`, {
      method: 'post',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      },
    })
  }
}


module.exports = GameService
