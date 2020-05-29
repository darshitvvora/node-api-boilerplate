/**
 * @fileoverview Sequelize User Model
 * @author Darshit Vora
 * @class User\Model
 * @extends User
 * @return {User}
 */
const properties = require('./user.property');
// const { USER_ROLES } = require('../../config/buckets');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', Object.assign(properties(DataTypes)), {
    tableName: 'users',
    timestamps: true,
    underscored: true,
    paranoid: true,
    createdAt: 'created_on',
    updatedAt: 'updated_on',
    deletedAt: 'deleted_on',
  });

  // User.associate = (db) => {};

  User.getUser = (db, Id) =>
    db.User.findOne({
      attributes: ['name', 'email'],
      where: {
        id: Id,
      },
      order: [['id', 'asc']],
      limit: 1,
    });

  return User;
};
