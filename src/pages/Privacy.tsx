import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            
            <div className="prose prose-gray max-w-none">
              <p className="text-sm text-gray-600 mb-6">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
                <p className="text-gray-700 mb-4">
                  Amoo Daniel ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. 
                  This privacy policy explains how we collect, use, and safeguard your information when you visit our website, 
                  use our services, or interact with our applications and chatbots.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Information We Collect</h2>
                
                <h3 className="text-xl font-medium text-gray-800 mb-3">2.1 Personal Information</h3>
                <p className="text-gray-700 mb-4">We may collect the following personal information:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Professional information (company, job title)</li>
                  <li>Communication preferences</li>
                  <li>Messages and content you send through our contact forms or chatbots</li>
                </ul>

                <h3 className="text-xl font-medium text-gray-800 mb-3">2.2 WhatsApp and Messaging Data</h3>
                <p className="text-gray-700 mb-4">
                  When you interact with our WhatsApp bot or other messaging services:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>WhatsApp phone number and profile information</li>
                  <li>Message content and conversation history</li>
                  <li>Timestamps of interactions</li>
                  <li>Service usage patterns</li>
                </ul>

                <h3 className="text-xl font-medium text-gray-800 mb-3">2.3 Technical Information</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Website usage data and analytics</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">We use your information for the following purposes:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Providing and improving our services</li>
                  <li>Responding to your inquiries and providing customer support</li>
                  <li>Sending updates about our services (with your consent)</li>
                  <li>Analyzing usage patterns to improve user experience</li>
                  <li>Complying with legal obligations</li>
                  <li>Operating our WhatsApp bot and messaging services</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Login Dialog and App Details</h2>
                <p className="text-gray-700 mb-4">
                  <strong>For Facebook/Meta Login and App Integration:</strong>
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>We do not store Facebook login credentials</li>
                  <li>We only access basic profile information you explicitly permit</li>
                  <li>Login sessions are secure and encrypted</li>
                  <li>You can revoke access at any time through your Facebook settings</li>
                  <li>We comply with Facebook's Platform Policy and Data Use Policy</li>
                </ul>
                
                <p className="text-gray-700 mb-4">
                  <strong>WhatsApp Business API Compliance:</strong>
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>We use WhatsApp Business API in compliance with Meta's terms</li>
                  <li>All communications are opt-in based</li>
                  <li>Users can opt-out at any time by messaging "STOP"</li>
                  <li>We do not share WhatsApp data with third parties except as required by law</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Data Sharing and Disclosure</h2>
                <p className="text-gray-700 mb-4">We do not sell your personal information. We may share your data only in these situations:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>With your explicit consent</li>
                  <li>To comply with legal requirements</li>
                  <li>With trusted service providers who assist us (under strict confidentiality agreements)</li>
                  <li>To protect our rights and prevent fraud</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Data Security</h2>
                <p className="text-gray-700 mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal information:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments</li>
                  <li>Access controls and authentication</li>
                  <li>Secure hosting environments</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Your Rights</h2>
                <p className="text-gray-700 mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Cookies and Tracking</h2>
                <p className="text-gray-700 mb-4">
                  We use cookies and similar technologies to improve your experience. You can manage cookie preferences through your browser settings.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Third-Party Services</h2>
                <p className="text-gray-700 mb-4">
                  Our services may integrate with third-party platforms including but not limited to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Facebook/Meta services (WhatsApp Business API, Facebook Login)</li>
                  <li>Analytics providers</li>
                  <li>Cloud hosting services</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  These services have their own privacy policies, and we encourage you to review them.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Children's Privacy</h2>
                <p className="text-gray-700 mb-4">
                  Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Changes to This Policy</h2>
                <p className="text-gray-700 mb-4">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about this privacy policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Email:</strong> amoodaniel99@gmail.com<br />
                    <strong>Website:</strong> https://amoodaniel.com
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;