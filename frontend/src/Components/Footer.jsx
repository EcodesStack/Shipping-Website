import React from 'react';
import logo from '../assets/logo.png'
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0A2A43] text-gray-300 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo and Description */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img src={logo} alt="City Cargo Logo" className="h-6" />
            <span className="font-semibold text-white text-lg">CITY CARGO</span>
          </div>
          <p className="text-sm">
            For more than 50 years, Transport has been a reliable partner in logistics and cargo forwarding.
            <br /><br />
            We work 7 days a week, every day including major holidays. Contact us for any info.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li>About us</li>
            <li>Services</li>
            <li>Jobs</li>
            <li>News</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-4">Get in touch</h4>
          <p className="text-sm mb-2">2972 Westheimer Rd. <br /> Santa Ana, Illinois 85486</p>
          <p className="text-sm mb-2"> (671) 555-0110 <br /> (901) 555-0101</p>
          <p className="text-sm">citycargo@mail.com</p>
        </div>

        {/* Social + Email */}
        <div>
          <h4 className="text-white font-semibold mb-4">Social network</h4>
          <div className="flex space-x-4 mb-6">
            <FaTwitter className="text-xl cursor-pointer hover:text-white" />
            <FaInstagram className="text-xl cursor-pointer hover:text-white" />
            <FaLinkedinIn className="text-xl cursor-pointer hover:text-white" />
            <FaFacebookF className="text-xl cursor-pointer hover:text-white" />
          </div>
          <h4 className="text-white font-semibold mb-2">Sign up for email alerts</h4>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your e-mail"
              className="w-full px-4 py-2 text-sm bg-gray-300 text-gray-800"
            />
            <button
              type="submit"
              className="bg-primary px-4 py-2 text-white font-bold"
            >
              →
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
