import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Transforming Ideas into Digital Reality</h1>
        <p className="text-xl mb-8">We create innovative solutions for businesses of all sizes</p>
        <button className="bg-white text-blue-700 font-bold py-2 px-6 rounded-full hover:bg-blue-100 transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;