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
  try {
    const users = await User.find({}).lean().exec();
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json({ msg: 'Unable to complete request', error: err });
  }
};

//Move to Auth
// @@ REGISTER ROUTE
// @@
exports.createUser = async (req, res, next) => {
  try {
    let { name, email, password, passwordCheck } = req.body;

    if (!email || !password) {
      return res.status(400).json({ msg: 'Required field(s) missing' });
    }

    if (password.length < 5) {
      return res
        .status(400)
        .json({ msg: 'Password must be at least 5 characters long' });
    }

    // Encrypt password
    const hashedPassword = await hashPassword(password);

    const userData = {
      // implement optional chaining for name
      email: email.toLowerCase(),
      password: hashedPassword,
      role: req.body.role || 'admin',
    };

    // User Email already exists in database (?)
    const userExists = await User.findOne({ email: userData.email }).lean();
    if (userExists) {
      return res.status(400).json({ msg: 'User already exists!' });
    }

    const newUser = new User(userData);
    const savedUser = await newUser.save();

    if (savedUser) {
      const token = createToken(savedUser);
      const decodedToken = jwtDecode(token);
      const expiresAt = decodedToken.exp;
      // send token in HTTP-only Cookie

      const { name, email, role } = savedUser;

      const userInfo = {
        name,
        email,
        role,
      };

      //tell express to include cookie
      res.cookie(
        'token',
        token,
        { httpOnly: true, expires: new Date(Date.now() + 8 * 3600000) } // cookie will be removed after 8 hours},
      );
      // Send JSON response
      return res.status(200).json({
        msg: 'User created!',
        token,
        userInfo,
        expiresAt,
        role,
      });
    } else {
      return res.status(400).json({
        msg: 'There was a problem creating your account',
      });
    }
  } catch (err) {
    let errMsg = err.stack;
    let message = 'Could not complete request';
    return res.status(500).json({ msg: message, errMsg });
  }
};

//Move to Auth
// @@ LOGIN ROUTE
// @@
exports.loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Empty Validation
    if (!email || !password) {
      return res.status(400).json({ msg: 'Required field(s) missing' });
    }
    // Find Existing User (?)
    const currentUser = await User.findOne({ email: email }).lean();

    if (!currentUser) {
      return res.status(403).json({ msg: 'Wrong email or password.' });
    }

    // Compare Password
    const passwordValid = await verifyPassword(password, currentUser.password);
    if (!passwordValid) {
      return res.status(403).json({ msg: 'Wrong email or password.' });
    } else {
      const { password, name, ...rest } = currentUser;
      //Copying onto new obj with the rest of properties
      const userInfo = Object.assign({}, { ...rest });
      console.log(userInfo);
      const token = createToken(userInfo);

      const decodedToken = jwtDecode(token);
      const expiresAt = decodedToken.exp;

      // send token in HTTP-only Cookie
      res.cookie('token', token, { httpOnly: true });

      // Send Successful Response
      res.status(200).json({
        msg: 'Authentication successful!',
        token,
        userInfo,
        expiresAt,
      });
    }
  } catch (err) {
    let errMsg = err.stack;
    let message = 'Could not complete request';
    console.log(errMsg);
    res.status(500).json({ msg: message, errMsg });
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

// // @@ VERIFICATION ROUTE
// // @@

exports.verifyToken = async (req, res, next) => {
  try {
    // Check Cookie for Token
    const cookie = req.cookies.token;
    if (!cookie) {
      return res.json(false);
    }

    // -- Verify Token
    const verified = jwt.verify(cookie, process.env.JWT_SECRET);
    // console.log('verified', verified);

    if (!verified) return res.json(false);

    // -- Valid User (?)
    const user = await User.findById({ _id: verified.user._id }).lean().exec();

    // console.log(user);
    if (!user) return res.json(false);

    // -- Return TRUE if valid token || to WHERE ??
    return res.json(true);
  } catch (err) {
    console.log(err.stack);
    console.log(err);
    return res.status(400).json(false);
  }
};
