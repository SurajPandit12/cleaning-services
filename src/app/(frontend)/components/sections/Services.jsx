"use client";
import React, { useState } from "react";
import Link from "next/link";
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

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  details,
  index,
  href,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={href}>
      <div
        className="container group relative h-96 w-full cursor-pointer "
        style={{ perspective: "1000px" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Floating background elements */}
        <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

        <div className="relative h-full w-full transition-all duration-700 ease-out">
          <div className="absolute inset-0 bg-white rounded-2xl shadow-xl border border-gray-100/50 backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                backgroundSize: "24px 24px",
              }}
            ></div>
            <div className="relative h-full p-8 flex flex-col items-center justify-center text-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300 scale-110"></div>
                <div className="relative p-5 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300"></div>
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200"></div>
              </div>

              <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4 group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                {title}
              </h3>

              <p className="text-gray-600 text-base leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                {description}
              </p>
              <div className="flex items-center gap-2 text-base font-medium text-blue-600 opacity-60 group-hover:opacity-100 transition-all duration-300">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-blue-200 opacity-20 group-hover:opacity-60 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const CleaningServices = () => {
  const services = [
    {
      icon: Home,
      title: "Regular Apartment Cleaning",
      description:
        "Comprehensive cleaning for residential properties with flexible scheduling.",
      href: "/apartment-cleaning",
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
      href: "/office-commercial",
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
    {
      icon: Sparkles,
      title: "End of Lease Cleaning",
      description: "Deep cleaning service designed to get your full bond back.",
      href: "/end-lease",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
                href={service.href}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CleaningServices;
