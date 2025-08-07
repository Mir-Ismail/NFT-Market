import { motion } from "framer-motion";
import { Search, Filter, Linkedin, Twitter, Mail, Clock } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { buildApiUrl } from "../../config/api";

function AuthorsDetail({
  filteredAuthors,
  isStandalone = false,
  searchTerm,
  setSearchTerm,
  totalAuthors,
}) {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [localSearchTerm, setLocalSearchTerm] = useState("");

  // Use props if provided, otherwise use local state
  const displaySearchTerm =
    searchTerm !== undefined ? searchTerm : localSearchTerm;
  const setDisplaySearchTerm = setSearchTerm || setLocalSearchTerm;

  const handleImageError = (e) => {
    e.target.src = "https://i.ibb.co/JpmYDNf/profile.jpg";
    e.target.onerror = null; // Prevent infinite loop
  };

  const getAccountAge = (createdAt) => {
    if (!createdAt) return "N/A";
    
    const now = new Date();
    const created = new Date(createdAt);
    const diffInDays = Math.floor((now - created) / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) return "Today";
    if (diffInDays === 1) return "1 day ago";
    if (diffInDays < 7) return `${diffInDays} days ago`;
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
    if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} months ago`;
    return `${Math.floor(diffInDays / 365)} years ago`;
  };

  useEffect(() => {
    if (filteredAuthors && !isStandalone) {
      setAuthors(filteredAuthors);
      setLoading(false);
      return;
    }

    const fetchAuthors = async () => {
      try {
        setLoading(true);
        const response = await axios.get(buildApiUrl("/api/users/role/seller"));
        setAuthors(response.data);
      } catch (err) {
        console.error("Error fetching authors:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAuthors();
  }, [filteredAuthors, isStandalone]);

  // Filter authors based on search term
  const displayAuthors =
    filteredAuthors ||
    authors.filter((author) => {
      const matchesSearch =
        author.name?.toLowerCase().includes(displaySearchTerm.toLowerCase()) ||
        author.email?.toLowerCase().includes(displaySearchTerm.toLowerCase());
      return matchesSearch;
    });

  if (loading) {
    return (
      <div className="flex items-center justify-center py-10">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <div className="text-red-500">
          <h2 className="text-2xl font-bold mb-4">Error Loading Authors</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Search and Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">
              {filteredAuthors && filteredAuthors.length > 0 && filteredAuthors[0].role === "buyer" 
                ? "Registered Users" 
                : "NFT Creators"}
            </h2>
            <p className="text-gray-400">
              {displayAuthors.length} of {totalAuthors || authors.length}{" "}
              {filteredAuthors && filteredAuthors.length > 0 && filteredAuthors[0].role === "buyer" ? "users" : "creators"}
            </p>
          </div>

          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder={`Search ${filteredAuthors && filteredAuthors.length > 0 && filteredAuthors[0].role === "buyer" ? "users" : "creators"}...`}
                value={displaySearchTerm}
                onChange={(e) => setDisplaySearchTerm(e.target.value)}
                className="bg-gray-800 border border-gray-600 rounded-lg pl-10 pr-4 py-2 text-white focus:outline-none focus:border-purple-500 w-64"
              />
            </div>
          </div>
        </div>

        {/* Authors Grid */}
        {displayAuthors.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-gray-400 text-xl mb-4">
              No {filteredAuthors && filteredAuthors.length > 0 && filteredAuthors[0].role === "buyer" ? "users" : "creators"} found
            </div>
            <p className="text-gray-500">
              Try adjusting your search terms or filters.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {displayAuthors.map((author, index) => (
              <motion.div
                key={author._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <Link to={`/author-profile/${author._id}`}>
                  {/* Author Image */}
                  <div className="relative h-48 bg-gradient-to-br from-purple-600 to-pink-600">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {author.pic ? (
                        <img
                          src={author.pic}
                          alt={author.name}
                          className="w-24 h-24 rounded-full object-cover border-4 border-white/20"
                          onError={handleImageError}
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
                          <span className="text-white text-2xl font-bold">
                            {author.name?.charAt(0) || "C"}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Author Details */}
                  <div className="p-6">
                    <h3 className="text-white font-semibold text-lg mb-2">
                      {author.name || "Unknown User"}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {author.email}
                    </p>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">
                          Role
                        </span>
                        <span className="text-purple-400 font-semibold">
                          {author.role || "Seller"}
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">
                          Joined
                        </span>
                        <span className="text-green-400 font-semibold text-sm">
                          {author.createdAt ? new Date(author.createdAt).toLocaleDateString() : "N/A"}
                        </span>
                      </div>
                    </div>

                    {/* User ID */}
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">User ID</span>
                        <span className="text-gray-300 text-xs font-mono">
                          {author._id ? author._id.slice(-8) + "..." : "N/A"}
                        </span>
                      </div>
                    </div>

                    {/* Account Age */}
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          Account Age
                        </span>
                        <span className="text-blue-400 text-sm font-medium">
                          {getAccountAge(author.createdAt)}
                        </span>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-4 mt-4 pt-4 border-t border-gray-700">
                      <a
                        href="#"
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a
                        href="#"
                        className="text-blue-600 transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default AuthorsDetail;
