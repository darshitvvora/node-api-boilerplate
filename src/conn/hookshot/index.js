const WebHooks = require('node-webhooks');
const { root } = require('../../config/environment');
const logger = require('../../components/logger');

const hookshot = new WebHooks({
  db: `${root}/subscriptions.json`,
  DEBUG: true,
});

const emitter = hookshot.getEmitter();
const SUCCESS = 200;
const TWO_ZERO_ONE = 201;
emitter.on('*.*', (shortname, statusCode, body) => {
  if (![SUCCESS, TWO_ZERO_ONE].includes(statusCode)) {
    logger.error(
      'trigger webHook',
      shortname,
      'with status code',
      statusCode,
      'and body',
      body,
    );
  }
});

module.exports = hookshot;
