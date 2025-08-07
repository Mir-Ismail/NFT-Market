// import ServicesSection from "../components/sections/ServicesSection";
import { motion } from "framer-motion";
import { Link } from "wouter";
import CTASection from "../components/sections/CTASection";

export default function Services() {
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
                Our
              </span>
              <span
                className="block bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent"
                style={{ textShadow: "0 0 30px rgba(196,74,255,0.8)" }}
              >
                Media Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-300 font-medium max-w-4xl mx-auto leading-relaxed">
              Premium digital solutions that elevate your brand and drive viral
              engagement across all platforms
            </p>
          </motion.div>
        </div>
      </section>
      {/* Services Grid */}
      <CTASection />
      {/* Why Choose Us */}
      <section className="py-10 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
                NFTMarket?
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-2xl p-8 border border-purple-500/20 transform transition-all duration-500 hover:scale-105 hover:-translate-y-3 hover:rotate-1 hover:shadow-2xl hover:shadow-purple-500/30 hover:border-purple-400/80 group"
            >
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors duration-300">
                Proven Track Record
              </h3>
              <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                Over $100M in revenue generated for our clients with an average
                ROI increase of 250%
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-2xl p-8 border border-purple-500/20 transform transition-all duration-500 hover:scale-105 hover:-translate-y-3 hover:-rotate-1 hover:shadow-2xl hover:shadow-purple-500/30 hover:border-purple-400/80 group"
            >
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors duration-300">
                Expert Team
              </h3>
              <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                Award-winning creators and digital strategists with decades of
                combined experience in viral marketing
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-2xl p-8 border border-purple-500/20 transform transition-all duration-500 hover:scale-105 hover:-translate-y-3 hover:rotate-1 hover:shadow-2xl hover:shadow-purple-500/30 hover:border-purple-400/80 group"
            >
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors duration-300">
                AI-Powered Optimization
              </h3>
              <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                Cutting-edge technology and machine learning algorithms for
                maximum campaign performance
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-2xl p-8 border border-purple-500/20 transform transition-all duration-500 hover:scale-105 hover:-translate-y-3 hover:-rotate-1 hover:shadow-2xl hover:shadow-purple-500/30 hover:border-purple-400/80 group"
            >
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors duration-300">
                24/7 Monitoring
              </h3>
              <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                Round-the-clock performance monitoring and optimization to
                ensure your campaigns never miss an opportunity
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-2xl p-8 border border-purple-500/20 transform transition-all duration-500 hover:scale-105 hover:-translate-y-3 hover:rotate-1 hover:shadow-2xl hover:shadow-purple-500/30 hover:border-purple-400/80 group"
            >
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors duration-300">
                Transparent Reporting
              </h3>
              <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                Detailed analytics and regular reports so you always know
                exactly how your investment is performing
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-2xl p-8 border border-purple-500/20 transform transition-all duration-500 hover:scale-105 hover:-translate-y-3 hover:-rotate-1 hover:shadow-2xl hover:shadow-purple-500/30 hover:border-purple-400/80 group"
            >
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors duration-300">
                Scalable Solutions
              </h3>
              <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                Whether you're a startup or enterprise, our solutions scale with
                your business growth
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-10 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="gradient-text">Get Started?</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Schedule a free consultation to discuss which services are right
              for your business
            </p>
            <Link href="/contact">
              <button className="text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-700 transition-all duration-300 hover:scale-105 hover:shadow-lg bg-[#9c31db]">
                Schedule Free Consultation
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
