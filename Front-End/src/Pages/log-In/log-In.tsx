import React from "react";
import { FaGoogle, FaApple } from "react-icons/fa";

export default function Login() {
  return (
    <div className="flex min-h-screen">
      {/* LEFT SECTION */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-20 bg-white">
        {/* Logo */}
        <div className="mb-10">
          <h1 className="text-2xl font-semibold text-teal-700 flex items-center gap-2">
            <span className="bg-teal-700 text-white px-2 py-1 rounded-md">{`{}`}</span>
            SoftQA
          </h1>
        </div>

        {/* Welcome text */}
        <h2 className="text-3xl font-semibold mb-2 text-gray-800">Welcome Back!</h2>
        <p className="text-gray-500 mb-8">
          Sign in to access your dashboard and continue optimizing your QA process.
        </p>

        {/* Form */}
        <form className="space-y-5 max-w-md">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-500 outline-none"
            />
            <div className="text-right mt-2">
              <a href="#" className="text-sm text-teal-600 hover:underline">
                Forgot Password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-700 text-white py-3 rounded-lg font-medium hover:bg-teal-800 transition"
          >
            Sign In
          </button>

          {/* OR divider */}
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Social Buttons */}
          <button
            type="button"
            className="w-full border border-gray-300 rounded-lg py-3 flex items-center justify-center gap-2 hover:bg-gray-50 transition"
          >
            <FaGoogle className="text-red-500" />
            Continue with Google
          </button>

          <button
            type="button"
            className="w-full border border-gray-300 rounded-lg py-3 flex items-center justify-center gap-2 hover:bg-gray-50 transition"
          >
            <FaApple className="text-gray-800" />
            Continue with Apple
          </button>

          <p className="text-center text-sm text-gray-600 mt-6">
            Don’t have an Account?{" "}
            <a href="#" className="text-teal-700 font-medium hover:underline">
              Sign Up
            </a>
          </p>
        </form>
      </div>

      {/* RIGHT SECTION */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-teal-700 to-teal-700 text-white flex-col justify-center items-center px-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Revolutionize QA with Smarter Automation
        </h2>

        <blockquote className="text-lg italic max-w-lg text-center mb-6 opacity-90">
          “SoftQA has completely transformed our testing process. It’s reliable, efficient,
          and ensures our releases are always top-notch.”
        </blockquote>

        <div className="flex flex-col items-center mb-12">
          <img
            src="https://avatars.githubusercontent.com/u/177734820?v=4"
            alt="User"
            className="w-12 h-12 rounded-full mb-2"
          />
          <p className="font-medium">Gohil Gautam</p>
          <p className="text-sm text-teal-200">Full Stack Developer</p>
        </div>

        {/* Logos */}
        <div className="flex flex-wrap justify-center gap-6 opacity-80 text-sm">
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
