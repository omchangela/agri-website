import React, { useState } from "react";
import Navbar from "../components/Navbar";
import profileimg from "../assets/profileimg.png"; // Replace with your profile image path
import { FaUser, FaCog, FaLock, FaBell, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const ProfilePage = () => {
  const [notification, setNotification] = useState(true);
  const [showLogoutModal, setShowLogoutModal] = useState(false); // State for logout modal
  const navigate = useNavigate();

  // Handle toggle change for notification
  const handleNotificationChange = () => {
    setNotification((prev) => !prev);
  };

  // Handle Logout
  const handleLogout = () => {
    // Perform logout actions here (e.g., clear session, redirect)
    setShowLogoutModal(false);
    navigate("/login"); // Redirect to login page
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white flex items-start justify-center p-6">
        <div className="w-full max-w-lg bg-white border shadow-lg rounded-lg p-6">
          <div className="flex flex-col items-center mb-6">
            <img
              src={profileimg}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-gray-300 object-cover mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-800">Krishna Dunga</h2>
          </div>

          <div className="space-y-4 ">
            <Link to="/update-profile" className="flex items-center space-x-3 hover:bg-blue-700 hover:text-white p-2 rounded-md">
              <span className="bg-blue-500 text-white p-2 rounded-md">
                <FaUser />
              </span>
              <span className="font-bold">Profile</span>
            </Link>
            <Link to="/settings" className="flex items-center space-x-3 hover:bg-blue-700 hover:text-white p-2 rounded-md">
              <span className="bg-blue-500 text-white p-2 rounded-md">
                <FaCog />
              </span>
              <span className="font-bold">Settings</span>
            </Link>
            <Link to="/updatepassword" className="flex items-center space-x-3 hover:bg-blue-700 hover:text-white p-2 rounded-md">
              <span className="bg-blue-500 text-white p-2 rounded-md">
                <FaLock />
              </span>
              <span className="font-bold">Change Password</span>
            </Link>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800">Preferences</h3>
            <div className="flex items-center space-x-3 mt-4 px-2 py-4">
              <span className="bg-blue-500 text-white p-2 rounded-md">
                <FaBell />
              </span>
              <span className="font-bold pr-10">Notifications</span>
              <label className="relative inline-flex items-right cursor-pointer">
                <input
                  type="checkbox"
                  checked={notification}
                  onChange={handleNotificationChange}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-500 dark:bg-gray-600 dark:peer-checked:bg-blue-600 transition-colors">
                  <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white border border-gray-300 rounded-full transition-transform peer-checked:translate-x-full peer-checked:border-white"></div>
                </div>
              </label>
            </div>

            <Link to="/fnq" className="flex items-center space-x-3 mb-4 hover:bg-blue-700 hover:text-white p-2 rounded-md">
              <span className="bg-blue-500 text-white p-2 rounded-md">
                <FaQuestionCircle />
              </span>
              <span className="font-bold">FAQ</span>
            </Link>
            <button onClick={() => setShowLogoutModal(true)} className="flex items-center space-x-3 mb-4 p-2 rounded-md">
              <span className="bg-blue-500 text-white p-2 rounded-md">
                <FaSignOutAlt />
              </span>
              <span className="font-bold text-red-500">Log Out</span>
            </button>
          </div>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-80">
            <h3 className="text-lg font-semibold text-gray-800">Log Out?</h3>
            <p className="text-gray-600 mt-6">Are you sure you want to log out?</p>
            <div className="flex justify-end mt-6 space-x-2">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default ProfilePage;
