const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const responseTime = require('response-time');
const helmet = require('helmet');
const addRequestId = require('express-request-id')();

// const db = require('../conn/sqldb');
const config = require('./environment');

module.exports = (app) => {
  const env = app.get('env');

  if (env === 'development' || env === 'test') {
    app.use(express.static(path.join(config.root, '.tmp')));
  }
  app.use(addRequestId);
  app.use(helmet());
  app.use(responseTime());
  app.use(cors());
  app.use(compression());
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json({ limit: '50mb' }));

  Object.assign(app, { express });
};
