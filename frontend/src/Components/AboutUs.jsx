import React from "react";
import stackedContainers from '../assets/shipping1.png'
import teamWork from '../assets/teamwork.png'

const AboutUs = () => {
  return (
    <div className="bg-white py-15 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-20">
        {/* Left Image Section */}
        <div className="relative w-full md:w-1/2">
          {/* Main Image */}
          <img
            src={stackedContainers}
            alt="Stacked Containers"
            className="w-full h-auto"
          />

          {/* Experience Label */}
          <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded shadow text-sm font-semibold text-gray-700">
            <span className="text-primary text-lg font-bold">5+</span>{" "}
            years of <br /> experience
          </div>

          {/* Small Overlapping Image */}
          <img
            src={teamWork}
            alt="Team High-Five"
            className="absolute bottom-[-20px] left-70 w-50 h-28 object-cover shadow-lg border-l-4 border-t-4 border-white"
          />
        </div>

        {/* Right Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-medium text-gray-600 mb-4">About us</h2>
          <hr className="border-none outline-none h-0.5 bg-primary mb-4 w-16 mx-auto md:mx-0" />
          <p className="text-lg font-medium text-gray-800 mb-3">
            Above all, we believe that real change is possible and that tomorrow
            doesn’t have to be like today.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
            Solving social problems requires leaders from foundations,
            businesses, nonprofits, and governments to reimagine the systems and
            relationships that shape our world. We strive for a deep
            understanding of how to create social change.
          </p>
          <button className="bg-primary text-white px-6 py-3 rounded hover:bg-orange-700 transition">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
