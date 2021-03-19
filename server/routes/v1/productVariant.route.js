const router = require('express').Router();
const productVariantController = require('../../controllers/productVariant.controller');

// Routes start with /auth
router.get('/', productVariantController.index);
router.post('/', productVariantController.createProductVariant);
router.get('/:productVariant_id', productVariantController.getProductVariant);
router.put(
  '/:productVariant_id',
  productVariantController.updateProductVariant
);
router.delete(
  '/:productVariant_id',
  productVariantController.DeleteProductVariant
);

module.exports = router;
