const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const jwtDecode = require('jwt-decode');

const isAuthorized = (req, res, next) => {
  // Capture Token
  const cookie = req.cookies.token;
  if (!cookie) {
    return res.status(403).json({ msg: 'Token Missing, Authorization Denied' });
  }

  // const token = req.header('x-auth-token');
  // if(!token) {
  //     return res.status(403).json({ msg: "Token Missing, Authorization Denied"});
  // }

  // --> Verify Token
  // const verified = jwt.verify(token, process.env.TOKEN_SECRET);
  const verified = jwt.verify(cookie, process.env.TOKEN_SECRET);
  if (!verified) {
    return res.status(403).json({ msg: 'Token Failed, Authorization Denied' });
  }

  // Set User ID
  req.user = verified.id;
  // Call Next middleware
  console.log('Calling NEXT Middleware');
  next();
};

const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    // Generate a salt at level 12 strength
    bcrypt.genSalt(12, (err, salt) => {
      if (err) {
        reject(err);
      }
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
    });
  });
};

const createToken = (user) => {
  // Sign the JWT
  //   if (!user.role) {
  //     throw new Error('No user role specified');
  //   }
  return jwt.sign(
    {
      sub: user._id, //subject || known as id
      user: user,
      email: user.email,
      role: user.role,
      iss: '', //issuer
      aud: '', //audience,
    },
    process.env.TOKEN_SECRET,
    { algorithm: 'HS256', expiresIn: '1h' }
  );
};

const verifyPassword = (passwordAttempt, hashedPassword) => {
  return bcrypt.compare(passwordAttempt, hashedPassword);
};

const attachUser = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: 'Authentication invalid' });
  }


  const decodedToken = jwtDecode(token);

  if (!decodedToken) {
    return res.status(401).json({
      msg: 'There was a problem authorizing the request',
    });
  } else {
    console.log('Decoded Token', decodedToken);
    req.user = decodedToken;
    next();
  }
};

const requireAdmin = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({
      msg: 'There was a problem authorizing the request',
    });
  }
  if (req.user.role !== 'admin') {
    return res.status(401).json({ msg: 'Insufficient role' });
  }
  next();
};

module.exports = {
  isAuthorized,
  hashPassword,
  createToken,
  verifyPassword,
  attachUser,
};
