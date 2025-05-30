import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import backgroundImage from '../assets/office1.png'

const Testimonials = () => {
  return (
    <section
      className="relative bg-cover bg-center py-20 px-4"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-60 pointer-events-none"></div>
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="text-white max-w-md">
          <h3 className="text-2xl font-light">What they say about us</h3>
          <p className="text-[#FFA500] mt-2">Testimonials</p>
        </div>
        <div className="bg-white p-6 md:p-8 rounded shadow-md max-w-xl relative">
          <FaQuoteLeft className="text-[#FFA500] text-2xl mb-4" />
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            Our experience with this shipping company has been outstanding. Deliveries always arrive on time and in perfect condition. Their customer service is responsive and helpful, making our logistics seamless and stress-free.
          </p>
          <h4 className="text-[#FFA500] font-semibold text-sm">Cameron Williamson</h4>
          <p className="text-xs text-gray-500">Ranchview Dr. Richardson, Corporation</p>
          <div className="absolute bottom-6 right-6 flex items-center space-x-2">
            <MdArrowBackIos className="text-gray-400 cursor-pointer hover:text-gray-600" />
            <MdArrowForwardIos className="text-gray-600 cursor-pointer hover:text-black" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
