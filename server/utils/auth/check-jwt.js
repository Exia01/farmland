const jwt = require('express-jwt');


const checkJwt = jwt({
  secret: process.env.TOKEN_SECRET,
  algorithms: ['HS256'],
  getToken: function (req) {
    return req.cookies.token;
  },
});

module.exports = {
  checkJwt,
};
