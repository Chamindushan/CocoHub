import React, { useState } from 'react';

const CoconutCraftsVideosSection = () => {
  const [hoveredVideo, setHoveredVideo] = useState(null);

  const craftVideos = [
    {
      id: 1,
      title: "How to make a coconut shell design",
      duration: "6:24",
      category: "Shell Crafts",
      difficulty: "Intermediate",
      videoId: "AIyRQeOvFHE"
    },
    {
      id: 2,
      title: "Coconut husk design",
      duration: "4:50",
      category: "Husk Products",
      difficulty: "Beginner",
      videoId: "BZlBntHuXg0"
    },
    {
      id: 3,
      title: "Coconut Leaf Basket",
      duration: "7:35",
      category: "Leaf Crafts",
      difficulty: "Beginner",
      videoId: "y38QLy3Khlo"
    },
    {
      id: 4,
      title: "Coco Necklace Coco Craft",
      duration: "5:18",
      category: "Trunk Woodwork",
      difficulty: "Intermediate",
      videoId: "PIae2yVjadU"
    },
    {
      id: 5,
      title: "Coconut shell flowers | Handicrafts",
      duration: "5:18",
      category: "Shell Crafts",
      difficulty: "Intermediate",
      videoId: "6fX9Ei7Q0g0"
    },
    {
      id: 6,
      title: "How to make Bird with Coconut shell",
      duration: "5:18",
      category: "Shell Crafts",
      difficulty: "Advanced",
      videoId: "jt6cBhSupXk"
    },
    {
      id: 7,
      title: "DIY Mini Beach in Coconut shell",
      duration: "5:18",
      category: "Shell Crafts",
      difficulty: "Intermediate",
      videoId: "-_FjxnL-xu0"
    },
    {
      id: 8,
      title: "Make Mini Tabla | From Coconut Shell",
      duration: "5:18",
      category: "Musical Instruments",
      difficulty: "Advanced",
      videoId: "qs8yI1YrWf8"
    },
  ];

  // Function to get YouTube thumbnail URL from videoId
  const getYouTubeThumbnail = (videoId) => {
    return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
  };

  // Function to handle video click
  const handleVideoClick = (videoId) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Craft Tutorial Videos
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Learn how to create beautiful items from coconut parts
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {craftVideos.map((video) => (
            <div
              key={video.id}
              className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl cursor-pointer"
              onMouseEnter={() => setHoveredVideo(video.id)}
              onMouseLeave={() => setHoveredVideo(null)}
              onClick={() => handleVideoClick(video.videoId)}
            >
              <div className="relative aspect-w-16 aspect-h-9">
                <img 
                  src={getYouTubeThumbnail(video.videoId)} 
                  alt={video.title}
                  className="object-cover w-full h-full rounded-t-lg"
                />
                <div className={`absolute inset-0 bg-green-600 bg-opacity-40 flex items-center justify-center transition-opacity duration-300 ${hoveredVideo === video.id ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="rounded-full bg-white p-3 transform transition-transform duration-300 group-hover:scale-110">
                    <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 text-xs font-semibold rounded-full">
                  {video.difficulty}
                </div>
                <div className="absolute bottom-3 right-3 bg-black bg-opacity-75 text-white px-2 py-1 text-xs rounded-md">
                  {video.duration}
                </div>
              </div>
              <div className="p-5 bg-white border-t border-gray-100 rounded-b-lg">
                <div className="flex items-center mb-2">
                  <span className="inline-block px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-md">
                    {video.category}
                  </span>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{video.title}</h3>
                <div className={`flex items-center justify-between transition-all duration-300 ${hoveredVideo === video.id ? 'opacity-100' : 'opacity-70'}`}>
                  <span className="text-sm text-green-600 font-medium flex items-center">
                    Watch tutorial
                    <svg className={`ml-1 h-4 w-4 transition-transform duration-300 ${hoveredVideo === video.id ? 'transform translate-x-1' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                  <div className={`flex space-x-2 transition-opacity duration-300 ${hoveredVideo === video.id ? 'opacity-100' : 'opacity-0'}`}>
                    <button className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors duration-200">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <button className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors duration-200">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          
        </div>
      </div>
    </div>
  );
};

export default CoconutCraftsVideosSection;