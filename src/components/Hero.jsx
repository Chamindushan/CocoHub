import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for internal navigation
import homeImage from '../assets/Home.png'; // Import the background image
import Confetti from 'react-confetti'; // Import confetti library

const Hero = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [isFlashing, setIsFlashing] = useState(false); // State for flash effect
  const [showConfetti, setShowConfetti] = useState(false); // State for confetti effect

  // Function to handle "Get started" button click
  const handleGetStarted = () => {
    setIsFlashing(true); // Activate flash effect
    setShowConfetti(true); // Activate confetti effect

    setTimeout(() => {
      window.location.href = '/'; // Refresh the home page
    }, 500); // Delay to allow flash and confetti to show

    setTimeout(() => {
      setIsFlashing(false); // Reset flash effect
      setShowConfetti(false); // Reset confetti effect
    }, 2000); // Duration of the effects
  };

  // Function to handle "Join Marketplace" button click
  const handleJoinMarketplace = () => {
    navigate('/marketplace'); // Navigate to the "Marketplace" page
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Confetti Animation */}
      {showConfetti && <Confetti />}

      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
        style={{ backgroundImage: `url(${homeImage})` }}
      ></div>
      
      {/* Overlay to darken the background image */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl w-full bg-black/30 backdrop-blur-sm p-8 rounded-lg transition-all duration-300 hover:bg-black/40 hover:shadow-xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 transition-transform duration-300 hover:scale-105">
             Coconut <br className="md:hidden" />
            Resource Center
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Your one-stop platform for everything coconut - from cultivation to crafts, products to marketplace.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleGetStarted} // Add onClick handler
              className={`px-6 py-3 bg-green-600 text-white font-medium rounded-lg transition-all duration-300 hover:bg-green-700 hover:shadow-lg hover:translate-y-1 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 ${isFlashing ? 'flash-effect' : ''}`}
            >
              Get started
            </button>
            
            <button 
              onClick={handleJoinMarketplace} // Add onClick handler
              className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:translate-y-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            >
              Join Marketplace
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;