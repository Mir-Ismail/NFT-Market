import { motion } from "framer-motion";
import "./login.css";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { buildApiUrl } from "../config/api";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [role, setRole] = useState("buyer");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegistration = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const userData = {
        name: name,
        email: email,
        password: password,
        role: role,
      };

      const response = await axios.post(
        buildApiUrl("/api/users/register"),
        userData
      );
      if (response?.status === 201 || response?.status === 200) {
        toast.success("User registered successfully! Please login.", {
          position: "bottom-center",
          autoClose: 3000,
        });
        // Clear form
        setName("");
        setEmail("");
        setPasword("");
        setRole("buyer");
      }
    } catch (error) {
      toast.error(error.response?.data?.error || "Registration failed");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="pt-16 min-h-screen">
      <ToastContainer />
      {/* Hero Section */}
      <section className="relative py-20 bg-black text-white overflow-hidden">
        {/* NFTMarket Premium Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-yellow-400/10 animate-pulse"></div>

        {/* Modern Geometric Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-24 h-24 border border-purple-500 rotate-45 animate-spin"></div>
          <div className="absolute bottom-20 right-20 w-16 h-16 border border-yellow-400 rotate-12 animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-purple-500 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-14 h-14 bg-yellow-400 rounded-lg rotate-45 animate-float"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
              <span
                className="block  py-2 bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent"
                style={{ textShadow: "0 0 30px rgba(196,74,255,0.8)" }}
              >
                Signup
              </span>
            </h1>
            <p className="text-xl md:text-1xl mb-12 text-gray-300 font-medium max-w-4xl mx-auto leading-relaxed">
              Home - signup
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-10 bg-gray-900 min-h-screen w-100">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-pink-400 font-semibold mb-2">SignUp Now</h3>
            <h2 className="text-4xl font-bold text-white mb-4">
              Create an Account
            </h2>
            <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
              Join our NFT marketplace as a buyer or seller to start your digital collectibles journey.
            </p>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
        </div>
        <div className="w-full">
          <div className="px-2 text-center col-span-6">
            <form
              className="login-form animated-fade-in"
              onSubmit={handleRegistration}
            >
              {/* <h2 className="login-title">Sign In</h2> */}
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
                <label htmlFor="email" className="login-label">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="login-input"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="login-group">
                <label htmlFor="password" className="login-label">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="login-input"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPasword(e.target.value)}
                />
              </div>
              <div className="login-group">
                <label htmlFor="role" className="login-label">
                  I want to be a
                </label>
                <select
                  id="role"
                  name="role"
                  required
                  className="login-input"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="buyer">Buyer (Purchase NFTs)</option>
                  <option value="seller">Seller (Create & Sell NFTs)</option>
                </select>
              </div>
              <button type="submit" className="login-btn" disabled={isLoading}>
                {isLoading ? "Registering..." : "Register"}
              </button>
              
              <div className="mt-6 text-gray-400">
                <p>
                  Already have an account?{" "}
                  <Link to="/login" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
                    Login here
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;
