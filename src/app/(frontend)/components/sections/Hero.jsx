"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { MapPin, Calendar, Phone, ChevronDown } from "lucide-react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    location: "",
    serviceType: "",
    date: "",
    phone: "",
  });

  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceOptions = [
    "Regular Apartment Cleaning",
    "Office & Commercial Cleaning",
    "Airbnb / Short Stay Cleaning",
    "End of Lease Cleaning",
    "Rubbish Removal & Extras",
    "General Inquiry",
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.location.trim()) {
      newErrors.location = "Location is required";
    }

    if (!formData.serviceType) {
      newErrors.serviceType = "Please select a service type";
    }

    if (!formData.date) {
      newErrors.date = "Date is required";
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        newErrors.date = "Please select a future date";
      }
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\+]?[\d\s\-\(\)]{10,}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const clearForm = () => {
    setFormData({
      location: "",
      serviceType: "",
      date: "",
      phone: "",
    });
    setErrors({});
    setDropdownOpen(null);
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const payload = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
      location: formData.location,
      serviceType: formData.serviceType,
      date: formData.date,
      phone: formData.phone,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (result.success) {
        alert("Form submitted successfully!");
        clearForm();
      } else {
        alert("Submission failed. Please try again.");
        console.error(result);
      }
    } catch (error) {
      alert("Error submitting the form.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-40 w-full max-w-7xl px-4">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-visible">
        <div className="p-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-6 items-end">
            {/* Location Input */}
            <div className="lg:col-span-1">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Your Location?"
                  value={formData.location}
                  onChange={(e) =>
                    handleInputChange("location", e.target.value)
                  }
                  className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-700 placeholder-gray-400 ${
                    errors.location ? "border-red-500" : "border-gray-200"
                  }`}
                />
              </div>
              {errors.location && (
                <p className="text-red-500 text-xs mt-1">{errors.location}</p>
              )}
            </div>

            {/* Service Type Dropdown */}
            <div className="lg:col-span-2 relative">
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
                  className={`w-full pl-4 pr-10 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-left bg-white flex items-center justify-between ${
                    errors.serviceType ? "border-red-500" : "border-gray-200"
                  }`}
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
              {errors.serviceType && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.serviceType}
                </p>
              )}
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
                  className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-700 ${
                    errors.date ? "border-red-500" : "border-gray-200"
                  }`}
                />
              </div>
              {errors.date && (
                <p className="text-red-500 text-xs mt-1">{errors.date}</p>
              )}
            </div>

            {/* Phone Input */}
            <div className="lg:col-span-1">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-700 placeholder-gray-400 ${
                    errors.phone ? "border-red-500" : "border-gray-200"
                  }`}
                />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="lg:col-span-1">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full font-bold py-3 px-6 rounded-xl shadow-lg transform transition-all duration-200 text-lg ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600 hover:scale-105 text-white"
                }`}
              >
                {isSubmitting ? "Submitting..." : "Order Now"}
              </button>
            </div>
          </div>

          {/* Mobile Submit Button */}
          <div className="md:hidden mt-4">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`w-full font-bold py-4 px-6 rounded-xl shadow-lg transform transition-all duration-200 text-lg ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 hover:scale-105 text-white"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Order Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
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
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-20 h-20 bg-white rounded-full blur-lg"></div>
            <div className="absolute top-40 right-20 w-16 h-16 bg-white rounded-full blur-lg"></div>
            <div className="absolute bottom-40 left-20 w-12 h-12 bg-white rounded-full blur-lg"></div>
          </div>

          <div className="container mx-auto px-6 lg:px-8 relative py-16 z-10">
            <div className="grid md:grid-cols-2 items-center justify-between min-h-screen py-16 lg:py-20">
              <div className="text-center lg:text-left mb-12 lg:mb-0 lg:pr-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8 font-montserrat drop-shadow-lg">
                  Professional Cleaning Backed by{" "}
                  <span className="text-yellow-300 relative inline-block font-montserrat">
                    10+ Years
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-yellow-400 rounded-full font-montserrat shadow-sm"></div>
                  </span>{" "}
                  of Excellence
                </h1>

                <p className="text-xl md:text-2xl font-dmsans text-white mb-10 leading-relaxed font-medium drop-shadow-md max-w-2xl mx-auto lg:mx-0">
                  Reliable, thorough cleaning services delivered by experienced
                  professionals who care about your space.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 font-poppins">
                  <Link
                    href="#contact"
                    className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-200 text-lg border-2 border-yellow-300"
                  >
                    Get Free Quote
                  </Link>
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

export default Hero;
