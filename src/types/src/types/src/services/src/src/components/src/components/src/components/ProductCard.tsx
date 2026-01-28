import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag, ExternalLink } from 'lucide-react';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Product Image */}
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute top-2 right-2 bg-primary-600 text-white px-2 py-1 rounded text-sm font-semibold">
          {product.currency} {product.price.toFixed(2)}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {product.category}
          </span>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="ml-1 text-sm font-semibold">{product.rating.toFixed(1)}</span>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {product.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {product.shortDescription}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary-600">
            {product.currency} {product.price.toFixed(2)}
          </span>
          <div className="flex space-x-2">
            <Link
              to={`/product/${product.slug}`}
              className="px-3 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center text-sm"
            >
              <ShoppingBag className="h-4 w-4 mr-1" />
              View Details
            </Link>
            <a
              href={product.affiliateUrl}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="px-3 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors flex items-center text-sm"
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
