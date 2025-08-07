import { motion } from "framer-motion";
import "./itemdetail.css";
import NFTDetails from "../components/discover/NFTDetails";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { buildApiUrl } from "../config/api";

function ItemDetails() {
  const [nft, setNft] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchNFT = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          buildApiUrl(`/api/nfts/${id}`)
        );
        setNft(response.data);
      } catch (err) {
        console.error("Error fetching NFT:", err);
        setError("Failed to load NFT details");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchNFT();
    }
  }, [id]);

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
          <h2 className="text-2xl font-bold mb-4">Error Loading NFT</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!nft) {
    return (
      <div className="pt-16 min-h-screen bg-[#0D0D2B] flex items-center justify-center">
        <div className="text-white text-center">
          <h2 className="text-2xl font-bold mb-4">NFT Not Found</h2>
          <p className="text-gray-400">
            The NFT you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

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
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span
                className="block bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent py-2"
                style={{ textShadow: "0 0 20px rgba(255,255,255,0.5)" }}
              >
                {nft.name}
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-300 font-medium max-w-4xl mx-auto leading-relaxed">
              Home - Item Details{" "}
            </p>
          </motion.div>
        </div>
      </section>

      {/* NFT Details Section */}
      <NFTDetails nft={nft} />
    </div>
  );
}

export default ItemDetails;
