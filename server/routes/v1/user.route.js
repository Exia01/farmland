const router = require('express').Router();
const userController = require('../../controllers/user.controller');

// Routes start with /auth
// router.get('/', userController.index);
router.post('/', userController.createUser);
router.post('/login', userController.loginUser); //could also name /authenticate
router.get('/verify-token', userController.verifyToken); //could also implement middleware?

module.exports = router;
