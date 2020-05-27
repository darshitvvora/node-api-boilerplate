const _ = require('lodash');
const Sequelize = require('sequelize');

const config = require('../../config/environment');
const logger = require('../../components/logger');

const sqlDefaults = {
  dialect: 'postgres',
  timezone: '+05:30',
  logging:
    config.NODE_ENV === 'development' ? (str) => logger.debug(str) : false,
  dialectOptions: {
    connectTimeout: 20000,
  },
};

const db = {
  Sequelize,
  sequelizeDB: new Sequelize(config.PG_DB, sqlDefaults),
};

['User'].forEach((model) => {
  db[model] = db.sequelizeDB.import(
    `../../api/${_.camelCase(model)}/${_.camelCase(model)}.model.js`,
  );
});

Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

module.exports = db;
