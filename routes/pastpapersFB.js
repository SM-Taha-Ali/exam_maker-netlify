const express = require('express');
const router = express.Router();

// Importing controller

const authController = require('../controllers/pastpapersFB.js');

// Creating User

router.post(
    // Route Path
    '/create-paper',
    // Creating User
    authController.createPaper
)

router.get(
    // Route Path
    '/get-paper',
    // Creating User
    authController.getPaper
)

module.exports = router;