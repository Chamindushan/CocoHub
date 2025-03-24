import React, { useState } from 'react';

const CoconutTreeCareSection = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [playingVideo, setPlayingVideo] = useState(null);

  const coconutCare = [
    {
      id: 1,
      title: "Planting",
      description: "Proper techniques for planting coconut saplings to ensure healthy growth and maximum yield.",
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
      videoId: "qguzB3ExDQc" // YouTube video ID for coconut planting
    },
    {
      id: 2,
      title: "Watering",
      description: "Optimal watering schedules and techniques for coconut trees in different climate conditions.",
      icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
      videoId: "5Hl_hDTb8eo" // YouTube video ID for coconut watering
    },
    {
      id: 3,
      title: "Fertilizing",
      description: "Best organic and conventional fertilizers with proper application methods for thriving coconut trees.",
      icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
      videoId: "jz65ntjZ2Hs" // YouTube video ID for coconut fertilizing
    },
    {
      id: 4,
      title: "Maintenance",
      description: "Regular maintenance practices including pruning, pest management, and disease prevention for coconut trees.",
      icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
      videoId: "2aLaohSxlBY" // YouTube video ID for coconut maintenance
    }
  ];

  const handleCardHover = (id) => {
    setActiveCard(id);
  };

  const handleCardLeave = () => {
    setActiveCard(null);
  };

  const toggleVideo = (id) => {
    if (playingVideo === id) {
      setPlayingVideo(null);
    } else {
      setPlayingVideo(id);
    }
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Coconut Tree Care
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Expert guidance on growing and maintaining healthy coconut trees
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {coconutCare.map((item) => (
              <div
                key={item.id}
                className="relative bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                onMouseEnter={() => handleCardHover(item.id)}
                onMouseLeave={handleCardLeave}
                onTouchStart={() => toggleVideo(item.id)}
              >
                <div className={`px-6 py-8 h-full border-t-4 ${activeCard === item.id ? 'border-green-600' : 'border-transparent'} transition-colors duration-300`}>
                  <div className={`inline-flex items-center justify-center rounded-md bg-green-100 p-3 shadow-lg ${activeCard === item.id ? 'bg-green-600 text-white' : 'text-green-600'} transition-colors duration-300`}>
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-base text-gray-500">{item.description}</p>
                  
                  {/* Video Thumbnail with Play Button */}
                  <div 
                    className="mt-6 relative cursor-pointer group overflow-hidden rounded-lg"
                    onClick={() => toggleVideo(item.id)}
                  >
                    <div className={`aspect-w-16 aspect-h-9 relative transition-transform duration-700 ${activeCard === item.id ? 'scale-105' : 'scale-100'}`}>
                      <img 
                        src={`https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`} 
                        alt={`${item.title} video thumbnail`}
                        className="w-full h-full object-cover rounded-lg transition-all duration-500"
                      />
                      <div className={`absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center transition-opacity duration-300 ${activeCard === item.id ? 'opacity-0' : 'opacity-100'} group-hover:opacity-0`}>
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 bg-opacity-90 text-white transition-all duration-300 transform group-hover:scale-110">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Animated Border Effect */}
                    <div className={`absolute top-0 left-0 w-full h-0.5 bg-green-500 transform origin-left transition-transform duration-500 ${activeCard === item.id ? 'scale-x-100' : 'scale-x-0'}`}></div>
                    <div className={`absolute top-0 right-0 w-0.5 h-full bg-green-500 transform origin-top transition-transform duration-500 delay-100 ${activeCard === item.id ? 'scale-y-100' : 'scale-y-0'}`}></div>
                    <div className={`absolute bottom-0 right-0 w-full h-0.5 bg-green-500 transform origin-right transition-transform duration-500 delay-200 ${activeCard === item.id ? 'scale-x-100' : 'scale-x-0'}`}></div>
                    <div className={`absolute bottom-0 left-0 w-0.5 h-full bg-green-500 transform origin-bottom transition-transform duration-500 delay-300 ${activeCard === item.id ? 'scale-y-100' : 'scale-y-0'}`}></div>
                  </div>
                </div>
                
                {/* Video Modal */}
                {playingVideo === item.id && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80 transition-opacity duration-300">
                    <div className="relative w-full max-w-4xl">
                      <button 
                        onClick={() => setPlayingVideo(null)} 
                        className="absolute -top-10 right-0 p-2 text-white hover:text-green-400 focus:outline-none transition-colors duration-300"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                      <div className="aspect-w-16 aspect-h-9">
                        <iframe
                          className="w-full h-full rounded-lg shadow-2xl"
                          src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1&rel=0`}
                          title={`${item.title} video`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-green-600 transform origin-left transition-transform duration-300 ${activeCard === item.id ? 'scale-x-100' : 'scale-x-0'}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoconutTreeCareSection;