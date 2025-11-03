import React from 'react';
import pak from "../assets/pak.jpg";

const Section = () => {
  return (
  <>
  
    <section className="w-full  relative">
      {/* Background Image */}
      <img 
        src={pak} 
        alt="Pak" 
        className="w-full h-100 object-cover"
      />

      {/* Overlay */}
     <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-start pt-20 text-center px-4">


        <h1 className="text-yellow-300 text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Welcome to Suhag Kangan Store
        </h1>
        <p className="text-white text-lg md:text-2xl mb-6 drop-shadow-md">
          Discover the finest bangles for every occasion
        </p>
        <button className="bg-yellow-400 text-rose-900 font-bold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-500 transition duration-300">
          Shop Now
        </button>
      </div>
    </section>
    <div>
        <section className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center text-rose-600 mb-12">
          Why Choose Suhag Kangan Bangles?
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="text-yellow-400 text-5xl mb-4">💍</div>
            <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
            <p className="text-gray-700">
              Handcrafted bangles made with high-quality materials for every occasion.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="text-yellow-400 text-5xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold mb-2">Exclusive Designs</h3>
            <p className="text-gray-700">
              Unique and modern designs that suit traditional and contemporary outfits.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <div className="text-yellow-400 text-5xl mb-4">🚚</div>
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-700">
              Quick and safe delivery across India so you can enjoy your bangles sooner.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  
  </>
  );
};

export default Section;
