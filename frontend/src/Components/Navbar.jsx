import React, { useState } from "react";
import logo from "../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white backdrop-blur-lg flex items-center text-gray-600 justify-between text-sm px-4 py-2 md:px-24 border-b border-b-gray-300 shadow-sm font-semibold">
      {/* Logo aligned left */}
      <img
        onClick={() => navigate("/")}
        className="w-28 cursor-pointer"
        src={logo}
        alt=""
      />

      {/* Centered nav links */}
      <ul className="hidden md:flex items-start gap-5 font-medium ml-auto">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-gray-600" : "")}
        >
          {({ isActive }) => (
            <li className="py-1 flex flex-col items-center">
              Home
              {isActive && (
                <hr className="border-none outline-none h-0.5 bg-primary w-full" />
              )}
            </li>
          )}
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "text-gray-600" : "")}
        >
          {({ isActive }) => (
            <li className="py-1 flex flex-col items-center">
              About
              {isActive && (
                <hr className="border-none outline-none h-0.5 bg-primary w-full" />
              )}
            </li>
          )}
        </NavLink>

        <NavLink
          to="/services"
          className={({ isActive }) => (isActive ? "text-gray-600" : "")}
        >
          {({ isActive }) => (
            <li className="py-1 flex flex-col items-center">
              Services
              {isActive && (
                <hr className="border-none outline-none h-0.5 bg-primary w-full" />
              )}
            </li>
          )}
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "text-gray-600" : "")}
        >
          {({ isActive }) => (
            <li className="py-1 flex flex-col items-center">
              Contact
              {isActive && (
                <hr className="border-none outline-none h-0.5 bg-primary w-full" />
              )}
            </li>
          )}
        </NavLink>
      </ul>
      <div className="ml-auto flex items-center gap-4">
        <button className="bg-primary text-white px-8 py-3 rounded font-light hidden md:block">
          Request a call
        </button>
        <GiHamburgerMenu
          onClick={() => setShowMenu(true)}
          className="w-6 h-6 md:hidden cursor-pointer"
        />
      </div>

      {/* mobile menu */}

      {showMenu && (
         <div className="fixed inset-0 h-screen z-50 w-full bg-white md:hidden transition-all duration-500">
        <div className="flex items-center justify-between px-5 py-2">
          <img className="w-28" src={logo} alt="" />
          <IoMdClose
            className="w-7 h-7 cursor-pointer"
            onClick={() => setShowMenu(false)}
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-10 px-5 text-lg font-medium">
          <NavLink onClick={() => setShowMenu(false)} to="/">
            <p className="px-4 py-2 rounded-md inline-block">Home</p>
          </NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/about">
            <p className="px-4 py-2 rounded-md inline-block">About</p>
          </NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/services">
            <p className="px-4 py-2 rounded-md inline-block">Services</p>
          </NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/contact">
            <p className="px-4 py-2 rounded-md inline-block">Contact</p>
          </NavLink>
        </ul>
      </div>
      )}
    </div>
  );
};

export default Navbar;
