const logger = require('./index');
const { APP_NAME } = require('../../config/environment');

module.exports = function responseLogger() {
  return (req, res, next) => {
    res.on('finish', () => {
      logger.info(`RESPONSE INFO: ${res.get('X-Request-Id')}`, {
        startTime: new Date(),
        requestId: res.get('X-Request-Id'),
        url: req.originalUrl,
        method: req.method,
        requestHeader: req.headers,
        responseHeader: res.headers,
        responseBody: res.body,
        requestParams: req.params,
        requestBody: req.body,
        requestQuery: req.query,
        appName: APP_NAME,
      });
    });

    next();
  };
};
