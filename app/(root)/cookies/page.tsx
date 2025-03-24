import Link from "next/link";

export const metadata = {
  title: "Cookie Policy | PitchConnect",
  description: "Learn about how PitchConnect uses cookies and similar technologies on our platform."
};

export default function CookiePolicyPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Cookie Policy</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Understanding how we use cookies to improve your experience.
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

            <h2>What are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your device when you visit a website. They are widely used to 
              make websites work more efficiently and provide information to the website owners. Cookies enhance user 
              experience by remembering your preferences and enabling certain features.
            </p>

            <h2>How We Use Cookies</h2>
            <p>
              At PitchConnect, we use cookies and similar technologies for various purposes, including:
            </p>
            <ul>
              <li>
                <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly 
                and enable you to use its features. They cannot be turned off in our systems.
              </li>
              <li>
                <strong>Analytical/Performance Cookies:</strong> These cookies allow us to recognize and count the number 
                of visitors and see how visitors move around our website. This helps us improve how our website works, 
                for example, by ensuring that users find what they are looking for easily.
              </li>
              <li>
                <strong>Functionality Cookies:</strong> These cookies are used to recognize you when you return to our 
                website. They enable us to personalize our content for you, remember your preferences (for example, your 
                language or region), and enhance your experience on our platform.
              </li>
              <li>
                <strong>Targeting Cookies:</strong> These cookies record your visit to our website, the pages you have 
                visited, and the links you have followed. We may use this information to make our website and the 
                advertising displayed on it more relevant to your interests.
              </li>
            </ul>

            <h2>Types of Cookies We Use</h2>
            
            <h3>Session Cookies</h3>
            <p>
              Session cookies are temporary and are deleted from your device when you close your web browser. We use 
              session cookies to keep you logged in during your visit and to enable certain features of our platform.
            </p>

            <h3>Persistent Cookies</h3>
            <p>
              Persistent cookies remain on your device even after you close your browser, until you delete them or 
              they expire. We use persistent cookies to remember your preferences and settings for future visits.
            </p>

            <h3>First-Party Cookies</h3>
            <p>
              First-party cookies are set by the website you are visiting. Only PitchConnect can read these cookies.
            </p>

            <h3>Third-Party Cookies</h3>
            <p>
              Third-party cookies are set by third-party services that appear on our pages. These might include analytics 
              services that help us understand how users interact with our website, or social media platforms that 
              allow you to share content.
            </p>

            <h2>Specific Cookies We Use</h2>
            <p>
              Here's a detailed list of the cookies we use on our platform:
            </p>

            <table className="border-collapse border border-gray-300 w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Provider</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Expiration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">_session</td>
                  <td className="border border-gray-300 px-4 py-2">pitchconnect.com</td>
                  <td className="border border-gray-300 px-4 py-2">Maintains your session while you use our platform</td>
                  <td className="border border-gray-300 px-4 py-2">Session</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">_user_preferences</td>
                  <td className="border border-gray-300 px-4 py-2">pitchconnect.com</td>
                  <td className="border border-gray-300 px-4 py-2">Remembers your preferences and settings</td>
                  <td className="border border-gray-300 px-4 py-2">1 year</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">_ga</td>
                  <td className="border border-gray-300 px-4 py-2">Google Analytics</td>
                  <td className="border border-gray-300 px-4 py-2">Distinguishes users for analytics</td>
                  <td className="border border-gray-300 px-4 py-2">2 years</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">_fbp</td>
                  <td className="border border-gray-300 px-4 py-2">Facebook</td>
                  <td className="border border-gray-300 px-4 py-2">Used to deliver advertisements or track visitors</td>
                  <td className="border border-gray-300 px-4 py-2">3 months</td>
                </tr>
              </tbody>
            </table>

            <h2>Your Cookie Choices</h2>
            <p>
              Most web browsers allow you to control cookies through their settings preferences. However, limiting the 
              ability of websites to set cookies may impact your overall user experience. Below are links to manage cookie 
              settings on popular web browsers:
            </p>
            <ul>
              <li><a href="https://support.google.com/chrome/answer/95647?hl=en" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Safari</a></li>
              <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Microsoft Edge</a></li>
            </ul>

            <h2>Do Not Track</h2>
            <p>
              Some browsers have a "Do Not Track" feature that lets you tell websites that you do not want to have your 
              online activities tracked. We currently do not respond to "Do Not Track" signals because there is no common 
              industry standard for implementing this feature.
            </p>

            <h2>Updates to This Cookie Policy</h2>
            <p>
              We may update our Cookie Policy from time to time to reflect changes in technology, regulation, or our 
              business practices. Any changes will be posted on this page with an updated "Last updated" date. We 
              encourage you to check this page regularly to stay informed about our use of cookies.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
            </p>
            <ul>
              <li>Email: <a href="mailto:privacy@pitchconnect.com" className="text-blue-600 hover:text-blue-800">privacy@pitchconnect.com</a></li>
              <li>Address: 123 Innovation Way, San Francisco, CA 94107</li>
            </ul>
          </div>

          <div className="mt-12 border-t border-gray-200 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-gray-600 mb-4 sm:mb-0">
                Have questions about our Cookie Policy?
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
          </div>
        </div>
      </section>
    </div>
  );
} 