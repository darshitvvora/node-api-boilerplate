const service = require('./user.service');
const db = require('../../conn/sqldb');

// const { BUCKET } = require('../../config/environment');
const messagesMap = {
  201: 'Your account created successfully.',
  409: 'Duplicate',
};

const { User } = db;

async function create(req, res, next) {
  try {
    const status = await service.signup(req.body);

    return res.json({ message: messagesMap[status.code], id: status.id });
  } catch (err) {
    return next(err);
  }
}

async function index(req, res, next) {
  try {
    const limit = 100;
    const offset = 0;

    const users = await User.findAll({
      limit,
      offset,
    });

    return res.json(users);
  } catch (err) {
    return next(err);
  }
}

async function getUser(req, res, next) {
  try {
    const user = await User.findOne({
      attributes: ['id', 'mobile', 'name', 'email'],
      where: { id: req.params.id },
      raw: true,
    });
    return res.json(user);
  } catch (err) {
    return next(err);
  }
}

async function updateUser(req, res, next) {
  const SUCCESS = 200;
  try {
    await User.update(
      {
        ...req.body,
      },
      {
        where: {
          id: req.params.id,
        },
      },
    );
    return res.sendStatus(SUCCESS);
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  create,
  index,
  getUser,
  updateUser,
};
