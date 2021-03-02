const path = require('path');
// require('dotenv').config()

// import .env variables
require('dotenv-safe').config({
  path: path.join(__dirname, '../.env'),
  sample: path.join(__dirname, '../.env.example'),
});

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpirationInterval: process.env.JWT_EXPIRATION_MINUTES,
  mongo: {
    uri: process.env.MONGO_URI,
  },
  logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev', //here be dragons
};

// dotenv-safe:
// https://www.npmjs.com/package/dotenv-safe

// Alternative:https://github.com/motdotla/dotenv
