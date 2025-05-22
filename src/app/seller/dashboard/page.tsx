import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBox, FaMoneyBillWave, FaClipboardList, FaPlus, FaEdit, FaEye, FaAngleRight, FaExclamationTriangle } from 'react-icons/fa';

// Mock data for the MVP
const mockProducts = [
  {
    _id: 'p1',
    title: 'TaylorMade SIM2 Driver',
    image: '/images/sample-driver.jpg',
    askingPrice: 350,
    originalPrice: 550,
    condition: 'Like New',
    status: 'listed',
    quantity: 1,
    createdAt: new Date('2025-05-10'),
  },
  {
    _id: 'p2',
    title: 'Callaway Apex Pro Irons (4-PW)',
    image: '/images/sample-irons.jpg',
    askingPrice: 799,
    originalPrice: 1200,
    condition: 'Good',
    status: 'listed',
    quantity: 1,
    createdAt: new Date('2025-05-08'),
  },
  {
    _id: 'p3',
    title: 'Scotty Cameron Newport 2',
    image: '/images/sample-putter.jpg',
    askingPrice: 250,
    originalPrice: 399,
    condition: 'Good',
    status: 'draft',
    quantity: 1,
    createdAt: new Date('2025-05-15'),
  },
  {
    _id: 'p4',
    title: 'Titleist TS3 3-Wood',
    image: '/images/sample-wood.jpg',
    askingPrice: 175,
    originalPrice: 299,
    condition: 'Like New',
    status: 'sold',
    quantity: 0,
    createdAt: new Date('2025-05-01'),
  },
];

const mockOffers = [
  {
    _id: 'o1',
    product: {
      _id: 'p1',
      title: 'TaylorMade SIM2 Driver',
      image: '/images/sample-driver.jpg',
      askingPrice: 350,
    },
    buyer: 'John Smith',
    date: new Date('2025-05-18'),
    amount: 320,
    status: 'pending'
  },
  {
    _id: 'o2',
    product: {
      _id: 'p2',
      title: 'Callaway Apex Pro Irons (4-PW)',
      image: '/images/sample-irons.jpg',
      askingPrice: 799,
    },
    buyer: 'Mike Johnson',
    date: new Date('2025-05-17'),
    amount: 725,
    status: 'countered',
    counterAmount: 775
  },
];

const mockSales = [
  {
    _id: 's1',
    product: {
      _id: 'p4',
      title: 'Titleist TS3 3-Wood',
      image: '/images/sample-wood.jpg',
    },
    buyer: 'David Williams',
    date: new Date('2025-05-15'),
    amount: 175,
    status: 'completed'
  },
];

export default function SellerDashboard() {
  return (
    <div className="bg-gray-50 py-6">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-primary">Seller Dashboard</h1>
          <Link 
            href="/seller/products/create" 
            className="btn-primary flex items-center"
          >
            <FaPlus className="mr-2" /> Add Product
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Quick Stats */}
          <div className="bg-white rounded-lg shadow-sm p-6 flex items-center">
            <div className="p-3 bg-primary/10 rounded-full">
              <FaBox className="text-primary text-xl" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Active Listings</h3>
              <p className="text-2xl font-bold text-primary">
                {mockProducts.filter(p => p.status === 'listed').length}
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 flex items-center">
            <div className="p-3 bg-primary/10 rounded-full">
              <FaMoneyBillWave className="text-primary text-xl" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Sales</h3>
              <p className="text-2xl font-bold text-primary">${mockSales.reduce((sum, sale) => sum + sale.amount, 0)}</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 flex items-center">
            <div className="p-3 bg-primary/10 rounded-full">
              <FaClipboardList className="text-primary text-xl" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Pending Offers</h3>
              <p className="text-2xl font-bold text-primary">
                {mockOffers.filter(o => o.status === 'pending').length}
              </p>
            </div>
          </div>
        </div>
        
        {/* Active Offers */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Active Offers</h2>
            <Link href="/seller/offers" className="text-primary flex items-center text-sm font-medium">
              View All <FaAngleRight className="ml-1" />
            </Link>
          </div>
          
          {mockOffers.length > 0 ? (
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
                        <div className="text-sm text-gray-600">From: {offer.buyer}</div>
                        <div className="text-sm text-gray-500">Received on {offer.date.toLocaleDateString()}</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end">
                      <div className="mb-2">
                        <div className="text-sm text-gray-500">Asking Price:</div>
                        <div className="font-medium">${offer.product.askingPrice}</div>
                      </div>
                      <div className="mb-3">
                        <div className="text-sm text-gray-500">Offer Amount:</div>
                        <div className="font-medium">${offer.amount}</div>
                      </div>
                      
                      {offer.status === 'pending' && (
                        <div className="flex space-x-2">
                          <button className="text-xs bg-primary text-white px-3 py-1 rounded-md">
                            Accept
                          </button>
                          <button className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md">
                            Counter
                          </button>
                          <button className="text-xs border border-gray-300 px-3 py-1 rounded-md">
                            Decline
                          </button>
                        </div>
                      )}
                      
                      {offer.status === 'countered' && (
                        <div>
                          <div className="text-xs mb-1">
                            <span className="font-medium">Countered: </span>
                            ${offer.counterAmount}
                          </div>
                          <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                            Awaiting Response
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-4">No active offers at the moment.</p>
          )}
        </div>
        
        {/* Inventory */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Inventory</h2>
            <Link href="/seller/inventory" className="text-primary flex items-center text-sm font-medium">
              Manage Inventory <FaAngleRight className="ml-1" />
            </Link>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date Added
                  </th>
                  <th className="py-3 px-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {mockProducts.map((product) => (
                  <tr key={product._id}>
                    <td className="py-4 px-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="relative h-10 w-10 mr-3">
                          <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <div>
                          <Link href={`/products/${product._id}`} className="text-primary hover:underline">
                            {product.title}
                          </Link>
                          <div className="text-xs text-gray-500">{product.condition}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap text-sm font-medium">
                      ${product.askingPrice}
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap">
                      {product.status === 'listed' && (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Listed
                        </span>
                      )}
                      {product.status === 'draft' && (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                          Draft
                        </span>
                      )}
                      {product.status === 'sold' && (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                          Sold
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap text-sm">
                      <div className="flex items-center">
                        {product.quantity}
                        {product.quantity === 0 && (
                          <FaExclamationTriangle className="ml-2 text-yellow-500" title="Out of stock" />
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap text-sm text-gray-500">
                      {product.createdAt.toLocaleDateString()}
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex space-x-3 justify-end">
                        <Link 
                          href={`/seller/products/${product._id}/edit`}
                          className="text-primary hover:text-primary/80"
                          title="Edit"
                        >
                          <FaEdit />
                        </Link>
                        <Link 
                          href={`/products/${product._id}`}
                          className="text-gray-600 hover:text-gray-800"
                          title="View"
                        >
                          <FaEye />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
} 