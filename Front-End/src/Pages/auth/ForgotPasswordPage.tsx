import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

// This component will render the decorative background bubbles
const DecorativeBubble = ({ className, size }) => (
  <div
    className={`absolute rounded-full ${size} ${className} opacity-20`}
    style={{ filter: 'blur(40px)' }}
  />
);

/**
 * A component for the "Forgot Password" page.
 * Allows a user to enter their email to receive an OTP.
 * Styled to match the Login page.
 */
const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      setMessage('Please enter your email address.');
      return;
    }

    setIsSending(true);
    setMessage('Sending OTP...');

    // Simulate an API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // On success
      setMessage(`An OTP has been sent to ${email}. Please check your inbox.`);
      setIsSending(false);
      setEmail(''); // Clear the input field
    } catch (error) {
      // On failure
      console.error("OTP Error:", error);
      setMessage('Failed to send OTP. Please try again later.');
      setIsSending(false);
    }
  };

  return (
    <div className="font-inter flex min-h-screen w-full flex-col overflow-hidden bg-white md:flex-row">
        
      {/* Left Column: Welcome Content & Graphics */}
      <div className="relative w-full overflow-hidden bg-gradient-to-br from-sky-400 to-cyan-400 p-12 text-white md:w-3/5 lg:w-3/5 xl:w-1/2">
        
        {/* Decorative Graphic Elements */}
        <DecorativeBubble size="w-64 h-64" className="bg-sky-200 -top-20 -left-20" />
        <DecorativeBubble size="w-80 h-80" className="bg-cyan-200 -bottom-40 -right-20" />
        <DecorativeBubble size="w-56 h-56" className="bg-sky-100 bottom-20 left-10" />

        <div className="relative z-10 flex h-full flex-col justify-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Forgot Your Password?
          </h1>
          <p className="max-w-prose text-lg text-sky-50 opacity-90">
            No problem at all. Just enter your email address below, and we'll send an OTP (One-Time Password) to help you regain access.
          </p>
        </div>
      </div>

      {/* Right Column: Form */}
      <div className="flex w-full items-center justify-center p-12 md:w-2/5 lg:w-2/5 xl:w-1/2">
        <div className="w-full max-w-md">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
            Reset Password
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="relative mb-6">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSending}
                placeholder=" "
                required
                className="peer w-full rounded-lg border border-gray-200 bg-slate-50 py-3 pl-12 pr-4 text-gray-700 placeholder-transparent transition-colors duration-300 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-200"
              />
              <label
                htmlFor="email"
                className="absolute left-12 top-3 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:left-11 peer-focus:text-xs peer-focus:text-sky-600"
              >
                Email Address
              </label>
            </div>

            {/* Message Display */}
            {message && (
              <p className={`mb-4 text-sm text-center font-medium ${message.includes('Failed') ? 'text-red-600' : 'text-green-600'}`}>
                {message}
              </p>
            )}

            {/* Send OTP Button */}
            <button
              type="submit"
              disabled={isSending}
              className="w-full transform rounded-lg bg-gradient-to-r from-sky-500 to-cyan-500 py-3 text-center font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-sky-600 hover:to-cyan-600 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:from-gray-400 disabled:to-gray-500 disabled:hover:scale-100"
            >
              {isSending ? 'Sending...' : 'Send OTP'}
            </button>
          </form>

          {/* Back to Login Link */}
          <p className="mt-8 text-center text-sm text-gray-500">
            Remembered your password?{' '}
            <Link to="/"
              className="font-medium text-sky-600 hover:text-sky-700 hover:underline"
            >
              Back to Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;