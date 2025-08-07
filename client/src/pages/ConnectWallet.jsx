import { motion } from "framer-motion";
import React from "react";
import { Wallet, Sparkles, Monitor, Smartphone } from "lucide-react";

function ConnectWallet() {
  return (
    <div className="pt-16 min-h-screen">
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
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span
                className="text-white"
                style={{ textShadow: "0 0 20px rgba(255,255,255,0.5)" }}
              >
                Connect{" "}
              </span>
              <span
                className="bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent"
                style={{ textShadow: "0 0 30px rgba(196,74,255,0.8)" }}
              >
                Wallet
              </span>
            </h1>
            <p className="text-sm md:text-2xl mb-12 text-gray-300 font-small max-w-4xl mx-auto leading-relaxed">
              Home - Wallet
            </p>
          </motion.div>
        </div>
      </section>

      {/* Wallet Connection Section */}
      <section className="py-10  bg-[#0D0D2B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Wallet Connection */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gradient-to-r from-purple-500 to-pink-500"
            >
              {/* Wallet Icon */}
              <div className="text-center mb-8">
                <div className="relative inline-block">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wallet className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Connect Your Wallet to Start collecting, Buying and Selling
                  NFTs.
                </h2>
              </div>

              {/* Wallet Connection Buttons */}
              <div className="space-y-4">
                {/* MetaMask Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  //   onClick={handleMetaMaskConnect}
                  className="w-full bg-gray-700 hover:bg-gray-600 border border-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-4 flex items-center justify-center space-x-3 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">🦊</span>
                  </div>
                  <span className="text-white font-semibold">
                    connect with MetaMask
                  </span>
                </motion.button>

                {/* WalletConnect Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  //   onClick={handleWalletConnect}
                  className="w-full bg-gray-700 hover:bg-gray-600 border border-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-4 flex items-center justify-center space-x-3 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">W</span>
                  </div>
                  <span className="text-white font-semibold">
                    connect with WalletConnect
                  </span>
                </motion.button>

                {/* Ledger Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  //   onClick={handleLedgerConnect}
                  className="w-full bg-gray-700 hover:bg-gray-600 border border-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-4 flex items-center justify-center space-x-3 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-0.5">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <span className="text-white font-semibold">
                    connect with Ledger
                  </span>
                </motion.button>
              </div>
            </motion.div>
            <motion.div>
              <img
                src="https://nft-react-next.netlify.app/_next/static/media/platform.b7a5ea68.png"
                alt="wallet"
              />
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-[#0D0D2B]">
        <div className="mt-8">
          <iframe
            style={{ width: "100%", maxWidth: "100%", height: "1200px" }}
            allow="clipboard-write *"
            src="https://sandbox.widget.forumpay.com/pay/order?id=267d544a-88ba-4aae-ac2f-4cde238d949c&theme=light"
            frameBorder="0"
            title="ForumPay Payment"
          ></iframe>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-10  bg-[#0D0D2B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Connect Your Wallet?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Connect your wallet to access the full potential of our NFT
              marketplace
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wallet className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Secure Storage
              </h3>
              <p className="text-gray-400">
                Your digital assets are stored securely in your wallet with full
                control
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Easy Trading
              </h3>
              <p className="text-gray-400">
                Buy, sell, and trade NFTs seamlessly with your connected wallet
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Mobile Access
              </h3>
              <p className="text-gray-400">
                Access your collection and trade from anywhere with mobile
                compatibility
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ConnectWallet;
