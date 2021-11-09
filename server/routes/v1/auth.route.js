const router = require('express').Router();
const authController = require('../../controllers/auth.controller');

router.post('/register', authController.createUser);
router.post('/login', authController.loginUser); //could also name /authenticate
router.get('/verify-token', authController.verifyToken); //could also implement middleware?

module.exports = router;
