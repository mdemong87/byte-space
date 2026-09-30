"use client";

import AuthLayout from "@/components/AuthLayout";
import Link from "next/link";
import { useState } from "react";

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
          Create an Account
        </span>
        <h1 className="heading-m text-[#242528]">
          Welcome to
          <br />
          ByteSpace
        </h1>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        <div>
          <label className="block text-gray-700 font-medium text-[14px] mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="Jamie Davis"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full h-[50px] px-4 sm:px-5 rounded-[14px] sm:rounded-[16px] border border-gray-200 text-gray-900 placeholder:text-gray-400 text-[15px] focus:outline-none focus:border-[#1F53E6] transition-colors"
          />
        </div>

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
            Continue
          </button>
        </div>
      </form>

      {/* Footer Link */}
      <p className="text-center text-gray-500 text-[14px] mt-16 sm:mt-24">
        Already have an account?{" "}
        <Link
          href="/signin"
          className="text-[#1F53E6] hover:underline font-normal"
        >
          Login
        </Link>
      </p>
    </AuthLayout>
  );
}
