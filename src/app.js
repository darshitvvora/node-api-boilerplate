const express = require('express');
const http = require('http');

const config = require('./config/environment');
const db = require('./conn/sqldb');

// Setup src
const app = express();
const server = http.createServer(app);

require('./config/express')(app);
require('./routes')(app);
const logger = require('./components/logger');

// Start src
function startServer() {
  app.angularFullstack = server.listen(config.port, config.ip, () => {
    // eslint-disable-next-line no-console
    console.log(
      'Server listening on %d, in %s mode',
      config.port,
      app.get('env'),
    );
  });
}

process.on('unhandledRejection', (reason, p) => {
  logger.error('Unhandled Rejection at: Promise', p, 'reason:', reason);
});

process.on('uncaughtException', (err) => {
  logger.error('uncaughtException', err);
});

db.sequelizeDB
  .authenticate()
  .then(startServer)
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.log('Server failed to start due to error: %s', err);
  });

// Expose app
module.exports = app;
