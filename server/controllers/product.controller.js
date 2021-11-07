const httpStatus = require('http-status');
const Product = require('../models/product.model');
const ProoductVariant = require('../models/variant.model');
exports.index = async (req, res, next) => {
  // console.log(req.user);
  let limit = parseInt(req.query.limit); // Make sure to parse the limit to number
  let skip = parseInt(req.query.skip); // Make sure to parse the skip to number
  // console.log(`limit:${limit} .... skip: ${skip}`);
  if (!limit) {
    limit = 0;
  }
  if (!skip) {
    skip = 0;
  }

  console.log(skip, limit);
  let queryObj = {};

  if (req.query.name) {
    // Could do if req.query.name != ""
    console.log(req.query.name);
  }

  //https://stackoverflow.com/questions/45285129/any-difference-between-await-promise-all-and-multiple-awaitk
  try {
    const [products, total] = await Promise.all([
      Product.find(queryObj)
        .sort({ _id: -1 }) // Use this to sort documents by newest first
        .skip(skip) // Always apply 'skip' before 'limit'
        .limit(limit) // This is your 'page size'
        .lean()
        .populate('productVariants')
        .exec(),
      Product.countDocuments(),
    ]);
    // const products = await Product.find(queryObj)
    //   .sort({ _id: -1 }) // Use this to sort documents by newest first
    //   .skip(skip) // Always apply 'skip' before 'limit'
    //   .limit(limit) // This is your 'page size'
    //   .lean()
    //   .populate('productVariants')
    //   .exec();
    return res.status(200).json({ products, total });
  } catch (err) {
    let errMsg = err.stack;
    let message = 'Could not complete request';
    res.status(500).json({ msg: message, errMsg });
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    req.body.price = 9.99;
    req.body.soldOut = false;
    // if we wanted to use the user to tie into the product
    // const { sub } = req.user; //from attach user middleware
    console.log(req.body);
    const { name, description, department, price, listed, soldOut } = req.body;
    if (!name || !description) {
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
      department,
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
    let msg = 'Could not complete request';
    res.status(500).json({ msg, errMsg });
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

/* 
A falsy value is something which evaluates to FALSE, for instance when checking a variable. There are only six falsey values in JavaScript: undefined, null, NaN, 0, "" (empty string), and false of course.*/
// https://www.freecodecamp.org/news/falsy-values-in-javascript/
