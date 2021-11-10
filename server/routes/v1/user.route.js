const router = require('express').Router();
const userController = require('../../controllers/user.controller');
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require('../../utils/auth');

//No sure if we can apply middleware by section?
router.get('/', userController.index);
router.put('/:id', verifyTokenAndAuthorization, userController.updateUser);
router.delete('/:id', verifyTokenAndAdmin, userController.deleteUser);
router.get('/stats', verifyTokenAndAdmin, userController.userStats);

module.exports = router;
