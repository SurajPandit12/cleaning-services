"use client"

import Link from "next/link";
import React, { useEffect, useRef } from "react";

const CleaningHero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const bodyRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const animateElements = () => {
      if (titleRef.current) {
        titleRef.current.style.opacity = "0";
        titleRef.current.style.transform = "translateY(30px)";
        setTimeout(() => {
          titleRef.current.style.transition = "all 0.8s ease-out";
          titleRef.current.style.opacity = "1";
          titleRef.current.style.transform = "translateY(0)";
        }, 200);
      }

      if (bodyRef.current) {
        bodyRef.current.style.opacity = "0";
        bodyRef.current.style.transform = "translateY(30px)";
        setTimeout(() => {
          bodyRef.current.style.transition = "all 0.8s ease-out";
          bodyRef.current.style.opacity = "1";
          bodyRef.current.style.transform = "translateY(0)";
        }, 400);
      }

      if (buttonsRef.current) {
        buttonsRef.current.style.opacity = "0";
        buttonsRef.current.style.transform = "translateY(30px)";
        setTimeout(() => {
          buttonsRef.current.style.transition = "all 0.8s ease-out";
          buttonsRef.current.style.opacity = "1";
          buttonsRef.current.style.transform = "translateY(0)";
        }, 600);
      }

      if (imageRef.current) {
        imageRef.current.style.opacity = "0";
        imageRef.current.style.transform = "translateX(50px)";
        setTimeout(() => {
          imageRef.current.style.transition = "all 1s ease-out";
          imageRef.current.style.opacity = "1";
          imageRef.current.style.transform = "translateX(0)";
        }, 300);
      }

      if (statsRef.current) {
        statsRef.current.style.opacity = "0";
        statsRef.current.style.transform = "translateY(20px)";
        setTimeout(() => {
          statsRef.current.style.transition = "all 0.8s ease-out";
          statsRef.current.style.opacity = "1";
          statsRef.current.style.transform = "translateY(0)";
        }, 800);
      }
    };

    animateElements();
  }, []);

  return (
    <div
      ref={heroRef}
      className=" bg-gradient-to-b from-[#54AADE] to-[#DCEEF9] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white rounded-full blur-sm"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white rounded-full blur-sm"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-white rounded-full blur-sm"></div>
      </div>

      <div className="container px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-12">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Professional Cleaning Backed by{" "}
              <span className="text-green-600 relative">
                10+ Years
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-green-400 rounded-full"></div>
              </span>{" "}
              of Experience
            </h1>

            <p
              ref={bodyRef}
              className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed font-light"
            >
              Smart, Reliable Cleaning by Experienced Professionals.
            </p>

            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 text-lg">
                Get a Quote
              </button>
              <Link href="#services" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/30 font-semibold py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 text-lg">
                Our Services
              </Link>
            </div>

            {/* Trust Indicators */}
            <div
              ref={statsRef}
              className="flex flex-wrap justify-center lg:justify-start gap-6 mt-12 text-white/80"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm">Support</div>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="lg:w-1/2 relative">
            <div ref={imageRef} className="relative z-10">
              {/* Professional Cleaning Lady */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <img
                  src="/images/herogirl.png"
                  alt="Professional Cleaning Service"
                  className="w-full h-auto max-w-md mx-auto rounded-2xl object-cover"
                  onError={(e) => {
                    // Fallback placeholder if image doesn't load
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                {/* Fallback placeholder */}
                <div className="hidden w-full h-96 bg-white/20 rounded-2xl items-center justify-center flex-col text-white">
                  <div className="w-20 h-20 bg-white/30 rounded-full mb-4 flex items-center justify-center">
                    <svg
                      className="w-10 h-10"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-center">Professional Cleaning Service</p>
                </div>

                {/* Floating Stats Card */}
                <div className="absolute -right-4 -bottom-4 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-800 mb-1">
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
                    <div className="text-sm text-gray-600">Customer Rating</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-green-400/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 fill-white"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default CleaningHero;
