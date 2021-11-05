const mongoose = require('mongoose');
const db = mongoose.connection;
const logger = require('./logger');
const { mongo, ev } = require('../config/variables');

// // Exit application on error
// db.on('error', (err) => {
//   logger.error(`MongoDB connection error: ${err}`);
//   process.exit(-1);
// });
// db.once('open', function () {
//   console.log('mongoDB connected...');
// });

/**
 * Connect to mongo db
 *could exported it as a module
 *
 * @returns {object} Mongoose connection
 * @public //since everything has access?
 */

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
async function mongooseConnect() {
  try {
    await mongoose.connect(mongo.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('mongoDB connected...');
  } catch (error) {
    logger.error(`MongoDB connection error: ${err}`);
  }
}

module.exports = mongooseConnect;
