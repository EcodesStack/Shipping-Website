import React from "react";

// Import logos from the assets directory
import ups from "../assets/ups.png";
import fedex from "../assets/fedex.png";
import dhl from "../assets/dhl.png";
import aramex from "../assets/aramex.png";
import dbschenker from "../assets/dbschenker.png";
import maersk from "../assets/maersk.png";

const logos = [ups, fedex, dhl, aramex, dbschenker, maersk];

const Partners = () => {
  return (
    <section className="py-16 px-4 bg-white text-center">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-medium text-gray-700 mb-2">Our partners</h3>
        <hr className="w-16 mx-auto border-[#FFA500] border-t-2 mb-8" />
        <div className="flex justify-center items-center gap-4 md:gap-10 flex-nowrap">
          {logos.map((logo, index) => {
            // Make all logos the same height and aligned
            return (
              <img
                key={index}
                src={logo}
                alt={`Partner ${index + 1}`}
                className="h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                style={{ marginTop: 0 }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Partners;