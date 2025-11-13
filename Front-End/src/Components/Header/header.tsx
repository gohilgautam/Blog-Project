import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-teal-700 text-white shadow-md py-4 px-6 md:px-16 flex justify-between items-center relative">
      {/* Logo */}
      <h1 className="text-2xl font-bold tracking-wide flex items-center">
        <span className="bg-white text-teal-700 px-2 py-1 rounded-md mr-2">{`{}`}</span>
        SoftQA
      </h1>

      {/* Navigation Links (Desktop) */}
      <nav className="hidden md:flex gap-8 text-sm font-medium">
        <a href="#" className="relative hover:text-teal-200 transition">
          Home
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
        </a>
        <a href="#" className="relative hover:text-teal-200 transition">
          About
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
        </a>
        <a href="#" className="relative hover:text-teal-200 transition">
          Courses
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
        </a>
        <a href="#" className="relative hover:text-teal-200 transition">
          Contact
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
        </a>
      </nav>

      {/* Login / Register Buttons */}
      <div className="hidden md:flex gap-4">
        <button className="border border-white px-4 py-2 rounded-md hover:bg-white hover:text-teal-700 transition font-medium">
          Login
        </button>
        <button className="bg-white text-teal-700 px-4 py-2 rounded-md hover:bg-teal-100 transition font-medium">
          Register
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white text-2xl focus:outline-none"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-teal-700 flex flex-col items-center gap-4 py-6 md:hidden z-50 shadow-lg">
          <a href="#" className="text-white text-lg font-medium hover:text-teal-200 transition">Home</a>
          <a href="#" className="text-white text-lg font-medium hover:text-teal-200 transition">About</a>
          <a href="#" className="text-white text-lg font-medium hover:text-teal-200 transition">Courses</a>
          <a href="#" className="text-white text-lg font-medium hover:text-teal-200 transition">Contact</a>
          <div className="flex gap-4 mt-4">
            <button className="border border-white px-4 py-2 rounded-md hover:bg-white hover:text-teal-700 transition font-medium">
              Login
            </button>
            <button className="bg-white text-teal-700 px-4 py-2 rounded-md hover:bg-teal-100 transition font-medium">
              Register
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
