import React from "react";
import "./Services.css"; // ✅ Make sure this path is correct relative to your project
import { Home, Building2, Bed, Sparkles, Trash2 } from "lucide-react";

const ServiceCard = ({ icon: Icon, title, description, details }) => {
  return (
    <div className="group relative h-80 w-full cursor-pointer perspective-1000">
      <div className="relative h-full w-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
        {/* Front of card */}
        <div className="absolute inset-0 backface-hidden bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex flex-col items-center justify-center text-center">
          <div className="p-4 bg-blue-50 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
          <div className="mt-6 text-xs text-gray-400 opacity-60">
            Hover for details →
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl shadow-lg p-6 flex flex-col text-white">
          <div className="flex items-center mb-4">
            <Icon className="w-6 h-6 mr-3" />
            <h4 className="text-lg font-semibold">{title}</h4>
          </div>

          <div className="flex-1">
            <h5 className="text-sm font-medium mb-3 opacity-90">
              What's Included:
            </h5>
            <ul className="space-y-2 mb-4">
              {details.included.map((item, index) => (
                <li key={index} className="flex items-start text-sm">
                  <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {details.features && (
              <div className="mb-4">
                <h5 className="text-sm font-medium mb-2 opacity-90">
                  Key Features:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {details.features.map((feature, index) => (
                    <span
                      key={index}
                      className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {details.guarantee && (
            <div className="mt-auto p-3 bg-white bg-opacity-10 rounded-lg">
              <p className="text-xs font-medium">{details.guarantee}</p>
            </div>
          )}
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
    {
      icon: Bed,
      title: "Airbnb / Short Stay Cleaning",
      description:
        "Quick turnaround cleaning for exceptional guest experiences.",
      details: {
        included: [
          "Complete linen change and washing",
          "Full property sanitization",
          "Amenity restocking",
          "Property staging for photos",
          "Quality assurance check",
        ],
        features: ["Same-day", "Next-day", "Fast turnaround"],
        guarantee: "Guest-ready guarantee every time",
      },
    },
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
    {
      icon: Trash2,
      title: "Rubbish Removal & Extras",
      description:
        "Additional services and waste management for complete maintenance.",
      details: {
        included: [
          "Bin rotation and waste removal",
          "Window washing service",
          "Oven deep cleaning",
          "Carpet spot cleaning",
          "Custom cleaning requests",
        ],
        features: ["On-demand", "Custom jobs", "Add-on service"],
        guarantee: "Flexible solutions for every need",
      },
    },
  ];

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional cleaning solutions tailored to your specific needs with
            guaranteed satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              details={service.details}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CleaningServices;
