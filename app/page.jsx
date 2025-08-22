"use client";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-indigo-100 to-blue-100 p-4">
       <br />
       <br />
       <br />
       {/* ✅ Banner Image */}
      <div className="w-full max-w-4xl mb-6">
        <Image
          src="/images/banner.png"   // এখানে আপনার ব্যানার ফাইলের path
          alt="Banner"
          width={1368}
          height={400}
          className="rounded-xl shadow-lg object-cover w-full h-auto"
          priority
        />
      </div>
      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center uppercase underline">
        দ্রুত যোগাযোগ করার জন্য-
      </h1>

      {/* Card */}
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-4xl mb-6">
        
        {/* WhatsApp */}
        <div className="flex items-center space-x-4 border-b pb-4 mb-4">
          <FaWhatsapp className="text-green-600 text-3xl" />
          <div>
            <h2 className="text-lg font-semibold text-gray-700">WhatsApp</h2>
            <a 
              href="https://wa.me/+8801791663651" 
              target="_blank"
              className="text-blue-600 font-medium hover:underline"
            >
              01791-663651
            </a>
          </div>
        </div>

        {/* Gmail */}
        <div className="flex items-center space-x-4 border-b pb-4 mb-4">
          <FaEnvelope className="text-red-600 text-3xl" />
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Gmail</h2>
            <a 
              href="mailto:mi9418357@gmail.com" 
              target="_blank"
              className="text-blue-600 font-medium hover:underline"
            >
              mi9418357@gmail.com
            </a>
          </div>
        </div>

        {/* Contacts */}
        <div className="flex items-start space-x-4">
          <FaPhoneAlt className="text-purple-600 text-3xl mt-1" />
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Contact Numbers</h2>
            <ul className="mt-1 space-y-1 text-blue-600 font-medium">
              
              <li>
                <a href="tel://01791663651" target="_blank" className="hover:underline">
                  📞 Owner (Manik Hossain) — 01791-663651
                </a>
              </li>
              <li>
                <a href="tel://01313392075" target="_blank" className="hover:underline">
                  📞 Computer operator (Sujon) — 01313-392075
                </a>
              </li>
              <li>
                <a href="tel://01742734391" target="_blank" className="hover:underline">
                  📞 Operator 2 (Mizanur Rahman) - 01742734391
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>
       {/* ✅ Extra Links */}
      <div className="flex space-x-4 mt-4">
        <Link 
          href="/pricing" 
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          ৳ Pricing
        </Link>
        <Link 
          href="/about-us" 
          className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
        >
          ℹ️ About Us
        </Link>
      </div>
    </div>
  );
}
