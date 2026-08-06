const mongoose = require('mongoose');

const unitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  symbol: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  baseConversionFactor: {
    type: Number,
    required: true,
  },
  isBaseUnit: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

// Index for faster queries
unitSchema.index({ category: 1, name: 1 });

module.exports = mongoose.model('Unit', unitSchema);
