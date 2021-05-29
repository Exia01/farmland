const router = require('express').Router();
const userController = require('../../controllers/user.controller');

// Routes start with /auth
// router.get('/', userController.index);
router.post('/', userController.createUser);
// router.get('/:product_id', userController.getProduct);
// router.put('/:product_id', userController.updateProduct);
// router.delete('/:product_id', userController.deleteProduct);

module.exports = router;
