"use client"
import React, { useState } from "react";
import {
  Home,
  Building2,
  Bed,
  Sparkles,
  Trash2,
  ArrowRight,
  CheckCircle,
  Star,
} from "lucide-react";

const ServiceCard = ({ icon: Icon, title, description, details, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="container group relative h-96 w-full cursor-pointer "
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Floating background elements */}
      <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

      <div
        className="relative h-full w-full transition-all duration-700 ease-out"
        style={{
          transformStyle: "preserve-3d",
          transform: isHovered ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front of card */}
        <div
          className="absolute inset-0 bg-white rounded-2xl shadow-xl border border-gray-100/50 backdrop-blur-sm overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Subtle pattern overlay */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          ></div>

          <div className="relative h-full p-8 flex flex-col items-center justify-center text-center">
            {/* Icon with enhanced styling */}
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300 scale-110"></div>
              <div className="relative p-5 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6">
                <Icon className="w-8 h-8 text-white" />
              </div>

              {/* Floating particles */}
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300"></div>
              <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200"></div>
            </div>

            <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4 group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
              {title}
            </h3>

            <p className="text-gray-600 text-base leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
              {description}
            </p>

            {/* Enhanced hover indicator */}
            <div className="flex items-center gap-2 text-sm font-medium text-blue-600 opacity-60 group-hover:opacity-100 transition-all duration-300">
              <span>Discover details</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>

            {/* Corner accent */}
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-blue-200 opacity-20 group-hover:opacity-60 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className="absolute inset-0 rounded-2xl shadow-2xl overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          }}
        >
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `conic-gradient(from 0deg, transparent, rgba(255,255,255,0.1), transparent)`,
                animation: "spin 20s linear infinite",
              }}
            ></div>
          </div>

          <div className="relative h-full p-8 flex flex-col text-white">
            {/* Header with icon */}
            <div className="flex items-center mb-6 pb-4 border-b border-white/20">
              <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm mr-4">
                <Icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold">{title}</h4>
            </div>

            <div className="flex-1 space-y-6">
              {/* What's Included */}
              <div>
                <h5 className="text-lg font-semibold mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-300" />
                  What's Included:
                </h5>
                <ul className="space-y-3">
                  {details.included.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-sm leading-relaxed"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full mt-2 mr-3 flex-shrink-0 shadow-sm"></div>
                      <span className="text-gray-100">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Features */}
              {details.features && (
                <div>
                  {/* <h5 className="text-lg font-semibold mb-3 flex items-center">
                    <Star className="w-5 h-5 mr-2 text-yellow-300" />
                    Key Features:
                  </h5> */}
                  <div className="flex flex-wrap gap-2">
                    {details.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-sm bg-white/15 backdrop-blur-sm px-3 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-200 font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {details.guarantee && (
              <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mr-2">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold text-sm">Our Promise</span>
                </div>
                <p className="text-sm text-gray-100 leading-relaxed">
                  {details.guarantee}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const CleaningServices = () => {
  const services = [
    {
      icon: Home,
      title: "Regular Apartment Cleaning",
      description:
        "Comprehensive cleaning for residential properties with flexible scheduling.",
      details: {
        included: [
          "Complete dusting of all surfaces",
          "Vacuuming carpets and mopping floors",
          "Kitchen deep clean including appliances",
          "Bathroom sanitization and deep clean",
          "Trash removal and bin cleaning",
        ],
        features: ["Weekly", "Bi-weekly", "Monthly"],
        guarantee: "Perfect for property managers & tenants",
      },
    },
    {
      icon: Building2,
      title: "Office & Commercial Cleaning",
      description:
        "Professional cleaning services for pristine work environments.",
      details: {
        included: [
          "Desk and workstation cleaning",
          "Floor maintenance and mopping",
          "Window cleaning (interior)",
          "Restroom deep cleaning",
          "Common area maintenance",
        ],
        features: ["After-hours", "Low-disruption", "Scheduled"],
        guarantee: "Maintaining professional standards daily",
      },
    },
    // {
    //   icon: Bed,
    //   title: "Airbnb / Short Stay Cleaning",
    //   description:
    //     "Quick turnaround cleaning for exceptional guest experiences.",
    //   details: {
    //     included: [
    //       "Complete linen change and washing",
    //       "Full property sanitization",
    //       "Amenity restocking",
    //       "Property staging for photos",
    //       "Quality assurance check",
    //     ],
    //     features: ["Same-day", "Next-day", "Fast turnaround"],
    //     guarantee: "Guest-ready guarantee every time",
    //   },
    // },
    {
      icon: Sparkles,
      title: "End of Lease Cleaning",
      description: "Deep cleaning service designed to get your full bond back.",
      details: {
        included: [
          "Full property deep clean",
          "REA checklist compliance",
          "Oven and appliance cleaning",
          "Window cleaning (inside & out)",
          "Carpet steam cleaning",
        ],
        features: ["Bond-back", "REA-compliant", "Checklist-based"],
        guarantee: "100% satisfaction guarantee or we return",
      },
    },
    // {
    //   icon: Trash2,
    //   title: "Rubbish Removal & Extras",
    //   description:
    //     "Additional services and waste management for complete maintenance.",
    //   details: {
    //     included: [
    //       "Bin rotation and waste removal",
    //       "Window washing service",
    //       "Oven deep cleaning",
    //       "Carpet spot cleaning",
    //       "Custom cleaning requests",
    //     ],
    //     features: ["On-demand", "Custom jobs", "Add-on service"],
    //     guarantee: "Flexible solutions for every need",
    //   },
    // },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-300/10 to-purple-300/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative py-16">
        {/* Enhanced header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Professional Cleaning Services
          </div>

          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
            Our Premium Services
          </h2>

          <p className="text-xl text-gray-600 px-6 leading-relaxed">
            Professional cleaning solutions tailored to your specific needs with
            guaranteed satisfaction and exceptional attention to detail.
          </p>

          {/* Decorative line */}
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="transform hover:scale-105 transition-transform duration-300"
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                details={service.details}
                index={index}
              />
            </div>
          ))}
        </div>

        {/* <div className="text-center">
          <div
            className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <span className="font-semibold">Ready to get started?</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div> */}
      </div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default CleaningServices;
