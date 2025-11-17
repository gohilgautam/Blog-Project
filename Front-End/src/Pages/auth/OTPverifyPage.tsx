import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { routes } from '../../Routes/routes';
import { KeyRound, RefreshCw, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

// Decorative bubble component
const DecorativeBubble = ({ className, size }) => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1, opacity: 0.25 }}
    transition={{ duration: 0.8 }}
    className={`absolute rounded-full ${size} ${className}`}
    style={{ filter: 'blur(38px)' }}
  />
);

export default function OtpVerify() {
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [isVerifying, setIsVerifying] = useState(false);
  const [message, setMessage] = useState('');
  const [resendCooldown, setResendCooldown] = useState(120); // seconds
  const [verified, setVerified] = useState(false);

  const inputRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  // Cooldown timer for resend
  useEffect(() => {
    if (resendCooldown <= 0) return;
    const timer = setInterval(() => setResendCooldown((s) => s - 1), 1000);
    return () => clearInterval(timer);
  }, [resendCooldown]);

  const handleChange = (e, idx) => {
    const val = e.target.value.replace(/[^0-9]/g, '').slice(0, 1);
    if (!val && otp[idx] === '') return; // nothing to do

    const newOtp = [...otp];
    newOtp[idx] = val;
    setOtp(newOtp);

    if (val !== '' && idx < 5) inputRefs.current[idx + 1]?.focus();
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === 'Backspace') {
      if (otp[idx] === '') {
        inputRefs.current[idx - 1]?.focus();
        const newOtp = [...otp];
        if (idx > 0) newOtp[idx - 1] = '';
        setOtp(newOtp);
      } else {
        const newOtp = [...otp];
        newOtp[idx] = '';
        setOtp(newOtp);
      }
    }

    // allow arrow navigation
    if (e.key === 'ArrowLeft') inputRefs.current[idx - 1]?.focus();
    if (e.key === 'ArrowRight') inputRefs.current[idx + 1]?.focus();
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const paste = e.clipboardData.getData('text').trim();
    if (/^[0-9]{6}$/.test(paste)) {
      const arr = paste.split('');
      setOtp(arr);
      inputRefs.current[5]?.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const code = otp.join('');
    if (code.length !== 6) {
      setMessage('Please enter all 6 digits.');
      return;
    }

    setIsVerifying(true);
    setMessage('Verifying...');

    try {
      // simulate API
      await new Promise((r) => setTimeout(r, 1400));

      // success path
      setVerified(true);
      setMessage('Verification successful!');


    } catch (err) {
      setMessage('Invalid or expired OTP. Please try again.');
      setIsVerifying(false);
      setOtp(new Array(6).fill(''));
      inputRefs.current[0]?.focus();
    }
  };

  const handleResend = () => {
    if (resendCooldown > 0) return;
    setMessage('A new OTP has been sent to your email.');
    setResendCooldown(30);
    // TODO: call resend API here
  };

  return (
    <div className="font-inter flex min-h-screen w-full bg-gray-50">
      <div className="relative hidden md:block md:w-1/2 lg:w-3/5">
        <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-[#0ea5e9] to-[#06b6d4] px-16 py-20">
          <DecorativeBubble size="w-72 h-72" className="bg-white/30 -left-16 -top-16" />
          <DecorativeBubble size="w-96 h-96" className="bg-white/20 -right-24 -bottom-20" />
          <DecorativeBubble size="w-48 h-48" className="bg-sky-100 bottom-16 left-12" />

          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 flex h-full flex-col justify-center text-white"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-white/10 p-3">
                <KeyRound className="h-14 w-14 text-white/90" />
              </div>
              <div>
                <h1 className="text-4xl font-extrabold">Verify your account</h1>
                <p className="mt-2 max-w-lg text-lg opacity-90">
                  We sent a 6-digit code to your email. Enter it here to confirm your identity and continue
                  to your dashboard.
                </p>
              </div>
            </div>

            <div className="mt-10 max-w-md rounded-2xl bg-white/5 p-6 shadow-lg backdrop-blur-sm">
              <p className="font-medium">Tip</p>
              <p className="mt-2 text-sm opacity-90">
                You can paste the code directly (Ctrl+V) or use the resend button if the code expires.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="flex w-full items-center justify-center p-8 md:w-1/2 lg:w-2/5">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45 }}
          className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-2xl"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Enter Verification Code</h2>
              <p className="mt-1 text-sm text-gray-500">Enter the 6-digit code we emailed to you.</p>
            </div>

            <div className="flex items-center gap-2">
              {verified ? (
                <div className="flex items-center gap-2 rounded-full bg-green-50 px-3 py-1">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium text-green-700">Verified</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1">
                  <RefreshCw className="h-5 w-5 text-sky-600" />
                  <span className="text-sm font-medium text-sky-700">Waiting</span>
                </div>
              )}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-6">
            <div
              className="flex items-center justify-center gap-3"
              onPaste={handlePaste}
              aria-label="OTP inputs"
            >
              {otp.map((val, idx) => (
                <input
                  key={idx}
                  ref={(el) => (inputRefs.current[idx] = el)}
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={1}
                  value={val}
                  onChange={(e) => handleChange(e, idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  disabled={isVerifying || verified}
                  className={`h-14 w-12 rounded-lg border text-center text-2xl font-semibold transition-shadow focus:scale-105 focus:outline-none
                    ${val ? 'border-sky-500 shadow-md' : 'border-gray-200 bg-gray-50'}`}
                  aria-label={`Digit ${idx + 1}`}
                />
              ))}
            </div>

            {message && (
              <p className={`mt-4 text-center text-sm font-medium ${message.includes('Invalid') ? 'text-red-600' : 'text-sky-600'}`}>
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={isVerifying || verified}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-sky-500 to-cyan-500 py-3 text-white font-bold shadow hover:scale-[1.02] disabled:opacity-60"
            >
              {isVerifying ? 'Verifying...' : 'Verify'}
            </button>
          </form>

          <div className="mt-6 flex items-center justify-between text-sm text-gray-600">
            <div>
              <button
                onClick={handleResend}
                disabled={resendCooldown > 0}
                className="inline-flex items-center gap-2 font-medium hover:underline disabled:opacity-50"
                aria-disabled={resendCooldown > 0}
              >
                Resend OTP
              </button>

              {resendCooldown > 0 && <span className="ml-2">({resendCooldown}s)</span>}
            </div>

            <div>
              <Link to={routes.login} className="font-medium text-sky-600 hover:underline">
                Back to Login
              </Link>
            </div>
          </div>

          <div className="mt-6 text-center text-xs text-gray-400">Didn't request this? Contact support or revoke access immediately.</div>
        </motion.div>
      </div>
    </div>
  );
}
