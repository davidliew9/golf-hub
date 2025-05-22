import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaShoppingBag, FaHeart, FaCommentDots, FaAngleRight } from 'react-icons/fa';

// Mock data for the MVP
const mockTransactions = [
  {
    _id: 't1',
    product: {
      _id: 'p1',
      title: 'TaylorMade SIM2 Driver',
      image: '/images/sample-driver.jpg',
      condition: 'Like New',
    },
    seller: 'Pro Golf Shop',
    date: new Date('2025-05-15'),
    amount: 350,
    status: 'completed'
  },
  {
    _id: 't2',
    product: {
      _id: 'p2',
      title: 'Callaway Apex Pro Irons (4-PW)',
      image: '/images/sample-irons.jpg',
      condition: 'Good',
    },
    seller: 'Golf Warehouse',
    date: new Date('2025-05-08'),
    amount: 799,
    status: 'completed'
  }
];

const mockFavorites = [
  {
    _id: 'f1',
    product: {
      _id: 'p3',
      title: 'Scotty Cameron Newport 2',
      image: '/images/sample-putter.jpg',
      condition: 'Good',
      askingPrice: 250,
      originalPrice: 399,
    }
  },
  {
    _id: 'f2',
    product: {
      _id: 'p4',
      title: 'Titleist TS3 3-Wood',
      image: '/images/sample-wood.jpg',
      condition: 'Like New',
      askingPrice: 175,
      originalPrice: 299,
    }
  }
];

const mockOffers = [
  {
    _id: 'o1',
    product: {
      _id: 'p5',
      title: 'Ping G425 Hybrid',
      image: '/images/sample-hybrid.jpg',
      askingPrice: 200,
    },
    seller: 'Golf Experts',
    date: new Date('2025-05-18'),
    amount: 180,
    status: 'pending'
  },
  {
    _id: 'o2',
    product: {
      _id: 'p6',
      title: 'Mizuno MP-20 Irons',
      image: '/images/sample-irons-2.jpg',
      askingPrice: 850,
    },
    seller: 'Pro Shop Central',
    date: new Date('2025-05-17'),
    amount: 775,
    status: 'countered',
    counterAmount: 825
  }
];

export default function BuyerDashboard() {
  return (
    <div className="bg-gray-50 py-6">
      <div className="container-custom">
        <h1 className="text-3xl font-bold text-primary mb-6">My Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Quick Stats */}
          <div className="bg-white rounded-lg shadow-sm p-6 flex items-center">
            <div className="p-3 bg-primary/10 rounded-full">
              <FaShoppingBag className="text-primary text-xl" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Purchases</h3>
              <p className="text-2xl font-bold text-primary">{mockTransactions.length}</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 flex items-center">
            <div className="p-3 bg-primary/10 rounded-full">
              <FaHeart className="text-primary text-xl" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Favorites</h3>
              <p className="text-2xl font-bold text-primary">{mockFavorites.length}</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 flex items-center">
            <div className="p-3 bg-primary/10 rounded-full">
              <FaCommentDots className="text-primary text-xl" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Active Offers</h3>
              <p className="text-2xl font-bold text-primary">{mockOffers.length}</p>
            </div>
          </div>
        </div>
        
        {/* Recent Purchases */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Recent Purchases</h2>
            <Link href="/dashboard/purchases" className="text-primary flex items-center text-sm font-medium">
              View All <FaAngleRight className="ml-1" />
            </Link>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Item
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Seller
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {mockTransactions.map((transaction) => (
                  <tr key={transaction._id}>
                    <td className="py-4 px-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="relative h-10 w-10 mr-3">
                          <Image
                            src={transaction.product.image}
                            alt={transaction.product.title}
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <div>
                          <Link href={`/products/${transaction.product._id}`} className="text-primary hover:underline">
                            {transaction.product.title}
                          </Link>
                          <div className="text-xs text-gray-500">{transaction.product.condition}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap text-sm">
                      {transaction.seller}
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap text-sm">
                      {transaction.date.toLocaleDateString()}
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap text-sm font-medium">
                      ${transaction.amount}
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Completed
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Active Offers */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Active Offers</h2>
            <Link href="/dashboard/offers" className="text-primary flex items-center text-sm font-medium">
              View All <FaAngleRight className="ml-1" />
            </Link>
          </div>
          
          <div className="space-y-4">
            {mockOffers.map((offer) => (
              <div key={offer._id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex items-center mb-3 md:mb-0">
                    <div className="relative h-16 w-16 mr-4">
                      <Image
                        src={offer.product.image}
                        alt={offer.product.title}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <div>
                      <Link href={`/products/${offer.product._id}`} className="font-medium text-primary hover:underline">
                        {offer.product.title}
                      </Link>
                      <div className="text-sm text-gray-600">{offer.seller}</div>
                      <div className="text-sm text-gray-500">Offered on {offer.date.toLocaleDateString()}</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end">
                    <div className="mb-2">
                      <div className="text-sm text-gray-500">Asking Price:</div>
                      <div className="font-medium">${offer.product.askingPrice}</div>
                    </div>
                    <div className="mb-2">
                      <div className="text-sm text-gray-500">Your Offer:</div>
                      <div className="font-medium">${offer.amount}</div>
                    </div>
                    
                    {offer.status === 'countered' && (
                      <div className="mb-3">
                        <div className="text-sm text-gray-500">Counter Offer:</div>
                        <div className="font-medium text-primary">${offer.counterAmount}</div>
                      </div>
                    )}
                    
                    <div>
                      {offer.status === 'pending' && (
                        <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          Pending
                        </span>
                      )}
                      {offer.status === 'countered' && (
                        <div className="flex space-x-2">
                          <button className="text-xs bg-primary text-white px-3 py-1 rounded-md">
                            Accept
                          </button>
                          <button className="text-xs border border-gray-300 px-3 py-1 rounded-md">
                            Decline
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Favorite Items */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Favorite Items</h2>
            <Link href="/dashboard/favorites" className="text-primary flex items-center text-sm font-medium">
              View All <FaAngleRight className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {mockFavorites.map((favorite) => (
              <div key={favorite._id} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="relative h-32 w-full">
                  <Image
                    src={favorite.product.image}
                    alt={favorite.product.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3">
                  <Link href={`/products/${favorite.product._id}`} className="font-medium text-primary hover:underline line-clamp-1">
                    {favorite.product.title}
                  </Link>
                  <div className="flex justify-between items-center mt-2">
                    <div>
                      <div className="text-xs text-gray-500 line-through">${favorite.product.originalPrice}</div>
                      <div className="font-medium">${favorite.product.askingPrice}</div>
                    </div>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                      {favorite.product.condition}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 