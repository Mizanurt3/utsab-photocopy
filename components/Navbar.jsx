"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // ✅ Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // নিচে স্ক্রল করলে navbar লুকাবে
        setShowNavbar(false);
      } else {
        // উপরে স্ক্রল করলে navbar আবার ভেসে উঠবে
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-white shadow-md z-50 transform transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-4xl container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/icons8-photocopy-64.png" // লোগো পাথ
            alt="Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <span className="text-xl font-bold">উৎসব ফটোকপি</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-blue-500">
            Home
          </Link>
          <Link href="/pricing" className="hover:text-blue-500">
            Pricing
          </Link>
          <Link href="/about-us" className="hover:text-blue-500">
            About Us
          </Link>
          
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="z-50 md:hidden bg-gray-100 p-4 space-y-2 w-[300px] absolute right-0 top-full shadow-lg">
          <Link href="/" className="block hover:text-blue-500">
            Home
          </Link>
          <Link href="/pricing" className="block hover:text-blue-500">
            Pricing
          </Link>
          <Link href="/about-us" className="block hover:text-blue-500">
            About Us
          </Link>
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;
