import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {TanstackProviders} from '../providers/TanstackProviders';
import Navbar from '../components/Navbar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "উৎসব ফটোকপি & কম্পিউটার",
  description: "স্বাগতম জানাচ্ছি উৎসব ফটোকপি & কম্পিউটার থেকে",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TanstackProviders>
        <Navbar />
        <div>{children}</div>
        </TanstackProviders>
      </body>
    </html>
  );
}


