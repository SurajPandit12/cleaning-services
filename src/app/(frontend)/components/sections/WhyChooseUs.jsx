"use client"
import React, { useEffect, useRef } from "react";
import {
  Award,
  ShieldCheck,
  DollarSign,
  Leaf,
  Clock,
  Heart,
  Sparkles,
  CheckCircle,
} from "lucide-react";

const WhyChooseUs = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const headerRef = useRef(null);

  const reasons = [
    {
      icon: Award,
      title: "10+ Years Experience",
      description:
        "Our experienced team brings over a decade of professional cleaning expertise to every home.",
      color: "from-blue-500 to-blue-600",
      delay: 0.1,
    },
    {
      icon: ShieldCheck,
      title: "Trained & Verified Staff",
      description:
        "All our cleaning professionals are thoroughly trained and police-verified for your peace of mind.",
      color: "from-green-500 to-green-600",
      delay: 0.2,
    },
    {
      icon: DollarSign,
      title: "Cost-Effective Methods",
      description:
        "Modern, efficient cleaning techniques that deliver exceptional results at competitive prices.",
      color: "from-purple-500 to-purple-600",
      delay: 0.3,
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Products",
      description:
        "Safe, environmentally responsible cleaning products that protect your family and our planet.",
      color: "from-emerald-500 to-emerald-600",
      delay: 0.4,
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description:
        "Convenient booking options that work around your busy lifestyle and schedule preferences.",
      color: "from-orange-500 to-orange-600",
      delay: 0.5,
    },
    {
      icon: Heart,
      title: "Personal Touch",
      description:
        "Local service with genuine care - we treat every home as if it were our own.",
      color: "from-rose-500 to-rose-600",
      delay: 0.6,
    },
  ];

  useEffect(() => {
    // Simple CSS animations since GSAP isn't available
    if (headerRef.current) {
      headerRef.current.style.opacity = "0";
      headerRef.current.style.transform = "translateY(-30px)";

      setTimeout(() => {
        headerRef.current.style.transition = "all 0.8s ease-out";
        headerRef.current.style.opacity = "1";
        headerRef.current.style.transform = "translateY(0)";
      }, 100);
    }

    cardsRef.current.forEach((card, index) => {
      if (card) {
        card.style.opacity = "0";
        card.style.transform = "translateY(50px) scale(0.9)";

        setTimeout(() => {
          card.style.transition = "all 0.6s ease-out";
          card.style.opacity = "1";
          card.style.transform = "translateY(0) scale(1)";
        }, 200 + index * 100);
      }
    });
  }, []);

  const handleCardHover = (e, isEntering) => {
    const card = e.currentTarget;
    if (isEntering) {
      card.style.transform = "translateY(-8px) scale(1.02)";
      card.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
    } else {
      card.style.transform = "translateY(0) scale(1)";
      card.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
    }
  };

  return (
    <div className="py-12 container bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-6">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Why Choose
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {" "}
              Our Service?
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Experience the difference with our professional apartment cleaning
            services. We combine expertise, reliability, and care to make your
            home sparkle.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 overflow-hidden"
                onMouseEnter={(e) => handleCardHover(e, true)}
                onMouseLeave={(e) => handleCardHover(e, false)}
                style={{ transitionProperty: "transform, box-shadow" }}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${reason.color} opacity-5 rounded-full transform translate-x-16 -translate-y-16 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${reason.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-slate-900 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                  {reason.description}
                </p>

                {/* Check mark */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Get Your Free Quote
            </button>
            <button className="px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl border-2 border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300">
              Learn More About Us
            </button>
          </div>
          <p className="text-sm text-slate-500 mt-4">
            Ready to experience the cleanest home of your life? Contact us
            today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
