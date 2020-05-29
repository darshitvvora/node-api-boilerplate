/**
 * @fileoverview  User DB Schema
 * @author Darshit Vora
 * @class User\Schema
 * @extends User
 * @version 0.0.1
 * @return {Object} User schema object
 */
module.exports = (DataTypes) => ({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: false,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  mobile: DataTypes.STRING,
  suspend_status: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  updated_by: DataTypes.INTEGER,
  created_by: DataTypes.INTEGER,
  deleted_by: DataTypes.INTEGER,
});
