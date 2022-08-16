const express = require('express');
const router = express.Router();

const PostController = require('../app/controllers/PostController');

router.get('/', PostController.getPosts);
router.post('/create', PostController.createPost);
router.delete('/delete/:id', PostController.deletePost);
router.patch('/update/:id', PostController.updatePost);
router.patch('/like/:id', PostController.likePost);
router.patch('/unlike/:id', PostController.unlikePost);

module.exports = router;
