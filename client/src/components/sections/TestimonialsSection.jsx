import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "AmazonPro transformed our struggling supplement brand into a $2M/year business. Their PPC optimization reduced our ACoS by 35% while tripling our sales.",
      name: "Michael Rodriguez",
      company: "NutriVital Supplements",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      result: "340% Sales Growth"
    },
    {
      quote: "Working with AmazonPro was the best investment we made. They helped us launch in 3 new markets and our monthly revenue went from $50K to $180K.",
      name: "Jennifer Kim",
      company: "EcoHome Solutions",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      result: "260% Revenue Increase"
    },
    {
      quote: "The team's expertise in Amazon DSP advertising opened up a completely new customer acquisition channel for us. ROI increased by 180%.",
      name: "David Thompson",
      company: "TechGear Pro",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      result: "180% ROI Increase"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-10 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Client <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Real results from real businesses who trusted us to scale their Amazon empire
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-primary-500 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <blockquote className="text-lg text-slate-300 mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-slate-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-700">
                <div className="text-sm text-slate-400">
                  Results: <span className="text-green-400 font-semibold">{testimonial.result}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Carousel Navigation */}
        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeTestimonial
                    ? 'bg-primary-600'
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
