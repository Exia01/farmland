const httpStatus = require('http-status');
const ProductVariant = require('../models/productVariant.model');
const Product = require('../models/product.model');

exports.index = async (req, res, next) => {
  try {
    const productVariants = await ProductVariant.find({})
      .lean()
      .populate('product')
      .exec();
    return res.status(200).json({ productVariants: productVariants });
  } catch (err) {
    let message = 'Could not complete request';
    return res.status(500).json({ msg: message, err });
  }
};

exports.createProductVariant = async (req, res, next) => {
  try {
    const { itemId, size, price, soldOut } = req.body;
    const product_id = req.params.product_id || req.body.product_id;
    if (!itemId || !size || !price || !soldOut) {
      return res.status(400).json({ msg: 'Required field(s) missing' });
    }
    // Check if product already exist
    const currentProductVariant = await ProductVariant.findOne({ itemId });
    if (currentProductVariant)
      return res.status(400).json({
        message: 'Product type variant already in the inventory system',
      });
    const newProductVariant = new ProductVariant(req.body);
    // Save Product to DB
    const savedProductVariant = await newProductVariant.save();
    const product = await Product.findById(product_id).exec();

    // return res.status(200).json(product);
    let savingOp = await product.productVariants.push(savedProductVariant._id); // returns length of array
    const savedProduct = product.save();
    return res.status(200).json({ productVariant: savedProductVariant });
  } catch (err) {
    let errMsg = err.stack;
    res.status(500).json({ msg: 'Request could not be completed', errMsg });
  }
};

exports.getProductVariant = async (req, res, next) => {
  try {
    const id = req.params.productVariant_id;
    const foundProductVariant = await ProductVariant.findById(id).exec();
    return res.status(200).json({ productVariant: foundProductVariant });
  } catch (err) {
    console.log(err.stack);
    const errMsg = err.stack;
    let message = 'Could not complete request';
    return res.status(500).json({ msg: message, errMsg, err });
  }
};

exports.updateProductVariant = async (req, res, next) => {
  try {
    const { itemId } = req.body;
    const variantId = req.params.productVariant_id;
    if (!itemId) {
      return res.status(400).json({ msg: 'itemId cannot empty' });
    }
    // Check if product already exist
    const newProductVariant = await ProductVariant.findByIdAndUpdate(
      variantId,
      req.body,
      {
        new: true,
      }
    )
      .populate('product')
      .exec();
    // Save Product to DB
    const savedProductVariant = await newProductVariant.save();
    return res.status(200).json({ productVariant: savedProductVariant });
  } catch (err) {
    console.log(err.stack);
    const errMsg = err.stack;
    res.status(500).json({ msg: 'Request could not be completed', errMsg });
  }
};

exports.DeleteProductVariant = async (req, res, next) => {
  try {
    const id = req.params.productVariant_id;
    const foundProductVariant = await ProductVariant.findByIdAndDelete(
      id
    ).exec();
    return res
      .status(200)
      .json({ msg: 'Deleted', productVariant: foundProductVariant });
  } catch (err) {
    let message = 'Could not complete request';
    let errorMsg = err.stack;
    return res.status(500).json({ msg: message, errorMsg });
  }
};
