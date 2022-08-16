const express = require('express');
const router = express.Router();

const CommentController = require('../app/controllers/CommentController');

router.post('/create', CommentController.createComment);

module.exports = router;
