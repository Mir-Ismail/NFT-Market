import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const navigation = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Team",
      href: "/team",
    },
    {
      name: "Testimonials",
      href: "/testimonials",
    },
    {
      name: "Contact",
      href: "/contact",
    },
    {
      name: "Create Item",
      href: "/createitem",
    },
    {
      name: "Live Auction",
      href: "/discover/live-auction",
    },
  ];

  const toggleSubmenu = (name) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-md z-50 border-b border-purple-500/20 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="text-white font-bold text-2xl tracking-tight">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  NFTMarket
                </span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <div
                    onMouseEnter={() => setOpenSubmenu(item.name)}
                    onMouseLeave={() => setOpenSubmenu(null)}
                    className="flex items-center"
                  >
                    <Link
                      href={item.href}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                        location === item.href
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                          : "text-white hover:text-purple-300 hover:bg-purple-500/20"
                      }`}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <ChevronDown
                        className={`w-4 h-4 ml-1 text-purple-300 transition-transform duration-200 ${
                          openSubmenu === item.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </div>
                  {item.submenu && (
                    <motion.div
                      onMouseEnter={() => setOpenSubmenu(item.name)}
                      onMouseLeave={() => setOpenSubmenu(null)}
                      className={`absolute left-0 mt-2 w-48 rounded-xl shadow-lg bg-gray-900 border border-purple-500/20 ${
                        openSubmenu === item.name ? "block" : "hidden"
                      }`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: openSubmenu === item.name ? 1 : 0,
                        y: openSubmenu === item.name ? 0 : 10,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="py-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-white hover:bg-purple-500/20 hover:text-purple-300 transition-colors duration-200"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/connect">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 font-semibold transform hover:-translate-y-1">
                Connect Wallet
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-purple-300 focus:outline-none transition-colors duration-300"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900 border-t border-purple-500/20"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <div key={item.name}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={() => !item.submenu && setMobileMenuOpen(false)}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 w-full ${
                        location === item.href
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                          : "text-white hover:text-purple-300 hover:bg-purple-500/20"
                      }`}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <button
                        onClick={() => toggleSubmenu(item.name)}
                        className="p-2 text-purple-300"
                      >
                        <ChevronRight
                          className={`w-5 h-5 transition-transform ${
                            openSubmenu === item.name ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {item.submenu && openSubmenu === item.name && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="ml-4 mt-1 space-y-1"
                    >
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 py-2 rounded-md text-sm font-medium text-purple-200 hover:bg-purple-500/20 hover:text-white transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
              <Link href="/connect" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-2 rounded-lg mt-2 font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                  Connect Wallet
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
