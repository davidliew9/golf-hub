import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar, FaRegStar, FaMapMarkerAlt, FaShoppingCart } from 'react-icons/fa';
import { IProduct } from '@/models/Product';

// For the MVP, this would be fetched from the database
const getProductById = async (id: string): Promise<IProduct> => {
  // This is mock data for now
  return {
    _id: id,
    seller: '123',
    title: 'TaylorMade SIM2 Driver',
    brand: 'TaylorMade',
    model: 'SIM2',
    year: 2021,
    shaftType: 'Graphite',
    flex: 'Stiff',
    condition: 'Like New',
    originalPrice: 550,
    askingPrice: 350,
    description: 'Used for one season, excellent condition. Includes headcover and wrench. The SIM2 driver features a 460cc head with a 9° loft, which can be adjusted. The shaft is a Mitsubishi Tensei AV Blue 65g stiff flex, measuring 45.75 inches.',
    images: [
      '/images/sample-driver-1.jpg',
      '/images/sample-driver-2.jpg',
      '/images/sample-driver-3.jpg',
    ],
    quantity: 1,
    status: 'listed',
    createdAt: new Date(),
    updatedAt: new Date(),
  };
};

// Mocked seller data for the MVP
const sellerInfo = {
  _id: '123',
  name: 'Pro Golf Shop',
  rating: 4.8,
  reviews: 24,
  location: {
    name: 'Pro Golf Shop',
    address: '123 Fairway Lane',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94102'
  }
};

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id);
  const [mainImage, ...additionalImages] = product.images;

  return (
    <div className="bg-gray-50 py-8">
      <div className="container-custom">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Product Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative h-80 w-full rounded-lg overflow-hidden">
                <Image
                  src={mainImage || '/images/placeholder-golf-club.jpg'}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Thumbnail Images */}
              <div className="flex space-x-2">
                {additionalImages.map((image, idx) => (
                  <div key={idx} className="relative h-20 w-20 rounded-md overflow-hidden cursor-pointer border border-gray-200">
                    <Image
                      src={image}
                      alt={`${product.title} - Image ${idx + 2}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-primary">{product.title}</h1>
                <div className="mt-2 flex items-center">
                  <div className="text-sm bg-primary/10 text-primary px-2 py-0.5 rounded font-medium">
                    {product.condition}
                  </div>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-gray-600">{product.brand}</span>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-gray-600">{product.year}</span>
                </div>
              </div>
              
              {/* Price */}
              <div>
                <div className="text-sm text-gray-500 line-through">${product.originalPrice}</div>
                <div className="text-3xl font-bold text-primary">${product.askingPrice}</div>
                <div className="text-sm text-green-600 font-medium">
                  Save ${product.originalPrice - product.askingPrice} ({Math.round((1 - product.askingPrice / product.originalPrice) * 100)}% off)
                </div>
              </div>
              
              {/* Specifications */}
              <div className="border-t border-b border-gray-200 py-4">
                <h3 className="text-lg font-semibold mb-2">Specifications</h3>
                <div className="grid grid-cols-2 gap-y-2 text-sm">
                  <div className="text-gray-600">Brand:</div>
                  <div>{product.brand}</div>
                  
                  <div className="text-gray-600">Model:</div>
                  <div>{product.model}</div>
                  
                  <div className="text-gray-600">Year:</div>
                  <div>{product.year}</div>
                  
                  <div className="text-gray-600">Shaft Type:</div>
                  <div>{product.shaftType}</div>
                  
                  <div className="text-gray-600">Flex:</div>
                  <div>{product.flex}</div>
                  
                  <div className="text-gray-600">Condition:</div>
                  <div>{product.condition}</div>
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex flex-col space-y-3">
                <button className="btn-primary flex items-center justify-center">
                  <FaShoppingCart className="mr-2" /> Buy Now (${product.askingPrice})
                </button>
                <button className="btn-secondary">
                  Make an Offer
                </button>
              </div>
              
              {/* Seller Info */}
              <div className="border-t border-gray-200 pt-4">
                <h3 className="text-lg font-semibold mb-2">Seller Information</h3>
                <div className="flex items-start">
                  <div className="bg-primary text-white p-3 rounded-full">
                    {sellerInfo.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <div className="font-medium">{sellerInfo.name}</div>
                    <div className="flex items-center text-sm">
                      {[...Array(5)].map((_, i) => (
                        i < Math.floor(sellerInfo.rating) ? 
                          <FaStar key={i} className="text-yellow-400" /> : 
                          <FaRegStar key={i} className="text-yellow-400" />
                      ))}
                      <span className="ml-1 text-gray-600">{sellerInfo.rating} ({sellerInfo.reviews} reviews)</span>
                    </div>
                    <div className="text-sm mt-1 flex items-center text-gray-600">
                      <FaMapMarkerAlt className="mr-1" /> 
                      {sellerInfo.location.city}, {sellerInfo.location.state}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Description */}
          <div className="p-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Description</h3>
            <p className="text-gray-700 whitespace-pre-line">{product.description}</p>
          </div>
          
          {/* Collection Information */}
          <div className="p-6 bg-gray-50 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-2">Collection Information</h3>
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-primary mt-1 mr-2" />
              <div>
                <p className="font-medium">{sellerInfo.location.name}</p>
                <p className="text-gray-700">
                  {sellerInfo.location.address}, {sellerInfo.location.city}, {sellerInfo.location.state} {sellerInfo.location.zipCode}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  After purchase, you'll be able to arrange collection with the seller.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 