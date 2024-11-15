import React, { useState } from "react";
import Navbar from "../components/Navbar";
import profileimg from "../assets/profileimg.png";

const UpdatePassword = () => {
  // Initialize form data for new password and confirm password
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // Handle changes in form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.newPassword === formData.confirmPassword) {
      // Make an API call to update the password
      alert("Password updated successfully!");
    } else {
      alert("New password and confirm password do not match.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-20 bg-gray-100 flex items-center justify-center p-4">
        <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
          <div className="flex flex-col items-center mb-6">
            {/* Profile Image */}
            <img
              src={profileimg}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-gray-300 object-cover mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-800">Change Password</h2>
          </div>
          <form onSubmit={handleSubmit}>
            {/* Current Password */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Current Password
              </label>
              <input
                type="password"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleInputChange}
                placeholder="Enter current password"
                className="w-full bg-gray-200 border border-[#02664AD9] rounded-lg p-2"
              />
            </div>

            {/* New Password */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                New Password
              </label>
              <input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleInputChange}
                placeholder="Enter new password"
                className="w-full bg-gray-200 border border-[#02664AD9] rounded-lg p-2"
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Confirm New Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm new password"
                className="w-full bg-gray-200 border border-[#02664AD9] rounded-lg p-2"
              />
            </div>

            {/* Update Password Button */}
            <button
              type="submit"
              className="w-full bg-[#02664A] text-white font-semibold py-2 rounded-lg hover:bg-opacity-90 transition"
            >
              Update Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdatePassword;
