import mongoose from 'mongoose';

export interface IOffer {
  _id?: string;
  product: mongoose.Types.ObjectId | string;
  buyer: mongoose.Types.ObjectId | string;
  seller: mongoose.Types.ObjectId | string;
  amount: number;
  status: 'pending' | 'accepted' | 'rejected' | 'countered' | 'completed';
  counterOffer?: number;
  createdAt: Date;
  updatedAt: Date;
}

const offerSchema = new mongoose.Schema<IOffer>(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: [true, 'An offer must be for a product'],
    },
    buyer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'An offer must have a buyer'],
    },
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'An offer must have a seller'],
    },
    amount: {
      type: Number,
      required: [true, 'An offer must have an amount'],
    },
    status: {
      type: String,
      enum: {
        values: ['pending', 'accepted', 'rejected', 'countered', 'completed'],
        message:
          'Status must be: pending, accepted, rejected, countered, or completed',
      },
      default: 'pending',
    },
    counterOffer: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Offer = mongoose.models.Offer || mongoose.model<IOffer>('Offer', offerSchema);

export default Offer; 