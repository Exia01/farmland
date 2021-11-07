const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      // match: [/.+@.\..+/, "Please Enter a valid e-mail address"],
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    role: {
      type: String,
    },
    relatedCarts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SavedCart',
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;
