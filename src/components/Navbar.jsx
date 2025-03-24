import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVideosDropdownOpen, setIsVideosDropdownOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Marketplace', path: '/marketplace' },
    { name: 'Coconut', path: '/coconut' },
    { name: 'Contact', path: '/components/contact' },
  ];

  const videoItems = [
    { name: 'Coconut Uses', path: '/coconut-uses' },
    { name: 'Tree Care', path: '/tree-care' },
    { name: 'Coconut Crafts', path: '/coconut-crafts' },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Logo without Green Outline and Zoom Effect */}
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="flex items-center p-2 rounded-lg"
              >
                <img
                  className="h-10 w-auto"
                  src={logo}
                  alt="cOcOHub Logo"
                />
                <span className="ml-2 text-xl font-bold text-gray-800">
                  cOcOHub
                </span>
              </Link>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-900 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 border-2 border-transparent hover:border-green-600"
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Videos Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsVideosDropdownOpen(!isVideosDropdownOpen)}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-900 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 border-2 border-transparent hover:border-green-600"
                >
                  Videos
                  <svg
                    className="ml-1 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                
                {isVideosDropdownOpen && (
                  <div 
                    className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                    onMouseLeave={() => setIsVideosDropdownOpen(false)}
                  >
                    <div className="py-1">
                      {videoItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                          onClick={() => setIsVideosDropdownOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            {/* Facebook Icon */}
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-green-600 transition duration-300"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            {/* YouTube Icon */}
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-green-600 transition duration-300"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M21.582 6.186c-.23-.86-.908-1.538-1.768-1.768C18.254 4 12 4 12 4s-6.254 0-7.814.418c-.86.23-1.538.908-1.768 1.768C2 7.746 2 12 2 12s0 4.254.418 5.814c.23.86.908 1.538 1.768 1.768C5.746 20 12 20 12 20s6.254 0 7.814-.418c.86-.23 1.538-.908 1.768-1.768C22 16.254 22 12 22 12s0-4.254-.418-5.814zM10 15.464V8.536L15 12l-5 3.464z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-900 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 border-2 border-transparent hover:border-green-600"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Videos Dropdown for Mobile */}
            <div>
              <button
                onClick={() => setIsVideosDropdownOpen(!isVideosDropdownOpen)}
                className="flex justify-between w-full pl-3 pr-4 py-2 text-base font-medium text-gray-900 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300"
              >
                <span>Videos</span>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              
              {isVideosDropdownOpen && (
                <div className="pl-6 space-y-1 mt-1">
                  {videoItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300"
                      onClick={() => {
                        setIsVideosDropdownOpen(false);
                        setIsOpen(false);
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;