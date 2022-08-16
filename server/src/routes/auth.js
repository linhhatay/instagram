const express = require('express');
const router = express.Router();

const authController = require('../app/controllers/AuthController');
const MiddlewareController = require('../app/controllers/MiddlewareController');

router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);
router.post('/logout', authController.logoutUser);
router.post('/refresh_token', authController.generateAccessToken);

module.exports = router;
