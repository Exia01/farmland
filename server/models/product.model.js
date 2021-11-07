const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    desc: {
      //description
      type: String,
      required: true,
    },
    department: {
      type: String,
      //could also make it several
      //type:Array
    },
    img: {
      type: String,
      default: 'https://www.freeiconspng.com/uploads/no-image-icon-4.png',
    },
    listed: {
      type: Boolean,
    },
    inStock: {
      type: Boolean,
    },
    price: {
      type: Number,
    },
    variants: { type: Schema.Types.ObjectId, ref: 'variant' },
    addedBy: { type: Schema.Types.ObjectId, ref: 'user' },
  },
  {
    timestamps: true,
  }
);

module.exports = Product = mongoose.model('Product', ProductSchema);
