const express = require('express');
const router = express.Router();
const userController = require('../controllers/usercontroller');


router.post('/addmovies', userController.addmovies);

module.exports = router;
