"use client";

import { useEffect, useRef, useState } from "react";

import { Bath, ChefHat, ChevronLeft, ChevronRight, Home } from "lucide-react";
import Image from "next/image";

const images = ["/images/a.png", "/images/b.png", "/images/c.png"]; // Place these in /public

export default function RegularClean() {
  const [current, setCurrent] = useState(0);
  const circleRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
    script.onload = () => {
      // GSAP is now loaded
      if (window.gsap && circleRef.current) {
        window.gsap.set(circleRef.current, { rotation: 0 });
      }
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4500); // 4.5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Animate circle with 360 rotation when image changes
    if (window.gsap && circleRef.current && imageRef.current) {
      window.gsap.to(circleRef.current, {
        rotation: "+=360", // Full 360 degree rotation
        duration: 1,
        ease: "power2.inOut",
      });

      window.gsap.fromTo(
        imageRef.current,
        { scale: 0.8, opacity: 0.7 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "power2.out" }
      );
    }
  }, [current]);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrent(index);
  };

  return (
    <section className="container py-8 md:py-16 px-4">
      <div className="mb-6 md:mb-10">
        {/* <div className="mb-4 text-center">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs md:text-sm font-semibold px-3 md:px-4 py-2 rounded-full font-montserrat">
            🔆 Professional Cleaning Services
          </span>
        </div> */}
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center font-poppins px-4">
          Why Choose
          <span className="text-blue-600">Office & Commercial Cleaning?</span>
        </h2>

        <p className="text-gray-600 max-w-[1200px] text-center  mx-auto mb-8 md:mb-12 text-sm md:text-lg leading-relaxed font-dmsans px-4">
          Running a business is hard enough — let us handle the cleaning. At
          BestEverHospitality, we offer tailored cleaning solutions for offices,
          shops, clinics, showrooms, and other commercial spaces. Our
          professional cleaners work around your hours to minimise disruption
          and deliver a cleaner, safer environment for staff and clients alike.
          <br></br>We use eco-safe products, bring all necessary tools, and
          ensure consistent quality with every visit.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-start gap-8 lg:gap-16">
        {/* Image Section with Animation */}
        <div className="w-full flex flex-col justify-center items-center order-2 lg:order-1">
          <div className="flex flex-col items-start justify-start mb-6 lg:mb-0 lg:hidden">
            <div className="mb-4">
              <span className="inline-block bg-blue-100 text-blue-700 text-xs md:text-sm font-semibold px-3 md:px-4 py-2 rounded-full font-montserrat">
                🔆 Professional Cleaning Services
              </span>
            </div>
            <h2 className="text-xl md:text-3xl font-bold mb-4 font-poppins">
              What’s Included in{" "}
              <span className="text-[#2563EB]">
                Office & Commercial Cleaning?
              </span>
            </h2>

            <p className="text-gray-600 max-w-2xl mb-6 text-base md:text-lg leading-relaxed font-dmsans">
              We use eco-safe products, bring all necessary tools, and ensure
              consistent quality with every visit.
            </p>
          </div>
          <div className="hidden lg:flex flex-col items-start justify-start mb-8">
            <div className="mb-4">
              <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full font-montserrat">
                🔆 Professional Cleaning Services
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-4 font-poppins">
              What's Included in Every Regular Clean?
            </h2>

            <p className="text-gray-600 max-w-2xl mb-6 text-lg leading-relaxed font-dmsans">
              Our team brings all the supplies and follows safe, eco-friendly
              practices to give you spotless results without the stress.
            </p>
          </div>
          <div className="relative">
            {/* Animated Circle Border */}
            {/* <div 
              ref={circleRef}
              className="absolute inset-0 w-[620px] h-[320px] border-4 border-dashed border-blue-300 rounded-[50%] animate-pulse"
              style={{
                background: 'conic-gradient(from 0deg, transparent 0deg, rgba(59, 130, 246, 0.1) 120deg, transparent 240deg, rgba(59, 130, 246, 0.2) 360deg)'
              }}
            /> */}

            {/* Image Container - Responsive dimensions */}
            <div className="w-[280px] h-[240px] sm:w-[400px] sm:h-[320px] md:w-[500px] md:h-[400px] lg:w-[600px] lg:h-[500px] overflow-hidden rounded-[50%] relative z-10">
              <Image
                ref={imageRef}
                src={images[current]}
                alt={`Cleaning Image ${current + 1}`}
                width={600}
                height={300}
                className="transition-all duration-300 w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex flex-col items-center justify-center w-full gap-4  mt-6 md:mt-12 ">
            {/* Dots Indicator */}
            <div className="flex items-center justify-center  gap-2 md:gap-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-4 md:w-6 h-1 rounded-full transition-all duration-300 ${
                    index === current
                      ? "bg-blue-600 scale-125"
                      : " bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-20 ">
              <button
                onClick={prevImage}
                className="p-2 md:p-3 rounded-full bg-white shadow-lg hover:bg-blue-50 transition-colors duration-200 border border-gray-200"
              >
                <ChevronLeft className="w-3 h-3 md:w-4 md:h-4 text-blue-600" />
              </button>
              <button
                onClick={nextImage}
                className="p-2 md:p-3 rounded-full bg-white shadow-lg hover:bg-blue-50 transition-colors duration-200 border border-gray-200"
              >
                <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-blue-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="flex flex-wrap order-1 lg:order-2  mt-16">
          <div className="w-full md:w-1/2 px-2 md:px-4 mb-8 md:mb-0">
            <div className="mb-4">
              <Image
                src="/images/Ellipse1.png"
                width={600}
                height={100}
                alt="Ellipse"
                className="mx-auto max-w-full h-auto"
              />
            </div>
            <div className="flex items-center justify-center gap-3 mb-4 relative">
              <span className="absolute -top-12 md:-top-16 bg-white w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-sm">
                <Home className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
              </span>
              <h3 className="font-semibold text-base md:text-lg font-poppins text-center">
                Workspaces
              </h3>
            </div>
            <ul className="list-disc list-inside text-gray-600 text-sm mt-3 space-y-2 text-left font-dmsans pl-4 md:pl-6">
              <li>Dust desks, shelves & electronics</li>
              <li>Wipe light switches & door handles</li>
              <li>Empty bins & replace liners</li>
              {/* <li>Empty bins and replace liners</li> */}
            </ul>
          </div>
          <div className="w-full md:w-1/2 px-2 md:px-4 mb-8 md:mb-0">
            <div className="mb-4">
              <Image
                src="/images/Ellipse2.png"
                width={600}
                height={100}
                alt="Ellipse"
                className="mx-auto max-w-full h-auto"
              />
            </div>
            <div className="flex items-center justify-center gap-3 mb-4 relative">
              <span className="absolute -top-12 md:-top-16 bg-white w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-sm">
                <ChefHat className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
              </span>
              <h3 className="font-semibold text-base md:text-lg font-poppins text-center">
                Common Areas
              </h3>
            </div>
            <ul className="list-disc list-inside text-gray-600 text-sm mt-3 space-y-2 text-left font-dmsans pl-4 md:pl-6">
              <li>Vacuum carpets & mop floors</li>
              <li>Clean windows (interior) & glass partitions</li>
              <li>Wipe down high-touch surfaces</li>
              {/* <li>Mop floors and take out trash</li> */}
            </ul>
          </div>

          <div className="w-full flex justify-center mt-4 md:mt-8">
            <div className="px-2 md:px-4">
              <div className="mb-4">
                <Image
                  src="/images/Ellipse3.png"
                  width={400}
                  height={100}
                  alt="Ellipse"
                  className="mx-auto max-w-full h-auto"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-3 mb-4 relative">
                <span className="absolute -top-12 md:-top-16 bg-white w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-sm">
                  <Bath className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                </span>
                <h3 className="font-semibold text-base md:text-lg font-poppins text-center">
                  Kitchen & Restrooms
                </h3>
              </div>
              <div className="flex flex-col justify-center items-center">
                <ul className="list-disc list-inside text-gray-600 text-sm mt-3 space-y-2 text-left font-dmsans">
                  <li>Clean benches & appliances</li>
                  <li>Scrub toilets, sinks & taps</li>
                  <li>Restock consumables (if supplied)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
