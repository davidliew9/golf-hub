import React from 'react';
import ProductCard from '@/components/ProductCard';
import { IProduct } from '@/models/Product';

// This will eventually be fetched from the database
const sampleProducts: IProduct[] = [
  {
    _id: '1',
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
    description: 'Used for one season, excellent condition. Includes headcover.',
    images: ['/images/sample-driver.jpg'],
    quantity: 1,
    status: 'listed',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: '2',
    seller: '124',
    title: 'Callaway Apex Pro Irons (4-PW)',
    brand: 'Callaway',
    model: 'Apex Pro',
    year: 2020,
    shaftType: 'Steel',
    flex: 'Regular',
    condition: 'Good',
    originalPrice: 1200,
    askingPrice: 799,
    description: 'Full set of Apex Pro irons, minimal wear on faces.',
    images: ['/images/sample-irons.jpg'],
    quantity: 1,
    status: 'listed',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: '3',
    seller: '125',
    title: 'Scotty Cameron Newport 2',
    brand: 'Scotty Cameron',
    model: 'Newport 2',
    year: 2019,
    shaftType: 'Steel',
    flex: 'Stiff',
    condition: 'Good',
    originalPrice: 399,
    askingPrice: 250,
    description: 'Classic Newport design, some wear on face but rolls great.',
    images: ['/images/sample-putter.jpg'],
    quantity: 1,
    status: 'listed',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: '4',
    seller: '126',
    title: 'Titleist TS3 3-Wood',
    brand: 'Titleist',
    model: 'TS3',
    year: 2020,
    shaftType: 'Graphite',
    flex: 'Stiff',
    condition: 'Like New',
    originalPrice: 299,
    askingPrice: 175,
    description: 'Barely used Titleist fairway wood, perfect for long approach shots.',
    images: ['/images/sample-wood.jpg'],
    quantity: 1,
    status: 'listed',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-gray-50 py-6">
      <div className="container-custom">
        <h1 className="text-3xl font-bold text-primary mb-6">Browse Golf Equipment</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Filters</h2>
              
              {/* Club Type */}
              <div className="mb-4">
                <h3 className="font-medium text-gray-700 mb-2">Club Type</h3>
                <div className="space-y-2">
                  {['Drivers', 'Fairway Woods', 'Hybrids', 'Irons', 'Wedges', 'Putters', 'Complete Sets'].map((type) => (
                    <div key={type} className="flex items-center">
                      <input
                        id={`type-${type}`}
                        name="club-type"
                        type="checkbox"
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      />
                      <label htmlFor={`type-${type}`} className="ml-2 text-sm text-gray-700">
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Brands */}
              <div className="mb-4">
                <h3 className="font-medium text-gray-700 mb-2">Brands</h3>
                <div className="space-y-2">
                  {['TaylorMade', 'Callaway', 'Titleist', 'Ping', 'Cobra', 'Mizuno', 'Cleveland', 'Odyssey'].map((brand) => (
                    <div key={brand} className="flex items-center">
                      <input
                        id={`brand-${brand}`}
                        name="brand"
                        type="checkbox"
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      />
                      <label htmlFor={`brand-${brand}`} className="ml-2 text-sm text-gray-700">
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Condition */}
              <div className="mb-4">
                <h3 className="font-medium text-gray-700 mb-2">Condition</h3>
                <div className="space-y-2">
                  {['New', 'Like New', 'Good', 'Fair', 'Poor'].map((condition) => (
                    <div key={condition} className="flex items-center">
                      <input
                        id={`condition-${condition}`}
                        name="condition"
                        type="checkbox"
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      />
                      <label htmlFor={`condition-${condition}`} className="ml-2 text-sm text-gray-700">
                        {condition}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Price Range */}
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Price Range</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="sr-only" htmlFor="min-price">Min Price</label>
                    <input
                      type="number"
                      id="min-price"
                      placeholder="Min $"
                      className="input-field w-full"
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="max-price">Max Price</label>
                    <input
                      type="number"
                      id="max-price"
                      placeholder="Max $"
                      className="input-field w-full"
                    />
                  </div>
                </div>
              </div>
              
              <button className="btn-primary w-full mt-6">Apply Filters</button>
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="lg:col-span-3">
            <div className="bg-white p-3 rounded-lg shadow-sm mb-4">
              <div className="flex flex-col sm:flex-row justify-between items-center">
                <div className="mb-3 sm:mb-0">
                  <p className="text-gray-600">Showing 1-8 of 24 products</p>
                </div>
                <div className="flex items-center">
                  <label htmlFor="sort" className="text-sm text-gray-600 mr-2">Sort by:</label>
                  <select
                    id="sort"
                    className="input-field py-1"
                    defaultValue="newest"
                  >
                    <option value="newest">Newest</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="condition">Best Condition</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sampleProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 