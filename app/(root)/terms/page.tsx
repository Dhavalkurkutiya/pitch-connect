import Link from "next/link";

export const metadata = {
  title: "Terms of Service | PitchConnect",
  description: "PitchConnect's Terms of Service. Learn about the rules and guidelines for using our platform."
};

export default function TermsPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Terms of Service</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Please read these terms carefully before using our platform.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600">
              <strong>Last updated:</strong> May 1, 2023
            </p>

            <h2>1. Introduction</h2>
            <p>
              Welcome to PitchConnect. These Terms of Service ("Terms") govern your access to and use of the 
              PitchConnect website and platform (the "Service"). By accessing or using the Service, you agree 
              to be bound by these Terms. If you disagree with any part of the Terms, you may not access the Service.
            </p>

            <h2>2. Eligibility</h2>
            <p>
              To use the Service, you must be at least 16 years of age. By using the Service, you represent and 
              warrant that you have the legal capacity to enter into a binding agreement with PitchConnect and are 
              not prohibited from using the Service under the laws of any applicable jurisdiction.
            </p>

            <h2>3. User Accounts</h2>
            <p>
              When you create an account with us, you must provide information that is accurate, complete, and current 
              at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination 
              of your account on our Service.
            </p>
            <p>
              You are responsible for safeguarding the password that you use to access the Service and for any activities 
              or actions under your password, whether your password is with our Service or a third-party service.
            </p>
            <p>
              You agree not to disclose your password to any third party. You must notify us immediately upon becoming 
              aware of any breach of security or unauthorized use of your account.
            </p>

            <h2>4. Intellectual Property</h2>
            <h3>4.1 Our Content</h3>
            <p>
              The Service and its original content, features, and functionality are and will remain the exclusive property 
              of PitchConnect and its licensors. The Service is protected by copyright, trademark, and other laws of both 
              the United States and foreign countries. Our trademarks and trade dress may not be used in connection with 
              any product or service without the prior written consent of PitchConnect.
            </p>
            <h3>4.2 User Content</h3>
            <p>
              When you create or post content on the Service, you retain ownership of any intellectual property rights 
              that you hold in that content. By submitting content to the Service, you grant PitchConnect a worldwide, 
              non-exclusive, royalty-free license to use, reproduce, modify, publish, distribute, and display such content 
              in connection with the Service and PitchConnect's business, including for promoting the Service.
            </p>
            <p>
              You represent and warrant that you own or have the necessary rights to the content you post on the Service, 
              and that such content does not violate the rights of any third party.
            </p>

            <h2>5. User Conduct</h2>
            <p>You agree not to:</p>
            <ul>
              <li>
                Use the Service for any illegal purpose or in violation of any local, state, national, or international law.
              </li>
              <li>
                Violate the rights of others, including privacy and intellectual property rights.
              </li>
              <li>
                Post or transmit any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, 
                vulgar, obscene, or otherwise objectionable.
              </li>
              <li>
                Impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a 
                person or entity.
              </li>
              <li>
                Engage in any activity that interferes with or disrupts the Service or the servers and networks 
                connected to the Service.
              </li>
              <li>
                Use the Service to send unsolicited communications, promotions, or advertisements, or to spam, phish, 
                or harvest others' personal information.
              </li>
              <li>
                Attempt to bypass any measures of the Service designed to prevent or restrict access to the Service, 
                or any portion of the Service.
              </li>
            </ul>

            <h2>6. Startup Submissions</h2>
            <p>
              When you submit a startup idea or pitch on PitchConnect, you understand and agree that:
            </p>
            <ul>
              <li>
                The information will be publicly available and may be viewed, shared, and commented on by other users.
              </li>
              <li>
                PitchConnect does not guarantee the confidentiality of any information you submit.
              </li>
              <li>
                You are solely responsible for the protection of your intellectual property, and we recommend consulting 
                with a legal professional before sharing sensitive business information or ideas.
              </li>
              <li>
                PitchConnect does not claim ownership of your startup ideas or pitches, but we may use, promote, or 
                feature them within our Service as described in Section 4.2.
              </li>
            </ul>

            <h2>7. Third-Party Links</h2>
            <p>
              The Service may contain links to third-party websites or services that are not owned or controlled by 
              PitchConnect. PitchConnect has no control over, and assumes no responsibility for, the content, privacy 
              policies, or practices of any third-party websites or services. You further acknowledge and agree that 
              PitchConnect shall not be responsible or liable, directly or indirectly, for any damage or loss caused 
              or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or 
              services available on or through any such websites or services.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              In no event shall PitchConnect, its directors, employees, partners, agents, suppliers, or affiliates, be 
              liable for any indirect, incidental, special, consequential, or punitive damages, including without 
              limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul>
              <li>Your access to or use of or inability to access or use the Service;</li>
              <li>Any conduct or content of any third party on the Service;</li>
              <li>Any content obtained from the Service; and</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content;</li>
            </ul>
            <p>
              Whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or 
              not we have been informed of the possibility of such damage, and even if a remedy set forth herein is 
              found to have failed of its essential purpose.
            </p>

            <h2>9. Disclaimer</h2>
            <p>
              Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" 
              basis. The Service is provided without warranties of any kind, whether express or implied, including, 
              but not limited to, implied warranties of merchantability, fitness for a particular purpose, 
              non-infringement, or course of performance.
            </p>
            <p>
              PitchConnect does not warrant that the Service will function uninterrupted, secure, or available at any 
              particular time or location; that any errors or defects will be corrected; that the Service is free of 
              viruses or other harmful components; or that the results of using the Service will meet your requirements.
            </p>

            <h2>10. Termination</h2>
            <p>
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason 
              whatsoever, including without limitation if you breach the Terms.
            </p>
            <p>
              Upon termination, your right to use the Service will immediately cease. If you wish to terminate your 
              account, you may simply discontinue using the Service or delete your account.
            </p>

            <h2>11. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision 
              is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What 
              constitutes a material change will be determined at our sole discretion.
            </p>
            <p>
              By continuing to access or use our Service after those revisions become effective, you agree to be bound 
              by the revised terms. If you do not agree to the new terms, please stop using the Service.
            </p>

            <h2>12. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the State of California, 
              United States, without regard to its conflict of law provisions.
            </p>
            <p>
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those 
              rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining 
              provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us 
              regarding our Service, and supersede and replace any prior agreements we might have between us regarding 
              the Service.
            </p>

            <h2>13. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <ul>
              <li>Email: <a href="mailto:legal@pitchconnect.com" className="text-blue-600 hover:text-blue-800">legal@pitchconnect.com</a></li>
              <li>Address: 123 Innovation Way, San Francisco, CA 94107</li>
            </ul>
          </div>

          <div className="mt-12 border-t border-gray-200 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-gray-600 mb-4 sm:mb-0">
                Have questions about our Terms of Service?
              </p>
              <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Policies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">Related Policies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Privacy Policy</h3>
              <p className="text-gray-600 mb-6">
                Learn about how we collect, use, and protect your personal information.
              </p>
              <Link href="/privacy" className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center">
                Read our Privacy Policy
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cookie Policy</h3>
              <p className="text-gray-600 mb-6">
                Learn about how we use cookies and similar technologies on our platform.
              </p>
              <Link href="/cookies" className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center">
                Read our Cookie Policy
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 