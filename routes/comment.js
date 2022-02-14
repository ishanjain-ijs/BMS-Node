const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// const verifyJWT = require('../middleware/verifyJWT')
router.route('/')
    .get(commentController.getAllComments)
    
router.route('/')
    .post(  commentController.createNewComment)
    .put( commentController.updateComment)
    .delete(commentController.deletePost);

router.route('/:id')
    .get(commentController.getPost);

module.exports = router;