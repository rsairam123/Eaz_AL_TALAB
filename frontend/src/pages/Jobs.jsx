import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHardHat, FaTools, FaWrench, FaPaintRoller, FaBolt, FaHammer, FaUserTie, FaUsers, FaArrowRight, FaCheckCircle, FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

const Jobs = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  // Job categories with images matching Home page
  const jobCategories = [
    {
      icon: <FaHardHat className="text-4xl text-blue-600" />,
      title: 'Steel Fixers',
      description: 'Experienced steel fixers for high-rise construction projects',
      image: 'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=400&h=300&fit=crop'
    },
    {
      icon: <FaTools className="text-4xl text-cyan-600" />,
      title: 'AC Repair Technicians',
      description: 'Skilled HVAC technicians for installation and maintenance',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop'
    },
    {
      icon: <FaUserTie className="text-4xl text-purple-600" />,
      title: 'Foremen',
      description: 'Experienced supervisors for construction site management',
      image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=400&h=300&fit=crop'
    },
    {
      icon: <FaUsers className="text-4xl text-orange-600" />,
      title: 'General Laborers',
      description: 'Hardworking laborers for various construction tasks',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop'
    },
    {
      icon: <FaWrench className="text-4xl text-indigo-600" />,
      title: 'Plumbers',
      description: 'Licensed plumbers for installation and maintenance',
      image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=300&fit=crop'
    },
    {
      icon: <FaPaintRoller className="text-4xl text-pink-600" />,
      title: 'Painters',
      description: 'Professional painters for interior and exterior work',
      image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=300&fit=crop'
    },
    {
      icon: <FaBolt className="text-4xl text-yellow-600" />,
      title: 'Electricians',
      description: 'Certified electricians for electrical installations',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop'
    },
    {
      icon: <FaHammer className="text-4xl text-rose-600" />,
      title: 'Carpenters',
      description: 'Skilled carpenters for formwork and finishing',
      image: 'https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?w=400&h=300&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Construction Jobs in Dubai, UAE</h1>
          <p className="text-xl text-gray-300 mb-4">All positions include visa sponsorship from India to Dubai</p>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <FaCheckCircle className="text-yellow-300" />
              <span className="text-sm">Visa Sponsorship</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <FaCheckCircle className="text-yellow-300" />
              <span className="text-sm">Accommodation</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <FaCheckCircle className="text-yellow-300" />
              <span className="text-sm">Medical Insurance</span>
            </div>
          </div>
        </div>
      </div>

      {/* Job Categories Section - Matching Home Page */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block">
              <p className="text-blue-600 font-semibold mb-2 uppercase tracking-wider text-sm">Available Positions</p>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
                Construction Job Categories
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-lg">
              We recruit skilled and unskilled workers for all construction trades with full visa sponsorship
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {jobCategories.map((category, index) => (
              <Link
                key={index}
                to="/contact"
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      {category.icon}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  <span className="text-blue-600 font-semibold text-sm inline-flex items-center group-hover:gap-2 transition-all">
                    View Jobs <FaArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/contact" className="btn btn-primary text-lg px-8 py-4 shadow-lg hover:shadow-xl">
              Contact Us for Job Opportunities <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-700 font-medium">Active Jobs</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">5000+</div>
              <div className="text-gray-700 font-medium">Workers Placed</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl">
              <div className="text-4xl font-bold text-pink-600 mb-2">50+</div>
              <div className="text-gray-700 font-medium">Partner Companies</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl">
              <div className="text-4xl font-bold text-cyan-600 mb-2">95%</div>
              <div className="text-gray-700 font-medium">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Get in Touch for Job Opportunities
            </h2>
            <p className="text-gray-600 text-lg">
              Our recruitment team is ready to help you find the perfect job in Dubai
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="tel:+916304016994"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center group"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <FaPhone className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-2">Mon-Sat: 9AM - 6PM</p>
              <p className="text-blue-600 font-semibold">+91 6304016994</p>
            </a>

            <a
              href="tel:+917075018407"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center group"
            >
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-200 transition-colors">
                <FaPhone className="text-2xl text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-2">Mon-Sat: 9AM - 6PM</p>
              <p className="text-indigo-600 font-semibold">+91 7075018407</p>
            </a>

            <a
              href="https://wa.me/916304016994"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center group"
            >
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-100 transition-colors">
                <FaWhatsapp className="text-2xl text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-2">Quick Response</p>
              <p className="text-emerald-500 font-semibold">Chat with Us</p>
            </a>

            <Link
              to="/contact"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center group"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <FaEnvelope className="text-2xl text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-2">Send Your Resume</p>
              <p className="text-purple-600 font-semibold">Contact Form</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">Why Work in Dubai?</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Tax-free income and competitive benefits</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span>World-class infrastructure and facilities</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Safe and modern working environment</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Career growth opportunities</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl p-6 border border-purple-200">
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">What We Provide</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <FaCheckCircle className="text-purple-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Complete visa sponsorship process</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-purple-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Accommodation and medical insurance</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-purple-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Travel arrangements from India</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-purple-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Ongoing support and assistance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          }}></div>
        </div>
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Ready to Start Your Dubai Career?
          </h2>
          <p className="text-xl mb-10 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join thousands of Indian workers who have successfully built their careers in Dubai's construction industry. 
            Full visa sponsorship and comprehensive support provided.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn bg-white text-blue-600 hover:bg-gray-50 shadow-xl hover:shadow-2xl text-lg px-8 py-4">
              Contact Us for Job Opportunities
            </Link>
            <Link to="/about" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-4">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Jobs;

// Made with Bob
