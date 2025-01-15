'use client';

import React from 'react';
import Link from 'next/link';
import { Mail } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-indigo-600">
                InboxGist
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
            <p className="text-sm text-gray-600 mb-8">Effective Date: 22 December, 2024</p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                Thank you for using InboxGist. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our Chrome extension. By using the Extension, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
              <p className="text-gray-600 mb-4">The Extension requests the following information:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Basic User Information:</strong> Name, email address, and profile picture (retrieved through Google OAuth2.0).</li>
                <li><strong>Gmail API Access (Read-Only):</strong> Access to read emails for specific purpose, e.g., summarization, notification, etc.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We use the collected information to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide the core functionality of the Extension.</li>
                <li>Display relevant user data within the Extension interface.</li>
                <li>Enhance user experience and improve performance.</li>
              </ul>
              <p className="mt-4 text-gray-600 bg-blue-50 p-4 rounded-lg">
                <strong>Important:</strong> We do not store, share, or sell any user data retrieved through Gmail API or Google OAuth. The data is processed locally and used solely for the purpose described above.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Data Protection</h2>
              <p className="text-gray-600 mb-4">We take appropriate measures to protect your information from unauthorized access or disclosure. Key practices include:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>OAuth 2.0 authentication to ensure secure data access.</li>
                <li>No permanent storage of user emails or sensitive information.</li>
                <li>Limited data access (read-only) to ensure minimal risk.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Third-Party Services</h2>
              <p className="text-gray-600">
                The Extension does not share user data with third parties. All data access is strictly limited to the functionality of the Extension.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. User Control and Consent</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Users can revoke access at any time via their <Link href="https://myaccount.google.com/permissions" className="text-indigo-600 hover:text-indigo-800">Google Account</Link>.</li>
                <li>Uninstalling the Extension will immediately terminate any data processing.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Changes to This Privacy Policy</h2>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the effective date will be updated accordingly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 flex items-center space-x-2 text-gray-600">
                <span>Ayush Katare,</span>
                <Mail className="w-4 h-4" />
                <a href="mailto:inboxgist@gmail.com" className="text-indigo-600 hover:text-indigo-800">
                  inboxgist@gmail.com
                </a>
              </div>
            </section>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-600 text-sm text-center">
                By using this Extension, you acknowledge that you have read and understood this Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;