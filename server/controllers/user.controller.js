const router = require('express').Router();
// const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { isAuthorized } = require('../utils/auth');
const jwtDecode = require('jwt-decode');

const User = require('../models/user.model');

// @@ Route : /users
// router.get('/', isAuthorized, async (req, res) => {
//   try {
//     const user = await User.findById(req.user);
//     // res.send(user);
//     let returnUser = {
//       _id: user._id,
//       first: user.first,
//       last: user.last,
//       username: user.username,
//       email: user.email,
//       user_favorites: user.user_favorites,
//     };
//     res.status(200).json(returnUser);
//   } catch (err) {
//     res.status(400).json({ msg: 'Not Authorized', error: err });
//   }
// });

// @@ REGISTER ROUTE
// @@
exports.createUser = async (req, res, next) => {
  try {
    let { first, last, username, email, password, passwordCheck } = req.body;

    if (!username || !email || !password || !passwordCheck) {
      return res.status(400).json({ msg: 'Required field(s) missing' });
    }

    if (password.length < 5) {
      return res
        .status(400)
        .json({ msg: 'Password must be at least 5 characters long' });
    }

    // User Email already exists in database (?)
    const userExists = await User.findOne({ email: email });
    if (userExists) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'User already exists!' }] });
    }

    // Encrypt password
    let salt = await bcrypt.genSalt(12);
    let passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      first,
      last,
      username,
      email,
      password: passwordHash,
    });

    const savedUser = await newUser.save();

    // --> Log User In
    // Create/Sign Token
    const token = jwt.sign(
      { email: savedUser.email, id: savedUser._id },
      process.env.TOKEN_SECRET,
      {
        expiresIn: '1h',
      }
    );

    // send token in HTTP-only Cookie
    res.cookie('token', token, { httpOnly: true }).send();

    // Send JSON response
    res.status(200).json({
      token,
      user: savedUser,
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// // @@ LOGIN ROUTE
// // @@
// router.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Empty Validation
//     if (!email || !password) {
//       return res.status(400).json({ msg: 'Required field(s) missing' });
//     }
//     // Find Existing User (?)
//     const currentUser = await User.findOne({ email: email }).lean();

//     if (!currentUser) {
//       return res.status(500).json({ msg: 'Email not registered' });
//     }

//     // Compare Password
//     const passMatch = bcrypt.compare(password, currentUser.password);
//     if (!passMatch) {
//       return res.status(403).json({ msg: 'Not Authorized' });
//     }

//     // Create Token
//     const token = jwt.sign({ id: currentUser._id }, process.env.TOKEN_SECRET, {
//       algorithm: 'HS256',
//       expiresIn: '1h',
//     });
//     const decodedToken = jwtDecode(token);

//     // send token in HTTP-only Cookie
//     res.cookie('token', token, { httpOnly: true }).send();

//     // Send Successful Response
//     res.status(200).json({
//       message: 'Authentication successful!',
//       user: {
//         id: currentUser._id,
//         first: currentUser.first,
//         last: currentUser.last,
//         username: currentUser.username,
//         email: currentUser.email,
//       },
//       expiresAt,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: err.message });
//   }
// });

// // @@ LOGOUT ROUTE
// // @@
// router.get('/logout', (req, res) => {
//   // res.headers({ "x-auth-token": "" });
//   res.cookie('token', '', { httpOnly: true, expires: new Date(0) }).send();
// });

// // @@ VERIFICATION ROUTE
// // @@
// router.get('/verify-token', async (req, res) => {
//   try {
//     // Check Cookie for Token
//     const cookie = req.cookies.token;
//     if (!cookie) {
//       return res.json(false);
//     }
//     // -- Check Header for Token
//     // const token = req.header("x-auth-token");
//     // if(!token) return res.json(false);

//     // -- Verify Token
//     // const verified = jwt.verify(token, process.env.TOKEN_SECRET);
//     const verified = jwt.verify(cookie, process.env.TOKEN_SECRET);

//     if (!verified) return res.json(false);

//     // -- Valid User (?)
//     const user = await User.findById({ _id: verified.id });
//     // const user = await User.findById({ _id: verified.user });
//     // console.log(user);
//     if (!user) return res.json(false);

//     // // Set User ID
//     // req.user = user;
//     // console.log(req.user);

//     // -- Return TRUE if valid token || to WHERE ??
//     return res.json(true);
//   } catch (err) {
//     console.log(err);
//     return res.status(400).json(false);
//   }

//   // Set User ID
//   // req.user = verified.user;
//   // console.log(req.user);
//   // // Call Next middleware
//   // console.log('Calling NEXT Middleware');
//   // next();
// });

// // -- TESTING -- //
// router.get('/admin', async (req, res) => {
//   try {
//     // let users = await User.find({});
//     let users = await User.find({}).populate('user_favorites');
//     res.status(200).json(users);
//   } catch (err) {
//     console.log(err);
//   }
// });

