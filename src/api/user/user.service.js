const { User } = require('../../conn/sqldb');

const checkDuplicate = (email) =>
  User.findOne({
    attributes: ['id'],
    where: { email },
    raw: true,
  });

module.exports = {
  checkDuplicate,
};
