import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | AffiliateReviews</title>
        <meta 
          name="description" 
          content="Learn how we collect, use, and protect your personal information on AffiliateReviews." 
        />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Shield className="h-8 w-8 text-primary-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
          </div>
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <p>
            At AffiliateReviews, we take your privacy seriously. This Privacy Policy explains 
            how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>

          <h2>Information We Collect</h2>
          <h3>Automatically Collected Information</h3>
          <p>
            When you visit our site, we automatically collect certain information about your device, 
            including:
          </p>
          <ul>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages you visit and time spent</li>
            <li>Referring website addresses</li>
          </ul>

          <h3>Information You Provide</h3>
          <p>
            We may collect information that you voluntarily provide when:
          </p>
          <ul>
            <li>Contacting us through our contact form</li>
            <li>Subscribing to our newsletter</li>
            <li>Participating in surveys or feedback</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and improve our services</li>
            <li>Analyze site usage and performance</li>
            <li>Communicate with you about updates</li>
            <li>Prevent fraudulent activity</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our website. 
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>

          <h2>Third-Party Services</h2>
          <p>We may use third-party services such as:</p>
          <ul>
            <li>Google Analytics for website analytics</li>
            <li>Email marketing services</li>
            <li>Affiliate network tracking</li>
          </ul>
          <p>
            These third parties have their own privacy policies addressing how they use such information.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement reasonable security measures to protect your information. However, 
            no method of transmission over the Internet or electronic storage is 100% secure.
          </p>

          <h2>Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of marketing communications</li>
          </ul>

          <h2>Children's Privacy</h2>
          <p>
            Our website is not intended for children under 13. We do not knowingly collect 
            personally identifiable information from children under 13.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes 
            by posting the new Privacy Policy on this page.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us through our website.
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
