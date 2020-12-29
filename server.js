if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

const express = require('express');
const http = require('http');
const heartbeat = require('./middleware/heartbeat');
const app = express();

const constants = require('./constants')
console.log(constants)

app.set('port', process.env.PORT || 4000);

app.use(heartbeat);

app.get('/', require('./handlers/index'))
app.post('/webhook', require('./handlers/webhook'))

http
  .createServer(app)
  .listen(app.get('port'), () => {
    console.log(`ROOT: http://localhost:${app.get('port')}`);
    console.log(`Webhook: http://localhost:${app.get('port')}/webhook`);
  });
