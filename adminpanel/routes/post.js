const express = require('express');
const router = express.Router();
const postsController = require('../controllers/post');

const verifyJWT = require('../../middleware/verifyJWT')
router.route('/')
    .get(postsController.getAllPosts)
    
router.route('/')
    .post(  postsController.createNewPost)
    .put( postsController.updatePost)
    .delete( postsController.deletePost);

router.route('/:id')
    .get(postsController.getPost);

module.exports = router;