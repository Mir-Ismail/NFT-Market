import { Link } from "wouter";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* PrimeVibeMedia Premium Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
      {/* Animated Purple/Gold Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-yellow-400/10 animate-pulse"></div>
      {/* Modern Geometric Patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-purple-500 rotate-45 animate-spin"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-yellow-400 rotate-12 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-500 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-yellow-400 rounded-lg rotate-45 animate-float"></div>
      </div>
      {/* Premium 3D Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-32 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg rotate-45 animate-spin opacity-20"></div>
        <div className="absolute bottom-32 right-32 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce opacity-20"></div>
        <div className="absolute top-1/2 right-20 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rotate-12 animate-pulse opacity-15"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block text-white mb-4">Discover Rare</span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent py-2">
              Digital Collectibles
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-10 text-gray-300 font-medium max-w-3xl mx-auto leading-relaxed">
            Own, trade, and profit from exclusive NFTs in our creator-first
            marketplace
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <Link href="/explore">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30">
                Explore Drops
              </button>
            </Link>
            <Link href="/create">
              <button className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-10 py-4 rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/30">
                <Play size={18} /> Mint Your NFT
              </button>
            </Link>
          </div>

          {/* Success Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto backdrop-blur-sm p-6 rounded-2xl"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1 text-purple-300">
                10K+
              </div>
              <div className="text-blue-200 text-sm">Digital Collectibles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1 text-purple-300">
                500+
              </div>
              <div className="text-blue-200 text-sm">Verified Creators</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1 text-purple-300">
                2.5M+
              </div>
              <div className="text-blue-200 text-sm">ETH Traded</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1 text-purple-300">
                4.9★
              </div>
              <div className="text-blue-200 text-sm">Community Rating</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
