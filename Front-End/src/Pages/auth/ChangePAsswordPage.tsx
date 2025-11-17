import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../Routes/routes';
import { Lock } from 'lucide-react';

// This component will render the decorative background bubbles
const DecorativeBubble: React.FC<{ className: string; size: string }> = ({ className, size }) => (
  <div
    className={`absolute rounded-full ${size} ${className} opacity-20`}
    style={{ filter: 'blur(40px)' }}
  />
);

/**
 * A component for the "Change Password" page.
 * Allows a user to set a new password.
 * Styled to match the Login and Forgot Password pages.
 */
const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage('');

    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match. Please try again.');
      return;
    }

    if (newPassword.length < 8) {
        setMessage('Password must be at least 8 characters long.');
        return;
    }

    setIsSubmitting(true);
    setMessage('Updating password...');

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // On success
      setMessage('Password updated successfully! Redirecting to login...');
      setNewPassword('');
      setConfirmPassword('');
      // Simulate redirection
      setTimeout(() => {
        window.location.href = '/'; // Redirect to login
      }, 2000);

    } catch (error) {
      // On failure
      console.error("Password Update Error:", error);
      setMessage('Failed to update password. Please try again later.');
      setIsSubmitting(false);
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
            Set Your New Password
          </h1>
          <p className="max-w-prose text-lg text-sky-50 opacity-90">
            Almost there! Please enter and confirm your new password below. Make sure it's secure.
          </p>
        </div>
      </div>

      {/* Right Column: Form */}
      <div className="flex w-full items-center justify-center p-12 md:w-2/5 lg:w-2/5 xl:w-1/2">
        <div className="w-full max-w-md">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
            Change Password
          </h2>

          <form onSubmit={handleSubmit}>
            {/* New Password Input */}
            <div className="relative mb-6">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password"
                id="new-password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                disabled={isSubmitting}
                placeholder=" "
                required
                className="peer w-full rounded-lg border border-gray-200 bg-slate-50 py-3 pl-12 pr-4 text-gray-700 placeholder-transparent transition-colors duration-300 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-200"
              />
              <label
                htmlFor="new-password"
                className="absolute left-12 top-3 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:left-11 peer-focus:text-xs peer-focus:text-sky-600"
              >
                New Password
              </label>
            </div>

            {/* Confirm Password Input */}
            <div className="relative mb-6">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={isSubmitting}
                placeholder=" "
                required
                className="peer w-full rounded-lg border border-gray-200 bg-slate-50 py-3 pl-12 pr-4 text-gray-700 placeholder-transparent transition-colors duration-300 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-200"
              />
              <label
                htmlFor="confirm-password"
                className="absolute left-12 top-3 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:left-11 peer-focus:text-xs peer-focus:text-sky-600"
              >
                Confirm New Password
              </label>
            </div>

            {/* Message Display */}
            {message && (
              <p className={`mb-4 text-sm text-center font-medium ${message.includes('Failed') || message.includes('match') || message.includes('long') ? 'text-red-600' : 'text-green-600'}`}>
                {message}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full transform rounded-lg bg-gradient-to-r from-sky-500 to-cyan-500 py-3 text-center font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-sky-600 hover:to-cyan-600 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:from-gray-400 disabled:to-gray-500 disabled:hover:scale-100"
            >
              {isSubmitting ? 'Updating...' : 'Update Password'}
            </button>
          </form>

          {/* Back to Login Link */}
          <p className="mt-8 text-center text-sm text-gray-500">
            Remembered your password?{' '}
            <Link to={routes.login}
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

export default ChangePassword;