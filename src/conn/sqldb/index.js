const _ = require('lodash');
const Sequelize = require('sequelize');

const config = require('../../config/environment');
// const logger = require('../../components/logger');

// const { Op } = Sequelize;
// const operatorsAliases = {
//   $eq: Op.eq,
//   $ne: Op.ne,
//   $gte: Op.gte,
//   $gt: Op.gt,
//   $lte: Op.lte,
//   $lt: Op.lt,
//   $not: Op.not,
//   $in: Op.in,
//   $notIn: Op.notIn,
//   $is: Op.is,
//   $like: Op.like,
//   $notLike: Op.notLike,
//   $iLike: Op.iLike,
//   $notILike: Op.notILike,
//   $regexp: Op.regexp,
//   $notRegexp: Op.notRegexp,
//   $iRegexp: Op.iRegexp,
//   $notIRegexp: Op.notIRegexp,
//   $between: Op.between,
//   $notBetween: Op.notBetween,
//   $overlap: Op.overlap,
//   $contains: Op.contains,
//   $contained: Op.contained,
//   $adjacent: Op.adjacent,
//   $strictLeft: Op.strictLeft,
//   $strictRight: Op.strictRight,
//   $noExtendRight: Op.noExtendRight,
//   $noExtendLeft: Op.noExtendLeft,
//   $and: Op.and,
//   $or: Op.or,
//   $any: Op.any,
//   $all: Op.all,
//   $values: Op.values,
//   $col: Op.col,
// };

const sqlDefaults = {
  dialect: 'postgres',
  // timezone: '+05:30',
  // logging: config.NODE_ENV === 'development' ?
  // ((str) => logger.debug(str)) : false,
  // operatorsAliases,
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
