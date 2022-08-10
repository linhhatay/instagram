const Post = require('../models/Post');

class PostController {
    async createPost(req, res) {
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
    // GET POSTS
    async getPosts(req, res) {
        try {
            const posts = await Post.find({});
            res.status(200).json(posts);
        } catch (error) {
            res.status(400).json({ error: error });
        }
    }
    // UPDATE POST
    async updatePost(req, res) {
        try {
            const updatePost = req.body;
            const post = await Post.findOneAndUpdate({ _id: updatePost._id }, updatePost, { new: true });

            res.status(200).json(post);
        } catch (error) {}
    }
}

module.exports = new PostController();
