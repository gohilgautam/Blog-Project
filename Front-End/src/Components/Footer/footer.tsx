import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-teal-700 text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        {/* Left Section - Brand */}
        <div className="md:max-w-xs">
          <h2 className="text-2xl font-bold mb-2 flex items-center">
            <span className="bg-white text-teal-700 px-2 py-1 rounded-md mr-2">{`{}`}</span>
            SoftQA
          </h2>
          <p className="text-sm text-teal-100">
            Empowering QA Engineers to build faster, test smarter, and automate better.
          </p>
        </div>

        {/* Middle Section - Links */}
        <div className="flex flex-col md:flex-row gap-8 text-sm font-medium">
          <div>
            <h3 className="text-white font-semibold mb-2">Company</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-teal-200 transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="hover:text-teal-200 transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="hover:text-teal-200 transition-colors duration-200">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Support</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-teal-200 transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="hover:text-teal-200 transition-colors duration-200">Contact</a></li>
              <li><a href="#" className="hover:text-teal-200 transition-colors duration-200">FAQs</a></li>
            </ul>
          </div>
        </div>

        {/* Right Section - Social + Newsletter */}
        <div className="flex flex-col gap-4 md:items-end">
          <h3 className="font-semibold text-white">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-teal-200 transition-transform transform hover:scale-110"><FaGlobe /></a>
            <a href="#" className="hover:text-teal-200 transition-transform transform hover:scale-110"><FaTwitter /></a>
            <a href="#" className="hover:text-teal-200 transition-transform transform hover:scale-110"><FaInstagram /></a>
            <a href="#" className="hover:text-teal-200 transition-transform transform hover:scale-110"><FaLinkedin /></a>
          </div>

          {/* Newsletter */}
          <div className="mt-4">
            <h4 className="text-white font-semibold mb-2">Subscribe</h4>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 rounded-md text-black focus:outline-none w-full md:w-auto"
              />
              <button className="bg-white text-teal-700 px-4 py-2 rounded-md font-semibold hover:bg-teal-100 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-teal-600 mt-10 pt-6 text-center text-sm text-teal-100">
        © {new Date().getFullYear()} SoftQA. All rights reserved.
      </div>
    </footer>
  );
}
