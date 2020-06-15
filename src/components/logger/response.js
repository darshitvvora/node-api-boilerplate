const logger = require('./index')

module.exports = function responseLogger() {

  return (req, res, next) => {
    res.on('finish', () => {
      logger.info(`RESPONSE INFO: ${req.get('X-Request-Id')}`, {
        startTime: new Date(),
        requestId: req.get('X-Request-Id'),
        url: req.originalUrl,
        method: req.method,
        requestHeader: req.headers,
        responseHeader: res.headers,
        responseBody: res.body,
        requestParams: req.params,
        requestBody: req.body,
        requestQuery: req.query,
      });
    });

    next();
  };
};

