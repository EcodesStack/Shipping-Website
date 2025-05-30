import React from "react";
import HeroImage from "../assets/hero.png";

const Hero = () => {
  return (
    <div
      className="relative w-full h-[100vh] bg-center bg-cover bg-no-repeat flex items-center justify-center lg:justify-start"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      {/* Overlay blur to soften background only on small screens */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm lg:backdrop-blur-none"></div>

      {/* Hero Content */}
      <div
        className="relative z-10 px-12 space-y-6
        flex flex-col items-center justify-center text-center
        lg:items-start lg:text-left md:px-24"
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800 lg:text-gray-800">
          CONNECT YOUR <br />
          BUSINESS TO A WORLD <br /> OF POSSIBILITIES
        </h1>
        <hr className="border-none outline-none h-0.5 bg-gray-800 w-16" />
        <p className="md:text-xs font-medium text-sm text-gray-800">
          it is a long established fact that a reader <br /> will be distracted by the
          readable content <br /> of a page when looking at its layout
        </p>
        <div className="w-full flex justify-center lg:justify-start">
          <button className="bg-primary text-white px-6 py-3 rounded shadow-md hover:bg-primary/90 transition">
            View services
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
