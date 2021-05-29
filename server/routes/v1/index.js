const express = require('express');
const productRoutes = require('./product.route');
const productVariantRoutes = require('./productVariant.route');
const userRoutes = require('./user.route');


const messageRoutes = require('../../utils/messages/messages.router');

const router = express.Router();

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.status(200).send('OK'));

router.use('/products', productRoutes);
router.use('/products/:product_id/variants', productVariantRoutes);
router.use('/variants', productVariantRoutes);
router.use('/user', userRoutes);

/**
 * GET messages for auth test
 */

router.use('/messages', messageRoutes);

// If no API routes are hit, send the React app...Not implemented yet
// router.use("*", (req, res) => res.sendFile(path.join(__dirname, "../client/build/index.html")));

module.exports = router;
