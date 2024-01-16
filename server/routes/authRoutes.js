const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Routes for login
router.get('/login', authController.getLogin);
router.post('/login', authController.login);

// Routes for signup
router.get('/signup', authController.getSignup);
router.post('/signup', authController.signup);

// Routes for logout
router.get('/logout', authController.getLogout);
router.post('/logout', authController.logout);

module.exports = router;