const express = require('express');
const userRoutes = require('./user.route');
const authRoutes = require('./auth.route');
const productRoutes = require('./product.route');
const productVariantRoutes = require('./variant.route');
const { verifyToken } = require('../../utils/auth');

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
router.use('/messages', messageRoutes);

//optional
router.get('/csrf-token', (req, res, next) => {
  //middleware setups this token on the req.
  return res.status(200).json({ csrfToken: req.csrfToken() });
});
router.use('/user', userRoutes);
router.get('/status', (req, res) => res.status(200).send('OK'));

/**
 * GET messages for auth test
 */
router.use('/auth', authRoutes);
router.use('/products', productRoutes);
router.use('/variant/', productVariantRoutes);

// If no API routes are hit, send the React app...Not implemented yet
// router.use("*", (req, res) => res.sendFile(path.join(__dirname, "../client/build/index.html")));

module.exports = router;
