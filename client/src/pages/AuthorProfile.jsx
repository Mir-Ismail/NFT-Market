import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";
import { motion } from "framer-motion";
import axios from "axios";
import { buildApiUrl, buildFileUrl } from "../config/api";

function AuthorProfile() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [author, setAuthor] = useState(null);
  const [authorNFTs, setAuthorNFTs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch author data and their NFTs
  useEffect(() => {
    const fetchAuthorData = async () => {
      try {
        setLoading(true);

        // Fetch author details
        const authorResponse = await axios.get(
          buildApiUrl(`/api/users/${id}`)
        );
        setAuthor(authorResponse.data);

        // Fetch author's NFTs
        const nftsResponse = await axios.get(
          buildApiUrl(`/api/nfts/creator/${id}`)
        );
        setAuthorNFTs(nftsResponse.data);
      } catch (err) {
        console.error("Error fetching author data:", err);
        setError("Failed to load author data");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchAuthorData();
    }
  }, [id]);

  // Filter NFTs by category
  const filteredNFTs =
    selectedCategory === "All"
      ? authorNFTs
      : authorNFTs.filter((nft) => nft.category === selectedCategory);

  // Get unique categories from NFTs
  const categories = ["All", ...new Set(authorNFTs.map((nft) => nft.category))];

  if (loading) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (error || !author) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">{error || "Author not found"}</div>
      </div>
    );
  }
  const handleNFTClick = (nftId) => {
    navigate(`/item/${nftId}`);
  };

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-black text-white overflow-hidden">
        {/* NFTMarket Premium Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-yellow-400/10 animate-pulse"></div>

        {/* Modern Geometric Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-26 h-26 border border-purple-500 rotate-45 animate-spin"></div>
          <div className="absolute bottom-20 right-20 w-20 h-20 border border-yellow-400 rotate-12 animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-15 h-15 bg-purple-500 rounded-full animate-pulse"></div>
        </div>
        <div
          className="shape-3d shape-pyramid top-20 left-15 animate-floating3d opacity-14"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="shape-3d shape-cube top-1/4 right-15 animate-spiral opacity-16"
          style={{ animationDelay: "1.3s" }}
        ></div>
        <div
          className="shape-3d shape-sphere bottom-1/3 left-1/4 animate-rotate3d opacity-13"
          style={{ animationDelay: "2.1s" }}
        ></div>
        <div
          className="shape-3d shape-pyramid top-1/2 right-1/3 animate-orbit opacity-17"
          style={{ animationDelay: "0.6s" }}
        ></div>
        <div
          className="shape-3d shape-cube bottom-15 left-15 animate-morphing opacity-12"
          style={{ animationDelay: "3.4s" }}
        ></div>
        <div
          className="shape-3d shape-sphere top-45 left-1/2 animate-floating3d opacity-15"
          style={{ animationDelay: "1.9s" }}
        ></div>
        <div
          className="shape-3d shape-pyramid bottom-20 right-20 animate-spiral opacity-18"
          style={{ animationDelay: "2.7s" }}
        ></div>
        <div
          className="shape-3d shape-cube top-65 right-1/4 animate-rotate3d opacity-11"
          style={{ animationDelay: "0.3s" }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-5xl font-bold mb-8 leading-tight">
              <span
                className="text-white"
                style={{ textShadow: "0 0 20px rgba(255,255,255,0.5)" }}
              >
                {author.name || author.email}'s Profile
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-300 font-small max-w-4xl mx-auto leading-relaxed">
              Author • {authorNFTs.length} NFTs •{" "}
              {authorNFTs
                .reduce((sum, nft) => sum + (nft.price || 0), 0)
                .toFixed(2)}{" "}
              ETH Total Value
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-10 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 items-start cursor-pointer">
            {/* Left Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="col-span-1 sm-12"
            >
              <ProfileCard
                name={author.name || author.email}
                role="Creative NFTs Designer"
                bio={author.bio || "Passionate NFT author and digital artist"}
                shortId={author._id}
                profileImage={
                  author.pic || "https://i.ibb.co/JpmYDNf/profile.jpg"
                }
              />
            </motion.div>

            {/* Right NFT Collection */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="col-span-2 bg-[#0b1120] p-8 rounded-2xl text-white shadow-xl"
            >
              {/* Title */}
              <div className="text-center portfolio-menu mb-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`bg-transparent hover:text-purple-500 text-white font-bold px-4 py-2 rounded-lg transition-colors ${
                      selectedCategory === category
                        ? "text-purple-500 bg-purple-500/10"
                        : ""
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* NFT Collection Display */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredNFTs.length > 0 ? (
                  filteredNFTs.map((nft) => (
                    <div
                      key={nft._id}
                      onClick={() => handleNFTClick(nft._id)}
                      className="bg-[#141a2e] rounded-xl p-4 hover:bg-[#1a2332] transition-colors"
                    >
                      <img
                        src={buildFileUrl(nft.file)}
                        alt={nft.name}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/300x200?text=Image+Not+Found";
                        }}
                      />
                      <h3 className="text-lg font-semibold mb-2">{nft.name}</h3>
                      <p className="text-purple-400 text-sm mb-2 col-span-full">
                        <span>Category: </span> {nft.category}
                      </p>
                      <p className="text-gray-400 text-sm mb-3">
                        <h3>Description:</h3>
                        <span>{nft.description}</span>
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-white font-bold">
                          {nft.price} ETH
                        </span>
                        <span className="text-gray-400 text-sm">
                          {nft.copies || 0} /{" "}
                          {nft.totalCopies || nft.copies || 1}
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <p className="text-gray-400 text-lg">
                      {selectedCategory === "All"
                        ? "No NFTs found for this author"
                        : `No NFTs found in ${selectedCategory} category`}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AuthorProfile;
