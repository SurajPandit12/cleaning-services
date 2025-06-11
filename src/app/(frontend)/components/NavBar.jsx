"use client";

import { Mail, Menu, Phone, X, Sparkles, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // Only add event listener on client side
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#whychooseus", label: "Why Choose Us" },
    { href: "#testimonials", label: "Reviews" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100"
            : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div
          className={`transition-all duration-500 overflow-hidden ${
            scrolled
              ? "max-h-0 opacity-0 py-0 pointer-events-none"
              : "max-h-20 opacity-100 py-2"
          } bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-4 text-center text-sm font-medium`}
        >
          <div className="flex items-center justify-center space-x-6">
            <div className="flex items-center space-x-2 font-dmsans">
              <Phone className="w-3 h-3" />
              <span>Call Now: +61428757972</span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <Sparkles className="w-3 h-3" />
              <span>✨ 20% OFF First Clean - Limited Time!</span>
            </div>
          </div>
        </div>

        <nav className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-20">
            <Link
              href="/"
              className="flex items-center space-x-4 group relative"
            >
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-all duration-700"></div>
                <div className="relative w-14 h-14 rounded-xl overflow-hidden border-2 border-transparent bg-gradient-to-br from-blue-500 via-purple-500 to-teal-500 p-0.5 group-hover:scale-105 transition-all duration-500">
                  <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                    <Image
                      width={50}
                      height={50}
                      alt="logo"
                      src="/images/logo.jpg"
                    />
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Star className="w-2 h-2 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500">
                  Best Ever
                </span>
                <span className="text-xs font-semibold text-gray-500 hidden sm:block group-hover:text-blue-500 transition-colors duration-300">
                  Cleaning Services & Hospitality
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center font-dmsans space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-5 py-3 text-gray-700 hover:text-gray-900 font-medium text-sm transition-all group"
                >
                  <span className="relative z-10">
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-500 group-hover:w-full"></span>
                  </span>
                  <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 group-hover:from-blue-500/40 group-hover:to-blue-500/40 transition-all duration-500"></span>
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4 font-poppins">
              <Link
                href="#contact"
                className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:shadow-md transition-all duration-300 hover:scale-[1.03] relative overflow-hidden group"
              >
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {isOpen && (
          <div className="lg:hidden bg-white shadow-xl border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-4 border-t border-gray-100 mt-4">
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                >
                  <Phone className="w-4 h-4" />
                  <span>Get Free Quote</span>
                </Link>

                <div className="flex flex-col items-center space-y-2 mt-4 text-sm">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Phone className="w-4 h-4 text-blue-500" />
                    <span className="font-medium">+61428757972</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Mail className="w-4 h-4 text-purple-500" />
                    <span className="font-medium">
                      asok123123@gmail.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
