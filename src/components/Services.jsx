import React from 'react';

const Services = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
      <p className="text-lg text-center mb-6">
        We offer a variety of coconut-related services to meet your needs.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold mb-4">Coconut Consulting</h2>
          <p>
            Expert advice on coconut farming, production, and business development.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold mb-4">Coconut Processing</h2>
          <p>
            Professional processing services for coconut products with state-of-the-art facilities.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold mb-4">Coconut Training</h2>
          <p>
            Educational workshops and training programs for farmers and entrepreneurs.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold mb-4">Product Development</h2>
          <p>
            Custom coconut product development services for businesses and brands.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold mb-4">Supply Chain Management</h2>
          <p>
            End-to-end supply chain solutions for coconut producers and distributors.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold mb-4">Quality Testing</h2>
          <p>
            Comprehensive quality assurance and testing for coconut products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;