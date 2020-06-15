const logger = require('./index');
const { APP_NAME } = require('../../config/environment');

const requestLogger = (req, res, next) => {
  logger.info(`REQUEST INFO: ${req.id}`, {
    startTime: new Date(),
    requestId: req.id,
    url: req.originalUrl,
    method: req.method,
    requestHeader: req.headers,
    requestParams: req.params,
    requestBody: req.body,
    requestQuery: req.query,
    appName: APP_NAME,
  });
  next();
};

module.exports = {
  requestLogger,
};
