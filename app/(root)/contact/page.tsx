import { Mail, Phone, MapPin } from "lucide-react";

export const metadata = {
  title: "Contact Us | PitchConnect",
  description: "Get in touch with the PitchConnect team for support, feedback, or partnership opportunities."
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[rgb(238,43,105)] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We&apos;d love to hear from you! Whether you have a question about our platform, 
              need help with your account, or want to explore partnership opportunities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Our team is here to help you with any questions or concerns. Feel free to reach out through any of the following channels.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="h-6 w-6 text-[rgb(238,43,105)]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <p className="mt-1 text-gray-600">
                      <a href="mailto:contact@pitchconnect.com" className="hover:text-[rgb(238,43,105)] transition-colors">
                        contact@pitchconnect.com
                      </a>
                    </p>
                    <p className="mt-1 text-sm text-gray-500">We aim to respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="h-6 w-6 text-[rgb(238,43,105)]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                    <p className="mt-1 text-gray-600">
                      <a href="tel:+1-555-123-4567" className="hover:text-[rgb(238,43,105)] transition-colors">
                        +1 (555) 123-4567
                      </a>
                    </p>
                    <p className="mt-1 text-sm text-gray-500">Monday-Friday, 9am-5pm EST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="h-6 w-6 text-[rgb(238,43,105)]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Office</h3>
                    <p className="mt-1 text-gray-600">
                      123 Innovation Way<br />
                      San Francisco, CA 94107
                    </p>
                    <p className="mt-1 text-sm text-gray-500">By appointment only</p>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="mt-12">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-[rgb(238,43,105)] transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-[rgb(238,43,105)] transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="https://github.com/Dhavalkurkutiya/startup-spark" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[rgb(238,43,105)] transition-colors">
                    <span className="sr-only">GitHub</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="first-name"
                        name="first-name"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[rgb(238,43,105)] focus:ring-[rgb(238,43,105)] py-3 px-4 bg-gray-50"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="last-name"
                        name="last-name"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[rgb(238,43,105)] focus:ring-[rgb(238,43,105)] py-3 px-4 bg-gray-50"
                        placeholder="Smith"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[rgb(238,43,105)] focus:ring-[rgb(238,43,105)] py-3 px-4 bg-gray-50"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[rgb(238,43,105)] focus:ring-[rgb(238,43,105)] py-3 px-4 bg-gray-50"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[rgb(238,43,105)] focus:ring-[rgb(238,43,105)] py-3 px-4 bg-gray-50"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-[rgb(238,43,105)] focus:ring-[rgb(238,43,105)]"
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-600">
                      I agree to PitchConnect&apos;s privacy policy and terms of service
                    </label>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[rgb(238,43,105)] hover:bg-[rgb(218,33,95)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[rgb(238,43,105)] transition-colors"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions about our platform and services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-2">How do I create a startup pitch?</h3>
                <p className="text-gray-600">
                  To create a startup pitch, log in to your account, navigate to the &quot;Submit Your Pitch&quot; 
                  page, and follow the guided form to enter your startup details, description, and goals.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Can I update my pitch after submission?</h3>
                <p className="text-gray-600">
                  Yes, you can update your pitch at any time. Simply go to your profile, locate your 
                  pitch in the &quot;My Startups&quot; section, and click the edit button to make changes.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-2">How can I connect with investors?</h3>
                <p className="text-gray-600">
                  PitchConnect helps entrepreneurs connect with potential investors through our platform. 
                  Create a compelling pitch, engage with the community, and participate in virtual pitch 
                  events for greater visibility with investors.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Is there a cost to use PitchConnect?</h3>
                <p className="text-gray-600">
                  Basic features on PitchConnect are free for all users. We offer premium plans with 
                  additional features for entrepreneurs and investors who need advanced tools.
                </p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <a href="/faq" className="text-[rgb(238,43,105)] font-medium hover:text-[rgb(218,33,95)] transition-colors">
                View all FAQs <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 