import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AuthorsDetail from "../components/sections/AuthorsDetail";
import UsersDetail from "../components/UsersDetail";
import { useAuth } from "../context/AuthContext";
import { buildApiUrl } from "../config/api";

export default function Author() {
  const [sellers, setSellers] = useState([]);
  const [buyers, setBuyers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [userType, setUserType] = useState("sellers"); // "sellers" or "buyers"
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is admin
    if (!user || user.role !== "admin") {
      navigate("/");
      return;
    }

    const fetchAllUsers = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch both sellers and buyers
        const [sellersResponse, buyersResponse] = await Promise.all([
          axios.get(buildApiUrl("/api/users/role/seller")),
          axios.get(buildApiUrl("/api/users/role/buyer"))
        ]);

        setSellers(sellersResponse.data);
        setBuyers(buyersResponse.data);
      } catch (err) {
        console.error("Error fetching users:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllUsers();
  }, [user, navigate]);

  // Filter users based on search term and selected type
  const filteredSellers = sellers.filter((seller) => {
    const matchesSearch =
      seller.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      seller.email?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const filteredBuyers = buyers.filter((buyer) => {
    const matchesSearch =
      buyer.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      buyer.email?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  if (loading) {
    return (
      <div className="pt-16 min-h-screen bg-[#0D0D2B] flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-16 min-h-screen bg-[#0D0D2B] flex items-center justify-center">
        <div className="text-red-500 text-center">
          <h2 className="text-2xl font-bold mb-4">Error Loading Users</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  // Redirect non-admin users
  if (!user || user.role !== "admin") {
    return null;
  }

  return (
    <div className="pt-16 min-h-screen bg-[#0D0D2B]">
      {/* Hero Section */}
      <section className="relative py-20 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-yellow-400/10 animate-pulse"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
                  User Management
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                Admin panel to manage registered users and NFT creators
              </p>
              
              {/* User Type Toggle Buttons */}
              <div className="flex justify-center mb-8">
                <div className="bg-gray-800 rounded-lg p-1 flex">
                  <button
                    onClick={() => setUserType("sellers")}
                    className={`px-6 py-2 rounded-md transition-colors ${
                      userType === "sellers"
                        ? "bg-purple-600 text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    NFT Creators
                  </button>
                  <button
                    onClick={() => setUserType("buyers")}
                    className={`px-6 py-2 rounded-md transition-colors ${
                      userType === "buyers"
                        ? "bg-purple-600 text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Registered Users
                  </button>
                </div>
              </div>

              <div className="flex justify-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">
                    {sellers.length}
                  </div>
                  <div className="text-gray-400">NFT Creators</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">
                    {buyers.length}
                  </div>
                  <div className="text-gray-400">Registered Users</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Users Section */}
      {userType === "sellers" ? (
        <AuthorsDetail
          filteredAuthors={filteredSellers}
          isStandalone={false}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          totalAuthors={sellers.length}
        />
      ) : (
        <UsersDetail
          users={filteredBuyers}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          role="buyer"
        />
      )}
    </div>
  );
}
