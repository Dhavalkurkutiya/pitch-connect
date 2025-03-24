import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Blog | PitchConnect",
  description: "Read the latest articles, guides, and success stories from the PitchConnect community."
};

export default function BlogPage() {
  // Mock data for blog posts
  const featuredPost = {
    id: "1",
    title: "10 Tips for Crafting the Perfect Startup Pitch",
    excerpt: "Learn how to create a compelling pitch that captures investor attention and showcases your startup's potential.",
    category: "Pitch Tips", 
    author: "Sarah Johnson",
    authorImage: "/placeholder.jpg",
    date: "May 12, 2023",
    readTime: "8 min read",
    image: "/placeholder.jpg"
  };

  const recentPosts = [
    {
      id: "2",
      title: "From Idea to Funding: A Founder's Journey",
      excerpt: "Follow the story of how one entrepreneur took their concept from a simple idea to securing seed funding.",
      category: "Success Stories",
      author: "David Chen", 
      authorImage: "/placeholder.jpg",
      date: "April 28, 2023",
      readTime: "12 min read",
      image: "/placeholder.jpg"
    },
    {
      id: "3", 
      title: "Understanding Market Validation for Early-Stage Startups",
      excerpt: "Learn why market validation is crucial before investing significant time and resources into your startup idea.",
      category: "Market Research",
      author: "Maria Rodriguez",
      authorImage: "/placeholder.jpg", 
      date: "April 15, 2023",
      readTime: "10 min read",
      image: "/placeholder.jpg"
    },
    {
      id: "4",
      title: "Building a Minimum Viable Product: A Step-by-Step Guide",
      excerpt: "Discover how to create an MVP that effectively tests your core assumptions while minimizing development costs.",
      category: "Product Development",
      author: "James Wilson",
      authorImage: "/placeholder.jpg",
      date: "April 3, 2023", 
      readTime: "15 min read",
      image: "/placeholder.jpg"
    },
    {
      id: "5",
      title: "How to Find the Right Co-Founder for Your Startup",
      excerpt: "Finding the right co-founder can make or break your startup. Here's how to make the right choice.",
      category: "Team Building",
      author: "Emma Lewis",
      authorImage: "/placeholder.jpg",
      date: "March 22, 2023",
      readTime: "7 min read", 
      image: "/placeholder.jpg"
    },
    {
      id: "6",
      title: "Startup Financial Models: What Investors Want to See",
      excerpt: "Learn how to create financial projections that will impress investors and help secure funding for your startup.",
      category: "Fundraising",
      author: "Michael Brown",
      authorImage: "/placeholder.jpg",
      date: "March 15, 2023",
      readTime: "9 min read",
      image: "/placeholder.jpg"
    },
    {
      id: "7",
      title: "The Psychology of Pitching: Understanding Investor Mindset",
      excerpt: "Dive into the psychological aspects of pitching and how to frame your startup to appeal to investor thinking.",
      category: "Pitch Tips",
      author: "Sarah Johnson",
      authorImage: "/placeholder.jpg",
      date: "March 5, 2023",
      readTime: "11 min read",
      image: "/placeholder.jpg"
    }
  ];

  const categories = [
    "All Topics",
    "Pitch Tips",
    "Fundraising", 
    "Success Stories",
    "Market Research",
    "Product Development",
    "Team Building",
    "Growth Strategies",
    "Investor Insights"
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-[rgb(238,43,105)] py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">PitchConnect Blog</h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
              Insights, advice, and success stories to help you on your entrepreneurial journey.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="border-b border-gray-200 sticky top-0 bg-white z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
            {/* Search Bar */}
            <div className="relative w-full sm:max-w-md">
              <input
                type="text"
                className="w-full py-2.5 pl-10 pr-4 text-sm rounded-lg border border-gray-300 focus:ring-[rgb(238,43,105)] focus:border-[rgb(238,43,105)]"
                placeholder="Search articles..."
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            
            {/* Category Filters */}
            <div className="w-full sm:w-auto overflow-x-auto scrollbar-thin relative pb-1">
              <div className="flex gap-2 pb-2 sm:pb-0 px-1">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`${
                      index === 0 ? "bg-[rgb(238,43,105)] text-white" : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                    } px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Featured Article</h2>
          <div className="bg-white rounded-xl overflow-hidden shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative h-48 sm:h-64 md:h-full min-h-[300px]">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="p-6 sm:p-8 flex flex-col justify-center">
                <div className="flex items-center flex-wrap gap-2 mb-4">
                  <span className="inline-block bg-[rgb(238,43,105/0.15)] text-[rgb(238,43,105)] text-xs font-medium px-2.5 py-1 rounded-full">
                    {featuredPost.category}
                  </span>
                  <span className="text-xs text-gray-500">{featuredPost.date} • {featuredPost.readTime}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  <Link href={`/blog/${featuredPost.id}`} className="hover:text-[rgb(238,43,105)] transition-colors">
                    {featuredPost.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center mt-auto">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                    <Image
                      src={featuredPost.authorImage}
                      alt={featuredPost.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-900">{featuredPost.author}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Recent Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {recentPosts.map(post => (
              <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center flex-wrap gap-2 mb-3">
                    <span className="inline-block bg-[rgb(238,43,105/0.15)] text-[rgb(238,43,105)] text-xs font-medium px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    <Link href={`/blog/${post.id}`} className="hover:text-[rgb(238,43,105)] transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center">
                      <div className="relative h-8 w-8 rounded-full overflow-hidden mr-2">
                        <Image
                          src={post.authorImage}
                          alt={post.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-xs text-gray-700">{post.author}</span>
                    </div>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="mt-8 sm:mt-12 text-center">
            <button className="w-full sm:w-auto bg-white text-[rgb(238,43,105)] border border-[rgb(238,43,105)] px-6 py-3 rounded-lg font-medium hover:bg-[rgb(238,43,105/0.05)] transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 sm:py-16 bg-[rgb(238,43,105)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Stay Updated with PitchConnect</h2>
            <p className="text-white/90 mb-6 sm:mb-8">
              Get the latest articles, resources, and startup tips delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="Your email address"
              />
              <button className="w-full sm:w-auto bg-white text-[rgb(238,43,105)] px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-white/70 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}