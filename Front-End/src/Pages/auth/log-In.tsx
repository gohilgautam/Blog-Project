import { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Lock } from 'lucide-react';
import { routes } from '../../Routes/routes';

// This component will render the decorative background bubbles
const DecorativeBubble: React.FC<{ className: string; size: string }> = ({ className, size }) => (
  <div
    className={`absolute rounded-full ${size} ${className} opacity-20`}
    style={{ filter: 'blur(40px)' }}
  />
);

// This single component contains all the logic and styling.
export default function Login() {

  // Simple state for form inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt with:', { username, password, remember });
  };

  return (
    <div className="flex min-h-screen w-full flex-col overflow-hidden bg-white md:flex-row">
      
      {/* Left Column: Welcome Content & Graphics */}
      <div className="relative w-full overflow-hidden bg-gradient-to-br from-sky-400 to-cyan-400 p-12 text-white md:w-3/5 lg:w-3/5 xl:w-1/2">
        
        {/* Decorative Graphic Elements */}
        <DecorativeBubble size="w-64 h-64" className="bg-sky-200 -top-20 -left-20" />
        <DecorativeBubble size="w-80 h-80" className="bg-cyan-200 -bottom-40 -right-20" />
        <DecorativeBubble size="w-56 h-56" className="bg-sky-100 bottom-20 left-10" />

        <div className="relative z-10 flex h-full flex-col justify-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Welcome to Your Dashboard
          </h1>
          <p className="max-w-prose text-lg text-sky-50 opacity-90">
            Manage your content, engage with readers, and track your blog's 
            performance all in one place.
          </p>
        </div>
      </div>

      {/* Right Column: Login Form */}
      <div className="flex w-full items-center justify-center p-12 md:w-2/5 lg:w-2/5 xl:w-1/2">
        <div className="w-full max-w-md">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
            Log In to Your Account
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Username Input */}
            <div className="relative mb-6">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder=" "
                className="peer w-full rounded-lg border border-gray-200 bg-slate-50 py-3 pl-12 pr-4 text-gray-700 placeholder-transparent transition-colors duration-300 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-200"
              />
              <label
                htmlFor="username"
                className="absolute left-12 top-3 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:left-11 peer-focus:text-xs peer-focus:text-sky-600"
              >
                Username or Email
              </label>
            </div>

            {/* Password Input */}
            <div className="relative mb-6">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=" "
                className="peer w-full rounded-lg border border-gray-200 bg-slate-50 py-3 pl-12 pr-4 text-gray-700 placeholder-transparent transition-colors duration-300 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-200"
              />
              <label
                htmlFor="password"
                className="absolute left-12 top-3 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:left-11 peer-focus:text-xs peer-focus:text-sky-600"
              >
                Password
              </label>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="mb-8 flex items-center justify-between text-sm">
              <label className="flex cursor-pointer items-center text-gray-600">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="mr-2 h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500"
                />
                Remember me
              </label>
              <Link
                to={routes.forgotPassword}
                className="font-medium text-sky-600 hover:text-sky-700 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full transform rounded-lg bg-gradient-to-r from-sky-500 to-cyan-500 py-3 text-center font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-sky-600 hover:to-cyan-600 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
              LOG IN
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="mt-8 text-center text-sm text-gray-500">
            Don't have an account?{' '}
            <Link to={routes.register}
              className="font-medium text-sky-600 hover:text-sky-700 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}