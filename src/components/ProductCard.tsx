import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IProduct } from '@/models/Product';

interface ProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image
          src={product.images[0] || '/images/placeholder-golf-club.jpg'}
          alt={product.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-primary truncate">{product.title}</h3>
        <div className="flex justify-between items-center mt-1">
          <div className="text-sm text-gray-600">{product.brand}</div>
          <div className="text-sm font-medium bg-primary/10 text-primary px-2 py-0.5 rounded">
            {product.condition}
          </div>
        </div>
        <div className="mt-3 flex items-end justify-between">
          <div>
            <div className="text-xs text-gray-500 line-through">${product.originalPrice}</div>
            <div className="text-xl font-bold text-primary">${product.askingPrice}</div>
          </div>
          <Link
            href={`/products/${product._id}`}
            className="text-sm btn-secondary py-1 px-3"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 