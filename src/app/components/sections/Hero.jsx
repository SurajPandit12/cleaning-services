"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { MapPin, Calendar, Phone, ChevronDown } from "lucide-react";

// BookingForm Component
const BookingForm = () => {
  const [formData, setFormData] = useState({
    location: "",
    serviceType: "",
    date: "",
    phone: "",
  });

  const [dropdownOpen, setDropdownOpen] = useState(null);

  const serviceOptions = [
    "Residential Cleaning",
    "Office Cleaning",
    "Deep Cleaning",
    "Move-in/Move-out",
    "Post-Construction",
    "Carpet Cleaning",
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-50 w-full max-w-5xl px-4">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-visible">
        <div className="p-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 items-end">
            {/* Location Input */}
            <div className="lg:col-span-1">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Where are you from?"
                  value={formData.location}
                  onChange={(e) =>
                    handleInputChange("location", e.target.value)
                  }
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-700 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Service Type Dropdown */}
            <div className="lg:col-span-1 relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Service Type
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() =>
                    setDropdownOpen(
                      dropdownOpen === "service" ? null : "service"
                    )
                  }
                  className="w-full pl-4 pr-10 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-left bg-white flex items-center justify-between"
                >
                  <span
                    className={
                      formData.serviceType ? "text-gray-700" : "text-gray-400"
                    }
                  >
                    {formData.serviceType || "Choose Service"}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      dropdownOpen === "service" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {dropdownOpen === "service" && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-48 overflow-y-auto">
                    {serviceOptions.map((option, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => {
                          handleInputChange("serviceType", option);
                          setDropdownOpen(null);
                        }}
                        className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors text-gray-700 border-b border-gray-100 last:border-b-0"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Date Input */}
            <div className="lg:col-span-1">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange("date", e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-700"
                />
              </div>
            </div>

            {/* Phone Number Input */}
            <div className="lg:col-span-1">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="tel"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-700 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="lg:col-span-1">
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200 text-lg"
              >
                Order Now
              </button>
            </div>
          </div>

          {/* Mobile Layout Adjustments */}
          <div className="md:hidden mt-4">
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200 text-lg"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CleaningHero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    // Simple fade-in animation for the entire hero section
    if (heroRef.current) {
      heroRef.current.style.opacity = "0";
      setTimeout(() => {
        heroRef.current.style.transition = "opacity 0.6s ease-out";
        heroRef.current.style.opacity = "1";
      }, 100);
    }
  }, []);

  return (
    <>
      <div
        ref={heroRef}
        className="bg-gradient-to-br from-[#3B82F6] via-[#54AADE] to-[#1E40AF] relative overflow-visible "
      >
        <div className="overflow-hidden">
          {/* Background Elements - More subtle */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-20 h-20 bg-white rounded-full blur-lg"></div>
            <div className="absolute top-40 right-20 w-16 h-16 bg-white rounded-full blur-lg"></div>
            <div className="absolute bottom-40 left-20 w-12 h-12 bg-white rounded-full blur-lg"></div>
          </div>

          {/* Content Container */}
          <div className="container mx-auto px-6 lg:px-8 relative py-16 z-10">
            <div className="grid md:grid-cols-2 items-center justify-between min-h-screen py-16 lg:py-20">
              {/* Left Content Section */}
              <div className="text-center lg:text-left mb-12 lg:mb-0 lg:pr-8">
                {/* Main Heading with Better Contrast */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8 font-montserrat drop-shadow-lg">
                  Professional Cleaning Backed by{" "}
                  <span className="text-yellow-300 relative inline-block font-montserrat">
                    10+ Years
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-yellow-400 rounded-full font-montserrat shadow-sm"></div>
                  </span>{" "}
                  of Excellence
                </h1>

                {/* Subtitle with Enhanced Readability */}
                <p className="text-xl md:text-2xl font-dmsans text-white mb-10 leading-relaxed font-medium drop-shadow-md max-w-2xl mx-auto lg:mx-0">
                  Reliable, thorough cleaning services delivered by experienced
                  professionals who care about your space.
                </p>

                {/* Call-to-Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 font-poppins">
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-200 text-lg border-2 border-yellow-300">
                    Get Free Quote
                  </button>
                  <Link
                    href="#services"
                    className="bg-white/15 backdrop-blur-md hover:bg-white/25 text-white border-2 border-white/40 hover:border-white/60 font-semibold py-4 px-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200 text-lg text-center"
                  >
                    View Services
                  </Link>
                </div>

                {/* Trust Indicators with Better Visibility */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-8 text-white font-dmsans">
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg">
                    <div className="text-3xl font-bold text-yellow-300 mb-1">
                      500+
                    </div>
                    <div className="text-sm ">Happy Customers</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg">
                    <div className="text-3xl font-bold text-yellow-300 mb-1">
                      10+
                    </div>
                    <div className="text-sm ">Years Experience</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg">
                    <div className="text-3xl font-bold text-yellow-300 mb-1">
                      24/7
                    </div>
                    <div className="text-sm">Available</div>
                  </div>
                </div>
              </div>

              {/* Right Image Section */}
              <div className="hidden lg:flex">
                <div className=" ">
                  {/* Main Image Container */}
                  <div className="relative bg-white/15 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-white/20">
                    <div className="relative overflow-hidden rounded-2xl bg-white/10">
                      {/* Fallback Image */}
                      <div className="">
                        <Image
                          width={800}
                          height={500}
                          alt="Professional Cleaning Service"
                          src="/images/hero.jpg"
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                    </div>

                    {/* Rating Card - Better positioned */}
                    <div className="absolute -right-3 -bottom-3 bg-white rounded-xl p-5 shadow-xl border hidden lg:block border-gray-100">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-800 mb-2">
                          4.9
                        </div>
                        <div className="flex justify-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-4 h-4 text-yellow-400 fill-current"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <div className="text-xs text-gray-600 font-medium">
                          Trusted Rating
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtle Background Decorations */}
                <div className="absolute top-10 -right-8 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>

          {/* Bottom Wave Transition */}
          <div className="absolute bottom-0 left-0 right-0 z-10">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full h-12 md:h-16 fill-white"
            >
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
            </svg>
          </div>

          {/* Booking Form - Positioned to span across hero boundary */}
          <BookingForm />
        </div>
      </div>
      {/* Add spacing below hero to accommodate the form */}
      <div className="h-32 bg-white"></div>
    </>
  );
};

export default CleaningHero;
