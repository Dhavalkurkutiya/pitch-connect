export default function Loading() {
    return (
      <div className="w-full min-h-dvh bg-gray-100">
        {/* Navbar Skeleton */}
        <div className="w-full h-16 bg-gray-300 animate-pulse"></div>
  
        {/* Hero Section Skeleton */}
        <div className="w-full h-[300px] bg-gray-200 animate-pulse flex flex-col items-center justify-center p-6">
          <div className="h-10 w-3/4 bg-gray-300 rounded mb-3"></div>
          <div className="h-6 w-1/2 bg-gray-300 rounded mb-5"></div>
          <div className="h-12 w-2/3 bg-gray-300 rounded"></div>
        </div>
  
        {/* Card Section Skeleton */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse bg-white rounded-lg shadow-md p-4 w-full max-w-xs mx-auto sm:mx-0">
                <div className="w-full h-44 bg-gray-300 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-300 rounded w-1/2 mb-2"></div>
                <div className="h-3 bg-gray-300 rounded w-full mb-2"></div>
                <div className="flex items-center mt-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
                  <div className="h-3 bg-gray-300 rounded w-1/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
