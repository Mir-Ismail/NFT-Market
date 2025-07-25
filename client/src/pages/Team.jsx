import { Linkedin, Twitter, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Team() {
  const teamMembers = [
    {
      name: "Alex Rodriguez",
      role: "Founder & CEO",
      bio: "Former Amazon executive with 8+ years of experience. Led teams that generated over $50M in marketplace revenue.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "alex@amazonpro.com",
      },
    },
    {
      name: "Sarah Chen",
      role: "Head of PPC Strategy",
      bio: "PPC specialist who optimized campaigns worth $20M+ ad spend. Expert in AI-driven bidding strategies.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@amazonpro.com",
      },
    },
    {
      name: "Marcus Johnson",
      role: "Senior Account Manager",
      bio: "Client relationship expert managing 100+ Amazon sellers. Specialized in scaling 7-figure businesses.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "marcus@amazonpro.com",
      },
    },
    {
      name: "Emma Thompson",
      role: "Listing Optimization Specialist",
      bio: "SEO expert who increased organic rankings for 500+ products. Master of conversion-focused copywriting.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emma@amazonpro.com",
      },
    },
    {
      name: "David Park",
      role: "DSP Campaign Manager",
      bio: "Display advertising specialist with expertise in programmatic campaigns and audience targeting strategies.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "david@amazonpro.com",
      },
    },
    {
      name: "Lisa Wang",
      role: "Data Analytics Lead",
      bio: "Data scientist who developed our proprietary analytics platform. Expert in machine learning and predictive modeling.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "lisa@amazonpro.com",
      },
    },
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-black text-white overflow-hidden">
        {/* NFTMarket Premium Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-yellow-400/10 animate-pulse"></div>

        {/* Modern Geometric Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-28 h-28 border border-purple-500 rotate-45 animate-spin"></div>
          <div className="absolute bottom-20 right-20 w-18 h-18 border border-yellow-400 rotate-12 animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-14 h-14 bg-purple-500 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-yellow-400 rounded-lg rotate-45 animate-float"></div>
        </div>
        <div
          className="shape-3d shape-cube top-10 left-20 animate-rotate3d opacity-15"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="shape-3d shape-sphere top-1/3 right-20 animate-floating3d opacity-18"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="shape-3d shape-pyramid bottom-20 left-1/3 animate-spiral opacity-14"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="shape-3d shape-sphere top-1/2 left-10 animate-orbit opacity-16"
          style={{ animationDelay: "0.7s" }}
        ></div>
        <div
          className="shape-3d shape-cube bottom-10 right-10 animate-morphing opacity-13"
          style={{ animationDelay: "3.2s" }}
        ></div>
        <div
          className="shape-3d shape-pyramid top-40 right-1/2 animate-floating3d opacity-12"
          style={{ animationDelay: "1.8s" }}
        ></div>
        <div
          className="shape-3d shape-sphere bottom-1/4 left-1/2 animate-spiral opacity-17"
          style={{ animationDelay: "2.8s" }}
        ></div>
        <div
          className="shape-3d shape-cube top-60 right-1/4 animate-rotate3d opacity-11"
          style={{ animationDelay: "0.4s" }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
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
                Meet Our
              </span>
              <span
                className="block bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent"
                style={{ textShadow: "0 0 30px rgba(196,74,255,0.8)" }}
              >
                Creative Visionaries
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-300 font-medium max-w-4xl mx-auto leading-relaxed">
              Award-winning creators and digital strategists who transform
              brands into viral sensations
            </p>
          </motion.div>
        </div>
      </section>
      {/* Team Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-purple-500/20 hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-500 hover:scale-110 hover:-translate-y-4 hover:rotate-2"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-purple-400 font-semibold mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {member.role}
                  </p>
                  <p className="text-gray-300 mb-4 text-sm group-hover:text-gray-100 transition-colors duration-300">
                    {member.bio}
                  </p>
                  <div className="flex space-x-3">
                    <a
                      href={member.social.linkedin}
                      className="text-gray-400 hover:text-purple-400 transform hover:scale-125 hover:rotate-12 transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="text-gray-400 hover:text-purple-400 transform hover:scale-125 hover:-rotate-12 transition-all duration-300"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="text-gray-400 hover:text-purple-400 transform hover:scale-125 hover:rotate-6 transition-all duration-300"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Join Our Team CTA */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        {/* Premium Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-transparent to-yellow-400/5 animate-pulse"></div>

        {/* Geometric Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border border-purple-500 rotate-45 animate-spin"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-yellow-400 rotate-12 animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-500 rounded-full animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Want to <span className="gradient-text">Join Our Team?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals who are passionate
              about creating viral content and transforming brands
            </p>
            <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 group">
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors duration-300">
                Current Openings
              </h3>
              <p className="text-gray-300 mb-6 group-hover:text-gray-100 transition-colors duration-300">
                Senior Content Creator • Viral Marketing Strategist • Social
                Media Manager • Brand Growth Specialist
              </p>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-110">
                View Open Positions
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
