import mongoose from 'mongoose';

export interface IProduct {
  _id?: string;
  seller: mongoose.Types.ObjectId | string;
  title: string;
  brand: string;
  model: string;
  year: number;
  shaftType: string;
  flex: string;
  condition: 'New' | 'Like New' | 'Good' | 'Fair' | 'Poor';
  originalPrice: number;
  askingPrice: number;
  description: string;
  images: string[];
  quantity: number;
  status: 'draft' | 'listed' | 'sold';
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new mongoose.Schema<IProduct>(
  {
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'A product must belong to a seller'],
    },
    title: {
      type: String,
      required: [true, 'A product must have a title'],
      trim: true,
    },
    brand: {
      type: String,
      required: [true, 'A product must have a brand'],
      trim: true,
    },
    model: {
      type: String,
      required: [true, 'A product must have a model'],
      trim: true,
    },
    year: {
      type: Number,
      required: [true, 'A product must have a year'],
    },
    shaftType: {
      type: String,
      required: [true, 'A product must have a shaft type'],
      trim: true,
    },
    flex: {
      type: String,
      required: [true, 'A product must have a flex'],
      trim: true,
    },
    condition: {
      type: String,
      required: [true, 'A product must have a condition'],
      enum: {
        values: ['New', 'Like New', 'Good', 'Fair', 'Poor'],
        message: 'Condition must be: New, Like New, Good, Fair, or Poor',
      },
    },
    originalPrice: {
      type: Number,
      required: [true, 'A product must have an original price'],
    },
    askingPrice: {
      type: Number,
      required: [true, 'A product must have an asking price'],
    },
    description: {
      type: String,
      trim: true,
    },
    images: [String],
    quantity: {
      type: Number,
      required: [true, 'A product must have a quantity'],
      default: 1,
    },
    status: {
      type: String,
      enum: {
        values: ['draft', 'listed', 'sold'],
        message: 'Status must be: draft, listed, or sold',
      },
      default: 'draft',
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Create index for search
productSchema.index({ title: 'text', brand: 'text', model: 'text' });

const Product = mongoose.models.Product || mongoose.model<IProduct>('Product', productSchema);

export default Product; 