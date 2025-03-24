import React from 'react';

const AboutSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About cOcOHub
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Empowering the coconut industry with innovation, sustainability, and community.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-bold text-gray-900">Our Mission</h3>
            <p className="mt-2 text-gray-600">
              To revolutionize the coconut industry by providing innovative solutions, fostering sustainability, and connecting farmers, businesses, and consumers worldwide.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-bold text-gray-900">Our Vision</h3>
            <p className="mt-2 text-gray-600">
              To create a global ecosystem where coconut farmers thrive, businesses prosper, and consumers enjoy high-quality, sustainable coconut products.
            </p>
          </div>

          {/* Values */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-bold text-gray-900">Our Values</h3>
            <p className="mt-2 text-gray-600">
              Sustainability, innovation, community, and quality are at the heart of everything we do. We are committed to ethical practices and environmental stewardship.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600">
            Join us in our journey to transform the coconut industry.
          </p>
          <div className="mt-6">
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;