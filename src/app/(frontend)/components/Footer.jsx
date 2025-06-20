"use client";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Star,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Award,
  Shield,
  Sparkles,
  Heart,
  ArrowUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const services = [
    "Apartment Deep Cleaning",
    "Regular House Cleaning",
    "Office and Commercial Cleaning",
    "End of Lease Cleaning",
    "Office Cleaning",
    "Window Cleaning",
  ];

  const quickLinks = [
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Our Services" },
    { href: "#whychooseus", label: "Whychoose Us" },
    { href: "#", label: "Pricing" },
    { href: "#contact", label: "Contact" },
    // { href: "#careers", label: "Careers" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "#",
      color: "hover:text-blue-600",
      bg: "hover:bg-blue-50",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/bestever.cleaning/",
      color: "hover:text-pink-600",
      bg: "hover:bg-pink-50",
    },
    // {
    //   icon: Twitter,
    //   href: "#",
    //   color: "hover:text-blue-400",
    //   bg: "hover:bg-blue-50",
    // },
    // {
    //   icon: Linkedin,
    //   href: "#",
    //   color: "hover:text-blue-700",
    //   bg: "hover:bg-blue-50",
    // },
  ];

  return (
    <>
      <footer className=" container relative bg-gradient-to-br from-gray-50 via-blue-50/30 to-teal-50/30 border-t border-blue-100/50">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-teal-500 to-blue-600"></div>
        <div className="max-w-7xl mx-auto pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            <div className="lg:col-span-1 space-y-6">
              <div className="flex  space-x-4 group">
                <div className="relative ">
                  {" "}
              
                  <div className="absolute -inset-3 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-all duration-700 "></div>
                  {/* Image container */}
                  <div className="rounded-xl overflow-hidden border-2 border-transparent group-hover:scale-105 transition-all duration-500 h-full">
                    <div className="w-full h-full bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                      <Image
                        src="/images/best.png"
                        alt="Best Ever Logo"
                        width={380}
                        height={80}
                        className="object-contain w-full h-full max-w-full max-h-full mix-blend-multiply opacity-90 hover:opacity-100 transition-opacity rounded-xl"
                      />
                    </div>
                  </div>
                  {/* Star badge - optional */}
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <Star className="w-2 h-2 text-white" />
                  </div>
                </div>
                {/* <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-teal-600 bg-clip-text text-transparent font-poppins">
                    Best Ever
                  </h3>
                  <p className="text-sm text-gray-600 font-medium font-dmsans">
                    Cleaning Services & Hospitality
                  </p>
                </div> */}
              </div>

              <p className="text-gray-600 leading-relaxed font-dmsans">
                Transform your living space with our premium apartment cleaning
                services. We bring sparkle and freshness to every corner of your
                home.
              </p>
              <div className="flex items-center space-x-4 font-dmsans">
                <div className="flex items-center space-x-2 text-sm text-gray-600 bg-white/60 px-3 py-2 rounded-full border border-gray-200">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span>Insured</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 bg-white/60 px-3 py-2 rounded-full border border-gray-200">
                  <Award className="w-4 h-4 text-yellow-600" />
                  <span>Licensed</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-bold text-gray-800 flex items-center space-x-2 font-poppins">
                <Sparkles className="w-5 h-5 text-blue-600" />
                <span>Our Services</span>
              </h4>
              <ul className="space-y-3 font-dmsans">
                {services.map((service, index) => (
                  <li key={index} className="group">
                    <Link
                      href="#services"
                      className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-all duration-300 hover:translate-x-1"
                    >
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full transition-all duration-300 group-hover:w-2 group-hover:h-2"></div>
                      <span className="text-sm">{service}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-bold text-gray-800 font-poppins">
                Quick Links
              </h4>
              <ul className="space-y-3 font-dmsans">
                {quickLinks.map((link, index) => (
                  <li key={index} className="group">
                    <Link
                      href={link.href}
                      className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-all duration-300 hover:translate-x-1"
                    >
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full transition-all duration-300 group-hover:w-2 group-hover:h-2"></div>
                      <span className="text-sm">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-bold text-gray-800 font-poppins">
                Get In Touch
              </h4>

              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-300">
                    <MapPin className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="font-dmsans">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      8 Prince Street Clayton,
                      <br />
                      Melbourne, 3168 Victoria, Australia
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 group">
                  <div className="p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors duration-300">
                    <Phone className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="font-dmsans">
                    <Link
                      href="tel:+61428757972"
                      className="text-sm text-gray-600 hover:text-green-600 transition-colors duration-300"
                    >
                      +61428757972
                    </Link>
                  </div>
                </div>

                <div className="flex items-center space-x-3 group">
                  <div className="p-2 bg-teal-100 rounded-lg group-hover:bg-teal-200 transition-colors duration-300">
                    <Mail className="w-4 h-4 text-teal-600" />
                  </div>
                  <div>
                    <Link
                      href="mailto:asok123123@gmail.com"
                      className="text-sm text-gray-600 hover:text-teal-600 transition-colors duration-300 font-dmsans"
                    >
                      asok123123@gmail.com
                    </Link>
                  </div>
                </div>
                {/* <div className="flex items-start space-x-3 group">
                  <div className="p-2 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors duration-300">
                    <Clock className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="font-dmsans">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Mon - Sat: 8:00 AM - 8:00 PM
                      <br />
                      Sunday: 10:00 AM - 6:00 PM
                    </p>
                  </div>
                </div> */}
              </div>
              <div className="pt-2">
                <h5 className="text-sm font-semibold text-gray-700 mb-3 font-dmsans">
                  Follow Us
                </h5>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      className={`p-3 bg-white rounded-xl shadow-md border border-gray-200 text-gray-500 ${social.color} ${social.bg} transition-all duration-300 hover:shadow-lg hover:scale-110 hover:-translate-y-1`}
                    >
                      <social.icon className="w-5 h-5" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 via-blue-700 to-blue-600 opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-bold mb-2 flex items-center justify-center space-x-2 font-poppins">
                  <Heart className="w-6 h-6 text-pink-200" />
                  <span>Stay Fresh & Clean</span>
                </h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto font-dmsans">
                  Subscribe to our newsletter for cleaning tips, special offers,
                  and schedule reminders.
                </p>
                {/* <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 hover:shadow-lg">
                    Subscribe
                  </button>
                </div> */}
              </div>
              <div className="absolute top-4 right-4 opacity-20">
                <Sparkles className="w-8 h-8" />
              </div>
              <div className="absolute bottom-4 left-4 opacity-20">
                <Star className="w-6 h-6" />
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-600">
                <p>
                  &copy; {new Date().getFullYear()} CleanLiving. All rights
                  reserved.
                </p>
                <div className="flex space-x-6 font-dmsans">
                  <Link
                    href="#privacy"
                    className="hover:text-blue-600 transition-colors duration-300"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="#terms"
                    className="hover:text-blue-600 transition-colors duration-300"
                  >
                    Terms of Service
                  </Link>
                  <Link
                    href="#sitemap"
                    className="hover:text-blue-600 transition-colors duration-300"
                  >
                    Sitemap
                  </Link>
                </div>
              </div>
              <div className="text-sm text-gray-600 flex items-center space-x-2 font-dmsans">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>for clean homes</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-teal-500 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 z-50 group"
        >
          <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1" />
        </button>
      )}
    </>
  );
}
