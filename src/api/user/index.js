const express = require('express');
const controller = require('./user.controller');

const router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.getUser);
router.post('/', controller.create);
router.put('/:id', controller.update);

module.exports = router;
