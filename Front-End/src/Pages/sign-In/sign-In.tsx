import React, { useState } from "react";
import { FaGoogle, FaApple } from "react-icons/fa";

export default function SignUp() {
  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen font-inter bg-white">
      {/* LEFT SECTION */}
      <div className="flex-1 flex flex-col justify-center px-8 sm:px-16 lg:px-24 py-12">
        {/* Logo */}
        <div className="mb-10 flex items-center gap-2">
          <span className="bg-teal-700 text-white px-2 py-1 rounded-md font-bold text-lg">
            {`{}`}
          </span>
          <h1 className="text-2xl font-semibold text-teal-700">SoftQA</h1>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Create an Account</h2>
        <p className="text-gray-500 mb-8 text-sm">
          Register now and start your journey with smarter QA automation.
        </p>

        {/* Register Form */}
        <form className="space-y-5 max-w-md w-full">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">User Name</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm shadow-sm focus:ring-2 focus:ring-teal-600 focus:border-transparent transition"
            />
          </div>

          {/* Profile Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Profile Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm cursor-pointer focus:ring-2 focus:ring-teal-600 focus:border-transparent transition"
            />
            {image && (
              <div className="mt-3 flex items-center gap-3">
                <img
                  src={image}
                  alt="Preview"
                  className="w-16 h-16 rounded-full object-cover border-2 border-teal-600 shadow-sm"
                />
                <span className="text-xs text-gray-600">Profile Preview</span>
              </div>
            )}
          </div>

          {/* DOB */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm shadow-sm focus:ring-2 focus:ring-teal-600 focus:border-transparent transition"
            />
          </div>

          {/* About */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">About</label>
            <textarea
              placeholder="Tell us something about yourself"
              rows={3}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm shadow-sm focus:ring-2 focus:ring-teal-600 focus:border-transparent resize-none transition"
            ></textarea>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm shadow-sm focus:ring-2 focus:ring-teal-600 focus:border-transparent transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm shadow-sm focus:ring-2 focus:ring-teal-600 focus:border-transparent transition"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal-700 text-white py-3 rounded-lg text-sm font-medium shadow-md hover:bg-teal-800 active:scale-[0.98] transition-transform"
          >
            Create Account
          </button>

          {/* OR divider */}
          <div className="flex items-center gap-3 mt-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="text-gray-500 text-xs font-medium">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Social Login */}
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <button
              type="button"
              className="flex-1 border border-gray-300 rounded-lg py-3 flex items-center justify-center gap-2 text-sm hover:bg-gray-50 shadow-sm transition"
            >
              <FaGoogle className="text-red-500 text-lg" />
              Google
            </button>
            <button
              type="button"
              className="flex-1 border border-gray-300 rounded-lg py-3 flex items-center justify-center gap-2 text-sm hover:bg-gray-50 shadow-sm transition"
            >
              <FaApple className="text-gray-800 text-lg" />
              Apple
            </button>
          </div>

          {/* Sign In Redirect */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <a href="#" className="text-teal-600 font-medium hover:underline">
              Sign In
            </a>
          </p>
        </form>
      </div>

      {/* RIGHT SECTION */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-teal-700 via-teal-700 to-teal-700 text-white flex-col justify-center items-center px-16 py-12">
        <h2 className="text-3xl font-semibold mb-6 text-center leading-snug max-w-lg">
          Revolutionize QA with <br /> Smarter Automation
        </h2>

        <blockquote className="text-lg italic text-center max-w-lg mb-6 opacity-90">
          “SoftQA has completely transformed our testing process. It’s reliable, efficient,
          and ensures our releases are always top-notch.”
        </blockquote>

        <div className="flex flex-col items-center mb-12">
          <img
            src="https://avatars.githubusercontent.com/u/177734820?v=4"
            alt="User"
            className="w-14 h-14 rounded-full mb-2 border-2 border-white shadow-md"
          />
          <p className="font-medium">Gohil Gautam</p>
          <p className="text-sm text-teal-200">Full Stack Developer</p>
        </div>

        {/* Brand Logos */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm opacity-80">
          <span>Discord</span>
          <span>Mailchimp</span>
          <span>Grammarly</span>
          <span>Attentive</span>
          <span>Intercom</span>
          <span>Square</span>
          <span>Dropbox</span>
        </div>
      </div>
    </div>
  );
}
