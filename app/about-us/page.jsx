"use client";
import React from "react";
import Link from "next/link";
import { FaWhatsapp, FaEnvelope, FaYoutube, FaFacebook } from "react-icons/fa";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 flex flex-col items-center py-12 px-6">
      <br />
      <br />
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
        আসসালামু আলাইকুম
      </h1>

      {/* Message */}
      <p className="text-lg text-gray-700 max-w-2xl text-center leading-relaxed mb-8">
        আমি একজন ভালো ব্যবসায়ী হিসেবে আপনাদের পাশে আছি। আমাদের সেবার মাধ্যমে 
        আপনার কাজকে আরও সহজ ও সুন্দর করার চেষ্টা করছি। 
        আপনাদের ভালোবাসা ও সহযোগিতা নিয়ে এগিয়ে যেতে চাই।  
        <br />
        <span className="font-semibold text-indigo-700">শুভকামনা রইলো 🌸</span>
      </p>

      {/* Social Links */}
      <div className="flex flex-wrap justify-center gap-6 mt-6">
        
        {/* WhatsApp */}
        <a
          href="https://wa.me/+8801791663651"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600"
        >
          <FaWhatsapp className="text-2xl" />
          <span>WhatsApp</span>
        </a>

        {/* Gmail */}
        <a
          href="mailto:mi9418357@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600"
        >
          <FaEnvelope className="text-2xl" />
          <span>Gmail</span>
        </a>

        {/* YouTube */}
        <a
          href="https://www.youtube.com/@mizanurtech6653"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700"
        >
          <FaYoutube className="text-2xl" />
          <span>YouTube</span>
        </a>

        {/* Facebook */}
        <a
          href="http://www.facebook.com/mizanurrahman109504"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
        >
          <FaFacebook className="text-2xl" />
          <span>Facebook</span>
        </a>

   
      </div>
       {/* ✅ Extra Links */}
      <div className="flex space-x-4 mt-4">
        <Link 
          href="/" 
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Home
        </Link>
        <Link 
          href="/pricing" 
          className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
        >
          ℹ️ Pricing
        </Link>
      </div>
    </div>
  );
}
