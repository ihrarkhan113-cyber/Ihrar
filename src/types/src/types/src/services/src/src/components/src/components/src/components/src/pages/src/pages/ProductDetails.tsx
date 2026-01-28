import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { 
  Star, 
  Check, 
  X, 
  Calendar,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Loader2
} from 'lucide-react';
import { getProductBySlug } from '../services/firebase';
import { Product } from '../types/product';

const ProductDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const data = await getProductBySlug(slug!);
        if (data) {
          setProduct(data as Product);
        } else {
          setError('Product not found');
        }
      } catch (err) {
        setError('Failed to load product');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchProduct();
    }
  }, [slug]);

  const nextImage = () => {
    if (product) {
      setCurrentImageIndex((prev) => 
        prev === product.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (product) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? product.images.length - 1 : prev - 1
      );
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 text-primary-600 animate-spin" />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{product.title} - Review & Rating | AffiliateReviews</title>
        <meta name="description" content={product.shortDescription} />
        <meta property="og:title" content={product.title} />
        <meta property="og:description" content={product.shortDescription} />
        <meta property="og:image" content={product.images[0]} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": product.title,
            "image": product.images,
            "description": product.shortDescription,
            "brand": {
              "@type": "Brand",
              "name": product.brand
            },
            "review": {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": product.rating,
                "bestRating": "5"
              }
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": product.rating,
              "reviewCount": "1"
            },
            "offers": {
              "@type": "Offer",
              "priceCurrency": product.currency,
              "price": product.price,
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      </Helmet>

      {/* Breadcrumb */}
      <nav className="flex items-center text-sm text-gray-600 mb-6">
        <Link to="/" className="hover:text-primary-600">Home</Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <Link 
          to={`/?category=${product.category}`} 
          className="hover:text-primary-600 capitalize"
        >
          {product.category}
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <span className="text-gray-900 font-medium truncate">{product.title}</span>
      </nav>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
          {/* Image Gallery */}
          <div>
            <div className="relative mb-4">
              <div className="aspect-w-4 aspect-h-3 bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={product.images[currentImageIndex]}
                  alt={product.title}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}
              </div>
              
              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex space-x-2 mt-4 overflow-x-auto">
                  {product.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 ${
                        currentImageIndex === index 
                          ? 'border-primary-600' 
                          : 'border-transparent'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.title} view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Rating & Price */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-500 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-700 font-semibold">
                  {product.rating.toFixed(1)}/5.0
                </span>
              </div>
              <div className="text-3xl font-bold text-primary-600">
                {product.currency} {product.price.toFixed(2)}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <span className="inline-block bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full mb-2">
                {product.brand}
              </span>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.title}
              </h1>
              <p className="text-gray-600">{product.shortDescription}</p>
            </div>

            {/* Pros & Cons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2 flex items-center">
                  <Check className="h-5 w-5 mr-2" />
                  Pros
                </h3>
                <ul className="space-y-1">
                  {product.pros.map((pro, index) => (
                    <li key={index} className="text-green-700 flex items-start">
                      <Check className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2 flex items-center">
                  <X className="h-5 w-5 mr-2" />
                  Cons
                </h3>
                <ul className="space-y-1">
                  {product.cons.map((con, index) => (
                    <li key={index} className="text-red-700 flex items-start">
                      <X className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Specifications */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Specifications</h3>
              <ul className="space-y-2">
                {product.specs.map((spec, index) => (
                  <li key={index} className="flex border-b border-gray-100 pb-2">
                    <span className="text-gray-700">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Full Description */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Detailed Review</h3>
              <div className="prose max-w-none text-gray-700">
                {product.fullDescription.split('\n').map((para, index) => (
                  <p key={index} className="mb-3">{para}</p>
                ))}
              </div>
            </div>

            {/* Updated Timestamp & CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-gray-200">
              <div className="text-sm text-gray-500 mb-4 sm:mb-0 flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Last updated: {product.updatedAt?.toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <a
                href={product.affiliateUrl}
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center w-full sm:w-auto"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Buy Now on Retailer Site
              </a>
            </div>

            {/* Affiliate Notice */}
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-100 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Note:</strong> We may earn a commission if you make a purchase through our links. 
                This helps support our independent reviews and testing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
