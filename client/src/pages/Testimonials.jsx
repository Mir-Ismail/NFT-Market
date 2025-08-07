import TestimonialsSection from '../components/sections/TestimonialsSection';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const additionalTestimonials = [
    {
      quote: "The ROI we've seen from AmazonPro's services has been incredible. Our ROAS improved by 300% in just 6 months.",
      name: "Robert Chen",
      company: "FitLife Nutrition",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      result: "300% ROAS Improvement"
    },
    {
      quote: "Their listing optimization services transformed our conversion rates. We went from 8% to 18% conversion rate.",
      name: "Amanda Foster",
      company: "HomeStyle Decor",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      result: "125% Conversion Increase"
    },
    {
      quote: "AmazonPro helped us expand internationally. We're now selling successfully in 5 new countries.",
      name: "Carlos Martinez",
      company: "TechInnovate",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      result: "5 New Markets Entered"
    }
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-black text-white overflow-hidden">
        {/* PrimeVibeMedia Premium Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-yellow-400/10 animate-pulse"></div>
        
        {/* Modern Geometric Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border border-purple-500 rotate-45 animate-spin"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-yellow-400 rotate-12 animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-500 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-yellow-400 rounded-lg rotate-45 animate-float"></div>
        </div>
        
        {/* Breathtaking 3D Background Animation */}
        <div className="shape-3d shape-cube top-14 left-18 animate-morphing opacity-17" style={{ animationDelay: '0s' }}></div>
        <div className="shape-3d shape-sphere top-1/4 right-14 animate-rotate3d opacity-15" style={{ animationDelay: '1.4s' }}></div>
        <div className="shape-3d shape-pyramid bottom-1/3 left-1/4 animate-floating3d opacity-19" style={{ animationDelay: '2.2s' }}></div>
        <div className="shape-3d shape-cube top-1/2 right-1/3 animate-spiral opacity-14" style={{ animationDelay: '0.9s' }}></div>
        <div className="shape-3d shape-sphere bottom-18 left-14 animate-orbit opacity-16" style={{ animationDelay: '3.1s' }}></div>
        <div className="shape-3d shape-pyramid top-42 left-1/2 animate-rotate3d opacity-13" style={{ animationDelay: '1.6s' }}></div>
        <div className="shape-3d shape-cube bottom-14 right-18 animate-floating3d opacity-18" style={{ animationDelay: '2.8s' }}></div>
        <div className="shape-3d shape-sphere top-68 right-1/4 animate-morphing opacity-12" style={{ animationDelay: '0.2s' }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white drop-shadow-2xl" style={{textShadow: '3px 3px 10px rgba(0,0,0,0.9)'}}>Client</span> <span className="text-yellow-300 drop-shadow-2xl" style={{textShadow: '3px 3px 10px rgba(0,0,0,0.9)'}}>Success Stories</span>
            </h1>
            <p className="text-xl text-white font-semibold max-w-3xl mx-auto" style={{textShadow: '2px 2px 6px rgba(0,0,0,0.8)'}}>
              Real results from real businesses who trusted us to scale their Amazon empire
            </p>
          </motion.div>
        </div>
      </section>

      {/* Additional Testimonials */}
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
              More <span className="gradient-text">Success Stories</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {additionalTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-2xl p-8 border border-purple-500/20 transform transition-all duration-500 hover:scale-105 hover:-translate-y-3 hover:rotate-1 hover:shadow-2xl hover:shadow-purple-500/30 hover:border-purple-400/80 group"
              >
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-lg text-gray-300 mb-6 group-hover:text-gray-100 transition-colors duration-300">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div>
                    <div className="font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm group-hover:text-gray-200 transition-colors duration-300">{testimonial.company}</div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-purple-500/20 group-hover:border-purple-400/60 transition-colors duration-300">
                  <div className="text-sm text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                    Results: <span className="text-purple-400 font-semibold group-hover:text-purple-300">{testimonial.result}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-10 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              By The <span className="gradient-text">Numbers</span>
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-primary-400 mb-2">98%</div>
                <div className="text-slate-300">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-400 mb-2">18%</div>
                <div className="text-slate-300">Avg. ACoS Reduction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-400 mb-2">340%</div>
                <div className="text-slate-300">Avg. Sales Growth</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-400 mb-2">95%</div>
                <div className="text-slate-300">Client Retention</div>
              </div>
            </div>
            
            <div className="mt-12">
              <p className="text-xl text-slate-300 mb-8">
                Ready to become our next success story?
              </p>
              <button className="bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-700 transition-all duration-300 hover:scale-105">
                Start Your Success Story
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
