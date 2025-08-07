import { motion } from "framer-motion";
import React from "react";

function TopSellers() {
  // Sample data matching the image - you can replace this with your actual data
  const displaySellers = [
    {
      id: 1,
      name: "LarySmith-30",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      price: "647.34 ETH",
    },
    {
      id: 2,
      name: "Amillia Nnor",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
      price: "521.85 ETH",
    },
    {
      id: 3,
      name: "Naretor-Nole",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
      price: "511.45 ETH",
    },
    {
      id: 4,
      name: "Johan Donem",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      price: "499.11 ETH",
    },
    {
      id: 5,
      name: "LarySmith-30",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      price: "456.78 ETH",
    },
    {
      id: 6,
      name: "Amillia Nnor",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
      price: "432.12 ETH",
    },
    {
      id: 7,
      name: "Naretor-Nole",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
      price: "398.45 ETH",
    },
    {
      id: 8,
      name: "Johan Donem",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      price: "365.89 ETH",
    },
    {
      id: 9,
      name: "LarySmith-30",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      price: "342.67 ETH",
    },
    {
      id: 10,
      name: "Amillia Nnor",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
      price: "298.34 ETH",
    },
    {
      id: 11,
      name: "Naretor-Nole",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
      price: "267.91 ETH",
    },
    {
      id: 12,
      name: "Johan Donem",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      price: "234.56 ETH",
    },
  ];

  return (
    <section className="py-10 bg-[#0D0D2B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="bg-gradient-to-r font-bold text-2xl from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
            Creative Creators
          </h2>
          <h2 className="text-4xl font-bold text-white">
            Top Sellers This Month
          </h2>
        </div>

        {/* Top Sellers Grid - 3 columns */}
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Column 1: Sellers 1-4 */}
            <div className="space-y-4 border border-purple-500/20 rounded-lg">
              {displaySellers.slice(0, 4).map((seller, index) => (
                <motion.div
                  key={seller.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-3 rounded-lg hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-500"
                >
                  {/* Rank Number */}
                  <span className="text-4xl font-bold text-gray-400 min-w-[60px]">
                    {String(seller.id).padStart(2, "0")}
                  </span>

                  {/* Profile Picture */}
                  <img
                    src={seller.image}
                    alt={seller.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-purple-500/30"
                  />

                  {/* Name and Price */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1 hover:text-purple-300 transition-colors duration-300 cursor-pointer">
                      {seller.name}
                    </h3>
                    <p className="text-sm text-gray-400">{seller.price}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Column 2: Sellers 5-8 */}
            <div className="space-y-4 border border-purple-500/20 rounded-lg">
              {displaySellers.slice(4, 8).map((seller, index) => (
                <motion.div
                  key={seller.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-3 rounded-lg hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-500"
                >
                  {/* Rank Number */}
                  <span className="text-4xl font-bold text-gray-400 min-w-[60px]">
                    {String(seller.id).padStart(2, "0")}
                  </span>

                  {/* Profile Picture */}
                  <img
                    src={seller.image}
                    alt={seller.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-purple-500/30"
                  />

                  {/* Name and Price */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1 hover:text-purple-300 transition-colors duration-300 cursor-pointer">
                      {seller.name}
                    </h3>
                    <p className="text-sm text-gray-400">{seller.price}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Column 3: Sellers 9-12 */}
            <div className="space-y-4 border border-purple-500/20 rounded-lg">
              {displaySellers.slice(8, 12).map((seller, index) => (
                <motion.div
                  key={seller.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-3 rounded-lg hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-500"
                >
                  {/* Rank Number */}
                  <span className="text-4xl font-bold text-gray-400 min-w-[60px]">
                    {String(seller.id).padStart(2, "0")}
                  </span>

                  {/* Profile Picture */}
                  <img
                    src={seller.image}
                    alt={seller.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-purple-500/30"
                  />

                  {/* Name and Price */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1 hover:text-purple-300 transition-colors duration-300 cursor-pointer">
                      {seller.name}
                    </h3>
                    <p className="text-sm text-gray-400">{seller.price}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopSellers;
