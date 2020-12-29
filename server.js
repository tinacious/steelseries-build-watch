if (!process.env.DISABLE_DOT_ENV) {
  require('dotenv').config()
}

const express = require('express');
const http = require('http');
const heartbeat = require('./middleware/heartbeat');
const app = express();
const bodyParser = require('body-parser');

const constants = require('./constants');
const GameService = require('./services/game.service');
console.log(constants)

GameService.init();

app.set('port', process.env.PORT || 4000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(heartbeat);

app.get('/', require('./handlers/index'))
app.post('/codeship-webhook', require('./handlers/codeship-webhook'))

http
  .createServer(app)
  .listen(app.get('port'), () => {
    console.log(`Health check: http://localhost:${app.get('port')}`);
    console.log(`Webhook: http://localhost:${app.get('port')}/codeship-webhook`);
  });
