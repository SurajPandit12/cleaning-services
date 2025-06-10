"use client"
import React, { useEffect, useRef } from "react";
import {
  Sparkles,
  ShieldCheck,
  SprayCan,
  Clock,
  PhoneCall,
  Star,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: SprayCan,
    title: "Deep Cleaning",
    description: "Thorough cleaning to keep your space spotless.",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: Clock,
    title: "Scheduled Cleaning",
    description: "Flexible plans for weekly or monthly cleaning.",
    color: "from-green-400 to-green-600",
  },
  {
    icon: ShieldCheck,
    title: "Sanitization",
    description: "Hospital-grade sanitization for safety and hygiene.",
    color: "from-purple-400 to-purple-600",
  },
];

const AboutUs = () => {
  const serviceRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      serviceRefs.current.forEach((ref) => {
        if (ref && ref.getBoundingClientRect().top < window.innerHeight - 100) {
          ref.classList.add("animated");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white text-gray-900 min-h-screen px-6 md:px-12 py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
          <span className="text-blue-600">Sparkling</span> Clean Homes, Happy
          Living
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Affordable, reliable, and professional cleaning services tailored to
          your needs.
        </p>
        <Link
          href="#contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition"
        >
          Get a Free Quote
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => (serviceRefs.current[index] = el)}
            className="animate-on-scroll rounded-2xl p-6 shadow-lg transition-all duration-700"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div
              className={`w-12 h-12 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-4`}
            >
              <service.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Why Choose Us?
        </h2>
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <div className="flex items-center gap-3">
            <Star className="text-yellow-500" /> 5-Star Rated Service
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-green-500" /> Trusted Professionals
          </div>
          <div className="flex items-center gap-3">
            <PhoneCall className="text-blue-500" /> 24/7 Support
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
