const Order = require('../models/order.model');

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

  let queryObj = {};

  if (req.query.name) {
    console.log(req.query.name);
  }
  try {
    const [orders, total] = await Promise.all([
      Order.find(queryObj)
        .sort(sortBy)
        .skip(skip) // Always apply 'skip' before 'limit'
        .limit(limit) // This is your 'page size'
        .lean()
        .exec(),
      Order.countDocuments(),
    ]);
    return res.status(200).json({ orders, total });
  } catch (err) {
    let errMsg = err.stack;
    let message = 'Could not complete request';
    res.status(500).json({ msg: message, errMsg });
  }
};

exports.createOrder = async (req, res, next) => {
  try {
    const user_id = req.user.sub;
    const newOrder = new Order(req.body);
    // Save Order to DB
    const savedOrder = await newOrder.save();
    return res.status(200).json({ order: savedOrder });
  } catch (err) {
    let errMsg = err.stack;
    let msg = 'Could not complete request';
    res.status(500).json({ msg, errMsg });
  }
};

exports.getOrder = async (req, res, next) => {
  try {
    const id = req.params.order_id;
    const foundOrder = await Order.findById(id).lean().exec();
    return res.status(200).json({ order: foundOrder });
  } catch (err) {
    let errMsg = err.stack;
    let message = 'Could not complete request';
    res.status(500).json({ msg: message, errMsg });
  }
};

exports.updateOrder = async (req, res, next) => {
  try {
    const id = req.params.order_id;
    //could also use "{$set:req.body} to update
    const order = await Order.findByIdAndUpdate(id, req.body, {
      new: true,
    }).exec();
    let savedOrder = await order.save();
    return res.status(200).json(savedOrder);
  } catch (err) {
    let errMsg = err.stack;
    let message = 'Could not complete request';
    res.status(500).json({ msg: message, errMsg });
  }
};

exports.deleteOrder = async (req, res, next) => {
  try {
    const id = req.params.order_id;
    const foundOrder = await Order.findByIdAndDelete(id).exec();
    return res.status(200).json({ msg: 'Deleted', order: foundOrder });
  } catch (err) {
    let errMsg = err.stack;
    let message = 'Could not complete request';
    res.status(500).json({ msg: message, errMsg });
  }
};

// Get User orders
exports.getOrders = async (req, res, next) => {
  try {
    const userId = req.params.user_id;
    const foundOrders = await Order.find({ userId }).lean().exec();
    return res.status(200).json({ Order: foundOrders });
  } catch (err) {
    let errMsg = err.stack;
    let message = 'Could not complete request';
    res.status(500).json({ msg: message, errMsg });
  }
};

// GET MONTHLY INCOME --> Erroring out and not implemented yet. 
exports.getMonthlyIncome = async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      {
        $project: {
          month: { $month: '$createdAt' },
          sales: '$amount',
        },
      },
      {
        $group: {
          _id: '$month',
          total: { $sum: '$sales' },
        },
      },
    ]);
    res.status(200).json({ income: income });
  } catch (err) {
    let errMsg = err.stack;
    let message = 'Could not complete request';
    res.status(500).json({ msg: message, errMsg });
  }
};

/* 
A falsy value is something which evaluates to FALSE, for instance when checking a variable. There are only six falsey values in JavaScript: undefined, null, NaN, 0, "" (empty string), and false of course.*/
// https://www.freecodecamp.org/news/falsy-values-in-javascript/
