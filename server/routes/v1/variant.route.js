const router = require('express').Router();
const variantController = require('../../controllers/variant.controller');
const { verifyTokenAndAuthorization } = require('../../utils/auth');

// Routes start with /auth
router.get('/', variantController.index);
router.post(
  '/',
  verifyTokenAndAuthorization,
  variantController.createProductVariant
);
router.get('/:productVariant_id', variantController.getProductVariant);
router.put(
  '/:productVariant_id',
  verifyTokenAndAuthorization,
  variantController.updateProductVariant
);
router.delete(
  '/:productVariant_id',
  verifyTokenAndAuthorization,
  variantController.DeleteProductVariant
);

module.exports = router;
