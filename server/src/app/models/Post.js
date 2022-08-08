const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = Schema(
    {
        content: {
            type: 'string',
            require: true,
        },
        location: {
            type: 'string',
            require: true,
        },
        image: {
            type: 'string',
            require: true,
        },
        likes: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
        comments: [{ type: mongoose.Types.ObjectId, ref: 'comment' }],
        users: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
    },
    {
        timestamp: true,
    },
);

module.exports = mongoose.model('post', Post);
