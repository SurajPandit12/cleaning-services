"use client"
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const services = [
    "Regular Apartment Cleaning",
    "Office & Commercial Cleaning",
    "Airbnb / Short Stay Cleaning",
    "End of Lease Cleaning",
    "Rubbish Removal & Extras",
    "General Inquiry",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      }, 3000);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white ">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <div className="text-center bg-green-50 border border-green-200 rounded-xl p-8">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-green-800 mb-2">
                Thank You!
              </h3>
              <p className="text-green-700 mb-4">
                We've received your inquiry and will get back to you within 24
                hours.
              </p>
              <p className="text-sm text-green-600">
                Redirecting back to form...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="container py-12">
        <div className="">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600">
              Ready to book a service or have questions? We'd love to hear from
              you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-blue-50 rounded-xl p-6 h-full">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Contact Information
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="p-2 bg-blue-100 rounded-lg mr-4 flex-shrink-0">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">+61 XXX XXX XXX</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-2 bg-blue-100 rounded-lg mr-4 flex-shrink-0">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">info@cleaningservice.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-2 bg-blue-100 rounded-lg mr-4 flex-shrink-0">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Service Areas</p>
                      <p className="text-gray-600">Sydney Metro Area</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-white rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Quick Response
                  </h4>
                  <p className="text-sm text-gray-600">
                    We typically respond to all inquiries within 2-4 hours
                    during business hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us about your cleaning needs, property size, preferred schedule, or any specific requirements..."
                    />
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <p className="text-sm text-gray-500">* Required fields</p>
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isLoading}
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Alternative Contact Methods */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Or Reach Out Directly
              </h3>
              <p className="text-gray-600">
                Connect with us through your preferred platform for instant
                communication
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* WhatsApp */}
              <div>
                <a
                  href="https://wa.me/61XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center p-6 bg-white border border-gray-200 rounded-xl hover:border-green-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="p-3 bg-green-50 rounded-full mb-3 group-hover:bg-green-100 transition-colors">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                  </div>
                  <h4 className="font-medium text-gray-900 mb-1">WhatsApp</h4>
                  <p className="text-sm text-gray-500 text-center">
                    Quick messages & quotes
                  </p>
                </a>
              </div>

              {/* Email */}
              <div>
                <a
                  href="mailto:info@cleaningservice.com"
                  className="group flex flex-col items-center p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="p-3 bg-blue-50 rounded-full mb-3 group-hover:bg-blue-100 transition-colors">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-1">Email</h4>
                  <p className="text-sm text-gray-500 text-center">
                    Detailed inquiries
                  </p>
                </a>
              </div>

              {/* Viber */}
              <div>
                <a
                  href="viber://chat?number=61XXXXXXXXX"
                  className="group flex flex-col items-center p-6 bg-white border border-gray-200 rounded-xl hover:border-purple-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="p-3 bg-purple-50 rounded-full mb-3 group-hover:bg-purple-100 transition-colors">
                    <svg
                      className="w-6 h-6 text-purple-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.398.002C9.473.028 5.331.344 2.847 3.177c-1.953 2.234-1.953 5.242-1.953 5.242-.094 3.281.812 7.32 4.687 8.642.094.033.141.033.188-.047.047-.08.047-.127.047-.127l.234-1.406c.047-.094.047-.188-.047-.281-.047-.047-.141-.094-.188-.141-3.75-2.156-3.281-5.242-3.281-5.242 0-2.203 3.609-5.531 8.296-5.531 4.687 0 8.297 3.328 8.297 5.531 0 5.156-4.125 5.156-4.125 5.156-.516 0-.938-.422-.938-.938v-.469c.328-.234.516-.609.516-1.031 0-.703-.563-1.266-1.266-1.266s-1.266.563-1.266 1.266c0 .422.188.797.516 1.031v.469c0 1.078.844 1.969 1.922 1.969 0 0 5.109 0 5.109-6.141C20.849 3.505 17.334.002 11.398.002" />
                    </svg>
                  </div>
                  <h4 className="font-medium text-gray-900 mb-1">Viber</h4>
                  <p className="text-sm text-gray-500 text-center">
                    Voice & text chat
                  </p>
                </a>
              </div>

              {/* Instagram */}
              <div>
                <a
                  href="https://instagram.com/cleaningservice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center p-6 bg-white border border-gray-200 rounded-xl hover:border-pink-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="p-3 bg-gradient-to-br from-purple-50 to-pink-50 rounded-full mb-3 group-hover:from-purple-100 group-hover:to-pink-100 transition-colors">
                    <svg
                      className="w-6 h-6 text-pink-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.017 0C8.396 0 7.989.013 6.756.072 5.526.13 4.74.333 4.077.63c-.677.261-1.253.609-1.826 1.182C1.677 2.386 1.33 2.962 1.07 3.647.772 4.318.57 5.104.511 6.334c-.058 1.233-.07 1.639-.07 5.26 0 3.621.013 4.027.072 5.261.061 1.23.264 2.017.558 2.687.264.677.612 1.253 1.185 1.826.573.573 1.149.921 1.834 1.185.67.293 1.457.496 2.687.558 1.233.058 1.639.07 5.26.07 3.621 0 4.027-.015 5.26-.074 1.23-.061 2.017-.264 2.687-.558.677-.264 1.253-.612 1.826-1.185.573-.573.921-1.149 1.185-1.834.293-.67.496-1.457.558-2.687.058-1.233.07-1.639.07-5.26 0-3.621-.015-4.027-.074-5.26-.061-1.23-.264-2.017-.558-2.687-.264-.677-.612-1.253-1.185-1.826C19.46.904 18.884.556 18.199.293 17.529 0 16.742-.203 15.513-.262 14.28-.32 13.874-.333 10.253-.333L12.017 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.374.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </div>
                  <h4 className="font-medium text-gray-900 mb-1">Instagram</h4>
                  <p className="text-sm text-gray-500 text-center">
                    See our work & DM
                  </p>
                </a>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-gray-500">
                Available 7 days a week • Response within 2-4 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
