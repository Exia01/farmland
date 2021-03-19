const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = require('./productVariant.model');

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
    required: [true, 'Price is Required'],
  },
  stock: {
    type: Number,
    required: ['Stock Qty is required'],
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
});

module.exports = ProductVariant = mongoose.model(
  'product-variants',
  VariantSchema
); //this will be used by the ref

