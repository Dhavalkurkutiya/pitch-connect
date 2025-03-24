import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Us | PitchConnect",
  description: "Learn more about PitchConnect, our mission, and the team behind the platform."
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[rgb(238,43,105)] opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Mission</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Empowering entrepreneurs to bring their ideas to life through connection, 
              collaboration, and community feedback.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                PitchConnect began with a simple observation: amazing startup ideas often struggle 
                to find the right audience, while investors and collaborators miss opportunities 
                to discover the next big thing.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2023, our platform has grown into a vibrant community where entrepreneurs 
                can showcase their ideas, receive valuable feedback, and connect with potential 
                collaborators and investors.
              </p>
              <p className="text-lg text-gray-600">
                Our goal is to democratize the startup ecosystem by providing a level playing field 
                for innovators from all backgrounds, making entrepreneurship more accessible and 
                collaborative than ever before.
              </p>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image 
                src="/placeholder.jpg" 
                alt="Team brainstorming" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[rgb(238,43,105/0.15)] rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[rgb(238,43,105)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We believe that great ideas can come from anywhere. Our platform is built to nurture innovation 
                by providing a space for creativity and bold thinking.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[rgb(238,43,105/0.15)] rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[rgb(238,43,105)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Community</h3>
              <p className="text-gray-600">
                We foster a supportive community of entrepreneurs, mentors, and investors who share 
                knowledge, provide feedback, and collaborate on building the future.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[rgb(238,43,105/0.15)] rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[rgb(238,43,105)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Trust</h3>
              <p className="text-gray-600">
                We&apos;ve built a platform founded on trust and transparency, ensuring that entrepreneurs 
                can safely share their ideas and receive honest, constructive feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We&apos;re a passionate group of entrepreneurs, developers, and industry experts committed to 
            helping startups succeed.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm transition-all hover:shadow-md">
              <div className="relative h-80">
                <Image 
                  src="/placeholder.jpg" 
                  alt="Team Member" 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Sarah Johnson</h3>
                <p className="text-[rgb(238,43,105)] mb-4">CEO & Founder</p>
                <p className="text-gray-600">
                  Serial entrepreneur with a passion for connecting innovators with the resources they need to succeed.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm transition-all hover:shadow-md">
              <div className="relative h-80">
                <Image 
                  src="/placeholder.jpg" 
                  alt="Team Member" 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">David Chen</h3>
                <p className="text-[rgb(238,43,105)] mb-4">CTO</p>
                <p className="text-gray-600">
                  Tech leader with expertise in building scalable platforms that bring communities together.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm transition-all hover:shadow-md">
              <div className="relative h-80">
                <Image 
                  src="/placeholder.jpg" 
                  alt="Team Member" 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Maria Rodriguez</h3>
                <p className="text-[rgb(238,43,105)] mb-4">Head of Community</p>
                <p className="text-gray-600">
                  Community builder focused on creating meaningful connections between entrepreneurs and mentors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[rgb(238,43,105)] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to join our community?</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Connect with like-minded entrepreneurs, share your innovative ideas, and get feedback from our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/startup/create" className="inline-block bg-white text-[rgb(238,43,105)] px-6 py-3 rounded-lg font-medium text-lg hover:bg-gray-100 transition-colors">
              Submit Your Pitch
            </Link>
            <a href="/startups" className="inline-block bg-[rgb(238,43,105/0.8)] text-white border border-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-[rgb(238,43,105)] transition-colors">
              Explore Startups
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 