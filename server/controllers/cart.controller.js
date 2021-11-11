const Cart = require('../models/variant.model');

exports.index = async (req, res, next) => {
  let limit = parseInt(req.query.limit); // Make sure to parse the limit to number
  let skip = parseInt(req.query.skip); // Make sure to parse the skip to number
  let sortBy = { _id: -1 };

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

  console.log(skip, limit);
  let queryObj = {};

  if (req.query.name) {
    console.log(req.query.name);
  }
  try {
    const [carts, total] = await Promise.all([
      Cart.find(queryObj)
        .sort(sortBy)
        .skip(skip) // Always apply 'skip' before 'limit'
        .limit(limit) // This is your 'page size'
        .lean()
        .populate('variants')
        .exec(),
      Cart.countDocuments(),
    ]);
    return res.status(200).json({ carts, total });
  } catch (err) {
    let errMsg = err.stack;
    let message = 'Could not complete request';
    res.status(500).json({ msg: message, errMsg });
  }
};

exports.createCart = async (req, res, next) => {
  try {
    const user_id = req.user.sub;
    const newCart = new Cart(req.body);
    // Save Cart to DB
    const savedCart = await newCart.save();
    return res.status(200).json({ cart: savedCart });
  } catch (err) {
    let errMsg = err.stack;
    let msg = 'Could not complete request';
    res.status(500).json({ msg, errMsg });
  }
};

exports.getCart = async (req, res, next) => {
  try {
    const id = req.params.cart_id;
    const foundCart = await Cart.findById(id).lean().exec();
    return res.status(200).json({ cart: foundCart });
  } catch (err) {
    let errMsg = err.stack;
    let message = 'Could not complete request';
    res.status(500).json({ msg: message, errMsg });
  }
};

exports.updateCart = async (req, res, next) => {
  try {
    const id = req.params.cart_id;
    //could also use "{$set:req.body} to update
    const cart = await Cart.findByIdAndUpdate(id, req.body, {
      new: true,
    }).exec();
    let savedCart = await cart.save();
    return res.status(200).json(savedCart);
  } catch (err) {
    let errMsg = err.stack;
    let message = 'Could not complete request';
    res.status(500).json({ msg: message, errMsg });
  }
};

exports.deleteCart = async (req, res, next) => {
  try {
    const id = req.params.cart_id;
    const foundCart = await Cart.findByIdAndDelete(id).exec();
    return res.status(200).json({ msg: 'Deleted', cart: foundCart });
  } catch (err) {
    let errMsg = err.stack;
    let message = 'Could not complete request';
    res.status(500).json({ msg: message, errMsg });
  }
};

// Get User Cart

exports.getUserCart = async (req, res, next) => {
  try {
    const userId = req.params.user_id;
    const foundCart = await Cart.findOne({ userId }).lean().exec();
    return res.status(200).json({ cart: foundCart });
  } catch (err) {
    let errMsg = err.stack;
    let message = 'Could not complete request';
    res.status(500).json({ msg: message, errMsg });
  }
};

/* 
A falsy value is something which evaluates to FALSE, for instance when checking a variable. There are only six falsey values in JavaScript: undefined, null, NaN, 0, "" (empty string), and false of course.*/
// https://www.freecodecamp.org/news/falsy-values-in-javascript/
