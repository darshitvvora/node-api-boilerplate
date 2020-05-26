const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const url = require('url');

const root = path.normalize(`${__dirname}/../..`);
const envFile = path.join(root, '.env');

let config = {};
let env = {};

if (fs.existsSync(envFile)) {
  env = dotenv.config({ path: envFile });
  config = env.parsed || env;
}

process.env.NODE_ENV = config.NODE_ENV || process.env.NODE_ENV || 'production';

const DEFAULT_PORT = 5432;
const conn = url.parse(config.PG_DB);
const [username, password] = conn.auth.split(':');

const [host, port] = conn.hostname.split(':');

const settings = {
  database: conn.pathname.slice(1) || 'mydb',
  username: username || 'root',
  password: password || '',
  dialect: 'postgres',
  host: host || '127.0.0.1',
  port: port || DEFAULT_PORT,
  seederStorage: 'sequelize',
};

module.exports = {
  development: settings,
  test: settings,
  production: settings,
};
