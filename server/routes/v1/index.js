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

router.use('/messages', messageRoutes);
/**
 * GET v1/status
 */
router.get('/csrf-token', (req, res, next) => {
  //middleware setups this token on the req.
  return res.status(200).json({ csrfToken: req.csrfToken() });
});
router.use('/user', userRoutes);
router.get('/status', (req, res) => res.status(200).send('OK'));

// Will check for user before reaching any of the routes below
/**
 * GET messages for auth test
 */
router.use('/products', productRoutes);
// router.use(attachUser);
router.use('/products/:product_id/', productVariantRoutes);
router.use('/variants', productVariantRoutes);

// If no API routes are hit, send the React app...Not implemented yet
// router.use("*", (req, res) => res.sendFile(path.join(__dirname, "../client/build/index.html")));

module.exports = router;
