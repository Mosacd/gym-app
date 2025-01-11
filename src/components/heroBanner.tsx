import React from 'react';
import gymheroimg from '../assets/image 1.png';
import { Button } from './ui/button';

const HeroBanner: React.FC = () => {
  return (
    <section
      className="relative bg-black text-white h-[70vh] flex items-center"
      style={{
        backgroundImage: `url(${gymheroimg})`,
        backgroundSize: 'cover', // Ensures the image covers the entire section
  backgroundPosition: 'center', // Centers the image
  backgroundRepeat: 'no-repeat', // Prevents tiling
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold">
          Empower Your Fitness Journey
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Premium gear for athletes who demand the best.
        </p>
        <div className="mt-6 flex justify-center md:justify-start gap-4">
          <Button variant={'default'} className="px-8 py-6 font-bold">
            Shop Now
          </Button>
          <Button variant={'ghost'} className="px-8 py-6 border  font-bold hover:bg-white hover:text-black">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
