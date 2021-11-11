const router = require('express').Router();
const orderController = require('../../controllers/order.controller');
const {
  verifyTokenAndAuthorization,
  verifyToken,
} = require('../../utils/auth');

router.get('/', verifyTokenAndAuthorization, orderController.index);
router.post('/', verifyToken, orderController.createOrder);
router.get('/:order_id', verifyToken, orderController.getOrder);
router.put(
  '/:order_id',
  verifyTokenAndAuthorization,
  orderController.updateOrder
);
router.delete(
  '/:order_id',
  verifyTokenAndAuthorization,
  orderController.deleteOrder
);
router.get('/find/:user_id', verifyToken, orderController.getOrders);
router.get(
  '/income',
  verifyTokenAndAuthorization,
  orderController.getMonthlyIncome
);

module.exports = router;
