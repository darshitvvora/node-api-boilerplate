/**
 *  @fileOverview Provides RESTful routes for user resource
 *  @module       User
 *  @author       Darshit Vora
 *  @requires     NPM:express
 *  @requires     user.controller
 *  @see          {@link User\Controller}
 *  @see          {@link User\Hookshot}
 *  @see          {@link User\Model}
 *  @see          {@link User\Schema}
 *  @see          {@link User\Service}
 */

const express = require('express');
const controller = require('./user.controller');

const router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.getUser);
router.post('/', controller.create);
router.put('/:id', controller.update);

module.exports = router;
