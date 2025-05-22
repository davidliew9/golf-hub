import React from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaUpload } from 'react-icons/fa';

export default function CreateProductPage() {
  return (
    <div className="bg-gray-50 py-6">
      <div className="container-custom">
        <div className="mb-6">
          <Link 
            href="/seller/dashboard" 
            className="text-primary hover:underline inline-flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Dashboard
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-primary mb-6">List a New Product</h1>
          
          <form className="space-y-6">
            {/* Basic Information */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                    Product Title *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    className="input-field"
                    placeholder="e.g. TaylorMade SIM2 Driver"
                  />
                </div>
                
                <div>
                  <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-1">
                    Brand *
                  </label>
                  <select
                    id="brand"
                    name="brand"
                    required
                    className="input-field"
                  >
                    <option value="">Select Brand</option>
                    <option value="TaylorMade">TaylorMade</option>
                    <option value="Callaway">Callaway</option>
                    <option value="Titleist">Titleist</option>
                    <option value="Ping">Ping</option>
                    <option value="Cobra">Cobra</option>
                    <option value="Mizuno">Mizuno</option>
                    <option value="Cleveland">Cleveland</option>
                    <option value="Odyssey">Odyssey</option>
                    <option value="Scotty Cameron">Scotty Cameron</option>
                    <option value="Wilson">Wilson</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">
                    Model *
                  </label>
                  <input
                    type="text"
                    id="model"
                    name="model"
                    required
                    className="input-field"
                    placeholder="e.g. SIM2"
                  />
                </div>
                
                <div>
                  <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                    Year *
                  </label>
                  <input
                    type="number"
                    id="year"
                    name="year"
                    required
                    min="1970"
                    max="2025"
                    className="input-field"
                    placeholder="e.g. 2021"
                  />
                </div>
              </div>
            </div>
            
            {/* Specifications */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold mb-4">Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="shaftType" className="block text-sm font-medium text-gray-700 mb-1">
                    Shaft Type *
                  </label>
                  <select
                    id="shaftType"
                    name="shaftType"
                    required
                    className="input-field"
                  >
                    <option value="">Select Shaft Type</option>
                    <option value="Steel">Steel</option>
                    <option value="Graphite">Graphite</option>
                    <option value="Multi-Material">Multi-Material</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="flex" className="block text-sm font-medium text-gray-700 mb-1">
                    Flex *
                  </label>
                  <select
                    id="flex"
                    name="flex"
                    required
                    className="input-field"
                  >
                    <option value="">Select Flex</option>
                    <option value="Extra Stiff">Extra Stiff</option>
                    <option value="Stiff">Stiff</option>
                    <option value="Regular">Regular</option>
                    <option value="Senior">Senior</option>
                    <option value="Ladies">Ladies</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="condition" className="block text-sm font-medium text-gray-700 mb-1">
                    Condition *
                  </label>
                  <select
                    id="condition"
                    name="condition"
                    required
                    className="input-field"
                  >
                    <option value="">Select Condition</option>
                    <option value="New">New</option>
                    <option value="Like New">Like New</option>
                    <option value="Good">Good</option>
                    <option value="Fair">Fair</option>
                    <option value="Poor">Poor</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                    Quantity Available *
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    required
                    min="1"
                    defaultValue="1"
                    className="input-field"
                  />
                </div>
              </div>
            </div>
            
            {/* Pricing */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold mb-4">Pricing</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="originalPrice" className="block text-sm font-medium text-gray-700 mb-1">
                    Original Price ($) *
                  </label>
                  <input
                    type="number"
                    id="originalPrice"
                    name="originalPrice"
                    required
                    min="0"
                    step="0.01"
                    className="input-field"
                    placeholder="0.00"
                  />
                </div>
                
                <div>
                  <label htmlFor="askingPrice" className="block text-sm font-medium text-gray-700 mb-1">
                    Asking Price ($) *
                  </label>
                  <input
                    type="number"
                    id="askingPrice"
                    name="askingPrice"
                    required
                    min="0"
                    step="0.01"
                    className="input-field"
                    placeholder="0.00"
                  />
                </div>
              </div>
            </div>
            
            {/* Description */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold mb-4">Description</h2>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Product Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={5}
                  className="input-field"
                  placeholder="Describe the product in detail, including any special features, wear and tear, etc."
                ></textarea>
              </div>
            </div>
            
            {/* Images */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold mb-4">Product Images</h2>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Upload at least one image of your product (maximum 5 images).</p>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <div className="flex flex-col items-center">
                    <FaUpload className="text-gray-400 text-3xl mb-2" />
                    <p className="text-sm text-gray-500 mb-2">Drag and drop images here or click to browse</p>
                    <input
                      type="file"
                      id="images"
                      name="images"
                      multiple
                      accept="image/*"
                      className="hidden"
                    />
                    <button type="button" className="text-primary text-sm font-medium">
                      Browse Files
                    </button>
                  </div>
                </div>
                <p className="text-xs text-gray-500">
                  Supported formats: JPEG, PNG. Maximum file size: 5MB.
                </p>
              </div>
            </div>
            
            {/* Submit */}
            <div className="flex justify-between items-center pt-2">
              <div className="space-x-3">
                <button
                  type="submit"
                  className="btn-primary"
                >
                  Publish Listing
                </button>
                <button
                  type="button"
                  className="btn-secondary"
                >
                  Save as Draft
                </button>
              </div>
              <button
                type="button"
                className="text-gray-500 hover:text-gray-700"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 