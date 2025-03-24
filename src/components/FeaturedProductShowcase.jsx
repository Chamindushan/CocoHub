import React, { useEffect, useState } from 'react';

const FeaturedProductShowcase = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    // Define the product data
    const productData = [
      {
        name: 'Coconut Shell Charcoal',
        description: 'Activated charcoal made from coconut shells, ideal for detox and skincare.',
        imagePath: 'Coconut shell charcoal.jpg',
      },
      {
        name: 'Coconut fibre brushes',
        description: 'Eco-friendly brushes made from coconut shells, perfect for cleaning.',
        imagePath: 'Coconut fibre brushes.jpg',
      },
      {
        name: 'Coconut Shell Jewelry',
        description: 'Unique and stylish jewelry crafted from polished coconut shells.',
        imagePath: 'Coconut shell jewelry.jpg',
      },
      {
        name: 'Coconut Shell Lamps',
        description: 'Handcrafted lamps made from coconut shells with intricate designs.',
        imagePath: 'Coconut shell lamps.jpg',
      },
      {
        name: 'Coconut Shell Cups',
        description: 'Eco-friendly cups made from coconut shells, perfect for beverages.',
        imagePath: 'Coconut shell cups.jpg',
      },
      {
        name: 'Coconut Spoons',
        description: 'Sustainable spoons made from coconut wood, ideal for kitchen use.',
        imagePath: 'Spoons.jpg',
      },
      {
        name: 'Coconut Ingredients',
        description: 'Natural coconut-based ingredients for cooking and skincare.',
        imagePath: 'Ingredients.jpg',
      },
      {
        name: 'Coconut Shell Crafts',
        description: 'Beautiful handmade crafts made from coconut shells.',
        imagePath: 'Coconut shell crafts.jpg',
      },
      {
        name: 'Coconut Honey',
        description: 'Pure honey made from coconut flowers, rich in nutrients.',
        imagePath: 'Coconut  honey.jpg',
      },
      
      {
        name: 'Coconut Straw Pots',
        description: 'Eco-friendly plant pots made from coconut straw.',
        imagePath: 'Coconut straw pots.jpg',
      },
      {
        name: 'Wooden Wangediya',
        description: 'Traditional wooden wangediya made from coconut wood.',
        imagePath: 'Wooden Wangediya.jpg',
      },
      {
        name: 'Coconut Fibre Carpet',
        description: 'Durable and eco-friendly carpets made from coconut fibers.',
        imagePath: 'Coconut fibre carpet.jpg',
      },
    ];

    // Load all images dynamically
    const loadProducts = async () => {
      try {
        const loadedProducts = await Promise.all(
          productData.map(async (product) => {
            try {
              // Use dynamic import with a specific path format
              const imgModule = await import(`../assets/product/${product.imagePath}`);
              return {
                ...product,
                image: imgModule.default
              };
            } catch (error) {
              console.error(`Failed to load image for ${product.name}:`, error);
              // Fallback to placeholder if image import fails
              return {
                ...product,
                image: `https://placehold.co/600x400?text=${encodeURIComponent(product.name)}`
              };
            }
          })
        );
        
        setProducts(loadedProducts);
      } catch (error) {
        console.error("Error loading products:", error);
      }
    };

    loadProducts();
  }, []);

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Featured Creations
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Handcrafted coconut products from artisans around the world
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <div
                key={index}
                className="relative rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-64">
                  <img
                    className="w-full h-full object-cover"
                    src={product.image}
                    alt={product.name}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-600 opacity-10"></div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">{product.description}</p>
                  <div className="mt-2 flex justify-between items-center">
                    <button className="px-3 py-1 bg-green-100 text-green-800 rounded-md text-sm">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductShowcase;