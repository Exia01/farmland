const httpStatus = require('http-status');
const Product = require('../models/product.model');
const ProoductVariant = require('../models/productVariant.model');
exports.index = async (req, res, next) => {
  // console.log(req.user);
  try {
    const products = await Product.find({})
      .lean()
      .populate('productVariants')
      .exec();
    return res.status(200).json(products);
  } catch (err) {
    let errMsg = err.stack;
    let message = 'Could not complete request';
    res.status(500).json({ msg: message, errMsg });
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    // if we wanted to use the user to tie into the product
    const { sub } = req.user; //from attach user middleware
    const { name, description, price, listed, soldOut } = req.body;
    if (!name || !description || !price || !listed) {
      return res.status(400).json({ msg: 'Required field(s) missing' });
    }
    // Check if product already exist
    const currentProduct = await Product.findOne({ name }).exec();
    if (currentProduct)
      return res
        .status(400)
        .json({ message: 'Product already in the inventory system' });

    const newProduct = new Product({
      name,
      description,
      price,
      listed,
      soldOut,
    });

    // Save Product to DB
    const savedProduct = await newProduct.save();
    res.status(httpStatus.CREATED);
    return res.json({ product: savedProduct });
  } catch (err) {
    let errMsg = err.stack;
    let message = 'Could not complete request';
    res.status(500).json({ msg: message, errMsg });
  }
};

exports.getProduct = async (req, res, next) => {
  try {
    const id = req.params.product_id;
    const foundProduct = await Product.findById(id)
      .lean()
      .populate('productVariants')
      .exec();
    // console.log(Product.findById(id).populate('productVariants').exec());
    return res.status(200).json({ product: foundProduct });
  } catch (error) {
    let errMsg = err.stack;
    let message = 'Could not complete request';
    res.status(500).json({ msg: message, errMsg });
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const id = req.params.product_id;
    const { name, description, price, listed, soldOut } = req.body;
    if (!name || !description || !price || !listed) {
      return res.status(400).json({ msg: 'Required field(s) missing' });
    }
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    }).exec();
    let savedProduct = await product.save();
    return res.status(200).json(savedProduct);
  } catch (err) {
    let errMsg = err.stack;
    let message = 'Could not complete request';
    res.status(500).json({ msg: message, errMsg });
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const id = req.params.product_id;
    const foundProduct = await Product.findByIdAndDelete(id).exec();
    return res.status(200).json({ msg: 'Deleted', product: foundProduct });
  } catch (err) {
    let errMsg = err.stack;
    let message = 'Could not complete request';
    res.status(500).json({ msg: message, errMsg });
  }
};
