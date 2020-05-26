/* eslint no-process-env:0 */
const path = require('path');
const dotenv = require('dotenv');
const _ = require('lodash');
const shared = require('./shared');

const root = path.normalize(`${__dirname}/../../..`);

const env = dotenv.config({ path: path.join(root, '.env') }).parsed;
const { DOMAIN, PREFIX } = env;

const all = {
  env: env.NODE_ENV,
  root,
  port: process.env.PORT || 3302,
  ip: process.env.IP || '0.0.0.0',
  URLS_API: `${PREFIX}api.${DOMAIN}`
};

module.exports = _.merge(
  all,
  env,
  shared || {},
);
