// Data base mongoose
import { model, Schema } from 'mongoose';

export const Order = model('Order', new Schema({
  createAt: {
    type: Date,
    default: Date.now,
  },
  products: {
    required: true,
    type: [{
      product: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Product',
      },
      size: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        default: 1,
      }
    }]
  }
}));
