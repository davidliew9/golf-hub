"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaUser, FaSignOutAlt, FaGolfBall, FaSearch, FaStore, FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';

interface NavigationProps {
  user?: {
    name: string;
    role: 'buyer' | 'seller' | 'admin';
  } | null;
}

const Navigation: React.FC<NavigationProps> = ({ user }) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => pathname === path;
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-primary text-white shadow-md">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold flex items-center">
            <FaGolfBall className="mr-2" /> Golf Hub
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              href="/products" 
              className={`hover:text-accent transition-colors ${isActive('/products') ? 'text-accent' : ''}`}
            >
              Browse Products
            </Link>
            
            {user && (
              <>
                {user.role === 'seller' && (
                  <Link 
                    href="/seller/dashboard" 
                    className={`hover:text-accent transition-colors ${isActive('/seller/dashboard') ? 'text-accent' : ''}`}
                  >
                    Seller Dashboard
                  </Link>
                )}
                <Link 
                  href="/dashboard" 
                  className={`hover:text-accent transition-colors ${isActive('/dashboard') ? 'text-accent' : ''}`}
                >
                  My Dashboard
                </Link>
              </>
            )}
            
            {user ? (
              <div className="relative group">
                <button className="flex items-center hover:text-accent transition-colors">
                  <FaUser className="mr-1" /> {user.name}
                </button>
                <div className="absolute right-0 w-48 py-2 mt-2 bg-white rounded-md shadow-xl z-10 hidden group-hover:block">
                  <Link 
                    href="/profile" 
                    className="block px-4 py-2 text-primary hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  {user.role === 'buyer' && (
                    <Link 
                      href="/favorites" 
                      className="block px-4 py-2 text-primary hover:bg-gray-100"
                    >
                      Favorites
                    </Link>
                  )}
                  <Link 
                    href="/auth/logout" 
                    className="block px-4 py-2 text-primary hover:bg-gray-100"
                  >
                    <FaSignOutAlt className="inline mr-1" /> Logout
                  </Link>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link 
                  href="/auth/login" 
                  className="hover:text-accent transition-colors"
                >
                  Login
                </Link>
                <Link 
                  href="/auth/signup" 
                  className="bg-accent text-primary px-4 py-1 rounded-md hover:opacity-90 transition-opacity"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-xl">
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary-600">
            <Link 
              href="/products" 
              className="block py-2 hover:text-accent transition-colors"
            >
              Browse Products
            </Link>
            
            {user && (
              <>
                {user.role === 'seller' && (
                  <Link 
                    href="/seller/dashboard" 
                    className="block py-2 hover:text-accent transition-colors"
                  >
                    <FaStore className="inline mr-2" /> Seller Dashboard
                  </Link>
                )}
                <Link 
                  href="/dashboard" 
                  className="block py-2 hover:text-accent transition-colors"
                >
                  My Dashboard
                </Link>
                <Link 
                  href="/profile" 
                  className="block py-2 hover:text-accent transition-colors"
                >
                  <FaUser className="inline mr-2" /> Profile
                </Link>
                {user.role === 'buyer' && (
                  <Link 
                    href="/favorites" 
                    className="block py-2 hover:text-accent transition-colors"
                  >
                    Favorites
                  </Link>
                )}
                <Link 
                  href="/auth/logout" 
                  className="block py-2 hover:text-accent transition-colors"
                >
                  <FaSignOutAlt className="inline mr-2" /> Logout
                </Link>
              </>
            )}
            
            {!user && (
              <div className="flex flex-col space-y-2 mt-4">
                <Link 
                  href="/auth/login" 
                  className="text-center py-2 hover:text-accent transition-colors"
                >
                  Login
                </Link>
                <Link 
                  href="/auth/signup" 
                  className="text-center bg-accent text-primary py-2 rounded-md hover:opacity-90 transition-opacity"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation; 