const Comment = require('../models/Comment');
const Post = require('../models/Post');

class CommentController {
    async createComment(req, res) {
        try {
            const newComment = await new Comment({
                postId: req.body.postId,
                content: req.body.content,
                author: req.body.author,
            });

            await Post.findByIdAndUpdate(
                { _id: postId },
                {
                    $push: { comments: newComment._id },
                },
                { new: true },
            );

            await newComment.save();

            res.status(200).json(newComment);
        } catch (error) {
            res.status(400).json({ error: error });
        }
    }
}

module.exports = new CommentController();
