const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment = Schema(
    {},
    {
        timestamp: true,
    },
);

module.exports = mongoose.model('comment', Comment);
