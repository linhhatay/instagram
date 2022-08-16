const Post = require('../models/Post');

class PostController {
    async createPost(req, res) {
        try {
            const newPost = await new Post({
                content: req.body.content,
                location: req.body.location,
                image: req.body.image,
                author: req.body.author,
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
            const posts = await Post.find({})
                .sort({ createdAt: 1 })
                .populate('author', '_id username fullname avatar')
                .populate({
                    path: 'comments',
                    populate: {
                        path: 'author likes',
                    },
                });
            res.status(200).json(posts);
        } catch (error) {
            res.status(400).json({ error: error });
        }
    }
    // UPDATE POST
    async updatePost(req, res) {
        try {
            const updatePost = req.body;
            const post = await Post.findOneAndUpdate({ _id: req.params.id }, updatePost, { new: true }).populate(
                'author',
                '_id username fullname',
            );

            res.status(200).json(post);
        } catch (error) {
            res.status(400).json({ error: error });
        }
    }
    // DELETE POST
    async deletePost(req, res) {
        try {
            await Post.findByIdAndDelete(req.params.id);
            res.status(200).json('Delete succesfully');
        } catch (error) {
            res.status(400).json({ error: error });
        }
    }
    // LIKE POST
    async likePost(req, res) {
        try {
            const user = req.body.user;
            console.log(user);
            await Post.findOneAndUpdate(
                { _id: req.params.id },
                {
                    $push: { likes: user },
                },
                { new: true },
            );
            res.status(200).json('Like succesfully');
        } catch (error) {
            res.status(400).json({ error: error });
        }
    }
    // UNLIKE POST
    async unlikePost(req, res) {
        try {
            const user = req.body.user;
            await Post.findOneAndUpdate(
                { _id: req.params.id },
                {
                    $pull: { likes: user },
                },
                { new: true },
            );
            res.status(200).json('Unlike succesfully');
        } catch (error) {
            res.status(400).json({ error: error });
        }
    }
}

module.exports = new PostController();
