const express = require('express');
const { getPosts, addPost } = require('../controllers/forumController');
const router = express.Router();

router.get('/', getPosts);
router.post('/', addPost);

module.exports = router;
