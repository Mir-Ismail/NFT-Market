import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "./login.css";
import { buildApiUrl } from "../config/api";

function EditProfile() {
  const [name, setName] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const { user: authUser, updateUser } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    // Check if user is authorized to edit this profile
    if (authUser && authUser._id === id) {
      setUser(authUser);
      setName(authUser.name || "");
    } else {
      toast.error("You are not authorized to edit this profile");
      navigate("/");
    }
  }, [authUser, id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Validate password confirmation
      if (newPassword && newPassword !== confirmPassword) {
        toast.error("New passwords do not match");
        setIsLoading(false);
        return;
      }

      // Validate password length
      if (newPassword && newPassword.length < 6) {
        toast.error("New password must be at least 6 characters long");
        setIsLoading(false);
        return;
      }

      const updateData = {
        name: name.trim(),
      };

      // Only include password fields if user wants to change password
      if (currentPassword && newPassword) {
        updateData.currentPassword = currentPassword;
        updateData.newPassword = newPassword;
      }

      const response = await axios.put(
        buildApiUrl(`/api/users/${id}`),
        updateData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        toast.success("Profile updated successfully!");
        
        // Update user data in context and localStorage
        const updatedUserData = {
          ...authUser,
          name: response.data.name,
        };
        updateUser(updatedUserData);
        
        // Clear form
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
        
        // Navigate back to home after a short delay
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Failed to update profile";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="pt-16 min-h-screen bg-[#0D0D2B] flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen">
      <ToastContainer />
      {/* Hero Section */}
      <section className="relative py-20 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-yellow-400/10 animate-pulse"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
              <span
                className="block py-2 bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent"
                style={{ textShadow: "0 0 30px rgba(196,74,255,0.8)" }}
              >
                Edit Profile
              </span>
            </h1>
            <p className="text-xl md:text-1xl mb-12 text-gray-300 font-medium max-w-4xl mx-auto leading-relaxed">
              Update your profile information
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 bg-gray-900 min-h-screen w-100">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-pink-400 font-semibold mb-2">Update Profile</h3>
            <h2 className="text-4xl font-bold text-white mb-4">
              Edit Your Information
            </h2>
            <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
              Update your name and password to keep your account secure.
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="px-2 text-center col-span-6">
            <form className="login-form animated-fade-in" onSubmit={handleSubmit}>
              <div className="login-group">
                <label htmlFor="name" className="login-label">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="login-input"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="login-group">
                <label htmlFor="currentPassword" className="login-label">
                  Current Password (optional)
                </label>
                <input
                  id="currentPassword"
                  name="currentPassword"
                  type="password"
                  className="login-input"
                  placeholder="Enter current password to change password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
              </div>

              <div className="login-group">
                <label htmlFor="newPassword" className="login-label">
                  New Password (optional)
                </label>
                <input
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  className="login-input"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>

              <div className="login-group">
                <label htmlFor="confirmPassword" className="login-label">
                  Confirm New Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  className="login-input"
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <button type="submit" className="login-btn" disabled={isLoading}>
                {isLoading ? "Updating..." : "Update Profile"}
              </button>

              <div className="mt-6 text-gray-400">
                <button
                  type="button"
                  onClick={() => navigate("/")}
                  className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
                >
                  Back to Home
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EditProfile; 