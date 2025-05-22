import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50">
      <div className="container-custom text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
          Golf Hub
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          The premier marketplace for used golf clubs and equipment from trusted vendors.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/auth/login" 
            className="btn-primary"
          >
            Log In
          </Link>
          <Link 
            href="/auth/signup" 
            className="btn-secondary"
          >
            Sign Up
          </Link>
        </div>
        <div className="mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Coming Soon
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-white">
              <h3 className="text-xl font-bold mb-2">Professional Sellers</h3>
              <p>Connect with trusted golf shops and professionals selling quality equipment.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-white">
              <h3 className="text-xl font-bold mb-2">Secure Transactions</h3>
              <p>Buy with confidence through our secure payment system and seller reviews.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-white">
              <h3 className="text-xl font-bold mb-2">Quality Equipment</h3>
              <p>Browse and purchase used golf clubs with detailed condition ratings.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 