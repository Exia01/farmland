const router = require('express').Router();
const userController = require('../../controllers/user.controller');
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require('../../utils/auth');

router.get('/', userController.index);
router.put('/:id', verifyTokenAndAuthorization, userController.updateUser);
router.delete('/:id', verifyTokenAndAdmin, userController.deleteUser);

module.exports = router;
