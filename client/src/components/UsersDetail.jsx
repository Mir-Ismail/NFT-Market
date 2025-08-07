import React from "react";
import { motion } from "framer-motion";
import { Search, Linkedin, Twitter, Mail, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

function UsersDetail({
  users = [],
  searchTerm = "",
  setSearchTerm,
  role = "buyer",
}) {
  const handleImageError = (e) => {
    e.target.src = "https://i.ibb.co/JpmYDNf/profile.jpg";
    e.target.onerror = null;
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

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">
              {role === "buyer" ? "Registered Buyers" : "Registered Users"}
            </h2>
            <p className="text-gray-400">
              {users.length} {role === "buyer" ? "buyers" : "users"} found
            </p>
          </div>

          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder={`Search ${role}s...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-gray-800 border border-gray-600 rounded-lg pl-10 pr-4 py-2 text-white focus:outline-none focus:border-purple-500 w-64"
              />
            </div>
          </div>
        </div>

        {/* Users Grid */}
        {users.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-gray-400 text-xl mb-4">
              {searchTerm
                ? `No ${role}s found matching "${searchTerm}"`
                : `No ${role}s found`}
            </div>
            <p className="text-gray-500">
              Try adjusting your search terms or filters.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {users.map((user, index) => (
              <motion.div
                key={user._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <Link to={`/author-profile/${user._id}`}>
                  {/* User Image */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-600 to-purple-600">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {user.pic ? (
                        <img
                          src={user.pic}
                          alt={user.name}
                          className="w-24 h-24 rounded-full object-cover border-4 border-white/20"
                          onError={handleImageError}
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
                          <span className="text-white text-2xl font-bold">
                            {user.name?.charAt(0) || "U"}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* User Details */}
                  <div className="p-6">
                    <h3 className="text-white font-semibold text-lg mb-2">
                      {user.name || "Unknown User"}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {user.email}
                    </p>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">Role</span>
                        <span
                          className={`font-semibold text-sm px-2 py-1 rounded-full ${
                            user.role === "buyer"
                              ? "bg-blue-500 text-white"
                              : "bg-green-500 text-white"
                          }`}
                        >
                          {user.role}
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">Joined</span>
                        <span className="text-green-400 font-semibold text-sm">
                          {user.createdAt
                            ? new Date(user.createdAt).toLocaleDateString()
                            : "N/A"}
                        </span>
                      </div>
                    </div>

                    {/* User ID */}
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">User ID</span>
                        <span className="text-gray-300 text-xs font-mono">
                          {user._id ? user._id.slice(-8) + "..." : "N/A"}
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
                          {getAccountAge(user.createdAt)}
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
                        className="text-gray-400 hover:text-blue-600 transition-colors"
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

export default UsersDetail;
