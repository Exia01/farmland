const router = require('express').Router();
const jwt = require('jsonwebtoken');

const jwtDecode = require('jwt-decode');
const {
  createToken,
  hashPassword,
  verifyPassword,
  isAuthorized,
} = require('../utils/auth');

const User = require('../models/user.model');

// @@ Route : /users
exports.index = async (req, res, next) => {
  let limit = parseInt(req.query.limit); // Make sure to parse the limit to number
  let skip = parseInt(req.query.skip); // Make sure to parse the skip to number
  let queryObj = {};
  if (!limit) {
    limit = 0;
  }
  if (!skip) {
    skip = 0;
  }
  try {
    const [users, total] = await Promise.all([
      User.find(queryObj)
        .sort({ _id: -1 }) // Use this to sort documents by newest first
        .skip(skip) // Always apply 'skip' before 'limit'
        .limit(limit) // This is your 'page size'
        .lean()
        .exec(),
      User.countDocuments(),
    ]);

    res.status(200).json({ users, total });
  } catch (err) {
    res.status(500).json({ msg: 'Unable to complete request', error: err });
  }
};

// @@ UPDATE ROUTE
// @@
exports.updateUser = async (req, res, next) => {
  let newPassword;
  try {
    if (req.body.password) {
      newPassword = await hashPassword(req.body.password);
      req.body.password = newPassword;
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ msg: 'Unable to update user' });
    }

    res.status(200).json({
      msg: 'Update successful!',
      user: updatedUser,
    });
  } catch (err) {
    let errMsg = err.stack;
    let message = 'Could not complete request';
    console.log(errMsg);
    res.status(500).json({ msg: message, errMsg });
  }
};

// @@ DELETE ROUTE
// @@
exports.deleteUser = async (req, res, next) => {
  try {
    console.log(req.user);
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
      return res.status(404).json({ msg: 'Unable to delete user' });
    }
    res.status(200).json({
      msg: 'User successfully deleted!',
      user: deletedUser,
    });
  } catch (err) {
    let errMsg = err.stack;
    let message = 'Could not complete request';
    console.log(errMsg);
    res.status(500).json({ msg: message, errMsg });
  }
};

//@@ GET USER STATS
// @@ Route : /users
exports.userStats = async (req, res, next) => {
  const date = new Date();
  // default last year?
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1)); // || parse date
  let limit = parseInt(req.query.limit); // Make sure to parse the limit to number
  let skip = parseInt(req.query.skip); // Make sure to parse the skip to number
  let queryObj = {};
  if (!limit) {
    limit = 0;
  }
  if (!skip) {
    skip = 0;
  }
  try {
    const [total, userAggregates] = await Promise.all([
      User.countDocuments(),
      User.aggregate([
        //   //condition -> createdAt -> greater than last year
        { $match: { createdAt: { $gte: lastYear } } },
        {
          //month variable -> take the month date inside the createdAt
          $project: {
            month: { $month: '$createdAt' },
          },
        },
        {
          //group by month the item being the id
          $group: {
            _id: '$month',
            total: { $sum: 1 },
          },
        },
      ]),
    ]);
    // res.status(200).json(data);

    res.status(200).json({ users: userAggregates, totalUsers: total });
  } catch (err) {
    let errMsg = err.stack;
    let message = 'Could not complete request';
    console.log(errMsg);
    res.status(500).json({ msg: message, errMsg });
  }
};
