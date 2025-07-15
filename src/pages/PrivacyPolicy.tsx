import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ShieldCheckIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              to="/"
              className="inline-flex items-center text-primary-600 hover:text-primary-800 transition-colors link-hover"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                <ShieldCheckIcon className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <div className="bg-gradient-secondary p-6 rounded-lg">
                <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <DocumentTextIcon className="h-6 w-6 text-primary-600 mr-2" />
                  Information We Collect
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>We collect information you provide directly to us, such as:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Name and contact information when you register for courses</li>
                    <li>Payment information for course enrollment</li>
                    <li>Academic information and progress data</li>
                    <li>Communication preferences</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                  How We Use Your Information
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide and improve our educational services</li>
                    <li>Process payments and manage enrollments</li>
                    <li>Communicate with you about courses and updates</li>
                    <li>Analyze usage patterns to enhance user experience</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-secondary p-6 rounded-lg">
                <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                  Information Sharing
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>We do not sell, trade, or rent your personal information to third parties. We may share information only:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>With your consent</li>
                    <li>With service providers who help us operate our platform</li>
                    <li>When required by law or legal process</li>
                    <li>To protect our rights and safety</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                  Data Security
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
                  <p>However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security.</p>
                </div>
              </div>

              <div className="bg-gradient-secondary p-6 rounded-lg">
                <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                  Your Rights
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your information</li>
                    <li>Withdraw consent where applicable</li>
                    <li>File a complaint with relevant authorities</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                  Contact Us
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>If you have any questions about this Privacy Policy, please contact us:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Email: privacy@skillverge.com</li>
                    <li>Phone: +92 XXX XXXXXXX</li>
                    <li>Address: Pakistan</li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary-50 p-6 rounded-lg">
                <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                  Updates to This Policy
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>
                  <p className="text-sm text-gray-600">
                    <strong>Last Updated:</strong> January 15, 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Created by section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-gray-600">
              This website is created by{' '}
              <span className="font-semibold text-primary-600">Muhammad Assad Ullah</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
