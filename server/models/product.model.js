const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Variant = require('./productVariant.model');

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is Required'],
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    department: {
      type: String,
    },
    // category:{
    //   //Not implemented yet
    // },
    // discount:{}
    thumbnail: {
      type: String,
      default: 'https://www.freeiconspng.com/uploads/no-image-icon-4.png',
    },
    // stock: {
    //   type: Number,
    //   min: 0,
    //   required: true
    // },
    listed: {
      type: Boolean,
    },
    // isAvailable: {
    //   type: Boolean,
    // },
    productVariants: [{ type: Schema.Types.ObjectId, ref: 'product-variants' }],
    //image or images
    //can be removed later
    price: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Product = mongoose.model('product', ProductSchema);
