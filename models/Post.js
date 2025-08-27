const mongoose = require('mongoose');
const post = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post', post);