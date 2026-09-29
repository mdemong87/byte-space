"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/#courses" },
  { name: "Creators", href: "/#creators" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-black/95 backdrop-blur-md shadow-lg shadow-black/20"
        : "bg-transparent"
        }`}
    >
      <nav className="container px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image className="w-[171px] h-[37px]" src="/header_logo.png" alt="Logo" width={1000} height={1000} priority />

          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-neutral-50 hover:text-white label-m  transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/signin"
              className="text-neutral-50 hover:text-white label-m transition-colors duration-200"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="text-neutral-50 hover:text-white label-m"
            >
              Join Us
            </Link>
            <button
              className="text-white label-m transition-colors duration-200 p-1"
              aria-label="Shopping cart"
            >
              <HiOutlineShoppingBag className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiOutlineMenuAlt3 className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="pb-6 pt-2 space-y-1 border-t border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg text-[15px] font-medium transition-all"
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t border-white/10 mt-3 pt-3 space-y-2 px-4">
              <Link
                href="/signin"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center text-white/80 hover:text-white text-[15px] font-medium py-2.5 rounded-lg border border-white/20 hover:border-white/40 transition-all"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center text-navy bg-accent hover:bg-accent-hover text-[15px] font-semibold py-2.5 rounded-lg transition-all"
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
