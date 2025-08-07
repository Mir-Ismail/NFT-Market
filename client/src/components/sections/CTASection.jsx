import { Link } from "wouter";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-10 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
              Go Viral?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto font-medium">
            Join 1000+ successful brands who've transformed their digital
            presence with our proven strategies. Get your free brand audit and
            discover how we can amplify your reach.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <button className="bg-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-lg text-[#111827]">
                Connect Wallet
              </button>
            </Link>
            <Link href="/services">
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105">
                View Our Services
              </button>
            </Link>
          </div>

          <div className="mt-12 text-blue-200">
            <p className="text-lg">
              No setup fees • 30-day money-back guarantee • Free consultation
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
