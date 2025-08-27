const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Show Posts
router.get('/', async (req, res) => {
    const posts = await Post.find().sort({ createdAt : -1});
    res.render('index', {posts});
});

// Get new form
router.get('/new', async (req, res) => {
    res.render('new')
});

// Create new post
router.post('/', async (req, res) => {
    await Post.create(req.body);
    res.redirect('/posts');
});

// Get edit form
router.get('/:id/edit', async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.render('edit', {post});
});

// Update form
router.put('/:id', async (req, res) => {
    await Post.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/posts');
});

// Delete post
router.delete('/:id', async (req, res) => {
    await Post.findByIdAndDelete(req.params.id);
    res.redirect('/posts');
});

module.exports = router;