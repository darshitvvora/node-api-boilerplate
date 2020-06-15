const logger = require('./index')
let requestLogger = (req,res,next) => {
  logger.info(`REQUEST INFO: ${req.get('X-Request-Id')}`, {
    startTime: new Date(),
    requestId: req.get('X-Request-Id'),
    url: req.originalUrl,
    method: req.method,
    requestHeader: req.headers,
    requestParams: req.params,
    requestBody: req.body,
    requestQuery: req.query,
  });
  next();
}

module.exports = {
  requestLogger,
};
