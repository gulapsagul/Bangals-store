import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-rose-50 py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        
        {/* Header */}
        <h1 className="text-3xl font-bold text-rose-600 text-center">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mt-2">
          Have questions? We’d love to hear from you!
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-rose-400 focus:border-rose-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-rose-400 focus:border-rose-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-rose-400 focus:border-rose-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-rose-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-rose-700 transition-all duration-200"
            >
              Send Message
            </button>
          </form>

          {/* Store Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-rose-600 text-xl" />
              <p className="text-gray-700 font-medium">+91 98765 43210</p>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-rose-600 text-xl" />
              <p className="text-gray-700 font-medium">support@suhagkangan.com</p>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-rose-600 text-xl" />
              <p className="text-gray-700 font-medium">
                Suhag Kangan Store, Main Bazaar, Khandwa, MP
              </p>
            </div>

            <iframe
              title="Store Location"
              src="https://www.google.com/maps/embed?pb=!1m18!..." 
              className="w-full h-48 rounded-lg border border-gray-300"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
