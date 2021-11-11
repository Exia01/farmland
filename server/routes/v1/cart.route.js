const router = require('express').Router();
const cartController = require('../../controllers/cart.controller');
const {
  verifyTokenAndAuthorization,
  verifyToken,
} = require('../../utils/auth');

// Routes start with /auth
router.get('/', verifyTokenAndAuthorization, cartController.index);
router.post('/', verifyToken, cartController.createCart);
router.get('/:cart_id', verifyToken, cartController.getCart);
router.put('/:cart_id', verifyToken, cartController.updateCart);
router.delete('/:cart_id', verifyToken, cartController.deleteCart);
router.get('/find/:user_id', verifyToken, cartController.getUserCart);

module.exports = router;
