import { CheckCircle, Target, Users, Award } from "lucide-react";
import { motion } from "framer-motion";
import aboutImage from "../assets/images/about.jpg";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Innovation-Driven",
      description:
        "We embrace blockchain technology to deliver a secure, transparent, and futuristic NFT marketplace experience.",
    },
    {
      icon: Users,
      title: "Community-Focused",
      description:
        "Our platform thrives on a vibrant community of creators, collectors, and bidders who bring NFTs to life.",
    },
    {
      icon: Award,
      title: "Trusted Marketplace",
      description:
        "We ensure every NFT transaction is safe, verified, and built on top of decentralized blockchain standards.",
    },
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-yellow-400/10 animate-pulse"></div>

        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-26 h-26 border border-purple-500 rotate-45 animate-spin"></div>
          <div className="absolute bottom-20 right-20 w-20 h-20 border border-yellow-400 rotate-12 animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-15 h-15 bg-purple-500 rounded-full animate-pulse"></div>
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
                About
              </span>
              <span
                className="block bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent"
                style={{ textShadow: "0 0 30px rgba(196,74,255,0.8)" }}
              >
                NFTMarket
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-300 font-medium max-w-4xl mx-auto leading-relaxed">
              Empowering creators and collectors with a next-generation NFT
              marketplace where you can mint, sell, and bid on unique digital
              assets with full transparency and blockchain security.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-slate-900">
                Our Journey
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                NFTMarket was born out of a passion for empowering digital
                creators and collectors worldwide. We envisioned a platform
                where artists could mint their work, enthusiasts could trade
                rare digital assets, and everyone could experience the
                excitement of live NFT auctions.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                Since our launch, we've connected thousands of creators and
                collectors globally, enabling them to build value, ownership,
                and community around unique digital assets.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-slate-700">
                    1000+ NFTs successfully traded
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-slate-700">
                    Global network of creators and collectors
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-slate-700">
                    Decentralized, secure, and trustless transactions
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40, y: -20 }} 
              whileInView={{
                opacity: 1,
                x: 0, // Horizontal fade-in
                y: [0, 20, 0, -20, 0], // Vertical oscillation pattern
              }}
              transition={{
                x: { duration: 0.8 }, // Horizontal animation duration
                y: {
                  duration: 4, // Vertical animation duration (slower)
                  repeat: Infinity, // Loop forever
                  ease: "easeInOut", // Smooth movement
                },
              }}
              viewport={{ once: true }}
            >
              <img
                alt="NFT Marketplace"
                src={aboutImage}
                className="rounded-2xl shadow-2xl bg-none w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-10 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-transparent to-yellow-400/5 animate-pulse"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold text-white mb-8 text-center">
              Our {"  "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
                Core Values
              </span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These principles drive every NFT we help create, sell, and auction
              to the world.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 rounded-2xl p-8 text-center shadow-xl border border-purple-500/20 hover:border-purple-500/60 transition-all duration-500 hover:transform hover:scale-110 hover:-translate-y-4 hover:rotate-2 hover:shadow-2xl hover:shadow-purple-500/40 group"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-purple-600/20 rounded-2xl flex items-center justify-center group-hover:bg-purple-600/40 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <IconComponent className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-10 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Our{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
                Mission
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              "To build a decentralized NFT ecosystem that empowers creators,
              connects collectors, and revolutionizes the way digital assets are
              bought, sold, and experienced worldwide."
            </p>
            <div className="bg-gradient-to-r from-purple-600 to-yellow-500 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">
                Be Part of the Future of Digital Ownership
              </h3>
              <p className="text-blue-100 mb-6">
                Join our growing NFT community to create, collect, and bid on
                exclusive digital assets.
              </p>
              <button className="bg-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-[#010102]">
                Start Your NFT Journey
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
