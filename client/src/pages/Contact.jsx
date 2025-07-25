import ContactForm from "../components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
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
          <div className="absolute bottom-20 right-20 w-18 h-18 border border-yellow-400 rotate-12 animate-bounce"></div>
        </div>
        <div
          className="shape-3d shape-sphere top-16 left-12 animate-orbit opacity-16"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="shape-3d shape-cube top-1/3 right-16 animate-floating3d opacity-14"
          style={{ animationDelay: "1.1s" }}
        ></div>
        <div
          className="shape-3d shape-pyramid bottom-1/4 left-1/3 animate-rotate3d opacity-18"
          style={{ animationDelay: "2.3s" }}
        ></div>
        <div
          className="shape-3d shape-sphere top-1/2 right-1/4 animate-spiral opacity-15"
          style={{ animationDelay: "0.8s" }}
        ></div>
        <div
          className="shape-3d shape-cube bottom-12 left-20 animate-morphing opacity-13"
          style={{ animationDelay: "3.5s" }}
        ></div>
        <div
          className="shape-3d shape-pyramid top-48 left-1/2 animate-floating3d opacity-17"
          style={{ animationDelay: "1.7s" }}
        ></div>
        <div
          className="shape-3d shape-sphere bottom-16 right-12 animate-orbit opacity-12"
          style={{ animationDelay: "2.9s" }}
        ></div>
        <div
          className="shape-3d shape-cube top-72 right-1/3 animate-spiral opacity-19"
          style={{ animationDelay: "0.5s" }}
        ></div>

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
                Ready to
              </span>
              <span
                className="block bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent"
                style={{ textShadow: "0 0 30px rgba(196,74,255,0.8)" }}
              >
                Go Viral?
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-300 font-medium max-w-4xl mx-auto leading-relaxed">
              Get a free brand audit and discover how we can help you achieve
              viral success and massive engagement
            </p>
          </motion.div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gray-800 rounded-2xl shadow-xl p-8 border border-purple-500/20">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Get In Touch
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        Email Us
                      </h4>
                      <p className="text-gray-300">contact@nftvibes.com</p>
                      <p className="text-gray-300">support@nftvibes.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Call Us</h4>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                      <p className="text-gray-300">Mon-Fri 9AM-6PM EST</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        Visit Us
                      </h4>
                      <p className="text-gray-300">123 Creative Ave</p>
                      <p className="text-gray-300">Los Angeles, CA 90210</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary-600 rounded-2xl shadow-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-blue-100 mb-6">
                  Join 500+ successful Amazon sellers who trust AmazonPro to
                  scale their businesses.
                </p>
                <button className="bg-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 text-[#020203]">
                  Connect Wallet
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 group"
            >
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors duration-300">
                How quickly will I see results?
              </h3>
              <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                Most clients see viral content within 30-60 days, with
                significant engagement growth typically occurring within 90
                days. Results vary based on your current brand presence and
                market conditions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 group"
            >
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors duration-300">
                What's included in the free audit?
              </h3>
              <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                Our comprehensive audit includes content strategy analysis,
                viral potential review, competitive analysis, and a custom
                growth strategy with specific recommendations for maximum
                engagement.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 group"
            >
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors duration-300">
                Do you work with businesses of all sizes?
              </h3>
              <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                Yes! We work with everyone from startups launching their first
                viral campaign to established brands doing $10M+ annually. Our
                strategies scale with your business growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 group"
            >
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors duration-300">
                What makes NFTMarket different?
              </h3>
              <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                Our team includes award-winning creators and viral marketing
                experts, we use cutting-edge AI technology, and we've generated
                over $100M in engagement for our clients. We focus on long-term
                brand transformation, not short-term gains.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
