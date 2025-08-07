import { motion } from "framer-motion";
import AuctionItem from "../AuctionItem";
import NewArrivals from "../sections/NewArrivals";

function LiveAuction() {
  const categories = [
    "All",
    "Art",
    "Virtual Worlds",
    "Purchases",
    "NFT Gifts",
    "Collectibles",
    "Gifts",
    "Trading Cards",
  ];
  return (
    <div className="pt-16 min-h-screen bg-[#0D0D2B] text-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-yellow-400/10 animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
                New Arrival Details
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-300 font-medium max-w-4xl mx-auto">
              Home - Arrivals
            </p>
          </motion.div>
        </div>
      </section>

      {/* Auction Cards Section */}
      {/* <AuctionItem /> */}
      <NewArrivals categories={categories}/>
    </div>
  );
}

export default LiveAuction;
