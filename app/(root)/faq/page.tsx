import Link from "next/link";

export const metadata = {
  title: "FAQ | PitchConnect",
  description: "Find answers to frequently asked questions about using PitchConnect, our platform for entrepreneurs."
};

export default function FAQPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-[rgb(238,43,105)] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Find answers to common questions about PitchConnect and how to make the most of our platform.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Search Box */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <input
                type="text"
                className="w-full py-3 pl-12 pr-4 rounded-lg border border-gray-300 focus:ring-[rgb(238,43,105)] focus:border-[rgb(238,43,105)] bg-white shadow-sm"
                placeholder="Search for answers..."
              />
              <div className="absolute left-4 top-3.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="mb-12">
            <div className="overflow-x-auto scrollbar-thin relative pb-1">
              <div className="flex gap-2 pb-2 px-1">
                <button className="bg-[rgb(238,43,105)] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[rgb(218,33,95)] transition-colors whitespace-nowrap">
                  All Questions
                </button>
                <button className="bg-white text-gray-700 px-4 py-2 rounded-lg text-sm font-medium border border-gray-300 hover:bg-gray-50 transition-colors whitespace-nowrap">
                  Getting Started
                </button>
                <button className="bg-white text-gray-700 px-4 py-2 rounded-lg text-sm font-medium border border-gray-300 hover:bg-gray-50 transition-colors whitespace-nowrap">
                  Account & Profile
                </button>
                <button className="bg-white text-gray-700 px-4 py-2 rounded-lg text-sm font-medium border border-gray-300 hover:bg-gray-50 transition-colors whitespace-nowrap">
                  Pitches & Startups
                </button>
                <button className="bg-white text-gray-700 px-4 py-2 rounded-lg text-sm font-medium border border-gray-300 hover:bg-gray-50 transition-colors whitespace-nowrap">
                  Voting & Feedback
                </button>
                <button className="bg-white text-gray-700 px-4 py-2 rounded-lg text-sm font-medium border border-gray-300 hover:bg-gray-50 transition-colors whitespace-nowrap">
                  Investors
                </button>
                <button className="bg-white text-gray-700 px-4 py-2 rounded-lg text-sm font-medium border border-gray-300 hover:bg-gray-50 transition-colors whitespace-nowrap">
                  Privacy & Security
                </button>
                <button className="bg-white text-gray-700 px-4 py-2 rounded-lg text-sm font-medium border border-gray-300 hover:bg-gray-50 transition-colors whitespace-nowrap">
                  Billing
                </button>
              </div>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Getting Started</h2>
            
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer bg-white hover:bg-gray-50 group-open:bg-gray-50 group-open:border-b group-open:border-[rgb(238,43,105)]">
                  <h3 className="text-lg font-medium text-gray-900 group-open:text-[rgb(238,43,105)]">What is PitchConnect?</h3>
                  <span className="ml-6 flex-shrink-0 flex items-center">
                    <svg className="h-6 w-6 text-gray-400 group-open:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <svg className="h-6 w-6 text-[rgb(238,43,105)] hidden group-open:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                    </svg>
                  </span>
                </summary>
                <div className="p-6 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600">
                    PitchConnect is a dynamic platform where entrepreneurs can showcase their startup ideas, 
                    receive community feedback through voting, connect with fellow innovators, and participate 
                    in virtual pitch competitions. Our mission is to help founders refine their ideas, 
                    build connections, and accelerate their startup journey.
                  </p>
                </div>
              </details>
            </div>
            
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer bg-white hover:bg-gray-50">
                  <h3 className="text-lg font-medium text-gray-900">How do I create an account?</h3>
                  <span className="ml-6 flex-shrink-0 flex items-center">
                    <svg className="h-6 w-6 text-gray-400 group-open:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <svg className="h-6 w-6 text-gray-400 hidden group-open:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                    </svg>
                  </span>
                </summary>
                <div className="p-6 pt-0 border-t border-gray-200">
                  <p className="text-gray-600 mb-4">
                    Creating an account on PitchConnect is simple. You can sign up using your GitHub account:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-600">
                    <li>Click the &quot;Login&quot; button in the top-right corner of the navigation bar</li>
                    <li>Select &quot;Sign in with GitHub&quot;</li>
                    <li>Authorize PitchConnect to access your GitHub account information</li>
                    <li>Complete your profile with additional information about your background and interests</li>
                  </ol>
                </div>
              </details>
            </div>
            
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer bg-white hover:bg-gray-50">
                  <h3 className="text-lg font-medium text-gray-900">Is PitchConnect free to use?</h3>
                  <span className="ml-6 flex-shrink-0 flex items-center">
                    <svg className="h-6 w-6 text-gray-400 group-open:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <svg className="h-6 w-6 text-gray-400 hidden group-open:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                    </svg>
                  </span>
                </summary>
                <div className="p-6 pt-0 border-t border-gray-200">
                  <p className="text-gray-600">
                    Yes, PitchConnect&apos;s core features are completely free for all users. This includes creating 
                    a profile, submitting startup pitches, voting on other pitches, and participating in 
                    community discussions. We may introduce premium features in the future, but our commitment 
                    is to keep the platform&apos;s essential functionality accessible to all entrepreneurs.
                  </p>
                </div>
              </details>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-8">Pitches & Startups</h2>
            
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer bg-white hover:bg-gray-50">
                  <h3 className="text-lg font-medium text-gray-900">How do I submit a startup pitch?</h3>
                  <span className="ml-6 flex-shrink-0 flex items-center">
                    <svg className="h-6 w-6 text-gray-400 group-open:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <svg className="h-6 w-6 text-gray-400 hidden group-open:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                    </svg>
                  </span>
                </summary>
                <div className="p-6 pt-0 border-t border-gray-200">
                  <p className="text-gray-600 mb-4">
                    To submit a startup pitch on PitchConnect:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-600">
                    <li>Sign in to your account</li>
                    <li>Click on &quot;Submit Your Pitch&quot; in the navigation menu</li>
                    <li>Fill out the startup pitch form with details about your idea, including:
                      <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
                        <li>Startup name and tagline</li>
                        <li>Industry category</li>
                        <li>Problem statement and your solution</li>
                        <li>Target market and business model</li>
                        <li>Current stage and funding needs</li>
                        <li>Team information</li>
                        <li>Optional: Upload images, pitch deck, or prototype links</li>
                      </ul>
                    </li>
                    <li>Review and submit your pitch</li>
                  </ol>
                  <p className="text-gray-600 mt-4">
                    After submission, your pitch will be visible to the PitchConnect community, where users 
                    can vote and provide feedback on your idea.
                  </p>
                </div>
              </details>
            </div>
            
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer bg-white hover:bg-gray-50">
                  <h3 className="text-lg font-medium text-gray-900">Can I edit my pitch after submitting it?</h3>
                  <span className="ml-6 flex-shrink-0 flex items-center">
                    <svg className="h-6 w-6 text-gray-400 group-open:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <svg className="h-6 w-6 text-gray-400 hidden group-open:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                    </svg>
                  </span>
                </summary>
                <div className="p-6 pt-0 border-t border-gray-200">
                  <p className="text-gray-600">
                    Yes, you can edit your pitch after submission. We understand that startup ideas evolve, 
                    and you may want to refine your pitch based on feedback or new developments. To edit your 
                    pitch, go to your profile page, find the pitch in your &quot;My Startups&quot; section, and click 
                    the &quot;Edit&quot; button. You can update any information in your pitch, including the description, 
                    images, and business details.
                  </p>
                </div>
              </details>
            </div>
            
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer bg-white hover:bg-gray-50">
                  <h3 className="text-lg font-medium text-gray-900">How are startup pitches categorized?</h3>
                  <span className="ml-6 flex-shrink-0 flex items-center">
                    <svg className="h-6 w-6 text-gray-400 group-open:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <svg className="h-6 w-6 text-gray-400 hidden group-open:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                    </svg>
                  </span>
                </summary>
                <div className="p-6 pt-0 border-t border-gray-200">
                  <p className="text-gray-600 mb-4">
                    PitchConnect categorizes startup pitches by industry to help users find relevant ideas. 
                    When submitting your pitch, you&apos;ll select from our predefined industry categories, including:
                  </p>
                  <ul className="grid grid-cols-2 gap-2 text-gray-600">
                    <li>• Fintech</li>
                    <li>• Health & Wellness</li>
                    <li>• E-commerce</li>
                    <li>• EdTech</li>
                    <li>• AI & Machine Learning</li>
                    <li>• Sustainability</li>
                    <li>• SaaS</li>
                    <li>• Consumer Apps</li>
                    <li>• Hardware</li>
                    <li>• Marketplace</li>
                    <li>• Social Impact</li>
                    <li>• Entertainment</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    You can also add relevant tags to your pitch for more specific categorization, 
                    making it easier for interested users to discover your idea.
                  </p>
                </div>
              </details>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-8">Voting & Feedback</h2>
            
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer bg-white hover:bg-gray-50">
                  <h3 className="text-lg font-medium text-gray-900">How does the voting system work?</h3>
                  <span className="ml-6 flex-shrink-0 flex items-center">
                    <svg className="h-6 w-6 text-gray-400 group-open:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <svg className="h-6 w-6 text-gray-400 hidden group-open:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                    </svg>
                  </span>
                </summary>
                <div className="p-6 pt-0 border-t border-gray-200">
                  <p className="text-gray-600 mb-4">
                    PitchConnect uses a simple upvote/downvote system to allow community members to express their 
                    opinion on startup pitches. Here&apos;s how it works:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Each registered user can upvote or downvote a pitch once</li>
                    <li>Upvotes indicate support or interest in the idea</li>
                    <li>Downvotes suggest areas for improvement or potential challenges</li>
                    <li>The net vote count (upvotes minus downvotes) is displayed on each pitch</li>
                    <li>Pitches with higher net votes gain more visibility on the platform</li>
                    <li>Users can change their vote if they want to update their feedback</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    The voting system helps surface the most promising ideas and provides valuable 
                    quantitative feedback to entrepreneurs.
                  </p>
                </div>
              </details>
            </div>

            {/* More FAQs would continue here */}
        </div>

          {/* Contact CTA */}
          <div className="max-w-3xl mx-auto mt-16 bg-gray-50 p-8 rounded-xl text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Didn&apos;t find what you&apos;re looking for?</h3>
            <p className="text-gray-600 mb-6">
              Our support team is here to help with any questions you may have about PitchConnect.
            </p>
            <Link href="/contact" className="inline-block  bg-[rgb(238,43,105)] text-white px-6 py-3 rounded-lg font-medium hover:bg-[rgb(218,33,95)] transition-colors">
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 