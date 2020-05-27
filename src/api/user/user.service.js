const { User } = require('../../conn/sqldb');

const checkDuplicate = (email) =>
  User.findOne({
    attributes: ['id'],
    where: { email },
    raw: true,
  });

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
