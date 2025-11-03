import React from "react";

const Footer = () => {
  return (
    <footer className="bg-rose-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-yellow-300">Suhag Kangan</h2>
          <p className="text-gray-200">
            Discover exquisite bangles for every occasion. Handcrafted with love and care.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-gray-200">
            <li className="hover:text-yellow-300 cursor-pointer">Home</li>
            <li className="hover:text-yellow-300 cursor-pointer">Shop</li>
            <li className="hover:text-yellow-300 cursor-pointer">About</li>
            <li className="hover:text-yellow-300 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Customer Support */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Customer Support</h3>
          <ul className="space-y-2 text-gray-200">
            <li className="hover:text-yellow-300 cursor-pointer">FAQ</li>
            <li className="hover:text-yellow-300 cursor-pointer">Shipping</li>
            <li className="hover:text-yellow-300 cursor-pointer">Returns</li>
            <li className="hover:text-yellow-300 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="hover:text-yellow-300">🌐</a>
            <a href="#" className="hover:text-yellow-300">📘</a>
            <a href="#" className="hover:text-yellow-300">📸</a>
            <a href="#" className="hover:text-yellow-300">🐦</a>
          </div>
          <p className="text-gray-300 mt-4 text-sm">
            &copy; 2025 Suhag Kangan Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
