"use client";

import { useState } from "react";
import Link from "next/link";
import AuthLayout from "@/components/AuthLayout";
import { FaFacebookF } from "react-icons/fa";

function GoogleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
        fill="#EA4335"
      />
    </svg>
  );
}

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign up:", formData);
  };

  return (
    <AuthLayout variant="signup">
      {/* Mobile Logo (Top of card for mobile/tablet) */}
      <div className="lg:hidden flex items-center gap-2 mb-6">
        <Link href="/" className="inline-flex items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect x="2" y="2" width="6" height="24" rx="3" fill="#D4F636" />
            <path
              d="M11 11.2C11 10.3 12 9.7 12.8 10.2L22.5 16.1C23.2 16.5 23.2 17.5 22.5 17.9L12.8 23.8C12 24.3 11 23.7 11 22.8V11.2Z"
              fill="#D4F636"
            />
          </svg>
          <span className="font-heading font-extrabold text-xl text-gray-950 tracking-tight">
            ByteSpace
          </span>
        </Link>
      </div>

      {/* Header */}
      <div className="mb-7">
        <span className="text-[#2563EB] text-[15px] font-semibold block mb-2">
          Sign Up
        </span>
        <h1 className="font-heading font-bold text-gray-950 text-[34px] sm:text-[40px] leading-tight tracking-tight">
          Create an Account
        </h1>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        <div>
          <label className="block text-gray-900 font-medium text-[14px] mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="Jamie Davis"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full h-[52px] px-5 rounded-[14px] sm:rounded-[16px] border border-gray-200/90 text-gray-900 placeholder:text-gray-400 text-[15px] focus:outline-none focus:border-[#2563EB] transition-colors"
          />
        </div>

        <div>
          <label className="block text-gray-900 font-medium text-[14px] mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="designer@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full h-[52px] px-5 rounded-[14px] sm:rounded-[16px] border border-gray-200/90 text-gray-900 placeholder:text-gray-400 text-[15px] focus:outline-none focus:border-[#2563EB] transition-colors"
          />
        </div>

        <div>
          <label className="block text-gray-900 font-medium text-[14px] mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full h-[52px] px-5 rounded-[14px] sm:rounded-[16px] border border-gray-200/90 text-gray-900 placeholder:text-gray-400 text-[15px] focus:outline-none focus:border-[#2563EB] transition-colors"
          />
        </div>

        {/* Submit Button (Aligned Right matching reference design) */}
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="h-[46px] px-8 rounded-full bg-[#D4F636] hover:bg-[#c2e820] active:scale-95 text-gray-950 font-medium text-[15px] transition-all shadow-sm cursor-pointer"
          >
            Sign Up
          </button>
        </div>
      </form>

      {/* Divider */}
      <div className="flex items-center gap-4 my-7">
        <div className="flex-1 h-px bg-gray-200/80" />
        <span className="text-gray-400 text-[13px] font-normal">or</span>
        <div className="flex-1 h-px bg-gray-200/80" />
      </div>

      {/* Social Login Buttons */}
      <div className="flex items-center justify-center gap-4">
        {/* Facebook */}
        <button
          type="button"
          className="w-13 h-13 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-950 hover:bg-gray-50 hover:border-gray-300 shadow-sm transition-all cursor-pointer"
          aria-label="Sign up with Facebook"
        >
          <FaFacebookF className="w-5 h-5 text-gray-950" />
        </button>

        {/* Google */}
        <button
          type="button"
          className="w-13 h-13 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 shadow-sm transition-all cursor-pointer"
          aria-label="Sign up with Google"
        >
          <GoogleIcon />
        </button>
      </div>

      {/* Footer Link */}
      <p className="text-center text-gray-500 text-[14px] mt-9">
        Already a member?{" "}
        <Link
          href="/signin"
          className="text-[#2563EB] hover:underline font-normal"
        >
          Sign in
        </Link>
      </p>
    </AuthLayout>
  );
}
