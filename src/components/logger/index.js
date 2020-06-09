/**
 *  @fileOverview Provides logger support FS, console and ELK integration
 *  @module       Logger
 *  @author       Darshit Vora
 *  @requires     NPM:winston
 *  @requires     NPM.winston-daily-rotate-file
 *  @requires     NPM.winston-elasticsearch
 *  @requires     NPM.@elastic/elasticsearch
 */
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
      filename: `../../../logs/error.%DATE%.log`,
      level: 'error',
      maxFiles: '10d',
      silent: NODE_ENV === 'test',
    }),
    new Elasticsearch({
      client: NODE_ENV === 'production' && client,
      level: 'info',
      silent: NODE_ENV === 'test',
    }),
    new winston.transports.Console({
      name: 'console',
      level: 'debug',
      silent: NODE_ENV === 'production',
    }),
  ],
});

module.exports = logger;
