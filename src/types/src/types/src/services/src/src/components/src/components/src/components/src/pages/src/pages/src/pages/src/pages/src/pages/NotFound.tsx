import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="text-center py-16">
      <h1 className="text-9xl font-bold text-gray-200 mb-4">404</h1>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        The page you're looking for doesn't exist or has been moved. 
        Try searching or return to the homepage.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          <Home className="h-5 w-5 mr-2" />
          Back to Homepage
        </Link>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
        >
          <Search className="h-5 w-5 mr-2" />
          Browse Products
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
