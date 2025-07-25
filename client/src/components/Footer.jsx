import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold gradient-text mb-4">NFTMarket</h3>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Your trusted partner for viral marketing success. We help brands
              scale with proven content strategies and optimization techniques.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center">
                <span>hello@nftvibes.com</span>
              </div>
              <div className="flex items-center">
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <span>Los Angeles, CA</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link
                  href="/services"
                  className="hover:text-purple-400 hover:translate-x-1 transition-all duration-300 transform inline-block"
                >
                  Viral Content Creation
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-purple-400 hover:translate-x-1 transition-all duration-300 transform inline-block"
                >
                  Brand Amplification
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-purple-400 hover:translate-x-1 transition-all duration-300 transform inline-block"
                >
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-purple-400 hover:translate-x-1 transition-all duration-300 transform inline-block"
                >
                  Performance Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-6 text-white">Company</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link
                  href="/about"
                  className="hover:text-purple-400 hover:translate-x-1 transition-all duration-300 transform inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="hover:text-purple-400 hover:translate-x-1 transition-all duration-300 transform inline-block"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="hover:text-purple-400 hover:translate-x-1 transition-all duration-300 transform inline-block"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-purple-400 hover:translate-x-1 transition-all duration-300 transform inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-6 text-white">Support</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a
                  href="#"
                  className="hover:text-purple-400 hover:translate-x-1 transition-all duration-300 transform inline-block"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-purple-400 hover:translate-x-1 transition-all duration-300 transform inline-block"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-purple-400 hover:translate-x-1 transition-all duration-300 transform inline-block"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-purple-400 hover:translate-x-1 transition-all duration-300 transform inline-block"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Media Icons */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110 hover:rotate-6 group"
              >
                <Facebook className="w-4 h-4 group-hover:text-white transition-colors duration-300" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 transform hover:scale-110 hover:-rotate-6 group"
              >
                <Twitter className="w-4 h-4 group-hover:text-white transition-colors duration-300" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 transition-all duration-300 transform hover:scale-110 hover:rotate-3 group"
              >
                <Linkedin className="w-4 h-4 group-hover:text-white transition-colors duration-300" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-gradient-to-r hover:from-red-600 hover:to-red-800 transition-all duration-300 transform hover:scale-110 hover:-rotate-3 group"
              >
                <Youtube className="w-4 h-4 group-hover:text-white transition-colors duration-300" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-400">
              © 2025 NFTMarket. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
