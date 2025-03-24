import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Star, MessageCircle } from "lucide-react";

export const metadata = {
  title: "Explore Startups | PitchConnect",
  description: "Discover and connect with innovative startup ideas from entrepreneurs around the world."
};

export default function StartupsPage() {
  // Mock data for startups
  const startups = [
    {
      id: "1",
      name: "EcoHarvest",
      tagline: "Smart urban farming solutions for sustainable living",
      description: "EcoHarvest is developing plug-and-play vertical farming modules for urban homes and businesses, allowing anyone to grow fresh produce with minimal space and resources.",
      category: "Sustainability",
      logo: "/placeholder.jpg",
      stage: "Seed",
      founder: "Alex Rivera",
      founderImage: "/placeholder.jpg",
      votes: 128,
      comments: 47,
      featured: true,
      tags: ["AgTech", "Sustainability", "IoT"]
    },
    {
      id: "2",
      name: "MindfulAI",
      tagline: "AI-powered mental wellness companion",
      description: "MindfulAI provides personalized mental health support through an AI companion that learns and adapts to individual needs, offering exercises, insights, and professional resources.",
      category: "Health & Wellness",
      logo: "/placeholder.jpg",
      stage: "Pre-seed",
      founder: "Sarah Chen",
      founderImage: "/placeholder.jpg",
      votes: 93,
      comments: 32,
      featured: false,
      tags: ["AI", "Mental Health", "Health Tech"]
    },
    {
      id: "3",
      name: "CodeMentor",
      tagline: "Personalized programming education platform",
      description: "CodeMentor uses AI to create customized learning paths for aspiring developers, pairing them with experienced mentors and real-world projects aligned with their career goals.",
      category: "EdTech",
      logo: "/placeholder.jpg",
      stage: "Series A",
      founder: "David Johnson",
      founderImage: "/placeholder.jpg",
      votes: 215,
      comments: 89,
      featured: true,
      tags: ["Education", "Programming", "Career Development"]
    },
    {
      id: "4",
      name: "SafeSpace",
      tagline: "Secure communication platform for sensitive industries",
      description: "SafeSpace offers end-to-end encrypted communication and file sharing designed specifically for legal, healthcare, and finance professionals handling sensitive client information.",
      category: "SaaS",
      logo: "/placeholder.jpg",
      stage: "Seed",
      founder: "Maya Rodriguez",
      founderImage: "/placeholder.jpg",
      votes: 76,
      comments: 28,
      featured: false,
      tags: ["Security", "Privacy", "B2B"]
    },
    {
      id: "5",
      name: "TravelBuddy",
      tagline: "AI travel assistant for budget-conscious explorers",
      description: "TravelBuddy helps travelers find hidden gems and budget-friendly experiences by analyzing real-time data, local insights, and personalized preferences for authentic travel experiences.",
      category: "Consumer Apps",
      logo: "/placeholder.jpg",
      stage: "Pre-seed",
      founder: "Carlos Mendez",
      founderImage: "/placeholder.jpg",
      votes: 118,
      comments: 53,
      featured: false,
      tags: ["Travel", "AI", "Budget"]
    },
    {
      id: "6",
      name: "SupplyChainX",
      tagline: "Blockchain supply chain transparency platform",
      description: "SupplyChainX uses blockchain technology to provide end-to-end visibility and authentication for supply chains, helping businesses and consumers verify product origins and sustainability.",
      category: "Blockchain",
      logo: "/placeholder.jpg",
      stage: "Seed",
      founder: "Olivia Kim",
      founderImage: "/placeholder.jpg",
      votes: 89,
      comments: 41,
      featured: false,
      tags: ["Blockchain", "Supply Chain", "Transparency"]
    }
  ];

  const categories = [
    "All Categories",
    "Fintech",
    "Health & Wellness",
    "EdTech",
    "Sustainability",
    "SaaS",
    "Consumer Apps",
    "Blockchain",
    "AI & Machine Learning",
    "E-commerce",
    "Social Impact",
    "Hardware"
  ];

  const stages = [
    "All Stages",
    "Idea",
    "Pre-seed",
    "Seed",
    "Series A",
    "Series B+",
    "Acquired"
  ];

  const featuredStartups = startups.filter(startup => startup.featured);
  const regularStartups = startups.filter(startup => !startup.featured);

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pink_container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h1 className="heading">Explore Startups</h1>
            <p className="sub-heading !max-w-3xl">
              Discover innovative ideas from entrepreneurs around the world, provide feedback, 
              and connect with potential collaborators.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-white py-8 border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col space-y-4">
            {/* Search Bar */}
            <div className="relative w-full">
              <input
                type="text"
                className="w-full py-2.5 pl-10 pr-4 rounded-lg border border-gray-300 focus:ring-[rgb(238,43,105)] focus:border-[rgb(238,43,105)] bg-white text-sm sm:text-base"
                placeholder="Search startups..."
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            
            {/* Filters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <select className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-[rgb(238,43,105)] focus:border-[rgb(238,43,105)]">
                <option>Sort: Most Popular</option>
                <option>Sort: Newest</option>
                <option>Sort: Most Votes</option>
                <option>Sort: Most Comments</option>
              </select>
              
              <select className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-[rgb(238,43,105)] focus:border-[rgb(238,43,105)]">
                {categories.map(category => (
                  <option key={category}>{category}</option>
                ))}
              </select>
              
              <select className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-[rgb(238,43,105)] focus:border-[rgb(238,43,105)]">
                {stages.map(stage => (
                  <option key={stage}>{stage}</option>
                ))}
              </select>
              
              <button className="w-full bg-[rgb(238,43,105)] text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-[rgb(218,33,95)] transition-colors">
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Startups */}
      {featuredStartups.length > 0 && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              Featured Startups
              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[rgb(238,43,105/0.15)] text-[rgb(238,43,105)]">
                <Star size={14} className="mr-1" />
                Featured
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredStartups.map(startup => (
                <div key={startup.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center">
                        <div className="h-12 w-12 rounded-md bg-gray-200 flex items-center justify-center mr-4 relative overflow-hidden">
                          {startup.logo ? (
                            <Image
                              src={startup.logo}
                              alt={startup.name}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <span className="text-gray-600 font-semibold text-lg">{startup.name.substring(0, 2)}</span>
                          )}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{startup.name}</h3>
                          <p className="text-gray-600">{startup.tagline}</p>
                        </div>
                      </div>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[rgb(238,43,105/0.15)] text-[rgb(238,43,105)]">
                        {startup.stage}
                      </span>
                    </div>
                    
                    <p className="mt-4 text-gray-600 line-clamp-3">{startup.description}</p>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      {startup.tags.map(tag => (
                        <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[rgb(238,43,105/0.08)] text-[rgb(238,43,105/0.9)]">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-6 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="relative h-6 w-6 rounded-full overflow-hidden mr-2">
                          <Image
                            src={startup.founderImage}
                            alt={startup.founder}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="text-sm text-gray-600">{startup.founder}</span>
                      </div>
                      
                      <div className="flex space-x-4">
                        <div className="flex items-center text-gray-500">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                          </svg>
                          <span className="text-sm">{startup.votes}</span>
                        </div>
                        <div className="flex items-center text-gray-500">
                          <MessageCircle size={18} className="mr-1" />
                          <span className="text-sm">{startup.comments}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex justify-end">
                      <Link href={`/startup/${startup.id}`} className="text-[rgb(238,43,105)] font-medium text-sm inline-flex items-center hover:text-[rgb(218,33,95)] transition-colors">
                        View Details
                        <ArrowUpRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Startups */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">All Startups</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularStartups.map(startup => (
              <div key={startup.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                <div className="p-5">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-md bg-gray-200 flex items-center justify-center mr-3 relative overflow-hidden">
                        {startup.logo ? (
                          <Image
                            src={startup.logo}
                            alt={startup.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <span className="text-gray-600 font-semibold">{startup.name.substring(0, 2)}</span>
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{startup.name}</h3>
                        <p className="text-sm text-gray-600 line-clamp-1">{startup.tagline}</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[rgb(238,43,105/0.15)] text-[rgb(238,43,105)]">
                      {startup.stage}
                    </span>
                  </div>
                  
                  <p className="mt-3 text-sm text-gray-600 line-clamp-2">{startup.description}</p>
                  
                  <div className="mt-3 flex flex-wrap gap-1">
                    {startup.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[rgb(238,43,105/0.08)] text-[rgb(238,43,105/0.9)]">
                        {tag}
                      </span>
                    ))}
                    {startup.tags.length > 2 && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[rgb(238,43,105/0.08)] text-[rgb(238,43,105/0.9)]">
                        +{startup.tags.length - 2}
                      </span>
                    )}
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="relative h-5 w-5 rounded-full overflow-hidden mr-1">
                        <Image
                          src={startup.founderImage}
                          alt={startup.founder}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-xs text-gray-600">{startup.founder}</span>
                    </div>
                    
                    <div className="flex space-x-3">
                      <div className="flex items-center text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                        <span className="text-xs">{startup.votes}</span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <MessageCircle size={14} className="mr-1" />
                        <span className="text-xs">{startup.comments}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-3 flex justify-end">
                    <Link href={`/startup/${startup.id}`} className="text-[rgb(238,43,105)] text-xs font-medium inline-flex items-center hover:text-[rgb(218,33,95)] transition-colors">
                      View Details
                      <ArrowUpRight size={14} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Load More */}
          <div className="mt-12 text-center">
            <button className="bg-white text-[rgb(238,43,105)] border border-[rgb(238,43,105)] px-6 py-3 rounded-lg font-medium hover:bg-pink-50 transition-colors">
              Load More Startups
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[rgb(238,43,105)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Have a startup idea?</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Share your vision with our community, get valuable feedback, and connect with potential collaborators.
          </p>
          <Link href="/startup/create" className="inline-block bg-white text-[rgb(238,43,105)] px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-100 transition-colors">
            Submit Your Pitch
          </Link>
        </div>
      </section>
    </div>
  );
} 