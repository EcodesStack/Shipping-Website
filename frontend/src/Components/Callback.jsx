import React from 'react';
import background from '../assets/shipping1.png'

const CallBack = () => {
  return (
    <section className="w-full">
      {/* Top Section: Background Image with Form */}
      <div className="relative bg-cover bg-center h-80" style={{ backgroundImage: `url(${background})` }}>
        <div className="absolute inset-0 bg-opacity-60 flex flex-col justify-center items-center text-white px-4">
          <h2 className="text-3xl font-semibold mb-6">Request a call back</h2>
          <form className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 w-full max-w-4xl">
            <input
              type="text"
              placeholder="First name"
              className="w-full md:w-1/3 px-4 py-2 rounded  bg-white text-gray-700 outline-none focus:ring-1 focus:ring-primary"
            />
            <select className="w-full md:w-1/3 px-4 py-2 rounded bg-gray-100 text-gray-700 outline-none focus:ring-1 focus:ring-primary">
              <option>Business planning</option>
              <option>Shipping Inquiry</option>
              <option>Logistics Support</option>
            </select>
            <input
              type="tel"
              placeholder="Phone number"
              className="w-full md:w-1/3 px-4 py-2 rounded bg-white text-gray-700 outline-none focus:ring-1 focus:ring-primary"
            />
            <button
              type="submit"
              className="bg-primary hover:bg-orange-600 text-white px-6 py-2 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-[500px]">
        <iframe
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.4465185361347!2d-99.16766968492561!3d19.39067918690171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff3a1c3c0001%3A0x6db12869e8ab8709!2sMexico%20City!5e0!3m2!1sen!2smx!4v1624016007472!5m2!1sen!2smx"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="border-0"
        ></iframe>
      </div>
    </section>
  );
};

export default CallBack;
