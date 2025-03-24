import React, { useState } from 'react';

const CoconutVideosSection = () => {
  const [hoveredVideo, setHoveredVideo] = useState(null);

  const coconutVideos = [
    {
      id: 1,
      title: "Benefits to us from the coconut tree",
      duration: "3:45",
      thumbnail: "https://img.youtube.com/vi/O3S0onsKMRo/maxresdefault.jpg", // Updated thumbnail
      category: "Tutorial",
      videoId: "O3S0onsKMRo" // YouTube video ID
    },
    {
      id: 2,
      title: "Coconut Oil Benefits",
      duration: "5:20",
      thumbnail: "https://img.youtube.com/vi/sZ7WEKnneSw/maxresdefault.jpg", // Updated thumbnail
      category: "Health",
      videoId: "sZ7WEKnneSw" // YouTube video ID
    },
    {
      id: 3,
      title: "Coconut Recipes for Beginners",
      duration: "8:12",
      thumbnail: "https://img.youtube.com/vi/yAnbOVC_Onk/maxresdefault.jpg", // Updated thumbnail
      category: "Culinary",
      videoId: "yAnbOVC_Onk" // YouTube video ID
    },
    {
      id: 4,
      title: "Strange products made from coconut",
      duration: "6:30",
      thumbnail: "https://img.youtube.com/vi/kQ0GnL6t7J8/maxresdefault.jpg", // Updated thumbnail
      category: "Cosmetic",
      videoId: "kQ0GnL6t7J8" // YouTube video ID
    },
    {
      id: 5,
      title: "Coconut Shell Crafts",
      duration: "4:15",
      thumbnail: "https://img.youtube.com/vi/xh5kfZqOjS4/maxresdefault.jpg", // Updated thumbnail (fixed videoId)
      category: "Crafts",
      videoId: "p228o-ZGrtQ" // Fixed YouTube video ID
    },
    {
      id: 6,
      title: "Coconut Water for Hydration",
      duration: "2:50",
      thumbnail: "https://img.youtube.com/vi/hLr1UdzihH0/maxresdefault.jpg", // Updated thumbnail
      category: "Health",
      videoId: "hLr1UdzihH0" // YouTube video ID
    },
    {
      id: 7,
      title: "Intercropping with coconut",
      duration: "7:00",
      thumbnail: "https://img.youtube.com/vi/RGytaha3ZDQ/maxresdefault.jpg", // Updated thumbnail
      category: "Agriculture",
      videoId: "RGytaha3ZDQ" // YouTube video ID
    },
    {
      id: 8,
      title: "Coconut fiber industry",
      duration: "5:45",
      thumbnail: "https://img.youtube.com/vi/FfgKjG6eHiI/maxresdefault.jpg", // Updated thumbnail
      category: "Gardening",
      videoId: "FfgKjG6eHiI" // YouTube video ID
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-10">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Coconut Uses
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Watch and learn how to use coconuts in various ways
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {coconutVideos.map((video) => (
            <div
              key={video.id}
              className="relative overflow-hidden rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              onMouseEnter={() => setHoveredVideo(video.id)}
              onMouseLeave={() => setHoveredVideo(null)}
            >
              <div className="relative aspect-w-16 aspect-h-9">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="object-cover w-full h-full"
                />
                <div className={`absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center transition-opacity duration-300 ${hoveredVideo === video.id ? 'opacity-100' : 'opacity-0'}`}>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-white bg-opacity-80 p-4 transform transition-transform duration-300 hover:scale-110"
                  >
                    <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
                <div className="absolute bottom-0 right-0 bg-black bg-opacity-70 text-white px-2 py-1 text-sm rounded-tl-md">
                  {video.duration}
                </div>
              </div>
              <div className="p-4 bg-white">
                <span className="inline-block px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full mb-2">
                  {video.category}
                </span>
                <h3 className="text-lg font-medium text-gray-900">{video.title}</h3>
                <div className={`mt-2 flex items-center transition-all duration-300 ${hoveredVideo === video.id ? 'opacity-100' : 'opacity-70'}`}>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-green-600 font-medium flex items-center"
                  >
                    Watch now
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoconutVideosSection;