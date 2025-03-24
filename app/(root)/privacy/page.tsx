import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | PitchConnect",
  description: "Learn about how PitchConnect collects, uses, and protects your personal information."
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Privacy Policy</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Our commitment to protecting your privacy and personal information.
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

            <h2>Introduction</h2>
            <p>
              At PitchConnect, we respect your privacy and are committed to protecting your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
              visit our website and use our platform.
            </p>
            <p>
              Please read this Privacy Policy carefully. By accessing or using our platform, you acknowledge that 
              you have read and understood this Privacy Policy. If you do not agree with our policies and practices, 
              please do not use our platform.
            </p>

            <h2>Information We Collect</h2>
            <p>We collect several types of information from and about users of our platform, including:</p>
            <ul>
              <li>
                <strong>Personal Information:</strong> We may collect personal identification information such as 
                your name, email address, GitHub profile information, and profile picture when you create an account.
              </li>
              <li>
                <strong>Startup Information:</strong> Information about your startup ideas, business plans, and other 
                content you submit to the platform.
              </li>
              <li>
                <strong>User Interactions:</strong> Data about how you interact with the platform, including votes, 
                comments, and connections with other users.
              </li>
              <li>
                <strong>Usage Data:</strong> We automatically collect certain information about your device and how 
                you interact with our platform, including your IP address, browser type, operating system, and pages 
                visited.
              </li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect for various purposes, including:</p>
            <ul>
              <li>To provide and maintain our platform</li>
              <li>To allow you to create and share startup pitches</li>
              <li>To facilitate communication between users</li>
              <li>To analyze and improve our platform and user experience</li>
              <li>To send you important information about your account or the platform</li>
              <li>To provide customer support</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2>How We Share Your Information</h2>
            <p>We may share your information in the following situations:</p>
            <ul>
              <li>
                <strong>With Other Users:</strong> Information you provide on public areas of the platform 
                (such as your profile, startup pitches, and comments) will be visible to other users.
              </li>
              <li>
                <strong>With Service Providers:</strong> We may share your information with third-party service 
                providers who perform services on our behalf, such as hosting, data analytics, and email delivery.
              </li>
              <li>
                <strong>For Legal Reasons:</strong> We may disclose your information when required by law or in 
                response to valid legal requests.
              </li>
              <li>
                <strong>With Your Consent:</strong> We may share your information for other purposes with your consent.
              </li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement reasonable security measures to protect your personal information from unauthorized 
              access, use, or disclosure. However, no method of transmission over the internet or electronic 
              storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>Your Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
            <ul>
              <li>The right to access the personal information we have about you</li>
              <li>The right to correct inaccurate personal information</li>
              <li>The right to delete your personal information</li>
              <li>The right to restrict or object to our processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information provided in the "Contact Us" section.
            </p>

            <h2>Cookies and Similar Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our platform and hold certain 
              information. Cookies are files with a small amount of data that may include an anonymous unique identifier.
            </p>
            <p>
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. 
              However, if you do not accept cookies, you may not be able to use some portions of our platform.
            </p>
            <p>
              For more information about our use of cookies, please see our <Link href="/cookies" className="text-blue-600 hover:text-blue-800">Cookie Policy</Link>.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our platform is not intended for children under 16 years of age. We do not knowingly collect personal 
              information from children under 16. If you are a parent or guardian and believe your child has provided 
              us with personal information, please contact us, and we will delete such information.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the 
              new Privacy Policy on this page and updating the "Last updated" date.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy 
              are effective when they are posted on this page.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <ul>
              <li>Email: <a href="mailto:privacy@pitchconnect.com" className="text-blue-600 hover:text-blue-800">privacy@pitchconnect.com</a></li>
              <li>Address: 123 Innovation Way, San Francisco, CA 94107</li>
            </ul>
          </div>

          <div className="mt-12 border-t border-gray-200 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-gray-600 mb-4 sm:mb-0">
                Have questions about our privacy practices?
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Terms of Service</h3>
              <p className="text-gray-600 mb-6">
                Our Terms of Service outline the rules and guidelines for using the PitchConnect platform.
              </p>
              <Link href="/terms" className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center">
                Read our Terms
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