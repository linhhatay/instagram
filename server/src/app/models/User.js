const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema(
    {
        email: {
            type: 'string',
            required: true,
            unique: true,
        },
        fullname: {
            type: 'string',
            required: true,
        },
        username: {
            type: 'string',
            required: true,
            unique: true,
        },

        password: {
            type: 'string',
            required: true,
            minlength: 6,
        },
        avatar: {
            type: 'string',
            default: 'C:\\Users\\linhh\\Workspace\front-end\reactJsinstagram-uiserversrcassetsimages\no-image.png',
        },
        website: {
            type: 'string',
            default: '',
        },
        bio: {
            type: 'string',
            default: 'Prefer not to say',
        },
        gender: {
            type: 'string',
            default: 'Prefer not to say',
        },
        role: {
            type: 'string',
            default: 'user',
        },
        followers: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
        following: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('User', User);
