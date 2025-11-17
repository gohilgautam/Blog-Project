import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../Routes/routes';
import { User, Lock, Mail, Image as ImageIcon, ClipboardList, X, Eye, EyeOff } from 'lucide-react'; // Added Eye and EyeOff

// This component will render the decorative background bubbles
const DecorativeBubble: React.FC<{ className: string; size: string }> = ({ className, size }) => (
  <div
    className={`absolute rounded-full ${size} ${className} opacity-20 transition-transform duration-1000 ease-in-out hover:scale-125`}
    style={{ filter: 'blur(40px)' }}
  />
);

// This single component contains all the logic and styling for registration.
export default function SignUp() {

  // State for all form inputs
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const [gender, setGender] = useState('');
  const [image, setImage] = useState<File | null>(null); // Will store the File object
  const [imagePreview, setImagePreview] = useState<string | null>(null); // For image preview
  const [about, setAbout] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registering with:', {
      fullName,
      email,
      password,
      gender,
      image: image ? image.name : 'No file selected', // Just logging file name for demo
      about,
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImage(null);
      setImagePreview(null);
    }
  };

  const removeImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setImage(null);
    setImagePreview(null);
    // Reset the file input value
    (document.getElementById('image') as HTMLInputElement).value = '';
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
            Join Our Community
          </h1>
          <p className="max-w-prose text-lg text-sky-50 opacity-90">
            Create your account to start managing your content, engaging with 
            readers, and tracking your blog's performance.
          </p>
        </div>
      </div>

      {/* Right Column: Registration Form */}
      <div className="flex w-full items-center justify-center p-12 md:w-2/5 lg:w-2/5 xl:w-1/2">
        <div className="w-full max-w-md">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
            Create Your Account
          </h2>

          {/* Image Input - Prominent and Attractive (Moved to top) */}
          <div className="mb-8 flex flex-col items-center justify-center">
            <div className="relative h-32 w-32 mb-4">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Profile preview"
                  className="h-full w-full rounded-full object-cover ring-4 ring-sky-300 ring-offset-2"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-100 border-2 border-dashed border-gray-300 text-gray-500 animate-pulse">
                  <ImageIcon className="h-16 w-16" />
                </div>
              )}
              {image && (
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white shadow-md transition-colors hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  aria-label="Remove image"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            
            <label 
              htmlFor="image" 
              className="inline-flex cursor-pointer items-center rounded-lg border border-transparent bg-sky-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-sky-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
              <ImageIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              {image ? 'Change Photo' : 'Upload Photo'}
            </label>
            <input
              type="file"
              id="image"
              onChange={handleImageChange}
              className="hidden"
              accept="image/*"
            />
          </div>


          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Full Name Input */}
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder=" "
                required
                className="peer w-full rounded-lg border border-gray-200 bg-slate-50 py-3 pl-12 pr-4 text-gray-700 placeholder-transparent transition-colors duration-300 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-200"
              />
              <label
                htmlFor="fullName"
                className="absolute left-12 top-3 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:left-11 peer-focus:text-xs peer-focus:text-sky-600"
              >
                Full Name
              </label>
            </div>

            {/* Email Input */}
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

            {/* Password Input */}
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=" "
                required
                className="peer w-full rounded-lg border border-gray-200 bg-slate-50 py-3 pl-12 pr-12 text-gray-700 placeholder-transparent transition-colors duration-300 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-200"
              />
              <label
                htmlFor="password"
                className="absolute left-12 top-3 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:left-11 peer-focus:text-xs peer-focus:text-sky-600"
              >
                Password
              </label>
              {/* Show/Hide Password Toggle */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer text-gray-400 hover:text-gray-600 transition-colors"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>

            {/* Gender Input - Styled as Chips */}
            <div className="relative">
              <label className="text-sm font-medium text-gray-700">Gender</label>
              <div className="mt-2 flex flex-wrap gap-3">
                {[
                  { value: 'male', label: 'Male' },
                  { value: 'female', label: 'Female' },
                  { value: 'other', label: 'Other' },
                ].map((option) => (
                  <label
                    key={option.value}
                    className={`relative flex cursor-pointer items-center rounded-full px-4 py-2 text-sm transition-all duration-300
                      ${gender === option.value
                        ? 'bg-sky-500 text-white shadow-lg' 
                        : 'bg-slate-100 text-gray-700 hover:bg-slate-200'
                      }
                    `}
                  >
                    <input
                      type="radio"
                      name="gender"
                      value={option.value}
                      checked={gender === option.value}
                      onChange={(e) => setGender(e.target.value)}
                      required
                      className="absolute h-0 w-0 opacity-0" // Hide the radio button
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            {/* About Input */}
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 pt-3">
                <ClipboardList className="h-5 w-5 text-gray-400" />
              </div>
              <textarea
                id="about"
                rows={3}
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                placeholder=" "
                className="peer w-full rounded-lg border border-gray-200 bg-slate-50 py-3 pl-12 pr-4 text-gray-700 placeholder-transparent transition-colors duration-300 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-200"
              />
              <label
                htmlFor="about"
                className="absolute left-12 top-3 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:left-11 peer-focus:text-xs peer-focus:text-sky-600"
              >
                About (Optional)
              </label>
            </div>


            {/* Register Button */}
            <button
              type="submit"
              className="w-full transform rounded-lg bg-gradient-to-r from-sky-500 to-cyan-500 py-3 text-center font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-sky-600 hover:to-cyan-600 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-sky-500/50"
            >
              CREATE ACCOUNT
            </button>
          </form>

          {/* Log In Link */}
          <p className="mt-8 text-center text-sm text-gray-500">
            Already have an account?{' '}
            <Link
              to={routes.login}
              className="font-medium text-sky-600 hover:text-sky-700 hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}