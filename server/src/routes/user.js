const express = require('express');
const router = express.Router();

const UserController = require('../app/controllers/UserController');
const middlewareController = require('../app/controllers/MiddlewareController');

router.get('/', UserController.getUsers);
router.get('/search', UserController.searchUser);
router.get('/:username', UserController.getAnUser);
router.patch('/edit', UserController.updateUser);

module.exports = router;
