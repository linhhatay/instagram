const Post = require('../models/Post');

class PostController {
    async createPost() {
        try {
            const newPost = await new Post({
                content: req.body.content,
                location: req.body.location,
                image: req.body.image,
            });

            await newPost.save();
            res.json({
                msg: 'Create Post',
                newPost,
            });
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    }
}

module.exports = new PostController();
