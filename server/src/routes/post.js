const express = require('express');
const router = express.Router();

const PostController = require('../app/controllers/PostController');

router.post('/', PostController.getPosts);
router.post('/create', PostController.createPost);
router.post('/update', PostController.updatePost);

module.exports = router;
