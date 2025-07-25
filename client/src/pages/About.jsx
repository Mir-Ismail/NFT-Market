import { CheckCircle, Target, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description:
        "Every strategy is designed with measurable ROI and growth metrics in mind",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our success. We grow when you grow",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do",
    },
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-black text-white overflow-hidden">
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
              Founded in 2020, we've revolutionized digital presence for 1000+
              brands, creating viral campaigns that generated 500M+ impressions
              worldwide.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-slate-900">
                Our Story
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                AmazonPro was born from the frustration of watching talented
                entrepreneurs struggle with Amazon's complex advertising
                ecosystem. Our founder, Alex Rodriguez, spent 8 years at Amazon
                leading teams that generated over $50M in marketplace revenue.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                In 2018, he left Amazon to democratize access to the strategies
                and insights that only the biggest brands had access to. Today,
                we've helped generate over $100M in additional revenue for our
                clients.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-slate-700">
                    500+ Successful Client Partnerships
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-slate-700">
                    $100M+ in Revenue Generated
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-slate-700">
                    6 Years of Market Leadership
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* Core Values */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        {/* Premium Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-transparent to-yellow-400/5 animate-pulse"></div>

        {/* Geometric Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-24 h-24 border border-purple-500 rotate-45 animate-spin"></div>
          <div className="absolute bottom-20 right-20 w-16 h-16 border border-yellow-400 rotate-12 animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-purple-500 rounded-full animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide every decision we make and every
              strategy we implement
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
      <section className="py-20 bg-gray-900">
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
              "To democratize access to cutting-edge digital marketing
              strategies, empowering ambitious brands to build viral presence,
              sustainable growth, and lasting value for their audiences and
              communities."
            </p>
            <div className="bg-gradient-to-r from-primary-600 to-accent-600 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Join Our Success Stories?
              </h3>
              <p className="text-blue-100 mb-6">
                Let's discuss how we can help you achieve your Amazon business
                goals
              </p>
              <button className="bg-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-[#010102]">
                Schedule a Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
