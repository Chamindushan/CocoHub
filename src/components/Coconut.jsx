import React, { useState } from 'react';

// Import all images directly at the top
// Note: You'll need to replace these with your actual paths
import navasiThembili from '../assets/variety/navasi thembili.webp';
import rathRanThembili from '../assets/variety/Rath Ran Thembili.webp';
import kingCoconut from '../assets/variety/King Coconut.webp';
import brownKundira from '../assets/variety/brown kundira.webp';
import greenKundira from '../assets/variety/green kundira.webp';
import redKundira from '../assets/variety/red kundira.webp';
import yellowKundira from '../assets/variety/yellow kundira.webp';
import bodri from '../assets/variety/bodri.webp';
import dikiripol from '../assets/variety/dikiripol.webp';
import gonthembili from '../assets/variety/gonthembili.webp';
import kamandala from '../assets/variety/kamandala.webp';
import navasi from '../assets/variety/navasi.webp';
import porapol from '../assets/variety/porapol.webp';
import tallType from '../assets/variety/tall type.webp';

const Coconut = () => {
  const [imageErrors, setImageErrors] = useState({});

  // Coconut varieties data with direct image imports
  const coconutVarieties = [
    {
      name: "Arantiaca Coconut",
      types: [
        { name: "Navasi Thembili", image: navasiThembili },
        { name: "Rath Ran Thembili", image: rathRanThembili },
        { name: "King Coconut", image: kingCoconut }
      ]
    },
    {
      name: "Kunduira",
      types: [
        { name: "Brown Kundira", image: brownKundira },
        { name: "Green Kundira", image: greenKundira },
        { name: "Red Kundira", image: redKundira },
        { name: "Yellow Kundira", image: yellowKundira }
      ]
    },
    {
      name: "Typica Coconut",
      types: [
        { name: "Bodri", image: bodri },
        { name: "Dikiripol", image: dikiripol },
        { name: "Gonthembili", image: gonthembili },
        { name: "Kamandala", image: kamandala },
        { name: "Navasi", image: navasi },
        { name: "Porapol", image: porapol },
        { name: "Tall Type", image: tallType }
      ]
    }
  ];

  // Handler for image loading error
  const handleImageError = (name) => {
    console.error(`Failed to load image: ${name}`);
    setImageErrors(prev => ({
      ...prev,
      [name]: true
    }));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-800 mb-4">Coconut</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Welcome to our Coconut page. Here you can find information about different coconut varieties,
          their benefits, and how they're used in our products.
        </p>
      </header>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-green-700 mb-8 text-center">
          Coconut Varieties
        </h2>
        <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
          Explore different coconut varieties from around the world, each with unique characteristics and uses.
        </p>

        <div className="space-y-16">
          {coconutVarieties.map((variety, index) => (
            <div key={index} className="bg-green-50 rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-semibold text-green-800 mb-6 text-center">{variety.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {variety.types.map((type, typeIndex) => (
                  <div key={typeIndex} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="h-48 overflow-hidden relative">
                      {imageErrors[type.name] ? (
                        <div className="flex items-center justify-center h-full bg-gray-100">
                          <p className="text-gray-500">{type.name}</p>
                        </div>
                      ) : (
                        <img 
                          src={type.image} 
                          alt={type.name} 
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          onError={() => handleImageError(type.name)}
                        />
                      )}
                    </div>
                    <div className="p-4 text-center">
                      <h4 className="text-lg font-medium text-green-700">{type.name}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-green-700 mb-6 text-center">
          Coconut Benefits
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto">
          Learn about the many health benefits of coconuts, from their nutritional value to medicinal properties.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-green-700 mb-6 text-center">
          Coconut Products
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto">
          Discover our range of coconut-based products, sustainably sourced and ethically produced.
        </p>
      </section>
    </div>
  );
};

export default Coconut;