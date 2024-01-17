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

router.get('/profile', authController.getProfile);
router.post('/profile', authController.profile);

router.get('editProfile', authController.getEditProfile);
router.post('/editProfile', authController.editProfile);



router.delete('/deleteAccount', authController.deleteAccount);




module.exports = router;