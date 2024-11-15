import React from "react";
import loginlogo from "../assets/logo.png";

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      {/* Logo Section */}
      <img
        src={loginlogo}
        alt="Logo"
        className="w-28 h-28 md:w-36 md:h-36"
      />

      {/* Register Form */}
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-xs sm:max-w-md">
        {/* Title */}
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Sign in to account
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Enter your details to create an account
        </p>

        {/* Form */}
        <form>
          {/* Full Name Field */}
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Enter Full Name
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Hari Krishna"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#0B904E] focus:border-[#0B904E]"
            />
          </div>

          {/* Address Field */}
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Enter Address
            </label>
            <input
              type="text"
              id="address"
              placeholder="admin@123"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#0B904E] focus:border-[#0B904E]"
            />
          </div>

          {/* Mobile Number Field */}
          <div className="mb-4">
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
              Enter Mobile Number
            </label>
            <input
              type="text"
              id="mobile"
              placeholder="91456879083"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#0B904E] focus:border-[#0B904E]"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Enter Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="adminn@gmail.com"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#0B904E] focus:border-[#0B904E]"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="admin@123"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#0B904E] focus:border-[#0B904E]"
            />
          </div>

          {/* Confirm Password Field */}
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="admin@123"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#0B904E] focus:border-[#0B904E]"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-[#0B904E] text-white font-medium rounded-md hover:bg-green-700 transition duration-300"
          >
            Sign in
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm font-bold text-black-500 mt-6">
          Powered By Lead Gen Group
        </p>
      </div>
    </div>
  );
};

export default Register;
