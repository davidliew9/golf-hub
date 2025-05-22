import mongoose from 'mongoose';

export interface IReview {
  _id?: string;
  seller: mongoose.Types.ObjectId | string;
  buyer: mongoose.Types.ObjectId | string;
  transaction: mongoose.Types.ObjectId | string;
  rating: number;
  comment?: string;
  createdAt: Date;
  updatedAt: Date;
}

const reviewSchema = new mongoose.Schema<IReview>(
  {
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'A review must have a seller who wrote it'],
    },
    buyer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'A review must have a buyer who is reviewed'],
    },
    transaction: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Transaction',
      required: [true, 'A review must be associated with a transaction'],
    },
    rating: {
      type: Number,
      required: [true, 'A review must have a rating'],
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Prevent duplicate reviews
reviewSchema.index({ seller: 1, transaction: 1 }, { unique: true });

const Review = mongoose.models.Review || mongoose.model<IReview>('Review', reviewSchema);

export default Review; 