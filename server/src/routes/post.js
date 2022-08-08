const express = require('express');
const router = express.Router();

const PostController = require('../app/controllers/PostController');

router.post(PostController.createPost);

module.exports = router;
