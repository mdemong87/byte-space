"use client";

import AuthLayout from "@/components/AuthLayout";
import Link from "next/link";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";

function GoogleIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

export default function SignInPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign in:", formData);
  };

  return (
    <AuthLayout variant="signin">
      {/* Mobile Logo (Top of card for mobile/tablet) */}
      <div className="lg:hidden flex items-center gap-2 mb-6">
        <Link href="/" className="inline-flex items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect x="2" y="2" width="6" height="24" rx="3" fill="#D4FB20" />
            <path
              d="M11 11.2C11 10.3 12 9.7 12.8 10.2L22.5 16.1C23.2 16.5 23.2 17.5 22.5 17.9L12.8 23.8C12 24.3 11 23.7 11 22.8V11.2Z"
              fill="#D4FB20"
            />
          </svg>
          <span className="font-heading font-extrabold text-xl text-gray-950 tracking-tight">
            ByteSpace
          </span>
        </Link>
      </div>

      {/* Header */}
      <div className="mb-7 sm:mb-8">
        <span className="text-[#003BE2] body-l mb-2">
          Sign In
        </span>
        <h1 className="heading-m text-[#242528]">
          Welcome Back
        </h1>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        <div>
          <label className="block text-gray-700 font-medium text-[14px] mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="designer@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full h-[50px] px-4 sm:px-5 rounded-[14px] sm:rounded-[16px] border border-gray-200 text-gray-900 placeholder:text-gray-400 text-[15px] focus:outline-none focus:border-[#1F53E6] transition-colors"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium text-[14px] mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="********"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full h-[50px] px-4 sm:px-5 rounded-[14px] sm:rounded-[16px] border border-gray-200 text-gray-900 placeholder:text-gray-400 text-[15px] focus:outline-none focus:border-[#1F53E6] transition-colors"
          />
        </div>

        {/* Submit Button (Aligned Right matching reference image) */}
        <div className="flex justify-end pt-2 sm:pt-3">
          <button
            type="submit"
            className="h-[44px] px-8 rounded-full bg-[#D4FB20] hover:bg-[#c2eb13] active:scale-95 text-gray-950 font-medium text-[15px] transition-all shadow-none cursor-pointer flex items-center justify-center"
          >
            Sign In
          </button>
        </div>
      </form>

      {/* Divider */}
      <div className="flex items-center gap-4 my-8 sm:my-9">
        <div className="flex-1 h-px bg-gray-200/90" />
        <span className="text-gray-400 text-[13px] font-normal">or</span>
        <div className="flex-1 h-px bg-gray-200/90" />
      </div>

      {/* Social Login Buttons (Squarcle cards with black icons matching image) */}
      <div className="flex items-center justify-center gap-3.5 sm:gap-4">
        {/* Facebook */}
        <button
          type="button"
          className="w-[56px] h-[56px] sm:w-[60px] sm:h-[60px] rounded-[18px] sm:rounded-[20px] border border-gray-200 bg-white flex items-center justify-center text-black hover:bg-gray-50 hover:border-gray-300 transition-all cursor-pointer shadow-none"
          aria-label="Sign in with Facebook"
        >
          <FaFacebook className="w-[28px] h-[28px] text-black" />
        </button>

        {/* Google */}
        <button
          type="button"
          className="w-[56px] h-[56px] sm:w-[60px] sm:h-[60px] rounded-[18px] sm:rounded-[20px] border border-gray-200 bg-white flex items-center justify-center text-black hover:bg-gray-50 hover:border-gray-300 transition-all cursor-pointer shadow-none"
          aria-label="Sign in with Google"
        >
          <GoogleIcon className="w-[26px] h-[26px] text-black" />
        </button>
      </div>

      {/* Footer Link */}
      <p className="text-center text-gray-500 text-[14px] mt-8 sm:mt-10">
        New user?{" "}
        <Link
          href="/signup"
          className="text-[#1F53E6] hover:underline font-normal"
        >
          Create an account
        </Link>
      </p>
    </AuthLayout>
  );
}
