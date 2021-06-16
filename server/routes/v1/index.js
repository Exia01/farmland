const express = require('express');
const productRoutes = require('./product.route');
const productVariantRoutes = require('./productVariant.route');
const userRoutes = require('./user.route');
const { attachUser } = require('../../utils/auth');

const messageRoutes = require('../../utils/messages/messages.router');

const router = express.Router();
router.use((req, res, next) => {
  // router level middleware
  //   console.log('Router Middleware');
  next();
});

/**
 * GET v1/status
 */
router.get('/csrf-token', (req, res, next) => {
  //middleware setups this token on the req.
  return res.status(200).json({ csrfToken:req.csrfToken() });
});
router.use('/user', userRoutes);
router.get('/status', (req, res) => res.status(200).send('OK'));


// router.use(attachUser);
/**
 * GET messages for auth test
 */
router.use('/products', productRoutes);
router.use('/products/:product_id/variants', productVariantRoutes);
router.use('/variants', productVariantRoutes);


router.use('/messages', messageRoutes);

// If no API routes are hit, send the React app...Not implemented yet
// router.use("*", (req, res) => res.sendFile(path.join(__dirname, "../client/build/index.html")));

module.exports = router;
