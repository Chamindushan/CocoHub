import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      // Here you would typically send the email to your backend
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-green-900 via-emerald-900 to-gray-900 text-white relative">
      {/* Decorative coconut palm silhouettes */}
      <div className="absolute top-0 left-0 w-full overflow-hidden h-16 -mt-16 pointer-events-none opacity-20">
        <svg className="h-full w-full" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="currentColor">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto pt-16 pb-12 px-4 sm:px-6 lg:px-8">
       

        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-gray-700">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <div className="flex items-center">
              <svg className="h-12 w-12 text-green-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 6V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 10L12 6L8 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="ml-3 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-100">CocoHub</span>
            </div>
            
            <p className="mt-4 text-gray-300 leading-relaxed">
              Your comprehensive resource center for everything coconut - from culinary applications to sustainable practices, eco-friendly products, and traditional crafts from around the world.
            </p>
            
            <div className="mt-8 flex space-x-5">
              <span className="inline-flex bg-green-700 bg-opacity-25 rounded-full h-10 w-10 items-center justify-center hover:bg-opacity-40 transition-all duration-200">
                <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </span>
              <span className="inline-flex bg-green-700 bg-opacity-25 rounded-full h-10 w-10 items-center justify-center hover:bg-opacity-40 transition-all duration-200">
                <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </span>
              <span className="inline-flex bg-green-700 bg-opacity-25 rounded-full h-10 w-10 items-center justify-center hover:bg-opacity-40 transition-all duration-200">
                <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </span>
              <span className="inline-flex bg-green-700 bg-opacity-25 rounded-full h-10 w-10 items-center justify-center hover:bg-opacity-40 transition-all duration-200">
                <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" />
                </svg>
              </span>
              <span className="inline-flex bg-green-700 bg-opacity-25 rounded-full h-10 w-10 items-center justify-center hover:bg-opacity-40 transition-all duration-200">
                <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </span>
            </div>
          </div>
          
          {/* Quick links */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white border-b border-green-500 pb-2 mb-4">Site Map</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="group flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                    <span className="mr-2 h-1 w-1 rounded-full bg-green-400 group-hover:w-2 transition-all duration-200"></span>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                    <span className="mr-2 h-1 w-1 rounded-full bg-green-400 group-hover:w-2 transition-all duration-200"></span>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                    <span className="mr-2 h-1 w-1 rounded-full bg-green-400 group-hover:w-2 transition-all duration-200"></span>
                    Marketplace
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                    <span className="mr-2 h-1 w-1 rounded-full bg-green-400 group-hover:w-2 transition-all duration-200"></span>
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                    <span className="mr-2 h-1 w-1 rounded-full bg-green-400 group-hover:w-2 transition-all duration-200"></span>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white border-b border-green-500 pb-2 mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="group flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                    <span className="mr-2 h-1 w-1 rounded-full bg-green-400 group-hover:w-2 transition-all duration-200"></span>
                    Coconut Recipes
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                    <span className="mr-2 h-1 w-1 rounded-full bg-green-400 group-hover:w-2 transition-all duration-200"></span>
                    Health Benefits
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                    <span className="mr-2 h-1 w-1 rounded-full bg-green-400 group-hover:w-2 transition-all duration-200"></span>
                    Growing Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                    <span className="mr-2 h-1 w-1 rounded-full bg-green-400 group-hover:w-2 transition-all duration-200"></span>
                    Tree Care
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                    <span className="mr-2 h-1 w-1 rounded-full bg-green-400 group-hover:w-2 transition-all duration-200"></span>
                    DIY Crafts
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white border-b border-green-500 pb-2 mb-4">Contact Us</h3>
              <ul className="space-y-4">
                <li>
                  <a href="tel:070-284-8863" className="flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                    <span className="flex-shrink-0 h-8 w-8 rounded-full bg-green-700 bg-opacity-25 flex items-center justify-center mr-3">
                      <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </span>
                    <span>070 284 8863</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:cocohub@gmail.com" className="flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                    <span className="flex-shrink-0 h-8 w-8 rounded-full bg-green-700 bg-opacity-25 flex items-center justify-center mr-3">
                      <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <span>cocohub@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                    <span className="flex-shrink-0 h-8 w-8 rounded-full bg-green-700 bg-opacity-25 flex items-center justify-center mr-3">
                      <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </span>
                    <span>Ipalogama, Sri Lanka</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        
        
        {/* Bottom copyright and links */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-center md:text-left text-sm text-gray-400 mb-4 md:mb-0">
            &copy; 2025 CocoHub - Coconut Resource Center. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center space-x-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors duration-200 mb-2">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-200 mb-2">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors duration-200 mb-2">Cookie Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-200 mb-2">Accessibility</a>
          </div>
        </div>
      </div>
      
      {/* Decorative wave shape at bottom */}
      <div className="relative">
        <div className="absolute bottom-0 left-0 w-full overflow-hidden h-12 pointer-events-none">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path 
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34
                            C989.49,25,1113-14.29,1200,52.47V0Z" 
              opacity="0.25"
              fill="currentColor"
            ></path>
            <path 
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
              opacity="0.5"
              fill="currentColor"
            ></path>
            <path 
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;