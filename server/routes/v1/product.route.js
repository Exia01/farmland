const router = require('express').Router();
const productController = require('../../controllers/product.controller');
const { verifyTokenAndAuthorization } = require('../../utils/auth');

// Routes start with /auth
router.get('/', productController.index);
router.post('/', verifyTokenAndAuthorization, productController.createProduct);
router.get('/:product_id', productController.getProduct);
router.put(
  '/:product_id',
  verifyTokenAndAuthorization,
  productController.updateProduct
);
router.delete(
  '/:product_id',
  verifyTokenAndAuthorization,
  productController.deleteProduct
);

module.exports = router;
