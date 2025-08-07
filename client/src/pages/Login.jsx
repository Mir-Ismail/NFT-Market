import { motion } from "framer-motion";
import "./login.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    const result = await login(email, password);
    
    if (result.success) {
      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
      });
      navigate("/");
    } else {
      toast.error(result.error);
    }
    
    setIsLoading(false);
  };

  return (
    <div className="pt-16 min-h-screen">
      <ToastContainer/>
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
                className="block py-2 bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent"
                style={{ textShadow: "0 0 30px rgba(196,74,255,0.8)" }}
              >
                Login
              </span>
            </h1>
            <p className="text-xl md:text-1xl mb-12 text-gray-300 font-medium max-w-4xl mx-auto leading-relaxed">
              Home - Login
            </p>
          </motion.div>
        </div>
      </section>
      
      <section className="py-10 bg-gray-900 min-h-screen w-100">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-pink-400 font-semibold mb-2">Log in Now</h3>
            <h2 className="text-4xl font-bold text-white mb-4">
              Log in to Account
            </h2>
            <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
              Access your NFT marketplace account and start trading digital collectibles.
            </p>
          </div>
        </div>
        
        <div className="w-full">
          <div className="px-2 text-center col-span-6">
            <form className="login-form animated-fade-in" onSubmit={handleLogin}>
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
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="login-btn" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Login"}
              </button>
              
              <div className="mt-6 text-gray-400">
                <p>
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
                    Sign up here
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

export default Login;
