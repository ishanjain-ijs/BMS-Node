const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

const verifyJWT = require('../middleware/verifyJWT')

router.route('/:id')
    .get(verifyJWT, userController.getUser)
    .put(verifyJWT, userController.updateUser)
    .delete( verifyJWT, userController.deleteUser);
module.exports = router;