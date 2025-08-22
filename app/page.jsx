"use client";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";
import Contacts from "./Contacts/page";

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
     
     
  <h1 className="text-2xl font-bold text-gray-800  text-center uppercase underline mb-2">
  দ্রুত যোগাযোগ করার জন্য-</h1>

     {/* Wrapper */}
<div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-4xl mb-6 flex flex-col md:flex-row gap-6 justify-center items-center">


  {/* WhatsApp Card */}
  <a 
    href="https://wa.me/+8801791663651" 
    target="_blank"
    className="w-72 p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex items-center space-x-4 bg-gradient-to-r from-green-400 to-green-600 text-white"
  >
    <FaWhatsapp className="text-white text-4xl" />
    <div>
      <h2 className="text-lg font-bold">WhatsApp</h2>
      <p className="font-medium">01791-663651</p>
    </div>
  </a>

  {/* Gmail Card */}
  <a 
    href="mailto:mi9418357@gmail.com" 
    target="_blank"
    className="w-72 p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex items-center space-x-4 bg-gradient-to-r from-red-400 to-red-600 text-white"
  >
    <FaEnvelope className="text-white text-4xl" />
    <div>
      <h2 className="text-lg font-bold">Gmail</h2>
      <p className="font-medium">mi9418357@gmail.com</p>
    </div>
  </a>

</div>







      {/* Card */}
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-4xl mb-6">
        

       <Contacts/>

      </div>
       {/* ✅ Extra Links */}
      <div className="flex space-x-4 mt-4">
        <Link 
          href="/pricing" 
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          ৳ সেবার মূল্য তালিকা দেখুন
        </Link>
        <Link 
          href="/about-us" 
          className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
        >
          ℹ️ আমাদের সম্পর্কে
        </Link>
      </div>
    </div>
  );
}
