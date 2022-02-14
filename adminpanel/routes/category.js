const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category')

// const verifyJWT = require('../middleware/verifyJWT')
router.route('/')
    .get(categoryController.getAllCategories)
    
router.route('/')
    .post( categoryController.createNewCategory)
    .put( categoryController.updatePost)
    .delete(categoryController.deletePost);

router.route('/:id')
    .get(categoryController.getPost);

module.exports = router;