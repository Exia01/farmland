const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = require('./variant.model');

const VariantSchema = new Schema({
  //sku
  itemId: {
    type: String,
    require: true,
  },
  size: {
    type: String,
    require: true,
  },
  type: {
    type: String,
  },
  price: {
    type: String,
    // required: [true, 'Price is Required'],
    required: true,
  },
  stock: {
    type: Number,
    // required: ['Stock Qty is required'],
    required: true,
  },
  soldOut: {
    type: Boolean,
    require: true,
  },
  listed: {
    type: Boolean,
  },
  reviews: {},
  product: { type: Schema.Types.ObjectId, ref: 'product' },
  addedBy: { type: Schema.Types.ObjectId, ref: 'user' },
});

module.exports = ProductVariant = mongoose.model('Variant', VariantSchema); //this will be used by the ref
