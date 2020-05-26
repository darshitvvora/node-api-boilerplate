const winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');
const Elasticsearch = require('winston-elasticsearch');
const { Client } = require('@elastic/elasticsearch');

const {
  NODE_ENV,
  ES_URL,
  ES_USER,
  ES_PASS,
} = require('../../config/environment');

const client = new Client({
  node: ES_URL,
  auth: {
    username: ES_USER,
    password: ES_PASS,
  },
});

const logger = winston.createLogger({
  transports: [
    new DailyRotateFile({
      datePattern: 'YYYY-MM-DD',
      filename: `../logs/error.%DATE%.log`,
      level: 'error',
      maxFiles: '10d',
    }),
    new Elasticsearch({
      client: NODE_ENV === 'production' && client,
      level: 'info',
    }),
    new winston.transports.Console({
      name: 'console',
      level: 'debug',
      silent: NODE_ENV === 'production',
    }),
  ],
});

module.exports = logger;
