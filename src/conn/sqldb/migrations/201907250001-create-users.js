const { engine, timestamps, properties, keys } = require('../helper.js');

module.exports = {
  up(queryInterface, DataTypes) {
    return queryInterface.createTable(
      'users',
      Object.assign(
        properties('user', DataTypes),
        timestamps(['c', 'u', 'd'], DataTypes),
        {
          client_id: keys('clients'),
        },
      ),
      engine,
    );
  },
  down(queryInterface) {
    return queryInterface.dropTable('users');
  },
};
