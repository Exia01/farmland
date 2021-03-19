const router = require('express').Router();
const productController = require('../../controllers/product.controller');

// Routes start with /auth
router.get('/', productController.index);
router.post('/', productController.createProduct);
router.get('/:product_id', productController.getProduct);
router.put('/:product_id', productController.updateProduct);
router.delete('/:product_id', productController.deleteProduct);

module.exports = router;
