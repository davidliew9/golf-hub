import mongoose from 'mongoose';

export interface ITransaction {
  _id?: string;
  product: mongoose.Types.ObjectId | string;
  buyer: mongoose.Types.ObjectId | string;
  seller: mongoose.Types.ObjectId | string;
  offer?: mongoose.Types.ObjectId | string;
  amount: number;
  paymentIntentId: string;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  createdAt: Date;
  updatedAt: Date;
}

const transactionSchema = new mongoose.Schema<ITransaction>(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: [true, 'A transaction must be for a product'],
    },
    buyer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'A transaction must have a buyer'],
    },
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'A transaction must have a seller'],
    },
    offer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Offer',
    },
    amount: {
      type: Number,
      required: [true, 'A transaction must have an amount'],
    },
    paymentIntentId: {
      type: String,
      required: [true, 'A transaction must have a payment intent ID'],
    },
    status: {
      type: String,
      enum: {
        values: ['pending', 'completed', 'failed', 'refunded'],
        message: 'Status must be: pending, completed, failed, or refunded',
      },
      default: 'pending',
    },
  },
  {
    timestamps: true,
  }
);

const Transaction = mongoose.models.Transaction || mongoose.model<ITransaction>('Transaction', transactionSchema);

export default Transaction; 