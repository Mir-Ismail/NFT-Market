import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, LogOut, User, Wallet } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

function ProfileModal({ children }) {
  const [show, setShow] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const modalRef = useRef(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogout = () => {
    logout(); // Clear user data
    handleClose(); // Close modal
    navigate("/"); // Navigate to home page
  };

  const handleEditProfile = () => {
    handleClose(); // Close modal
    navigate(`/edit-profile/${user._id}`); // Navigate to edit profile page
  };

  // Handle click outside modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose();
      }
    };

    // Handle ESC key to close modal
    const handleEscKey = (event) => {
      if (event.key === "Escape" && show) {
        handleClose();
      }
    };

    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscKey);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "unset";
    };
  }, [show]);

  if (!user) return null;

  const getRoleDisplayName = (role) => {
    switch (role) {
      case "admin":
        return "Administrator";
      case "seller":
        return "NFT Creator";
      case "buyer":
        return "NFT Collector";
      default:
        return role;
    }
  };

  const getRoleColor = (role) => {
    switch (role) {
      case "admin":
        return "bg-red-500";
      case "seller":
        return "bg-green-500";
      case "buyer":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <>
      {/* Trigger element */}
      {children ? (
        <div onClick={handleShow} style={{ cursor: "pointer" }}>
          {children}
        </div>
      ) : (
        <div
          onClick={handleShow}
          className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300"
        >
          <User className="w-5 h-5 text-white" />
        </div>
      )}

      {/* Custom Modal */}
      <AnimatePresence>
        {show && (
          <div className="fixed inset-0 flex items-center justify-center z-[9999] top-60 p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <div className="relative w-full h-full flex items-center justify-center p-4">
              <motion.div
                ref={modalRef}
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-gray-900 border border-purple-500/20 rounded-2xl p-6 w-full max-w-md shadow-2xl relative z-10"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">Profile</h2>
                  <button
                    onClick={handleClose}
                    className="text-gray-400 hover:text-white transition-colors duration-300 p-1 rounded-full hover:bg-gray-800"
                    aria-label="Close modal"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Profile Info */}
                <div className="text-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-4 flex items-center justify-center">
                    {user.pic ? (
                      <img
                        src={user.pic}
                        alt={user.name}
                        className="w-20 h-20 rounded-full object-cover"
                      />
                    ) : (
                      <User className="w-10 h-10 text-white" />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {user.name || user.email}
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">{user.email}</p>

                  {/* Role Badge */}
                  {user.role && (
                    <span
                      className={`inline-block px-3 py-1 text-xs rounded-full text-white ${getRoleColor(
                        user.role
                      )}`}
                    >
                      {getRoleDisplayName(user.role)}
                    </span>
                  )}
                </div>

                {/* Menu Items */}
                <div className="space-y-2">
                  <button 
                    onClick={handleEditProfile}
                    className="w-full flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-300"
                  >
                    <User className="w-5 h-5" />
                    <span>Edit Profile</span>
                  </button>

                  <button className="w-full flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-300">
                    <Wallet className="w-5 h-5" />
                    <span>
                      {" "}
                      <Link to="/connect-wallet">My Wallet</Link>
                    </span>
                  </button>

                  {/* <button className="w-full flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-300">
                    <Settings className="w-5 h-5" />
                    <span>Settings</span>
                  </button> */}
                </div>

                {/* Logout Button */}
                <div className="mt-6 pt-4 border-t border-gray-700">
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-red-600 to-pink-600 text-white py-3 px-4 rounded-lg hover:from-red-700 hover:to-pink-700 transition-all duration-300 font-semibold"
                  >
                    <LogOut className="w-5 h-5" />
                    <span>Logout</span>
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ProfileModal;
