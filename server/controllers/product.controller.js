const httpStatus = require('http-status');
const Product = require('../models/product.model');
exports.index = async (req, res, next) => {
  // console.log(req.user);
  let limit = parseInt(req.query.limit); // Make sure to parse the limit to number
  let skip = parseInt(req.query.skip); // Make sure to parse the skip to number
  let department;
  let sortBy = { _id: -1 };
  // console.log(`limit:${limit} .... skip: ${skip}`);
  if (!limit) {
    limit = 0;
  }
  if (!skip) {
    skip = 0;
  }
  if (req.query.department) {
  }
  if (req.query.qNew) {
    sortBy = { createAt: -1 };
  }

  let queryObj = {};

  if (req.query.name) {
    // Could do if req.query.name != ""
    console.log(req.query.name);
  }

  //https://stackoverflow.com/questions/45285129/any-difference-between-await-promise-all-and-multiple-awaitk
  try {
    const [products, total] = await Promise.all([
      Product.find(queryObj)
        .sort(sortBy) // Use this to sort documents by newest first
        .skip(skip) // Always apply 'skip' before 'limit'
        .limit(limit) // This is your 'page size'
        .lean()
        .populate('variants')
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
    req.body.inStock = true;
    req.body.addedBy = req.user.sub;
    // if we wanted to use the user to tie into the product
    // const { sub } = req.user; //from attach user middleware
    console.log(req.body);
    const { name, desc, department, price, listed, inStock, ...rest } =
      req.body;
    if (!name || !desc) {
      return res.status(400).json({ msg: 'Required field(s) missing' });
    }
    // Check if product already exist
    const currentProduct = await Product.findOne({ name }).lean().exec();
    if (currentProduct)
      return res
        .status(400)
        .json({ message: 'Product already in the inventory system' });

    const newProduct = new Product({
      name,
      desc,
      department,
      price,
      listed,
      inStock,
      ...rest,
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
      .populate('variants')
      .exec();
    // console.log(Product.findById(id).populate('productVariants').exec());
    return res.status(200).json({ product: foundProduct });
  } catch (err) {
    let errMsg = err.stack;
    let message = 'Could not complete request';
    res.status(500).json({ msg: message, errMsg });
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const id = req.params.product_id;
    const { name, desc, price, listed, inStock } = req.body;
    if (!name || !desc || !price) {
      return res.status(400).json({ msg: 'Required field(s) missing' });
    }

    //could also use "{$set:req.body} to update
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
