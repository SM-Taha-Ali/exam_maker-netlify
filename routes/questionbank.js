const express = require('express');
const router = express.Router();
const fetchuser = require('../middlewares/fetchUser');

// Importing controller

const authController = require('../controllers/questionbank.js');

// Creating User

router.post(
    // Route Path
    '/create-paper',
    fetchuser,
    // Creating User
    authController.writePaper
)

router.get(
    // Route Path
    '/get-paper',
    fetchuser,
    // Creating User
    authController.getPaper
)

module.exports = router;