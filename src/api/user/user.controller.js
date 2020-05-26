// const service = require('./user.service');
const db = require('../../conn/sqldb');

// const { BUCKET } = require('../../config/environment');

const { User } = db;

async function create(req, res, next) {
  try {
    // const status = await service.checkDuplicate(req.body);

    return res.json({ message: 'messagesMap[status.code]', id: 200 });
  } catch (err) {
    return next(err);
  }
}

async function index(req, res, next) {
  try {
    const limit = 2000;
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
  const PRECONDITION_FAILED = 412;
  const SUCCESS = 200;
  try {
    const user = await User.findByPk(req.params.id, {
      attributes: ['is_editable'],
    });

    if (!user.is_editable) {
      return res.status(PRECONDITION_FAILED).json({
        message: "You can'nt edit this user",
      });
    }

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
