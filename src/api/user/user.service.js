/**
 * @fileoverview  User Service
 * @author Darshit Vora
 * @class User\Service
 * @extends User
 * @return {UserServiceMethods}
 * @requires UserModel
 */

const { User } = require('../../conn/sqldb');

/**
 * checkDuplicate() -Check for duplicate user in users table
 * @author Darshit Vora
 * @version 0.0.1
 * @function
 * @name checkDuplicate
 * @memberof User\Service
 *
 * @private
 * @param {string} email
 * @returns {Boolean} Returns user present in DB
 */
const checkDuplicate = (email) =>
  User.findOne({
    attributes: ['id'],
    where: { email },
    raw: true,
  });

/**
 * signup() - Add user in data
 * @author Darshit Vora
 * @version 0.0.1
 * @function
 * @name signup
 * @memberof UserService
 * @async
 * @param {object} user data
 * @returns {interger} userid
 */
async function signup(body) {
  try {
    const { id = null, name, email: e, actingUser = null, mobile } = body;

    const email = e && e.trim();
    // - Todo: Email Validation
    const found = await checkDuplicate(email);

    if (found) {
      return {
        code: 409,
        id: found.id,
        message: 'Duplicate',
      };
    }

    const user = {
      id,
      name,
      email,
      created_by: actingUser,
      mobile,
    };

    await User.upsert(user);

    return { code: 201, id: user.id };
  } catch (err) {
    return Promise.reject(err);
  }
}

module.exports = {
  signup,
};
