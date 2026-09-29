"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-gray-900 border-t border-gray-100 font-sans py-[16px]">
      <div className="container px-6 sm:px-10 lg:px-12 pt-16 sm:pt-20 pb-12">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12 lg:gap-16">
          {/* Left Column: Brand & Newsletter */}
          <div className="w-full lg:max-w-[480px]">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-2.5 mb-6">
              <Image className="w-[171px] h-[37px]" src="/Footer_Logo.png" alt="Logo" width={1000} height={1000} priority />
            </Link>

            {/* Subtitle */}
            <p className="text-[#374151] text-[14px] leading-normal mb-6">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Newsletter Input + Search Button */}
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-3.5 mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-[320px] h-[48px] px-5 rounded-full border border-gray-300 text-gray-900 placeholder:text-gray-400 text-[14px] focus:outline-none focus:border-gray-500 bg-white transition-colors"
              />
              <button
                type="submit"
                className="h-[48px] px-8 rounded-full bg-[#C8F200] hover:bg-[#bde600] active:scale-[0.98] text-gray-950 font-medium text-[14px] transition-all shrink-0 cursor-pointer shadow-none"
              >
                Search
              </button>
            </form>

            {/* Disclaimer text with exact line break matching the image */}
            <p className="text-[12px] text-gray-500 leading-relaxed max-w-[420px]">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our{" "}
              <br className="hidden sm:inline" />
              company.
            </p>
          </div>

          {/* Right Columns: Navigation Links (aligned with the subtitle on desktop) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 sm:gap-x-16 lg:gap-x-20 xl:gap-x-24 gap-y-8 lg:pt-[54px]">
            {/* Column 1 */}
            <ul className="space-y-[18px] text-[14px] text-gray-800">
              <li>
                <Link href="#courses" className="hover:text-black transition-colors">
                  Featured Courses
                </Link>
              </li>
              <li>
                <Link href="#categories" className="hover:text-black transition-colors">
                  Featured Categories
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black transition-colors">
                  Business
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black transition-colors">
                  IT
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black transition-colors">
                  Design
                </Link>
              </li>
            </ul>

            {/* Column 2 */}
            <ul className="space-y-[18px] text-[14px] text-gray-800">
              <li>
                <Link href="#" className="hover:text-black transition-colors">
                  Development
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black transition-colors">
                  Marketing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black transition-colors">
                  Photography
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black transition-colors">
                  Finance
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black transition-colors">
                  Sport
                </Link>
              </li>
            </ul>

            {/* Column 3 */}
            <ul className="space-y-[18px] text-[14px] text-gray-800 col-span-2 sm:col-span-1">
              <li>
                <Link href="#" className="hover:text-black transition-colors">
                  Become a Creator
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black transition-colors">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black transition-colors">
                  Help
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="w-full border-t border-gray-200 mt-20 sm:mt-24 mb-7" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[12px] sm:text-[13px] text-gray-600">
          <p>© 2023 ByteSpace. All rights reserved.</p>
          <div className="flex items-center gap-6 sm:gap-8">
            <Link href="#" className="hover:text-gray-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
