import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AlertCircle } from 'lucide-react';

const AffiliateDisclosure: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Affiliate Disclosure | AffiliateReviews</title>
        <meta 
          name="description" 
          content="Learn about our affiliate partnerships and how we maintain editorial independence in our product reviews." 
        />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Affiliate Disclosure</h1>
          <div className="flex items-center text-gray-600 mb-6">
            <AlertCircle className="h-5 w-5 mr-2" />
            <span>Last updated: {new Date().toLocaleDateString()}</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Transparency Matters</h3>
            <p className="text-blue-800">
              We believe in complete transparency. This disclosure outlines our affiliate relationships 
              and how they impact our content.
            </p>
          </div>

          <h2>Our Affiliate Relationships</h2>
          <p>
            AffiliateReviews participates in various affiliate marketing programs, which means 
            we may earn commissions on purchases made through our links to retailer sites. 
            This includes, but is not limited to, the Amazon Services LLC Associates Program.
          </p>

          <h2>How This Affects Our Content</h2>
          <ul>
            <li>
              <strong>Editorial Independence:</strong> Our reviews and recommendations are based 
              on independent research, testing, and analysis. We never allow affiliate partnerships 
              to influence our ratings or recommendations.
            </li>
            <li>
              <strong>No Additional Cost to You:</strong> When you use our affiliate links, 
              the price you pay remains exactly the same. The commission comes from the retailer's 
              existing marketing budget.
            </li>
            <li>
              <strong>Testing & Research:</strong> We purchase products for testing using our 
              own funds whenever possible to ensure unbiased evaluations.
            </li>
          </ul>

          <h2>Why We Use Affiliate Links</h2>
          <p>
            Affiliate commissions help support our work, allowing us to:
          </p>
          <ul>
            <li>Purchase products for hands-on testing</li>
            <li>Maintain our website and servers</li>
            <li>Compensate our writers and researchers</li>
            <li>Continue providing free, high-quality content</li>
          </ul>

          <h2>Our Commitment to You</h2>
          <p>
            We are committed to providing honest, accurate, and helpful reviews. Our primary goal 
            is to help you make informed purchasing decisions. While we appreciate when you use 
            our links, we never compromise our editorial standards for the sake of commissions.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Questions?</h3>
            <p className="text-gray-700">
              If you have any questions about our affiliate relationships or editorial process, 
              please don't hesitate to contact us.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AffiliateDisclosure;
