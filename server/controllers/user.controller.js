const router = require('express').Router();

const jwtDecode = require('jwt-decode');
const {
  createToken,
  hashPassword,
  verifyPassword,
  isAuthorized,
} = require('../utils/auth');

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
    console.log(req.body);
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
      role: 'admin',
    };

    // User Email already exists in database (?)
    const userExists = await User.findOne({ email: userData.email }).lean();
    if (userExists) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'User already exists!' }] });
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

      // res.cookie('token', token, { httpOnly: true }).send();
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
      // res.cookie('token', token, { httpOnly: true }).send();

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
    res.status(500).json({ msg: message, errMsg });
  }
};

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
